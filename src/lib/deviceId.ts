// src/lib/deviceId.ts
export const getDeviceId = async (): Promise<string> => {
  // Use these stable browser characteristics
  const stableFeatures = [
    navigator.hardwareConcurrency,  // CPU cores
    screen.width,                  // Screen width
    screen.height,                 // Screen height
    navigator.platform,            // OS platform
    Intl.DateTimeFormat().resolvedOptions().timeZone,  // Timezone
    navigator.languages.join(','), // Browser languages
  ].join('|');

  // Simple hash function to convert to a stable ID
  return String(
    stableFeatures.split('')
      .reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0)
  );
};