import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  blog = new Blog();

  constructor(private router:Router) { 
    this.blog = this.router.getCurrentNavigation()?.extras?.state?.['sentBlog'];
  
  }

  ngOnInit(): void {

    this.blog = JSON.parse(localStorage.getItem("blogs")  || '[]');

  }

}
