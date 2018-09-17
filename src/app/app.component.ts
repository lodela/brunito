import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: Observable<any[]>;
  title = 'Brunito.shop';

  constructor(db: AngularFirestore) {
    this.items = db.collection('/items').valueChanges();
  }
}
