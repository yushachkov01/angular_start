import { Component, Input, OnInit } from '@angular/core'; //Импортирую что-то из angular/core'
import { Card } from '../app.component';

@Component({
    selector: 'app-card',//создаем selector с app, чтобы мы могли различать где наши компоненты, а где чужие, спросить что такое селектор
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

    @Input() card: Card;
    @Input() index: number;

    title = 'My card Title'
    text: string = 'My sample text'

    disabled = false;

    textColor: string | undefined

    ngOnInit() { }

    changeTitle() {
        this.card.title = 'Title has been changed!'
    }

    //Добавляем поле из card.component(строчка 11 ) создаем инпут и передаем в него какой-то event, а также вписываем в поле title наш value 
    inputHandler(event: any) {
        const value = event.target.value;
        this.title = value
    }
    changeHandler() {
        console.log(this.title);

    }
}