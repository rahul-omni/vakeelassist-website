"use client";
import { useState, useEffect } from "react";
import { legalAPI, HealthResponse, StatsResponse } from "../lib/api";

export default function ApiStatus() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const [healthData, statsData] = await Promise.all([
          legalAPI.healthCheck(),
          legalAPI.getStats()
        ]);
        
        setHealth(healthData);
        setStats(statsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to check API status");
      } finally {
        setIsLoading(false);
      }
    };

    checkStatus();
    
    // Refresh status every 30 seconds
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-center space-x-3">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-gray-600 border-t-transparent"></div>
          <span className="text-gray-600 font-medium">Checking system status...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm border-2 border-red-200 p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-red-800">System Unavailable</h3>
            <p className="text-red-700 mt-1">{error}</p>
            <p className="text-red-600 text-sm mt-2">
              Please ensure your FastAPI server is running on localhost:8000
            </p>
          </div>
        </div>
      </div>
    );
  }

  const isHealthy = health?.status === "healthy" && stats?.database_status === "active";

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2 text-gray-600">
            {isHealthy ? (
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            ) : (
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
            )}
          <span className="font-semibold text-gray-800">
            {isHealthy ? 'System Operational' : 'System Offline'}
          </span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">
            Database: {stats?.total_documents?.toLocaleString() || "N/A"} documents
          </span>
          <span className="hidden lg:inline">|</span>
          <span className="hidden lg:inline">API: {health?.status || "N/A"}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{new Date().toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
} 