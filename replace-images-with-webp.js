const fs = require('fs');
const path = require('path');

// Function to process CSS file
function processCSSFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        const updatedCSS = processCSS(data);
        const outputFilePath = path.join(path.dirname(filePath), 'globals.css');
        fs.writeFile(outputFilePath, updatedCSS, 'utf8', (err) => {
            if (err) {
                console.error('Error writing the file:', err);
                return;
            }

            console.log('CSS file processed successfully:', outputFilePath);
        });
    });
}

// Function to process CSS content
function processCSS(cssContent) {
    const backgroundRegex = /background-image\s*:\s*url\(['"]?(.*?)['"]?\);?/gi;
    let match;
    let updatedCSS = cssContent;

    while ((match = backgroundRegex.exec(cssContent)) !== null) {
        const imageUrl = match[1];
        const webpUrl = convertToWebP(imageUrl);
        const backgroundDeclaration = match[0];

        const webpDeclaration = `
@supports (background-image: url(${webpUrl})) {
    ${backgroundDeclaration.replace(imageUrl, webpUrl)}
}
`;
        const fallbackDeclaration = `
${backgroundDeclaration}
`;

        updatedCSS = updatedCSS.replace(backgroundDeclaration, fallbackDeclaration + webpDeclaration);
    }

    return updatedCSS;
}

// Function to convert image URL to WebP URL
function convertToWebP(imageUrl) {
    const extname = path.extname(imageUrl);
    return imageUrl.replace(extname, '.webp');
}

// Specify the path to your CSS file
const cssFilePath = path.join(__dirname, 'src/app/globals.css');
processCSSFile(cssFilePath);
