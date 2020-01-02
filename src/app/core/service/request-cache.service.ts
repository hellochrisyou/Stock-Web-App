import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { RequestCacheEntry } from '@shared/interface/interface';
import { RequestCache } from '@shared/abstract/request-cache.abstract.class';

const maxAge = 30000; // maximum cache age (ms)

@Injectable({
  providedIn: 'root'
})
export class RequestCacheWithMapService implements RequestCache {

  cache = new Map<string, RequestCacheEntry>();

  constructor() { }

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached = this.cache.get(url);

    if (!cached) {
      return undefined;
    }

    const isExpired = cached.lastRead < (Date.now() - maxAge);
    const expired = isExpired ? 'expired ' : '';
    console.log(`Found ${expired}cached response for "${url}".`)
    return isExpired ? undefined : cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const url = req.urlWithParams;
    console.log(`Caching response from "${url}".`);

    const entry = { url, response, lastRead: Date.now() };
    this.cache.set(url, entry);

    // remove expired cache entries
    const expired = Date.now() - maxAge;
    this.cache.forEach(entry => {
      if (entry.lastRead < expired) {
        this.cache.delete(entry.url);
      }
    });

    console.log(`Request cache size: ${this.cache.size}.`);
  }
}
