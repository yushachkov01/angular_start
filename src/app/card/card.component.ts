import { Component, OnInit} from '@angular/core'; //Импортирую что-то из angular/core'

@Component({
    selector: 'app-card',//создаем selector с app, чтобы мы могли различать где наши компоненты, а где чужие, спросить что такое селектор
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],

})
export class CardComponent implements OnInit {
    title = 'My card Title'
    text: string = 'My sample text'

    imgUrl: string = 'https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/21_Angular_logo_logos-512.png'

    disabled = false;

    ngOnInit(){
        setTimeout(() => {
            this.imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png'
            this.disabled = true
        },3000)
    }
}