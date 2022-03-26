import { Component, OnInit} from '@angular/core'; //Импортирую что-то из angular/core'

@Component({
    selector: 'app-card',//создаем selector с app, чтобы мы могли различать где наши компоненты, а где чужие, спросить что такое селектор
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    title = 'My card Title'
    text: string = 'My sample text'

    disabled = false;

    ngOnInit(){}

    changeTitle(){
        this.title = 'Title has been changed!'
    }


    inputHandler(event: any){
        const value = event.target.value;
        this.title = value
     }
 
 
}