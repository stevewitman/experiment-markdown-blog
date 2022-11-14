import { Component, OnInit } from '@angular/core';

import { marked } from 'marked';

import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  srcMarkdown: string = '';
  blogMarkdown: string = '';

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService
      .getMarkdown('blog01.md')
      .subscribe((data: string) => (this.blogMarkdown = marked.parse(data)));
  }

}
