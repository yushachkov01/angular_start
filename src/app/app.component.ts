import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toogle = true

  cards: Card[] = [
    {title: 'Card Name', text:'0000 0000 0000 0000'},
    {title: 'This is Card 2', text:'1233 7474 8594 824O'},
    {title: 'Last Card!', text:'7284 8493 3843 3949'}
  ]

  toogleCards(){
    this.toogle = !this.toogle
    
  }
}
