import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getMarkdown(file: string) {
    return this.httpClient.get(`assets/markdown/${file}`, {
      responseType: 'text',
    });
  }
}
