// "use client";
// import React, { useRef, useEffect, useState, ReactNode } from "react";
// import { legalAPI, Judgment, } from "../lib/api";
// import { FeedbackForm } from "./FeedbackPopup";
// import { getFingerprint } from "@/lib/fingerprint";
// import posthog from "posthog-js";

// interface LegalSearchProps {
//   onResults?: (results: Judgment[]) => void;
// }

// interface Message {
//   text: ReactNode,
//   role: string,
//   isLoader?: boolean
// }

// export default function LegalSearch({ onResults }: LegalSearchProps) {
//   const [query, setQuery] = useState("");
//   const [initialQuery, setInitialQuery] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [results, setResults] = useState<Judgment[]>([]);
//   const [numResults, setNumResults] = useState(3);
//   const chatRef = useRef<HTMLDivElement | null>(null);
//   const searchRef = useRef<HTMLDivElement | null>(null);
//   const [searchedQuery, setSearchedQuery] = useState("");
//   const [summaryLoading, setSummaryLoading] = useState(false);
//   const [openSummary, setOpenSummary] = useState(false);
//   const [summary, setSummary] = useState("");
//   const [messages, setMessages] = useState<Message[]>([]);

//   const scrollToChatDiv = () => {
//     chatRef.current?.scrollIntoView({ behavior: "smooth" });
//   };
//   const scrollToSearchDiv = () => {
//     searchRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Add this state to your LegalSearch component
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [feedbackTimer, setFeedbackTimer] = useState<NodeJS.Timeout | null>(null);
//   // Add this state to track if feedback has been submitted
//   const [deviceId, setDeviceId] = useState<string | null>(null);

//   const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

//   // Add this effect to handle the feedback popup timer
//   useEffect(() => {
//     return () => {
//       if (feedbackTimer) {
//         clearTimeout(feedbackTimer);
//       }
//     };
//   }, [feedbackTimer])



//   useEffect(() => {
//     // Check if feedback was already submitted
//     const hasSubmitted =
//       localStorage.getItem('feedbackSubmitted') ||
//       sessionStorage.getItem('feedbackSubmitted') ||
//       document.cookie.includes('feedbackSubmitted=true');

//     setFeedbackSubmitted(!!hasSubmitted);
//   }, []);




//   // Get device ID and check feedback status
//   useEffect(() => {
//     const initializeFeedbackCheck = async () => {
//       try {
//         // Get device ID first
//         const id = await getFingerprint();
//         setDeviceId(id);

//         // Check both local storage and API
//         const localSubmitted = localStorage.getItem('feedbackSubmitted') === 'true';

//         if (localSubmitted) {
//           setFeedbackSubmitted(true);
//           return;
//         }

//         // Only check API if no local record
//         const response = await fetch('/api/check-feedback', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ deviceId: id }),
//         });

//         const { hasSubmitted } = await response.json();
//         setFeedbackSubmitted(hasSubmitted);

//         // Cache API result in localStorage
//         if (hasSubmitted) {
//           localStorage.setItem('feedbackSubmitted', 'true');
//         }
//       } catch (error) {
//         console.error("Feedback check failed:", error);
//         // Fallback to localStorage only
//         setFeedbackSubmitted(
//           localStorage.getItem('feedbackSubmitted') === 'true'
//         );
//       }
//     };

//     initializeFeedbackCheck();
//   }, []);

//   // Update feedback check
//   useEffect(() => {
//     const checkFeedbackStatus = async () => {
//       if (!deviceId) return;

//       try {

//         // First check localStorage for quick response
//         const localSubmitted = localStorage.getItem('feedbackSubmitted') === 'true';
//         if (localSubmitted) {
//           setFeedbackSubmitted(true);
//           return true;
//         }
//         const response = await fetch('/api/check-feedback', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ deviceId }),
//         });

//         if (response.ok) {
//           const { hasSubmitted } = await response.json();
//           setFeedbackSubmitted(hasSubmitted);
//           if (hasSubmitted) {
//             localStorage.setItem('feedbackSubmitted', 'true');
//           }
//         }

//         // const { hasSubmitted } = await response.json();
//         // setFeedbackSubmitted(hasSubmitted);
//       } catch (error) {
//         console.error("Feedback check failed:", error);
//         setFeedbackSubmitted(
//           localStorage.getItem('feedbackSubmitted') === 'true'
//         );
//       }
//     };



//     checkFeedbackStatus();
//   }, [deviceId]);

//   // Add this function to handle feedback submission
//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessages([
//       {
//         text: "",
//         role: "system",
//         isLoader: true,
//       },
//       {
//         text: (
//           <span>
//             {query}
//           </span>
//         ),
//         role: "user"
//       }
//     ])
//     if (!query.trim()) return;

//     setIsLoading(true);
//     setQuery('');
//     setError(null);
//     setResults([]);
//     setInitialQuery(query);

//     if (feedbackTimer) {
//       clearTimeout(feedbackTimer);
//       setFeedbackTimer(null);
//     }

//     const isTestingDevice = localStorage.getItem("isTestingDevice")

//     const testBoolean = isTestingDevice == 'true' ? true : false;

//     try {
//       const response = await legalAPI.queryJudgments(query, numResults, testBoolean);
//       if (!isTestingDevice) {
//         localStorage.setItem("isTestingDevice", 'false');
//       }
//       console.log("RAG API response:", response);
      
//       setResults(response);
//       onResults?.(response.results);
//       if (
//         typeof window !== 'undefined' &&
//         !isTestingDevice &&
//         !window.location.hostname.includes('localhost') &&
//         !window.location.hostname.includes('127.0.0.1')
//       ) {
//         posthog.capture('rag_api_called', {
//           source: 'web',
//         });
//       }
//       setSearchedQuery(response.data.query);

//       if (response.data.results.length > 0 && !feedbackSubmitted) {
//         const deviceId = await getFingerprint();
//         const hasSubmitted =
//           localStorage.getItem("feedbackSubmitted") === "true" ||
//           (await checkServerFeedbackStatus(deviceId));

//         if (!hasSubmitted) {
//           setFeedbackTimer(setTimeout(() => setShowFeedback(true), 10000));
//         }
//       }

//       // grab the first case result for preview
//       const results = (response.data.results || []).slice(0, 3) as Judgment[];

//       setMessages([
//         // First system message with up to 3 results grouped together
//         {
//           text: (
//             <div className="space-y-3 text-xs">
//               {results.map((res, idx) => (
//                 <div key={idx} className="border-b last:border-none pb-2 last:pb-0">
//                   <div>
//                     <strong>📌 Case:</strong> {res.metadata.parties}
//                   </div>
//                   <div>
//                     <strong>📝 Case No:</strong> {res.metadata.case_number}
//                   </div>
//                   <div>
//                     <strong>👩‍⚖️ Bench:</strong> {res.metadata.bench}
//                   </div>
//                   <div>
//                     <strong>📅 Date:</strong> {res.metadata.judgment_date}
//                   </div>
//                   <a
//                     href={res.metadata.judgment_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-accent font-semibold underline hover:text-accent/80"
//                   >
//                     🔗 View Full Judgment (PDF)
//                   </a>
//                 </div>
//               ))}
//             </div>
//           ),
//           role: "system" as const,
//         },

//         // Second system message for context
//         {
//           text: (
//             <span>
//               ✅ I’ve found some results for your query.
//               Showing you <strong>{results.length} case summaries</strong> above.
//               You can{" "}
//               <span
//                 onClick={() => scrollToSearchDiv()}
//                 className="text-accent font-semibold underline hover:text-accent/80 cursor-pointer"
//               >
//                 view all results here
//               </span>{" "}
//               for more details, and feel free to ask follow-up questions based on them.
//             </span>
//           ),
//           role: "system" as const,
//         },

//         // User’s query
//         {
//           text: <span>{query}</span>,
//           role: "user" as const,
//         },
//       ]);
//       // removes null if no results

//     } catch (err) {
//       setError(err instanceof Error ? err.message : "An error occurred while searching");
//     } finally {
//       setIsLoading(false);
//       scrollToChatDiv()
//     }
//   };

//   async function checkServerFeedbackStatus(deviceId: string): Promise<boolean> {
//     try {
//       const response = await fetch('/api/check-feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ deviceId }),
//       });

//       if (response.ok) {
//         const { hasSubmitted } = await response.json();
//         return hasSubmitted;
//       }
//       return false;
//     } catch (error) {
//       console.error("Error checking feedback status:", error);
//       return false;
//     }
//   }
//   const loadUrlSummary = async (url: string) => {
//     try {
//       setSummaryLoading(true);
//       setOpenSummary(true);

//       const resp = await legalAPI.loadSummary(url);
//       setSummary(resp?.summary || 'No summary available.');

//     } catch (error) {
//       console.error('Error loading summary:', error);
//       setSummary('Failed to fetch summary.');
//     } finally {
//       setSummaryLoading(false);
//     }
//   };

//   const handleChat = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!query.trim()) return;

//     setIsLoading(true);

//     try {
//       // Add user + loader messages (loader first so it's "above" user in your reverse list)
//       setMessages(prev => [
//         { text: "", role: "system", isLoader: true },
//         { text: query, role: "user" },
//         ...prev,
//       ]);

//       // Call your backend API
//       const response = await legalAPI.queryContext(initialQuery, query, results);

//       // Replace loader with actual system message
//       setMessages(prev => {
//         const updated = [...prev];
//         if (updated[0]?.isLoader) {
//           updated[0] = { text: response?.message || "⚠️ No response.", role: "system" };
//         }
//         return updated;
//       });

//     } catch (error) {
//       console.error("Chat failed:", error);

//       // Replace loader with error message
//       setMessages(prev => {
//         const updated = [...prev];
//         if (updated[0]?.isLoader) {
//           updated[0] = { text: "⚠️ Sorry, something went wrong. Please try again.", role: "system" };
//         }
//         return updated;
//       });

//     } finally {
//       setQuery("");
//       setIsLoading(false);
//       scrollToChatDiv();
//     }
//   };


//   return (
//     <div className="w-full max-w-5xl mx-auto">
//       {/* Search Form */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
//         <div className="text-center mb-8">
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">
//             Legal Research Query
//           </h3>
//           <div ref={chatRef} />
//           <p className="text-gray-600 text-lg">
//             Enter your legal question in natural language to search Supreme Court judgments
//           </p>
//         </div>
//         <div className="flex flex-col h-full border rounded-lg bg-gray-100">
//           <div className="flex flex-col h-[600px]">

//             {/* Messages Area */}
//             <div className="flex-1 overflow-y-auto flex flex-col-reverse p-4 space-y-3 space-y-reverse m-3 rounded-lg bg-white shadow-inner">
//               {messages.length === 0 ? (
//                 <div className="flex flex-col items-center justify-center h-full text-gray-400 text-sm">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-10 w-10 mb-2 text-gray-300"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={1.5}
//                       d="M6 4v16l6-4 6 4V4H6z"
//                     />
//                   </svg>
//                   <p className="text-center">Start a conversation to see messages here</p>
//                 </div>
//               ) : (messages.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex w-full text-xs mb-2 ${msg.role === "system" ? "justify-start" : "justify-end"
//                     }`}
//                 >
//                   <div
//                     className={`max-w-lg px-4 py-2 rounded-lg ${msg.role === "system"
//                         ? "bg-gray-100 text-gray-900"
//                         : "bg-green-600 text-white"
//                       }`}
//                   >
//                     {msg.isLoader ? (
//                       <div className="flex space-x-1">
//                         <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
//                         <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
//                         <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300"></span>
//                       </div>
//                     ) : (
//                       msg.text
//                     )}
//                   </div>
//                 </div>
//               ))

//               )}
//             </div>


//             {/* Input Area */}
//             <form className="border-t p-3 flex items-center space-x-3 bg-gray-50 rounded-lg">
//               <input
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder={`e.g., ${messages.length == 0 ? 'What are the damages available for breach of a software development contract where the developer delivered incomplete work? : ' : 'Please summarize the first pdf.'}`}
//                 disabled={isLoading}
//                 className="flex-1 px-4 py-3 border text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-accent bg-white text-gray-900 placeholder-gray-400"
//               />
//               <button
//                 type="submit"
//                 disabled={isLoading || !query.trim()}
//                 onClick={!messages.length ? handleSearch : handleChat}
//                 className={`bg-black hover:bg-gray-900 text-white px-5 py-3 text-xs rounded-full font-semibold transition-colors ${isLoading || !query.trim() ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//               >
//                 {isLoading ? "..." : "Send"}
//               </button>
//               {messages.length > 0 && <button
//                 onClick={()=>{
//                   setMessages([])
//                 }}
//                 className="bg-black hover:bg-blue-900 text-white px-5 py-3 text-xs rounded-full font-semibold transition-colors"
//               >
//                 New Search
//               </button>}
//             </form>

//             {/* Sample Queries */}
//             {messages.length == 0 && <div className="flex flex-wrap gap-3 px-4 py-3 bg-gray-50 rounded-lg">
//               {[
//                 "Cite a Supreme Court case on the measure of damages for breach of a construction contract where the contractor abandoned work midway.",
//                 "Cite a Supreme Court case discussing the conditions under which anticipatory bail may be denied in cases involving economic offences.",
//                 "Cite a Supreme Court case that established the right to privacy as a fundamental right under Article 21 of the Constitution.",
//               ].map((sample, idx) => (
//                 <button
//                   key={idx}
//                   type="button"
//                   className="p-2 rounded-full bg-white border border-gray-300 text-gray-700 text-xs hover:bg-gray-200 transition-colors"
//                   onClick={() => setQuery(sample)}
//                   tabIndex={-1}
//                 >
//                   {sample}
//                 </button>
//               ))}
//             </div>}
//           </div>
//         </div>

//       </div>

//       {openSummary && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
//           onClick={() => {
//             setOpenSummary(false)
//             setSummary("");
//           }}
//         >
//           <div className="bg-white w-full max-w-2xl p-6 rounded shadow-lg relative">
//             <button
//               onClick={() => {
//                 setOpenSummary(false)
//                 setSummary("");
//               }}
//               className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
//             >
//               ×
//             </button>
//             <h2 className="text-xl font-semibold mb-4">Summary</h2>
//             {summaryLoading ? (
//               <div className="flex justify-center items-center h-40">
//                 <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//               </div>
//             ) : (
//               <div className="max-h-[60vh] overflow-y-auto whitespace-pre-wrap text-gray-800">
//                 {summary || 'No summary available.'}
//               </div>
//             )}
//           </div>
//         </div>
//       )}


//       {/* Error Display */}
//       {error && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
//         >
//           <div className="bg-white w-full max-w-2xl p-6 rounded shadow-lg relative">
//             <button
//               onClick={() => setOpenSummary(false)}
//               className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
//             >
//               ×
//             </button>
//             <h2 className="text-xl font-semibold mb-4">Summary</h2>
//             {summaryLoading ? (
//               <div className="flex justify-center items-center h-40">
//                 <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//               </div>
//             ) : (
//               <div className="max-h-[60vh] overflow-y-auto whitespace-pre-wrap text-gray-800">
//                 {summary || 'No summary available.'}
//               </div>
//             )}
//           </div>
//         </div>

//       )}

//       <div ref={searchRef} />
//       {/* Results Section */}
//       {results.length > 0 && (
//         <div className="space-y-6">
//           <div className="flex items-center justify-between bg-beige-50 rounded-lg p-6">
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">
//                 {results.length} Relevant Judgment{results.length !== 1 ? 's' : ''} Found
//               </h3>
//               <p className="text-gray-600 mt-1">Query: {query}</p>
//             </div>
//             <div className="text-right">
//               <div className="text-sm text-gray-500">Search completed</div>
//               <div className="text-sm font-medium text-gray-900">{new Date().toLocaleTimeString()}</div>
//             </div>
//           </div>

//           <div className="space-y-6">
//             {results.map((judgment, index) => (
//               <JudgmentCard key={index} judgment={judgment} index={index + 1} searchedQuery={searchedQuery} loadUrlSummary={loadUrlSummary} />
//             ))}
//           </div>
//         </div>
//       )}



//       {showFeedback && !feedbackSubmitted && (
//         <FeedbackForm
//           onClose={() => setShowFeedback(false)}
//           query={searchedQuery}
//           resultsCount={results.length}
//           onSuccessfulSubmit={() => {
//             setFeedbackSubmitted(true)

//             localStorage.setItem('feedbackSubmitted', 'true');
//             //setFeedbackSubmitted(true);
//           }}
//         // setFeedbackSubmitted={setFeedbackSubmitted}

//         />
//       )}
//     </div>
//   );
// }

// function JudgmentCard({ judgment, index, searchedQuery, loadUrlSummary }: { judgment: Judgment; index: number; searchedQuery: string; loadUrlSummary: (url: string) => Promise<void>; }) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   function highlightMatches(content: string): React.ReactNode[] {
//     if (!searchedQuery.trim()) return [content];

//     const stopWords = new Set([
//       'a', 'an', 'the',
//       'and', 'or', 'but',
//       'of', 'in', 'on', 'to', 'for', 'with', 'at', 'by', 'from',
//       'is', 'are', 'was', 'were', 'be', 'been',
//       'this', 'that', 'these', 'those',
//       'as', 'it', 'its', 'if', 'then', 'so',
//       'not', 'no', 'nor', 'do', 'does', 'did',
//     ]);
//     const queryWords = searchedQuery
//       .toLowerCase()
//       .split(/\s+/)
//       .filter(word => word && !stopWords.has(word));

//     const regex = /\b\w+\b/g;
//     const parts: React.ReactNode[] = [];
//     let lastIndex = 0;

//     const getSimilarity = (a: string, b: string): number => {
//       const distance = levenshteinDistance(a, b);
//       return 1 - distance / Math.max(a.length, b.length);
//     };

//     const levenshteinDistance = (a: string, b: string): number => {
//       const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));
//       for (let i = 0; i <= a.length; i++) dp[i][0] = i;
//       for (let j = 0; j <= b.length; j++) dp[0][j] = j;

//       for (let i = 1; i <= a.length; i++) {
//         for (let j = 1; j <= b.length; j++) {
//           dp[i][j] = Math.min(
//             dp[i - 1][j] + 1,
//             dp[i][j - 1] + 1,
//             dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
//           );
//         }
//       }
//       return dp[a.length][b.length];
//     };

//     let match: RegExpExecArray | null;
//     while ((match = regex.exec(content)) !== null) {
//       const word = match[0];
//       const start = match.index;
//       const end = regex.lastIndex;

//       if (lastIndex < start) {
//         parts.push(content.slice(lastIndex, start));
//       }

//       const lowerWord = word.toLowerCase();
//       let exactMatch = false;
//       let partialMatch = false;

//       for (const q of queryWords) {
//         const similarity = getSimilarity(lowerWord, q);
//         if (similarity === 1) {
//           exactMatch = true;
//           break;
//         } else if (similarity >= 0.7) {
//           partialMatch = true;
//         }
//       }

//       if (exactMatch) {
//         parts.push(
//           <span key={start} className="bg-yellow-200">{word}</span>
//         );
//       } else if (partialMatch) {
//         parts.push(
//           <span key={start} className="bg-yellow-100">{word}</span>
//         );
//       } else {
//         parts.push(word);
//       }

//       lastIndex = end;
//     }

//     if (lastIndex < content.length) {
//       parts.push(content.slice(lastIndex));
//     }

//     return parts;
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
//       {/* Header */}
//       <div className="bg-beige-50 px-6 py-4 border-b border-gray-200">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-sm">{index}</span>
//             </div>
//             <div>
//               <h4 className="text-lg font-bold text-gray-900">
//                 {judgment.metadata.case_number}
//               </h4>
//               <p className="text-sm text-gray-600">
//                 {judgment.metadata.judgment_date}
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3">
//             {judgment.metadata.judgment_url && (
//               <a
//                 href={judgment.metadata.judgment_url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center space-x-1 transition-colors"
//               >
//                 <span>Source</span>
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
//                 </svg>
//               </a>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <div className="mb-4">
//           <p className="text-gray-800 leading-relaxed">
//             <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 mr-2">Parties:</span>
//             {judgment.metadata.parties}
//           </p>
//         </div>

//         <div className="border-t border-gray-200 pt-4">
//           <div className="flex justify-between items-center mb-3">
//             <h5 className="font-semibold text-gray-900">Judgment Excerpt</h5>
//             <button
//               onClick={() => setIsExpanded(!isExpanded)}
//               className="text-gray-600 hover:text-gray-900 font-medium text-sm flex items-center space-x-1 transition-colors"
//             >
//               <span>{isExpanded ? "Show Less" : "Show More"}</span>
//               <svg
//                 className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </button>
//           </div>

//           <div className="text-gray-700 leading-relaxed">
//             {isExpanded ? (
//               <div className="bg-beige-50 rounded-lg p-4">
//                 <p className="whitespace-pre-wrap">{highlightMatches(judgment.content)}</p>
//               </div>
//             ) : (
//               <div className="bg-beige-50 rounded-lg p-4">
//                 <p>
//                   {judgment.content.length > 400
//                     ? highlightMatches(judgment.content.substring(0, 400))
//                     : highlightMatches(judgment.content)
//                   }
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <span>
//                     {judgment.content.length > 400 && (
//                       <p className="text-sm text-gray-500 mt-2">
//                         Click Show More to read the complete judgment
//                       </p>
//                     )}
//                   </span>
//                   <button
//                     onClick={() => {
//                       loadUrlSummary(judgment.metadata.judgment_url);
//                     }}
//                     className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-500 rounded hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
//                   >
//                     View Summary
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

