import {Component, OnInit} from '@angular/core';
import {AppareilService} from "./services/appareil.service";

//@Component est un décorateur :
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
