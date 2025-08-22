// src/lib/posthog.ts
import posthog from 'posthog-js'

export const initPosthog = () => {
  if (typeof window !== 'undefined' &&
    !window.location.hostname.includes('localhost') &&
    !window.location.hostname.includes('127.0.0.1')) {
    posthog.init(process.env.NEXT_PUBLIC_POST_HOG_API_TOKEN || "", {
      api_host: process.env.NEXT_PUBLIC_POST_HOG_API_HOST,
      autocapture: false,
      disable_session_recording: false,
      capture_pageview: true,       
      disable_compression: true,            
      advanced_disable_decide: true,  
    })
  }
}
