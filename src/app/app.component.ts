import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyB8zygeny1W0D6ITt4n7kmbCu3rgOwo2nA',
      authDomain: 'openclassroom-bookshelves.firebaseapp.com',
      databaseURL: 'https://openclassroom-bookshelves.firebaseio.com',
      projectId: 'openclassroom-bookshelves',
      storageBucket: 'openclassroom-bookshelves.appspot.com',
      messagingSenderId: '533612117652'
    };
    firebase.initializeApp(config);
  }
}
