import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class SeoAuditService {
  async audit(url: string): Promise<any> {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const title = $('title').text();
      const metaDescription = $('meta[name="description"]').attr('content');
      const metaKeywords = $('meta[name="keywords"]').attr('content');
      const images = $('img').length;
      const imagesWithAlt = $('img[alt]').length;
      const links = $('a').length;
      const internalLinks = $(`a[href^='${url}'], a[href^='/']`).length;
      const externalLinks = links - internalLinks;
      return {
        title,
        metaDescription,
        metaKeywords,
        images,
        imagesWithAlt,
        links,
        internalLinks,
        externalLinks,
      };
    } catch (error) {
      throw new Error('Error fetching SEO audit data');
    }
  }
}
