---
title: "The Haepapa Website"
description: "A simple portfolio website showcasing the projects we are working on - celebrating our curiosity and problem solving."
status: "MMP"
statusHistory:
  - { status: "MMP", date: "2024-11-14" }
  - { status: "Development", date: "2024-10-21" }
  - { status: "Idea", date: "2024-10-03" }
lastUpdated: "2025-10-27"
tags: ["web", "react"]
draft: false
---

<!-- The Idea -->
<div class="md:flex md:items-start md:gap-8">
  <div class="prose max-w-none w-full md:w-1/2">
    <h2>The Idea</h2>
    <p>
      This project is all about celebrating creativity and collaboration. It’s a space to document and share the projects we’ve worked on - a single hub where anyone can dive in to learn, contribute, or even borrow ideas. Instead of making it about the developer, this site focuses on the work itself, giving it the spotlight it deserves. Think of it as a shared portfolio, designed to inspire and bring people together to create something cool.
    </p>
  </div>
  <figure class="hidden md:flex md:items-center md:justify-center w-full md:w-1/2 flex-shrink-0 self-center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="/images/projects/haepapacom_dark.png" />
      <img src="/images/projects/haepapacom.png" alt="Haepapa project preview" class="rounded-lg h-[250px] mx-auto object-contain" loading="lazy" />
    </picture>
  </figure>
</div>

<!-- The Inspriation -->
<div class="md:flex md:items-start md:gap-8">
  <figure class="hidden md:flex md:items-center md:justify-center w-full md:w-1/2 flex-shrink-0 self-center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="/images/projects/haepapacom_Inspiration_dark.png" />
      <img src="/images/projects/haepapacom_Inspiration.png" alt="Haepapa project preview" class="rounded-lg h-[250px] mx-auto object-contain" loading="lazy" />
    </picture>
  </figure>
  <div class="prose max-w-none w-full md:w-1/2">
    <h2>The Idea</h2>
    <p>
      This project is all about celebrating creativity and collaboration. It’s a space to document and share the projects we’ve worked on - a single hub where anyone can dive in to learn, contribute, or even borrow ideas. Instead of making it about the developer, this site focuses on the work itself, giving it the spotlight it deserves. Think of it as a shared portfolio, designed to inspire and bring people together to create something cool.
    </p>
  </div>
</div>



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