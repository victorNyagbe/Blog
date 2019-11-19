import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';


  constructor() {  }

  posts = [
    {
      title: 'Mon premier post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.' +
        ' Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500,' +
        ' quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
    },
    {
      title: 'Mon deuxieme post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.' +
        ' Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500,' +
        ' quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
    },
    {
      title: 'Mon autre post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.' +
        ' Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500,' +
        ' quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
    }
  ];

}
