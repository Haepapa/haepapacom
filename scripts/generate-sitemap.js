const fs = require('fs');
const path = require('path');
// Import your Appwrite client here
// const { Client, Databases } = require('appwrite');

async function generateSitemap() {
  // Initialize Appwrite client
  // const client = new Client();
  // const databases = new Databases(client);
  
  // client.setEndpoint('your-appwrite-endpoint').setProject('your-project-id');
  
  try {
    // Query your projects from Appwrite
    // const projects = await databases.listDocuments('database-id', 'projects-collection-id');
    
    // For now, using placeholder data - replace with your actual Appwrite query
    const projects = [
      { id: '1', slug: 'project-one', updatedAt: new Date().toISOString() },
      { id: '2', slug: 'project-two', updatedAt: new Date().toISOString() }
    ];
    
    const baseUrl = 'https://your-domain.com'; // Replace with your actual domain
    
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

    // Add project pages to sitemap
    projects.forEach(project => {
      sitemap += `
  <url>
    <loc>${baseUrl}/project/${project.slug}</loc>
    <lastmod>${project.updatedAt.split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    sitemap += '\n</urlset>';

    // Write sitemap to public folder
    fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully!');
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();