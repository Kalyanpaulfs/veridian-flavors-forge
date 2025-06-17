import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    filename: 'home-bg.jpg',
    directory: 'hero'
  },
  {
    url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843',
    filename: 'plant-bg.jpg',
    directory: 'hero'
  },
  {
    url: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302',
    filename: 'partner-bg.jpg',
    directory: 'hero'
  },
  {
    url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    filename: 'quality-bg.jpg',
    directory: 'hero'
  },
  {
    url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    filename: 'products-bg.jpg',
    directory: 'hero'
  },
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    filename: 'about-bg.jpg',
    directory: 'hero'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => reject(err));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  const baseDir = path.join(__dirname, 'src', 'assets', 'images');

  for (const image of images) {
    const dir = path.join(baseDir, image.directory);
    const filepath = path.join(dir, image.filename);

    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    try {
      await downloadImage(image.url, filepath);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error);
    }
  }
};

downloadAllImages().then(() => {
  console.log('All images downloaded successfully!');
}).catch((error) => {
  console.error('Error downloading images:', error);
}); 