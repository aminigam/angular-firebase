import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 cities: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.cities = db.collection('cities').valueChanges();
  }
}
