import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toogle = true

  toogleCards(){
    this.toogle = !this.toogle
  }
}
