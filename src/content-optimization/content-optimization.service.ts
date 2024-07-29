import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class ContentOptimizationService {
  async optimize(url: string): Promise<any> {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const title = $('title').text();
      const metaDescription = $('meta[name="description"]').attr('content');
 analizi
      const bodyText = $('body').text();
      const wordCount = bodyText.split(/\s+/).length;
      const keywordDensity = this.calculateKeywordDensity(bodyText);

      const suggestions = this.generateSuggestions(
        title,
        metaDescription,
        wordCount,
        keywordDensity,
      );

      return {
        title,
        metaDescription,
        wordCount,
        keywordDensity,
        suggestions,
      };
    } catch (error) {
      throw new Error('Error fetching content optimization data');
    }
  }

  private calculateKeywordDensity(text: string): any {
    const words = text.toLowerCase().split(/\s+/);
    const wordMap = new Map<string, number>();

    words.forEach((word) => {
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    });

    return Array.from(wordMap.entries()).map(([keyword, count]) => ({
      keyword,
      count,
      density: (count / words.length) * 100,
    }));
  }

  private generateSuggestions(
    title: string,
    metaDescription: string,
    wordCount: number,
    keywordDensity: any[],
  ): string[] {
    const suggestions = [];

    if (!title || title.length < 10 || title.length > 70) {
      suggestions.push('Title should be between 10 and 70 characters.');
    }

    if (
      !metaDescription ||
      metaDescription.length < 50 ||
      metaDescription.length > 160
    ) {
      suggestions.push(
        'Meta description should be between 50 and 160 characters.',
      );
    }

    if (wordCount < 300) {
      suggestions.push('Content should be at least 300 words long.');
    }

    keywordDensity.forEach(({ keyword, density }) => {
      if (density > 2.5) {
        suggestions.push(
          `Keyword "${keyword}" appears too frequently (density: ${density.toFixed(
            2,
          )}%).`,
        );
      }
    });

    return suggestions;
  }
}
