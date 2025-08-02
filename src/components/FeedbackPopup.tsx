
"use client";
import React, { useState, useEffect, useRef } from "react";
import { legalAPI } from "../lib/api";
import { getFingerprint } from '@/lib/fingerprint';

interface FeedbackFormProps {
  onClose: () => void;
  query?: string;
  resultsCount?: number;
  onSuccessfulSubmit?: () => void;
}

export const FeedbackForm = ({ onClose, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    query, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resultsCount,
     onSuccessfulSubmit }: FeedbackFormProps) => {
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState<number>(0);
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const hasSubmitted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCloseButton(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || isSubmitting || hasSubmitted.current) return;

    setIsSubmitting(true);
    
    try {
      const deviceId = await getFingerprint();
      const result = await legalAPI.submitFeedback({
        email: email || undefined,
        rating,
        suggestion: suggestion || undefined,
        deviceId
      });

      if (!result.success) {
        if (result.code === 'ALREADY_SUBMITTED') {
          localStorage.setItem('feedbackSubmitted', 'true');
        }
        throw new Error(result.message || 'Feedback submission failed');
      }

      // Mark as submitted and show success
      
      setShowSuccess(true);
      // Auto-close after 3 seconds
      setTimeout(() => {

       // localStorage.setItem('feedbackSubmitted', 'true');
        onSuccessfulSubmit?.();
        
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for fade-out
      }, 1500);

    } catch (error) {
      console.error("Submission error:", error);
      alert(error instanceof Error ? error.message : 'Submission error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  console.log("showSuccess outside handleSubmit:", showSuccess);
  
  if (showSuccess) {
    return (
      <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 text-center">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">Your feedback has been submitted.</p>
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-[3000ms] ease-linear"
              style={{ width: isVisible ? '100%' : '0%' }}
            />
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-900">Leave Your Feedback</h3>
          {showCloseButton && (
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              disabled={isSubmitting}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Star Rating - Improved Version */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating *
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`p-1 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={isSubmitting}
                >
                  <svg
                    className={`w-8 h-8 ${
                      rating >= star ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-500">
                {rating > 0 ? `${rating} star${rating !== 1 ? 's' : ''}` : "Not rated"}
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email (optional)
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="your@email.com"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700 mb-1">
              Suggestions (Improvements, Features, etc.)
            </label>
            <textarea
              id="suggestion"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="How can we improve?"
              disabled={isSubmitting}
            />
          </div>

          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2  border rounded-md ${
                showCloseButton
                  ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                  : "border-transparent text-gray-400 cursor-not-allowed"
              }`}
              disabled={isSubmitting || !showCloseButton}
            >
              Close
            </button>
            <button
              type="submit"
              className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${
                isSubmitting || rating === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting || rating === 0}
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};