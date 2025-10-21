# 🧭 Haepapa Portfolio Site — Developer Notes

## 🎯 Aim
Rebuild the **Haepapa** website to:
- Make content publication frictionless by sourcing it from GitHub repositories.
- Automatically rebuild and deploy the site when content changes.
- Be fully indexable by search engines.
- Maintain a minimalist, documentation-style presentation with light interactivity.

---

## 📋 Requirements

### Functional
1. **Content Management**
   - Content (Markdown + images) is mastered in GitHub repositories.
   - The site automatically incorporates new/updated content upon push to `test` or `prod` branches.
   - Each project is represented as a Markdown file with frontmatter metadata.
   - Images are stored in GitHub and linked or included in content.

2. **Automation**
- Any push/merge to `test` or `prod` triggers a rebuild and redeployment of the site.
- The site rebuilds as a Docker image and deploys automatically to the VPS.
- Trigger Google reindexing when `prod` site content updates.

3. **Design**
- Minimalist, documentation-like aesthetic.
- Fast and responsive, with light/dark mode toggle.
- Consistent layout across all pages (shared header, footer, logo).
- Cookie consent banner with accept/decline functionality.
- Compatible with desktop, tablet and phone screen sizes

4. **Interactivity**
- Dynamic project grid where a new tile is created for each project
- Filterable project grid.
- Tabs for project details (e.g. technologies, notes, tasks, images).
- Contact form submission (via Appwrite backend).
- Projects can be set to draft (toggle) to prevent them from being avaialbe through the site when they are undermaintenance.

---

## 🧰 Technologies

| Category | Choice | Notes |
|-----------|---------|-------|
| Static Site Framework | **Astro** | Static-first, great for markdown-based sites |
| Styling | **Tailwind CSS** + **@tailwindcss/typography** | Minimal, responsive, clean |
| React Integration | **@astrojs/react** | For selective interactivity (tabs, forms, etc.) |
| Deployment | **Docker + Nginx** | Serve static content on VPS |
| CI/CD | **GitHub Actions** | Automates build and deploy |
| Backend (Forms, optional APIs) | **Appwrite** | Handle contact form submissions |
| Content | **Markdown (.md / .mdx)** | Versioned, GitHub-native content |
| Hosting | **VPS withDocker Compose Watchtower** | Auto-pulls new images and restarts containers |

---

## ⚙️ Deployment / CI-CD Process

### Overview
1. **Event trigger:** Push to `main` on the portfolio repo (or a related content repo).
2. **GitHub Actions workflow:**
   - Checks out repository (and submodules if any).
   - Installs dependencies.
   - Builds the Astro site.
   - Builds a Docker image (`mysite:latest`).
   - Pushes the image to the VPS (via SSH/SCP).
   - Restarts the running container using the new image.
3. **VPS hosting:**
   - Nginx serves the static Astro build.
   - Optional Lighthouse/Watchtower monitors image updates.
4. **Search engine indexing:**
   - Optionally ping Google’s Indexing API or re-submit sitemap upon deployment.

### Example GitHub Workflow

```yaml
name: Build and Publish Docker Image

on:
  schedule:
    - cron: "15 7 * * *"
  push:
    branches: ["test", "prod"]
    # Publish semver tags as releases.
    tags: ["v*.*.*"]
  pull_request:
    branches: ["test", "prod"]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
      id-token: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Add .env File
        run: |
          if [[ "${{ github.ref_name }}" == "test" ]]; then
            echo 'export VITE_AW_URL_ENDPOINT=${{ secrets.TEST_VITE_AW_URL_ENDPOINT }}' | tee -a .env
            echo 'export VITE_AW_PROJECT_ID=${{ secrets.TEST_VITE_AW_PROJECT_ID }}' | tee -a .env
            echo 'export VITE_AW_DATABASE_ID=${{ secrets.TEST_VITE_AW_DATABASE_ID }}' | tee -a .env
            echo 'export VITE_AW_COLLECTION01_ID=${{ secrets.TEST_VITE_AW_COLLECTION01_ID }}' | tee -a .env
            echo 'export VITE_AW_COLLECTION02_ID=${{ secrets.TEST_VITE_AW_COLLECTION02_ID }}' | tee -a .env
            echo 'export VITE_AW_COLLECTION03_ID=${{ secrets.TEST_VITE_AW_COLLECTION03_ID }}' | tee -a .env
            echo 'export VITE_AW_BUCKET01_ID=${{ secrets.TEST_VITE_AW_BUCKET01_ID }}' | tee -a .env
            echo 'export VITE_AW_BUCKET02_ID=${{ secrets.TEST_VITE_AW_BUCKET02_ID }}' | tee -a .env
          elif [[ "${{ github.ref_name }}" == "prod" ]]; then
            echo 'export VITE_AW_URL_ENDPOINT=${{ secrets.VITE_AW_URL_ENDPOINT }}' | tee -a .env
            echo 'export VITE_AW_PROJECT_ID=${{ secrets.VITE_AW_PROJECT_ID }}' | tee -a .env
            echo 'export VITE_AW_DATABASE_ID=${{ secrets.VITE_AW_DATABASE_ID }}' | tee -a .env
            echo 'export VITE_AW_COLLECTION01_ID=${{ secrets.VITE_AW_COLLECTION01_ID }}' | tee -a .env
            echo 'export VITE_AW_COLLECTION02_ID=${{ secrets.VITE_AW_COLLECTION02_ID }}' | tee -a .env
            echo 'export VITE_AW_COLLECTION03_ID=${{ secrets.VITE_AW_COLLECTION03_ID }}' | tee -a .env
            echo 'export VITE_AW_BUCKET01_ID=${{ secrets.VITE_AW_BUCKET01_ID }}' | tee -a .env
            echo 'export VITE_AW_BUCKET02_ID=${{ secrets.VITE_AW_BUCKET02_ID }}' | tee -a .env
          else
            echo "Unknown branch: ${{ github.ref_name }}"
            exit 1
          fi

      # Install the cosign tool - except on PR
      - name: Install cosign
        if: github.event_name != 'pull_request'
        uses: sigstore/cosign-installer@59acb6260d9c0ba8f4a2f9d9b48431a222b68e20 #v3.5.0
        with:
          cosign-release: "v2.2.4"

      # Set up BuildKit Docker container builder to build multi platform

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@f95db51fddba0c2d1ec667646a06c2ce06100226 # v3.0.0

      # Login against a Docker registry - except on PR
      - name: Log into registry ${{ env.REGISTRY }}
        if: github.event_name != 'pull_request'
        uses: docker/login-action@343f7c4344506bcbf9b4de18042ae17996df046d # v3.0.0
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      # Extract metadata (tags, labels) for Docker
      - name: Extract Docker metadata
        id: meta
        uses: docker/metadata-action@96383f45573cb7f253c731d3b3ab81c87ef81934 # v5.0.0
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}

      # Build and push Docker image with Buildx (don't push on PR)
      - name: Build and push Docker image
        id: build-and-push
        uses: docker/build-push-action@0565240e2d4ab88bba5387d719585280857ece09 # v5.0.0
        with:
          context: .
          push: ${{ github.event_name != 'pull_request' }}
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          platforms: linux/amd64,linux/arm64
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Sign the published Docker image
        if: ${{ github.event_name != 'pull_request' }}
        env:
          TAGS: ${{ steps.meta.outputs.tags }}
          DIGEST: ${{ steps.build-and-push.outputs.digest }}
        run: echo "${TAGS}" | xargs -I {} cosign sign --yes {}@${DIGEST}
```

## Folder Structure
```
/src
  /components
    Header.astro
    Footer.astro
    ThemeToggle.jsx
    CookieConsent.jsx
    ProjectGrid.jsx
    Tabs.jsx
  /layouts
    BaseLayout.astro
    ProjectLayout.astro
  /content
    /projects
      project-van-conversion.md
      project-bingo-app.md
    /pages
      terms.md
      privacy.md
  /pages
    index.astro
    projects/[slug].astro
/public
  /images
/package.json
/Dockerfile
/tailwind.config.js
/astro.config.mjs
```

## 🧩 Page Outlines

### 🏠 Landing Page (/)

Purpose: Introduce the site and showcase projects.

Features:
- Site introduction text.
- Grid of project tiles (from /src/content/projects), filterable by tag.
- Light/dark mode toggle.
- Section: “What we’re working on” — grid of clickable project tiles.
- Section: “We’d love to hear from you” — contact form (Appwrite submission).
- Presents standard layout (header: logo, site name, light/dark mode buttons etc. footer: cookies policy, termis of use, privacy policy, copy wright etc)

### 🧱 Project Page (/projects/[slug])

Purpose: Detailed view for a single project.

Content Sourced From:
- Markdown frontmatter for metadata:
    ```yaml
    title: "Van Conversion"
    status: "MVP"
    statusHistory:
    - { status: "Idea", date: "2023-01-15" }
    - { status: "Development", date: "2023-05-01" }
    - { status: "MVP", date: "2023-09-20" }
    lastUpdated: "2023-09-20"
    tags: ["hardware", "automation"]
    image: "./images/van.jpg"
    ```
Sections:
1. Introduction (from tile summary)
1. Metadata display (status, last updated, tags)
1. “The Idea” (markdown content + image)
1. “The Inspiration” (markdown content + image)
1. “Features” (bullet points)
1. “Development Content” (tabbed component)
   - Tabs: Technologies Used, Notes, Tasks, Images
1. Contact section reused from landing page.

### ⚖️ Terms of Use (/terms)
- Static markdown page, linked from footer.

### 🔒 Privacy Policy (/privacy)
- Static markdown page, linked from footer.

### 🍪 Cookie Consent
- React component (CookieConsent.jsx) shown until user accepts/declines.
- Stores preference in localStorage.


## 🎨 Styling and UX
- Base theme: Clean, typographic, documentation-inspired layout.
- Framework: Tailwind CSS + Typography plugin.
- Dark/light mode: ThemeToggle.jsx with system preference detection.
- Animations: Subtle transitions only (Astro’s motion or CSS-based).
- Fonts: Sans-serif base (e.g., Inter) for modern feel.
- Accessibility: Semantic HTML, alt text for all images, ARIA roles.

### Color Pallet

⚫ Dark Mode:
- background: #1D1C14;
- black: #FFFFFF;
- button-text: #2C2C2C;
- main: #FFFBB4;
- white: #262626;
- outline: #6A6A6A;
- grey: #C1C1C1;

⚪ Light Mode:
- background: #FFFEF5;
- white: #FFFFFF;
- button-text: #2C2C2C;
- main: #FFFBB4;
- black: #262626;
- outline: #2C2C2C;
- grey: #C1C1C1;

|Component|Description|Implementation|
|---|---|---|
|Appwrite Form Endpoint|Handles contact form submissions|Use Appwrite SDK (REST)|
|GitHub Content Source|Markdown files in repos|Pull via submodules or GitHub Action clone
|SEO / Sitemap|Astro auto-generates sitemap|Add sitemap.xml and RSS if needed
|Reindexing|Optional Google Indexing API call|Trigger after successful deploy|

## 🚀 Next Steps
1.	Scaffold Astro project
2.	Create /src/content/projects with sample markdown files.
3.	Implement layouts and components as per structure.
4.	Add GitHub Actions workflow for build & deploy.
5.	Test full end-to-end content update flow.
6.	Add Google Search Console & sitemap integration.