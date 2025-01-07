# URL Strip Function for Google Sheets

This project contains a custom Apps Script function for Google Sheets that processes URLs to strip specific components based on the selected mode. This function can help clean up URLs by removing unnecessary query parameters or extracting specific parts of a URL.

---

## Features

The `urlStrip` function supports the following modes:

1. **Strip UTM codes**: Removes all UTM query parameters (e.g., `utm_source`, `utm_medium`).
2. **Strip all query parameters**: Removes everything after the `?` in the URL.
3. **Strip everything after the base URL**: Removes query parameters, fragments, and trailing slashes.
4. **Only hostname**: Extracts only the protocol and domain (e.g., `https://example.com`).

---

## Installation

To use the `urlStrip` function in your Google Sheets:

1. Open your Google Sheet.
2. Go to `Extensions` > `Apps Script`.
3. In the Apps Script editor, replace the default code with the provided script.
4. Save the script (e.g., name it `URLStrip`).
5. Return to your Google Sheet and refresh the page.

---

## Usage

In any cell of your Google Sheet, you can use the `urlStrip` function as follows:

```plaintext
=urlStrip(url, mode)
```

### Parameters

- **`url`** (string): The URL you want to process. Must include the protocol (`http://` or `https://`).
- **`mode`** (number): The processing mode (1, 2, 3, or 4).

### Examples

1. **Remove UTM parameters:**
   ```plaintext
   =urlStrip("https://example.com?utm_source=google&utm_medium=email", 1)
   ```
   **Output:** `https://example.com`

2. **Remove all query parameters:**
   ```plaintext
   =urlStrip("https://example.com/page?param=value&test=123", 2)
   ```
   **Output:** `https://example.com/page`

3. **Remove everything after the base URL:**
   ```plaintext
   =urlStrip("https://example.com/page?param=value#section", 3)
   ```
   **Output:** `https://example.com/page`

4. **Extract only the hostname:**
   ```plaintext
   =urlStrip("https://example.com/page?param=value#section", 4)
   ```
   **Output:** `https://example.com`

---

## Error Handling

The function will return an error message in the following cases:

- The URL is not provided as a string.
  - **Error:** `Invalid input: URL must be a string`

- The URL does not start with `http://` or `https://`.
  - **Error:** `Invalid URL format`

- An invalid mode is provided.
  - **Error:** `Invalid mode: Use 1, 2, 3, or 4`

- Any unexpected errors occur during processing.
  - **Error:** `Error processing URL: [error details]`

---

## Notes

- The function uses regular expressions for efficient URL processing.
- Ensure that the URL includes the protocol (`http://` or `https://`).
- For extracting the hostname, the function uses a regex to match the protocol and domain.

---

## License

This code is provided under the MIT License. You are free to use, modify, and distribute it as needed.

