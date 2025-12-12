# Haepapa Portfolio Website

A modern portfolio website built with Astro, React, and Tailwind CSS. Features a minimalist design with light/dark mode support, dynamic project showcase, and automated deployment.

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/haepapa/haepapacom.git
   cd haepapacom
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Appwrite credentials (optional for basic development).

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`

## 📁 Project Structure

```
/
├── src/
│   ├── components/      # React & Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.tsx
│   │   ├── CookieConsent.tsx
│   │   ├── ProjectGrid.tsx
│   │   └── Tabs.tsx
│   ├── layouts/         # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── ProjectLayout.astro
│   ├── pages/           # Route pages
│   │   ├── index.astro
│   │   ├── projects/[slug].astro
│   │   ├── terms.astro
│   │   └── privacy.astro
│   └── content/         # Markdown content
│       ├── config.ts
│       └── projects/    # Project markdown files
├── public/              # Static assets
├── Dockerfile
└── package.json
```

## 📝 Adding New Projects

Projects are written in Markdown with frontmatter metadata:

1. Create a new `.md` file in `src/content/projects/`:
   ```markdown
   ---
   title: "Project Name"
   description: "Brief description"
   status: "Idea" | "Development" | "MVP" | "Complete"
   lastUpdated: "2024-10-21"
   tags: ["tag1", "tag2"]
   image: "/images/projects/project.jpg"
   draft: false
   ---

   ## The Idea
   Your content here...
   ```

2. Add project images to `public/images/projects/`

3. The project will automatically appear on the homepage grid

## 🖼️ Image Handling

### GitHub-Hosted Images (Recommended)

Images are stored in the repository and versioned with your content:

- **Location**: `public/images/projects/`
- **Usage in markdown**: `image: "/images/projects/your-image.jpg"`
- **Benefits**: Version controlled, no external dependencies, cached by CDN
- **Build time**: Images are copied to `dist/` during build

### Appwrite Storage (Alternative)

For dynamic images or user-uploaded content:

- **Location**: Appwrite Storage Buckets
- **Usage**: Reference via Appwrite URLs in frontmatter
- **Example**: `image: "https://cloud.appwrite.io/v1/storage/buckets/[BUCKET_ID]/files/[FILE_ID]/view"`
- **Benefits**: Separate from codebase, dynamic image management
- **Note**: Requires Appwrite configuration (see below)

**Recommendation**: Use GitHub-hosted images for project content (consistent with content-as-code philosophy). Reserve Appwrite for user-generated content if needed.

## 🔌 Appwrite Integration

Appwrite is configured for backend services. Currently **not implemented** but ready for integration:

### Contact Form (TODO)

**Location**: `src/pages/index.astro` (lines 54-94)

**Current State**: Static HTML form without submission handler

**To Implement**:
1. Create a React component `ContactForm.tsx`
2. Use Appwrite SDK to submit form data:
   ```typescript
   import { Client, Databases } from 'appwrite';
   
   const client = new Client()
     .setEndpoint(import.meta.env.VITE_AW_URL_ENDPOINT)
     .setProject(import.meta.env.VITE_AW_PROJECT_ID);
   
   const databases = new Databases(client);
   ```
3. Submit to collection: `VITE_AW_COLLECTION01_ID`
4. Add form validation and success/error states

### Potential Appwrite Uses

- **Contact Form Submissions**: Store in `COLLECTION01`
- **Project Analytics**: Track views in `COLLECTION02`
- **Comments System**: Store user feedback in `COLLECTION03`
- **Dynamic Images**: Store in `BUCKET01` or `BUCKET02`

### Environment Variables

Appwrite configuration is optional for development (site works without it):

```bash
# Required only when implementing Appwrite features
VITE_AW_URL_ENDPOINT=https://your-appwrite-endpoint.com/v1
VITE_AW_PROJECT_ID=your-project-id
VITE_AW_DATABASE_ID=your-database-id
VITE_AW_COLLECTION01_ID=contact-forms
VITE_AW_COLLECTION02_ID=analytics
VITE_AW_COLLECTION03_ID=comments
VITE_AW_BUCKET01_ID=project-images
VITE_AW_BUCKET02_ID=user-uploads
```

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`:
- Light mode colors under `theme.extend.colors.light`
- Dark mode colors under `theme.extend.colors.dark`

### Components

- **Header**: Edit `src/components/Header.astro`
- **Footer**: Edit `src/components/Footer.astro`
- **Theme Toggle**: Modify `src/components/ThemeToggle.tsx`

## 🧪 Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 🐳 Docker Build

Build and run the Docker container locally:

```bash
# Build the image
docker build -t haepapacom_local .

# Run the container
docker run -p 8080:3000 haepapacom_local
```

Access the site at `http://localhost:8080`

## 🚢 Deployment

The site uses GitHub Actions for CI/CD:

1. Push to `test` or `prod` branch
2. GitHub Actions builds Docker image
3. Image is pushed to GitHub Container Registry
4. VPS pulls and deploys the new image

### Required GitHub Secrets

Set these in your repository settings:

**For Test Environment:**
- `TEST_VITE_AW_URL_ENDPOINT`
- `TEST_VITE_AW_PROJECT_ID`
- `TEST_VITE_AW_DATABASE_ID`
- `TEST_VITE_AW_COLLECTION01_ID`
- `TEST_VITE_AW_COLLECTION02_ID`
- `TEST_VITE_AW_COLLECTION03_ID`
- `TEST_VITE_AW_BUCKET01_ID`
- `TEST_VITE_AW_BUCKET02_ID`

**For Production:**
- Same variables without `TEST_` prefix

## 🔧 Troubleshooting

### Build Errors

If you encounter TypeScript errors:
```bash
npm run astro check
```

### Styling Issues

Clear Astro's cache:
```bash
rm -rf .astro
npm run dev
```

### Missing Dependencies

Reinstall packages:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Tech Stack

- **Framework**: [Astro](https://astro.build) v4
- **UI Library**: [React](https://react.dev) v18
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v3
- **Content**: Markdown with frontmatter
- **Deployment**: Docker + Nginx
- **CI/CD**: GitHub Actions

## 📖 Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Appwrite Documentation](https://appwrite.io/docs)

## 📄 License

Copyright © 2024 Haepapa. All rights reserved.
