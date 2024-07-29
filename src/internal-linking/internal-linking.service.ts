import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class InternalLinkingService {
  async analyze(url: string): Promise<any> {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const internalLinks = [];
      const brokenLinks = [];

      $('a').each((index, element) => {
        const href = $(element).attr('href');
        if (href) {
          if (href.startsWith('/') || href.startsWith(url)) {
            internalLinks.push(href);
          } else {
            // Optionally, you could verify if the external link is broken or not
            // For simplicity, we will focus on internal links only
          }
        }
      });

      // Check for broken internal links
      for (const link of internalLinks) {
        try {
          await axios.get(link.startsWith('http') ? link : `${url}${link}`);
        } catch (error) {
          brokenLinks.push(link);
        }
      }

      const suggestions = this.generateSuggestions(
        internalLinks.length,
        brokenLinks.length,
      );

      return {
        url,
        internalLinksCount: internalLinks.length,
        brokenLinksCount: brokenLinks.length,
        suggestions,
      };
    } catch (error) {
      throw new Error('Error fetching internal linking data');
    }
  }

  private generateSuggestions(
    internalLinksCount: number,
    brokenLinksCount: number,
  ): string[] {
    const suggestions = [];

    if (internalLinksCount < 10) {
      suggestions.push(
        'Consider adding more internal links to improve site structure.',
      );
    }

    if (brokenLinksCount > 0) {
      suggestions.push(
        'Fix the broken internal links to improve user experience and SEO.',
      );
    }

    return suggestions;
  }
}
