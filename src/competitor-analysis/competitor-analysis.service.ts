import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class CompetitorAnalysisService {
  async getRank(url: string, keyword: string): Promise<number> {
    try {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        keyword,
      )}`;
      const { data } = await axios.get(searchUrl);
      const $ = cheerio.load(data);
      let rank = -1;

      $('a').each((index, element) => {
        const link = $(element).attr('href');
        if (link && link.includes(url)) {
          rank = index + 1;
          return false;
        }
      });

      return rank;
    } catch (error) {
      throw new Error(`Error fetching rank data for ${url}`);
    }
  }

  async analyze(urls: string[], keyword: string): Promise<any> {
    const results = [];

    for (const url of urls) {
      const rank = await this.getRank(url, keyword);
      results.push({ url, rank });
    }

    return results;
  }
}
