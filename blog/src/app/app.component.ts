import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      comment: 'Lorem ipsum toto mange une pomme',
      status: 'validé'
    },
    {
      title: 'Mon deuxième post',
      comment: 'Lorem ipsum toto mange deux pommes',
      status: 'invalidé'
    },
    {
      title: 'Mon troisième post',
      comment: 'Lorem ipsum toto mange trois pommes',
      status: 'vide'
    }
  ]

}
