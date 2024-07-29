import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { URL } from 'url';

@Injectable()
export class SitemapGeneratorService {
  async generateSitemap(baseUrl: string): Promise<string> {
    const visitedUrls = new Set<string>();
    const urlsToVisit = [baseUrl];
    let sitemap =
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    while (urlsToVisit.length > 0) {
      const currentUrl = urlsToVisit.pop();
      if (currentUrl && !visitedUrls.has(currentUrl)) {
        visitedUrls.add(currentUrl);

        try {
          const { data } = await axios.get(currentUrl);
          const $ = cheerio.load(data);
          const base = new URL(currentUrl);

          sitemap += `<url>\n<loc>${currentUrl}</loc>\n</url>\n`;

          $('a').each((index, element) => {
            const href = $(element).attr('href');
            if (href) {
              const url = new URL(href, base);
              if (url.origin === base.origin && !visitedUrls.has(url.href)) {
                urlsToVisit.push(url.href);
              }
            }
          });
        } catch (error) {
          console.error(`Error fetching URL: ${currentUrl}`);
        }
      }
    }

    sitemap += '</urlset>';
    return sitemap;
  }
}
