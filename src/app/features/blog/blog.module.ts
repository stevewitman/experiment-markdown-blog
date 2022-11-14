import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

@NgModule({
  declarations: [BlogListComponent, BlogPostComponent],
  imports: [CommonModule, RouterModule, BlogRoutingModule],
})
export class BlogModule {}
