import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class BacklinkCheckerService {
  async checkBacklinks(url: string): Promise<string[]> {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const backlinks = [];

      $('a').each((index, element) => {
        const link = $(element).attr('href');
        if (link) {
          backlinks.push(link);
        }
      });

      return backlinks;
    } catch (error) {
      throw new Error('Error fetching backlinks');
    }
  }
}
