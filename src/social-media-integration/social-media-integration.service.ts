import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class SocialMediaIntegrationService {
  async analyze(url: string): Promise<any> {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const openGraphTags = this.extractOpenGraphTags($);
      const twitterCardTags = this.extractTwitterCardTags($);
      const suggestions = this.generateSuggestions(
        openGraphTags,
        twitterCardTags,
      );

      return {
        url,
        openGraphTags,
        twitterCardTags,
        suggestions,
      };
    } catch (error) {
      throw new Error('Error fetching social media integration data');
    }
  }

  private extractOpenGraphTags($: cheerio.CheerioAPI): any {
    const tags = {};
    $('meta[property^="og:"]').each((index, element) => {
      const property = $(element).attr('property');
      const content = $(element).attr('content');
      if (property && content) {
        tags[property] = content;
      }
    });
    return tags;
  }

  private extractTwitterCardTags($: cheerio.CheerioAPI): any {
    const tags = {};
    $('meta[name^="twitter:"]').each((index, element) => {
      const name = $(element).attr('name');
      const content = $(element).attr('content');
      if (name && content) {
        tags[name] = content;
      }
    });
    return tags;
  }

  private generateSuggestions(
    openGraphTags: any,
    twitterCardTags: any,
  ): string[] {
    const suggestions = [];

    if (!openGraphTags['og:title']) {
      suggestions.push(
        'Add Open Graph title (og:title) for better social media sharing.',
      );
    }

    if (!openGraphTags['og:description']) {
      suggestions.push(
        'Add Open Graph description (og:description) for better social media sharing.',
      );
    }

    if (!twitterCardTags['twitter:title']) {
      suggestions.push(
        'Add Twitter Card title (twitter:title) for better social media sharing.',
      );
    }

    if (!twitterCardTags['twitter:description']) {
      suggestions.push(
        'Add Twitter Card description (twitter:description) for better social media sharing.',
      );
    }

    return suggestions;
  }
}
