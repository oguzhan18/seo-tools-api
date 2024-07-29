import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import * as performance from 'perf_hooks';

@Injectable()
export class PageSpeedAnalyzerService {
  async analyze(url: string): Promise<any> {
    try {
      const start = performance.performance.now();
      const { data } = await axios.get(url);
      const end = performance.performance.now();
      const loadTime = end - start;

      const $ = cheerio.load(data);
      const suggestions = [];

      $('img').each((index, element) => {
        const src = $(element).attr('src');
        if (src && !$(element).attr('alt')) {
          suggestions.push(`Image without alt attribute found: ${src}`);
        }
        if (src && !src.endsWith('.webp')) {
          suggestions.push(`Consider using WebP format for image: ${src}`);
        }
      });

      $('script').each((index, element) => {
        const src = $(element).attr('src');
        if (src && !$(element).attr('defer')) {
          suggestions.push(`Consider deferring JavaScript loading: ${src}`);
        }
      });

      return {
        url,
        loadTime,
        suggestions,
      };
    } catch (error) {
      throw new Error('Error fetching page speed data');
    }
  }
}
