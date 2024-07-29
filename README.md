# SEO Tools API

`seo-tools-api` is a comprehensive collection of SEO tools designed to help webmasters, developers, and SEO professionals optimize websites for better search engine performance. Built using NestJS, this API provides various modules for analyzing and improving different aspects of a website's SEO.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Modules](#modules)
    - [Backlink Checker](#backlink-checker)
    - [Rank Checker](#rank-checker)
    - [SEO Audit](#seo-audit)
    - [Sitemap Generator](#sitemap-generator)
    - [Competitor Analysis](#competitor-analysis)
    - [Page Speed Analyzer](#page-speed-analyzer)
    - [Content Optimization](#content-optimization)
    - [Internal Linking](#internal-linking)
    - [Social Media Integration](#social-media-integration)
- [Contributing](#contributing)

## Features

- **Backlink Checker:** Analyze the backlinks pointing to a given website.
- **Rank Checker:** Check the search engine ranking of a website for specified keywords.
- **SEO Audit:** Perform a comprehensive SEO audit of a website.
- **Sitemap Generator:** Generate an XML sitemap for a given website.
- **Competitor Analysis:** Compare the SEO performance of competitor websites.
- **Page Speed Analyzer:** Analyze the loading speed of a webpage and provide improvement suggestions.
- **Content Optimization:** Optimize the content of a webpage for better SEO.
- **Internal Linking:** Analyze the internal link structure of a website.
- **Social Media Integration:** Check the social media integration of a website.

## Installation

To install and run the `seo-tools-api`, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/seo-tools-api.git
   cd seo-tools-api
    ```
2. **Install the dependencies:**
    ```bash
    npm install
    ```
3. **Start the application:**
    ```bash
    npm run start
    ```
4. **Access the API:**
5. Open your browser and go to `http://localhost:3000` to access the Swagger UI.
6. You can now start using the API to analyze and optimize websites for better SEO performance.
7. **Note:** You can also run the application in development mode using `npm run start:dev`.

## Usage
You can access the API documentation using Swagger at http://localhost:3000/api.

## API Endpoints
The API provides the following endpoints:
* `/backlink-checker`: Analyze the backlinks pointing to a given website.
* `/rank-checker`: Check the search engine ranking of a website for specified keywords.
* `/seo-audit`: Perform a comprehensive SEO audit of a website.
* `/sitemap-generator`: Generate an XML sitemap for a given website.
* `/competitor-analysis`: Compare the SEO performance of competitor websites.
* `/page-speed-analyzer`: Analyze the loading speed of a webpage and provide improvement suggestions.
* `/content-optimization`: Optimize the content of a webpage for better SEO.
* `/internal-linking`: Analyze the internal link structure of a website.
* `/social-media-integration`: Check the social media integration of a website.

Each endpoint accepts specific parameters and returns structured JSON responses. Refer to the Swagger documentation for detailed information on each endpoint.

## Modules
### Backlink Checker
The Backlink Checker module analyzes the backlinks pointing to a given website. It provides information about the number of backlinks, referring domains, and anchor text used in the backlinks.
Endpoint: `/backlink-checker`
Example Request:
```bash
GET /backlink-checker?url=https://example.com
```
### Rank Checker
The Rank Checker module checks the search engine ranking of a website for specified keywords. It provides the ranking position of the website for each keyword.
Endpoint: `/rank-checker`
Example Request:
```bash
GET /rank-checker?url=https://example.com&keywords=seo,tools,api
```
### SEO Audit
The SEO Audit module performs a comprehensive SEO audit of a website. It analyzes various aspects of the website, such as meta tags, headings, images, and internal links, and provides suggestions for improvement.
Endpoint: `/seo-audit`
Example Request:
```bash
GET /seo-audit?url=https://example.com
```
### Sitemap Generator
The Sitemap Generator module generates an XML sitemap for a given website. It crawls the website and creates a sitemap with all the URLs found on the site.
Endpoint: `/sitemap-generator`
Example Request:
```bash
GET /sitemap-generator?url=https://example.com
```
### Competitor Analysis
The Competitor Analysis module compares the SEO performance of competitor websites. It provides insights into the backlinks, keywords, and rankings of competitor websites.
Endpoint: `/competitor-analysis`
Example Request:
```bash
GET /competitor-analysis?url=https://example.com&competitors=site1.com,site2.com
```
### Page Speed Analyzer
The Page Speed Analyzer module analyzes the loading speed of a webpage and provides improvement suggestions. It checks various performance metrics, such as page size, load time, and requests, and offers recommendations for optimization.
Endpoint: `/page-speed-analyzer`
Example Request:
```bash
GET /page-speed-analyzer?url=https://example.com/page
```
### Content Optimization
The Content Optimization module optimizes the content of a webpage for better SEO. It analyzes the content of the page and provides suggestions for improving readability, keyword density, and meta tags.
Endpoint: `/content-optimization`
Example Request:
```bash
GET /content-optimization?url=https://example.com/page
```
### Internal Linking
The Internal Linking module analyzes the internal link structure of a website. It provides information about the number of internal links, anchor text used, and link distribution across the site.
Endpoint: `/internal-linking`
Example Request:
```bash
GET /internal-linking?url=https://example.com
```
### Social Media Integration
The Social Media Integration module checks the social media integration of a website. It verifies the presence of social media buttons, meta tags, and open graph tags on the site.
Endpoint: `/social-media-integration`
Example Request:
```bash
GET /social-media-integration?url=https://example.com
```
Contributing
Contributions are welcome! Please read our contributing guidelines first.


