import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isVisa: boolean = true;

  @Input()
  name

  @Input()
  number

  @Input()
  amount

  @Input()
  expirationDate

  @Input()
  paymentSystem

  ngOnInit(): void {
    if (this.paymentSystem === 'mastercard') {
      this.isVisa = !this.isVisa;
    }
  }
}
