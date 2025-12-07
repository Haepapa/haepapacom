import { Client, Databases, Query } from 'appwrite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
  console.log('🚀 Starting sitemap generation...');
  
  try {
    // Initialize Appwrite client with environment variables
    const client = new Client();
    const databases = new Databases(client);
    
    // Get environment variables (you'll need to set these)
    const projectID = process.env.VITE_AW_PROJECT_ID;
    const endpointURL = process.env.VITE_AW_URL_ENDPOINT;
    const databaseID = process.env.VITE_AW_DATABASE_ID;
    const collection01ID = process.env.VITE_AW_COLLECTION01_ID;
    
    if (!projectID || !endpointURL || !databaseID || !collection01ID) {
      console.error('❌ Missing required environment variables');
      console.log('Required variables: VITE_AW_PROJECT_ID, VITE_AW_URL_ENDPOINT, VITE_AW_DATABASE_ID, VITE_AW_COLLECTION01_ID');
      process.exit(1);
    }
    
    client.setProject(projectID);
    client.setEndpoint(endpointURL);
    
    console.log('📡 Fetching projects from Appwrite...');
    
    // Query all non-draft projects
    const response = await databases.listDocuments(
      databaseID,
      collection01ID,
      [Query.equal('draft', false)]
    );
    
    console.log(`📊 Found ${response.documents.length} published projects`);
    
    // Get base URL from environment or use placeholder
    const baseUrl = process.env.VITE_BASE_URL || 'https://your-domain.com';
    
    // Generate sitemap XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/cookies</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms-of-use</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>`;

    // Add project pages to sitemap
    response.documents.forEach(project => {
      const lastMod = new Date(project.$updatedAt).toISOString().split('T')[0];
      sitemap += `
  <url>
    <loc>${baseUrl}/project/${project.$id}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    sitemap += '\n</urlset>';

    // Ensure public directory exists
    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write sitemap to public folder
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    
    console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
    console.log(`📄 Added ${response.documents.length} project pages to sitemap`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Run the sitemap generation
generateSitemap();