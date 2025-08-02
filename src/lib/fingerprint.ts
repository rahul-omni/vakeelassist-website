import FingerprintJS from '@fingerprintjs/fingerprintjs';

export const getFingerprint = async (): Promise<string> => {
  try {
    // Load the fingerprinting library
    const fp = await FingerprintJS.load();
    
    // Get the visitor identifier
    const result = await fp.get();
    
    // Return the stable visitor ID
    return result.visitorId;
  } catch (error) {
    console.error('Fingerprint error:', error);
    
    // Fallback to a simpler device ID if fingerprint fails
    return getFallbackDeviceId();
  }
};

// Type-safe fallback when fingerprint fails
const getFallbackDeviceId = (): string => {
  const fallbackComponents = [
    navigator.hardwareConcurrency ?? 0,
    screen.width,
    screen.height,
   // navigator.deviceMemory ?? 0,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    navigator.userAgent,
  ].join('|');
  
  // Simple hash function
  return String(
    fallbackComponents.split('')
      .reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0)
  );
};