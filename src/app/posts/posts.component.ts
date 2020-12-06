import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {NotFoundError} from '../common/not-found-error';
import {AppError} from '../common/app-error';
import {BadInput} from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  constructor(private service: PostService) {}

  createPost(input: HTMLInputElement) {
    const post = {
      title: input.value
    };
    this.posts.unshift(post);

    input.value = '';

    this.service.create(post)
      .subscribe(newPost => {
          post['id'] = newPost.id;
          console.log(newPost.json());
        }, (error: AppError) => {
          this.posts.shift();
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          } else {
            throw error;
          }
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(updatedPost => console.log(updatedPost));
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(345)
      .subscribe(null, (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('This post has already been deleted');
        } else {
          throw error;
        }
      });
  }
  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }
}

