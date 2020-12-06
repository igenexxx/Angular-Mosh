import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  <input
    class="form-control"
    [(ngModel)]="title"
    (keyup)="onKeyUp()">
  `
})
export class CoursesComponent {

  title: string;
  articles: string[] = ['of', 'the', 'a', 'for', 'in'];

  onKeyUp() {
    /* const title = this.title.split(' ').map((word, idx) => {
      return this.articles.includes(word.toLowerCase()) ?
        word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    this.title = title[0].toUpperCase() + title.substr(1); */

    const title = this.title;

    this.title = title.replace(/\w+\b/gi, match => {
      return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
    });
    console.log(title);
  }


}
