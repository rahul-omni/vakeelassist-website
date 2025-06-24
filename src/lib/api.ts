export interface Judgment {
  score: number;
  case_number: string;
  parties: string;
  judgment_date: string;
  file: string;
  source_url: string;
  text: string;
}

export interface QueryResponse {
  success: boolean;
  query: string;
  total_results: number;
  judgments: Judgment[];
}

export interface HealthResponse {
  status: string;
  database_size: number;
  message: string;
}

export interface StatsResponse {
  total_documents: number;
  database_status: string;
  error?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export class LegalAPI {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async healthCheck(): Promise<HealthResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/health`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Health check failed:', error);
      throw error;
    }
  }

  async getStats(): Promise<StatsResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/stats`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Stats fetch failed:', error);
      throw error;
    }
  }

  async queryJudgments(question: string, numResults: number = 3): Promise<QueryResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question.trim(),
          num_results: Math.min(numResults, 10) // API limits to 10 max
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Query failed:', error);
      throw error;
    }
  }
}

// Export a default instance
export const legalAPI = new LegalAPI(); 