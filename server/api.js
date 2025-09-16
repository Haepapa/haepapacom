const express = require('express');
const cors = require('cors');
// Import your Appwrite client here
// const { Client, Databases } = require('appwrite');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Appwrite client
// const client = new Client();
// const databases = new Databases(client);
// client.setEndpoint('your-appwrite-endpoint').setProject('your-project-id');

// API endpoint to list all projects (useful for external SEO tools)
app.get('/api/projects', async (req, res) => {
  try {
    // Query your projects from Appwrite
    // const projects = await databases.listDocuments('database-id', 'projects-collection-id');
    
    // Placeholder data - replace with your actual Appwrite query
    const projects = [
      {
        id: '1',
        title: 'Project One',
        slug: 'project-one',
        description: 'Description of project one',
        url: `/project/project-one`,
        updatedAt: new Date().toISOString()
      },
      {
        id: '2', 
        title: 'Project Two',
        slug: 'project-two',
        description: 'Description of project two',
        url: `/project/project-two`,
        updatedAt: new Date().toISOString()
      }
    ];
    
    res.json({
      projects: projects,
      total: projects.length,
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});

module.exports = app;