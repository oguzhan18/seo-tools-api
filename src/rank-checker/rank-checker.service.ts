import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class RankCheckerService {
  async checkRank(url: string, keyword: string): Promise<number> {
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
          rank = index + 1; // Index 0'dan başladığı için sıralama 1'den başlar.
          return false;
        }
      });

      return rank;
    } catch (error) {
      throw new Error('Error fetching rank data');
    }
  }

  async getKeywords(url: string): Promise<string[]> {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const keywords = [];
      $('meta[name="keywords"]').each((index, element) => {
        const content = $(element).attr('content');
        if (content) {
          keywords.push(...content.split(',').map((keyword) => keyword.trim()));
        }
      });
      if (keywords.length === 0) {
        $('meta[name="description"]').each((index, element) => {
          const content = $(element).attr('content');
          if (content) {
            keywords.push(
              ...content.split(' ').map((keyword) => keyword.trim()),
            );
          }
        });
      }

      return keywords;
    } catch (error) {
      throw new Error('Error fetching keywords');
    }
  }
}
