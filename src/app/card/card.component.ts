import { Component } from '@angular/core'; //Импортирую что-то из angular/core'


@Component({
    selector: 'app-card',//создаем selector с app, чтобы мы могли различать где наши компоненты, а где чужие, спросить что такое селектор
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],

})
export class CardComponent {
    title : string= 'My card Title'
    text: string = 'My sample text'

    imgUrl: string = 'https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/21_Angular_logo_logos-512.png'

    number = 42

    array = [1, 1, 2, 3, 5, 8, 13]

    obj = {name: 'Anton', info: {ade: 20, job: 'Frontend'}}

    getInfo(): string{
        return 'This is my info:'
    }


}