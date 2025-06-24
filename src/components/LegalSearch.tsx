"use client";
import { useState } from "react";
import { legalAPI, Judgment } from "../lib/api";

interface LegalSearchProps {
  onResults?: (results: Judgment[]) => void;
}

export default function LegalSearch({ onResults }: LegalSearchProps) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<Judgment[]>([]);
  const [numResults, setNumResults] = useState(3);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setResults([]);

    try {
      const response = await legalAPI.queryJudgments(query, numResults);
      setResults(response.judgments);
      onResults?.(response.judgments);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while searching");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Search Form */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Legal Research Query
          </h3>
          <p className="text-gray-600 text-lg">
            Enter your legal question in natural language to search Supreme Court judgments
          </p>
        </div>

        <form onSubmit={handleSearch} className="space-y-6">
          <div>
            <label htmlFor="query" className="block text-sm font-semibold text-gray-700 mb-3">
              Legal Question
            </label>
            <textarea
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., What are the damages available for breach of a software development contract where the developer delivered incomplete work?"
              className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent resize-none transition-colors text-gray-900 placeholder-gray-400"
              rows={4}
              disabled={isLoading}
            />
            {/* Sample Queries */}
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                'Cite a Supreme Court case on the measure of damages for breach of a construction contract where the contractor abandoned work midway.',
                'Cite a Supreme Court case discussing the conditions under which anticipatory bail may be denied in cases involving economic offences.',
                'Cite a Supreme Court case that established the right to privacy as a fundamental right under Article 21 of the Constitution.'
              ].map((sample, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="px-4 py-2 rounded-full bg-gray-100 border border-gray-300 text-gray-700 text-sm hover:bg-gray-200 transition-colors"
                  onClick={() => setQuery(sample)}
                  tabIndex={-1}
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <label htmlFor="numResults" className="text-sm font-semibold text-gray-700">
                Results per query:
              </label>
              <select
                id="numResults"
                value={numResults}
                onChange={(e) => setNumResults(Number(e.target.value))}
                className="px-4 py-2 bg-gray-50 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent text-gray-900 font-medium"
                disabled={isLoading}
              >
                <option value={3}>3 results</option>
                <option value={5}>5 results</option>
                <option value={10}>10 results</option>
              </select>
            </div>
            
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className={`w-full lg:w-auto bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors ${
                isLoading || !query.trim() ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <div className="flex items-center space-x-3">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  <span>Searching...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <span>Search Judgments</span>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-semibold text-red-800">Search Error</h3>
              <p className="text-red-700 mt-1">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Results Section */}
      {results.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-beige-50 rounded-lg p-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {results.length} Relevant Judgment{results.length !== 1 ? 's' : ''} Found
              </h3>
              <p className="text-gray-600 mt-1">Query: {query}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Search completed</div>
              <div className="text-sm font-medium text-gray-900">{new Date().toLocaleTimeString()}</div>
            </div>
          </div>
          
          <div className="space-y-6">
            {results.map((judgment, index) => (
              <JudgmentCard key={index} judgment={judgment} index={index + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function JudgmentCard({ judgment, index }: { judgment: Judgment; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getRelevanceColor = (score: number) => {
    if (score >= 0.8) return "bg-professional text-white";
    if (score >= 0.6) return "bg-professional-light text-white";
    if (score >= 0.4) return "bg-beige-300 text-professional";
    return "bg-beige-200 text-professional-light";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="bg-beige-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">{index}</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">
                {judgment.case_number}
              </h4>
              <p className="text-sm text-gray-600">
                {judgment.judgment_date}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRelevanceColor(judgment.score)}`}>
              {(judgment.score * 100).toFixed(0)}% Relevant
            </span>
            {judgment.source_url && (
              <a
                href={judgment.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center space-x-1 transition-colors"
              >
                <span>Source</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
            <p className="text-gray-800 leading-relaxed">
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 mr-2">Parties:</span>
                {judgment.parties}
            </p>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-3">
            <h5 className="font-semibold text-gray-900">Judgment Excerpt</h5>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center space-x-1 transition-colors"
            >
              <span>{isExpanded ? "Show Less" : "Show More"}</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          
          <div className="text-gray-700 leading-relaxed">
            {isExpanded ? (
              <div className="bg-beige-50 rounded-lg p-4">
                <p className="whitespace-pre-wrap">{judgment.text}</p>
              </div>
            ) : (
              <div className="bg-beige-50 rounded-lg p-4">
                <p>
                  {judgment.text.length > 400 
                    ? `${judgment.text.substring(0, 400)}...` 
                    : judgment.text
                  }
                </p>
                {judgment.text.length > 400 && (
                  <p className="text-sm text-gray-500 mt-2">
                    Click Show More to read the complete judgment
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 