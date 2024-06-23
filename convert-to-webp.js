const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = 'public/Images'; // Change to your input folder path
const outputFolder = 'public/Images/webp'; // Change to your output folder path

// Ensure output folder exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// Read all files from input folder
fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error('Error reading input folder:', err);
    return;
  }

  files.forEach(file => {
    const inputFile = path.join(inputFolder, file);
    const outputFile = path.join(outputFolder, `${path.parse(file).name}.webp`);

    sharp(inputFile)
      .webp()
      .toFile(outputFile, (err, info) => {
        if (err) {
          console.error('Error converting file:', inputFile, err);
        } else {
          console.log('Converted:', inputFile, '->', outputFile);
        }
      });
  });
});
