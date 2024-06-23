const fs = require('fs');
const path = require('path');

function replaceBackgroundUrls(cssContent, webpFolder) {
  // Regular expression to match background URLs in CSS
  const urlPattern = /url\(([^)]+)\)/g;

  // Function to replace the URL with webp and fallback
  function replaceUrl(match, p1) {
    const originalUrl = p1.trim().replace(/^['"]|['"]$/g, '');
    const originalBaseName = path.basename(originalUrl);
    const webpUrl = path.join(webpFolder, originalBaseName).replace(path.extname(originalBaseName), '.webp');
    // Return the webp URL followed by the fallback original URL
    return `url("${webpUrl}"), url(${originalUrl})`;
  }

  // Replace all occurrences of background URLs
  const modifiedCss = cssContent.replace(urlPattern, replaceUrl);

  return modifiedCss;
}

function processCssFile(filePath, webpFolder) {
  fs.readFile(filePath, 'utf8', (err, cssContent) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const modifiedCss = replaceBackgroundUrls(cssContent, webpFolder);

    fs.writeFile(filePath, modifiedCss, 'utf8', (err) => {
      if (err) {
        console.error('Error writing the file:', err);
        return;
      }

      console.log(`Processed and saved the changes to ${filePath}`);
    });
  });
}

// Example usage
const cssFilePath = 'src/app/globals.css';
const webpFolder = 'public/Images/webp';

processCssFile(cssFilePath, webpFolder);
