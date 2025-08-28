import { getDeviceId } from "./deviceId";
import { openai } from "@/lib/openai";
export interface Judgment {
  content: string;
  metadata: Record<string, string>;
}

interface QueryResponse {
  message: string;
  data: {
    query: string;
    results: {
      content: string;
      metadata: Record<string, string>;
    }[];
  };
}

interface ChatQueryResponse {
  message: string;
}

export interface HealthResponse {
  status: string;
  database_size: number;
  message: string;
}
interface ContextQueryResponse {
  message: string;
}

export interface StatsResponse {
  total_documents: number;
  database_status: string;
  error?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_BASE_URL) {
  throw new Error('NEXT_PUBLIC_API_URL environment variable is not set. Please define it in your .env.local file.');
}

export class LegalAPI {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL as string) {
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

  async queryJudgments(question: string, numResults: number = 3, isTesting: boolean = false): Promise<QueryResponse> {
    try {
      const response = await fetch(`api/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: question.trim(),
          num_results: Math.min(numResults, 10), // API limits to 10 max,
          is_testing: isTesting
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

  async queryContext(
    initialQuery: string,
    question: string,
    context: unknown
  ): Promise<ChatQueryResponse> {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, context, initialQuery }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Query failed:", error);
      throw error;
    }
  }

  async submitFeedback(data: {
    email?: string;
    rating: number;
    suggestion?: string;
    deviceId?: string;
  }): Promise<{ success: boolean; message?: string; code?: string }> {
    try {
      // Get device ID if not provided
      const deviceId = data.deviceId || await getDeviceId();

      const response = await fetch('/api/website-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          deviceId
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: result.message || 'Request failed',
          code: result.code // Include error code if available
        };
      }

      return {
        success: true,
        ...result
      };

    } catch (error) {
      console.error('Network error:', error);
      return {
        success: false,
        message: 'Network error - please try again',
        code: 'NETWORK_ERROR'
      };
    }
  }

  async loadSummary(url: string): Promise<{ summary: string }> {
    try {
      const response = await fetch('/api/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Summary fetch failed:', error);
      throw error;
    }
  }
}

// Export a default instance
export const legalAPI = new LegalAPI(); 