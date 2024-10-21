# Static Blog with Next.js

Welcome to the **Static Blog with Next.js** repository! This project is a static blogging platform built with Next.js, enabling you to create and manage blog posts with dynamic and static generation, optimized for performance and SEO.

## Features

- **Next.js** for server-side rendering (SSR) and static site generation (SSG)
- **Markdown support** for blog posts
- **File-based routing** for dynamic routes
- **SEO optimizations** built into the framework
- **Fast performance** with automatic code-splitting and optimized builds

## Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14.x or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/kithmina1999/staticblog-nextjs.git
   ```
### Navigate into the project directory:

```bash
cd staticblog-nextjs
Install the dependencies:
```
```bash
npm install
# or
yarn install
```
### Running the Development Server
After installing the dependencies, you can start the development server:

```bash
npm run dev
# or
yarn dev
```
Open your browser and go to http://localhost:3000 to view the app in development mode.

### Building for Production
To build the project for production:

```bash

npm run build
# or
yarn build
Once the build is complete, you can run the optimized app:
```

```bash
npm start
# or
yarn start
```
## Deploying
You can deploy this Next.js blog on platforms like Vercel, Netlify, or any other hosting provider that supports Next.js.

## Project Structure
Here's an overview of the key directories and files in the project:

+ pages/: Contains the page components and routing logic.
+ components/: Reusable components used throughout the blog.
+ public/: Static assets like images and icons.
+ styles/: CSS files for styling the blog.

## Writing Blog Posts
Blog posts are written in Markdown and can be added under the posts/ directory. Each Markdown file represents a blog post. You can also add front matter (metadata) to each post, like this:

```md
Copy code
---
title: 'Your Blog Post Title'
description: 'A short description of your post'
date: '2024-10-21'
published: true
---
```
## Contributions
Feel free to submit issues and pull requests to improve the project. Any contributions are welcome!

## License
This project is licensed under the MIT License.
