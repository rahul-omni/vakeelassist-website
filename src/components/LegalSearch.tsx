"use client";
import React, { useRef, useEffect, useState } from "react";
import { legalAPI, Judgment,  } from "../lib/api";
import { FeedbackForm } from "./FeedbackPopup";
import { getFingerprint } from "@/lib/fingerprint";
 
interface LegalSearchProps {
  onResults?: (results: Judgment[]) => void;
}

export default function LegalSearch({ onResults }: LegalSearchProps) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<Judgment[]>([]);
  const [numResults, setNumResults] = useState(3);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [searchedQuery, setSearchedQuery] = useState("");
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [openSummary, setOpenSummary] = useState(false);
  const [summary, setSummary] = useState("");

  const scrollToSearchDiv = () => {
    searchRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Add this state to your LegalSearch component
const [showFeedback, setShowFeedback] = useState(false);
const [feedbackTimer, setFeedbackTimer] = useState<NodeJS.Timeout | null>(null);
// Add this state to track if feedback has been submitted
const [deviceId, setDeviceId] = useState<string | null>(null);

const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

// Add this effect to handle the feedback popup timer
useEffect(() => {
  return () => {
    if (feedbackTimer) {
      clearTimeout(feedbackTimer);
    }
  };
}, [feedbackTimer])

 

useEffect(() => {
  // Check if feedback was already submitted
  const hasSubmitted = 
    localStorage.getItem('feedbackSubmitted') ||
    sessionStorage.getItem('feedbackSubmitted') ||
    document.cookie.includes('feedbackSubmitted=true');
  
  setFeedbackSubmitted(!!hasSubmitted);
}, []);

  

  // Get device ID on component mount
useEffect(() => {
  const initializeDeviceId = async () => {
    try {
      const id = await getFingerprint();
      setDeviceId(id);
    } catch (error) {
      console.error("Failed to get device ID:", error);
    }
  };
  initializeDeviceId();
}, []);

// Update feedback check
useEffect(() => {
  const checkFeedbackStatus = async () => {
    if (!deviceId) return;
    
    try {
      const response = await fetch('/api/check-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deviceId }),
      });
      
      const { hasSubmitted } = await response.json();
      setFeedbackSubmitted(hasSubmitted);
    } catch (error) {
      console.error("Feedback check failed:", error);
      setFeedbackSubmitted(
        localStorage.getItem('feedbackSubmitted') === 'true'
      );
    }
  };

  checkFeedbackStatus();
}, [deviceId]);
// Add this function to handle feedback submission
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setResults([]);
    
    if (feedbackTimer) {
    clearTimeout(feedbackTimer);
    setFeedbackTimer(null);
  }

    try {
      const response = await legalAPI.queryJudgments(query, numResults);
      setResults(response.data.results);
      onResults?.(response.data.results);
      setSearchedQuery(response.data.query);

      // Only set timer if we have results and no prior submission for 10 seconds
    if (response.data.results.length > 0 && !feedbackSubmitted && deviceId) {
      setFeedbackTimer(
        setTimeout(() => setShowFeedback(true), 10000)
      );
    }
       
    
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while searching");
    } finally {
      setIsLoading(false);
    }
    scrollToSearchDiv();
  };

 const loadUrlSummary = async (url: string) => {
    try {
      setSummaryLoading(true);
      setOpenSummary(true);

      const resp = await legalAPI.loadSummary(url);
      setSummary(resp?.summary || 'No summary available.');

    } catch (error) {
      console.error('Error loading summary:', error);
      setSummary('Failed to fetch summary.');
    } finally {
      setSummaryLoading(false);
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
              className={`w-full lg:w-auto bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors ${isLoading || !query.trim() ? 'opacity-50 cursor-not-allowed' : ''
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

      {openSummary && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
          onClick={() => {
            setOpenSummary(false)
            setSummary("");
          }}
        >
          <div className="bg-white w-full max-w-2xl p-6 rounded shadow-lg relative">
            <button
              onClick={() => {
                setOpenSummary(false)
                setSummary("");
              }}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            {summaryLoading ? (
              <div className="flex justify-center items-center h-40">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="max-h-[60vh] overflow-y-auto whitespace-pre-wrap text-gray-800">
                {summary || 'No summary available.'}
              </div>
            )}
          </div>
        </div>
      )}


      {/* Error Display */}
      {error && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        >
          <div className="bg-white w-full max-w-2xl p-6 rounded shadow-lg relative">
            <button
              onClick={() => setOpenSummary(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            {summaryLoading ? (
              <div className="flex justify-center items-center h-40">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="max-h-[60vh] overflow-y-auto whitespace-pre-wrap text-gray-800">
                {summary || 'No summary available.'}
              </div>
            )}
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
              <JudgmentCard key={index} judgment={judgment} index={index + 1} searchedQuery={searchedQuery} loadUrlSummary={loadUrlSummary} />
            ))}
          </div>
        </div>
      )}


       
{showFeedback && !feedbackSubmitted && (
  <FeedbackForm
    onClose={() => setShowFeedback(false)}
    query={searchedQuery}
    resultsCount={results.length}
    onSuccessfulSubmit={() => { 
      setFeedbackSubmitted(true)

      localStorage.setItem('feedbackSubmitted', 'true');
      //setFeedbackSubmitted(true);
    }}
   // setFeedbackSubmitted={setFeedbackSubmitted}
    
  />
)}

      <div ref={searchRef} />

    </div>
  );
}

function JudgmentCard({ judgment, index, searchedQuery, loadUrlSummary }: { judgment: Judgment; index: number; searchedQuery: string; loadUrlSummary: (url: string) => Promise<void>; }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function highlightMatches(content: string): React.ReactNode[] {
    if (!searchedQuery.trim()) return [content];

    const queryWords = searchedQuery.toLowerCase().split(/\s+/).filter(Boolean);

    const regex = /\b\w+\b/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    const getSimilarity = (a: string, b: string): number => {
      const distance = levenshteinDistance(a, b);
      return 1 - distance / Math.max(a.length, b.length);
    };

    const levenshteinDistance = (a: string, b: string): number => {
      const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));
      for (let i = 0; i <= a.length; i++) dp[i][0] = i;
      for (let j = 0; j <= b.length; j++) dp[0][j] = j;

      for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
          dp[i][j] = Math.min(
            dp[i - 1][j] + 1,
            dp[i][j - 1] + 1,
            dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
          );
        }
      }
      return dp[a.length][b.length];
    };

    let match: RegExpExecArray | null;
    while ((match = regex.exec(content)) !== null) {
      const word = match[0];
      const start = match.index;
      const end = regex.lastIndex;

      if (lastIndex < start) {
        parts.push(content.slice(lastIndex, start));
      }

      const lowerWord = word.toLowerCase();
      let exactMatch = false;
      let partialMatch = false;

      for (const q of queryWords) {
        const similarity = getSimilarity(lowerWord, q);
        if (similarity === 1) {
          exactMatch = true;
          break;
        } else if (similarity >= 0.7) {
          partialMatch = true;
        }
      }

      if (exactMatch) {
        parts.push(
          <span key={start} className="bg-yellow-200">{word}</span>
        );
      } else if (partialMatch) {
        parts.push(
          <span key={start} className="bg-yellow-100">{word}</span>
        );
      } else {
        parts.push(word);
      }

      lastIndex = end;
    }

    if (lastIndex < content.length) {
      parts.push(content.slice(lastIndex));
    }

    return parts;
  }

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
                {judgment.metadata.case_number}
              </h4>
              <p className="text-sm text-gray-600">
                {judgment.metadata.judgment_date}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {judgment.metadata.judgment_url && (
              <a
                href={judgment.metadata.judgment_url}
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
            {judgment.metadata.parties}
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
                <p className="whitespace-pre-wrap">{highlightMatches(judgment.content)}</p>
              </div>
            ) : (
              <div className="bg-beige-50 rounded-lg p-4">
                <p>
                  {judgment.content.length > 400
                    ? highlightMatches(judgment.content.substring(0, 400))
                    : highlightMatches(judgment.content)
                  }
                </p>
                <div className="flex items-center justify-between">
                  <span>
                    {judgment.content.length > 400 && (
                      <p className="text-sm text-gray-500 mt-2">
                        Click Show More to read the complete judgment
                      </p>
                    )}
                  </span>
                  <button
                    onClick={() => {
                      loadUrlSummary(judgment.metadata.judgment_url);
                    }}
                    className="text-blue-600 hover:underline bg-transparent border-none p-0 m-0 cursor-pointer"
                  >
                    View Summary
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 