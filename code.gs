/**
 * Strips query parameters from a URL based on the selected mode using RegEx.
 * Mode options:
 * 1 - Strip UTM codes
 * 2 - Strip all query parameters
 * 3 - Strip everything after the base URL
 * 4 - Only hostname (protocol + domain)
 *
 * @param {string} url The URL to process.
 * @param {number} mode The stripping mode (1, 2, 3, or 4).
 * @return {string} The modified URL or an error message if the URL is invalid.
 * @customfunction
 */
function urlStrip(url, mode) {
  if (typeof url !== "string") {
    return "Invalid input: URL must be a string";
  }

  // Ensure the URL starts with http:// or https://
  if (!url.trim().match(/^https?:\/\//)) {
    return "Invalid URL format";
  }

  try {
    // Strip UTM parameters (mode 1)
    if (mode === 1) {
      return url.replace(/([\?&])utm_[^=]+=[^&]+/g, "$1").replace(/([\?&])$/, "");
    }

    // Strip all query parameters (mode 2)
    if (mode === 2) {
      return url.replace(/\?.*$/, "");
    }

    // Strip everything after the base URL (mode 3)
    if (mode === 3) {
      return url.replace(/(\?.*|#.*)$/, "").replace(/\/$/, "");
    }

    // Only hostname (mode 4)
    if (mode === 4) {
      const match = url.match(/^(https?:\/\/[^\/]+)/);
      return match ? match[1] : "Error extracting hostname";
    }

    return "Invalid mode: Use 1, 2, 3, or 4";
  } catch (error) {
    return "Error processing URL: " + error.message;
  }
}
