import { Component} from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <div>
    <h1>Card Components</h1>
    <div class="card">
<h2>Card Component</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, molestias.</p>
</div>


    </div>`,
    styles: [`
    .card{
        padding: .5rem 1rem;
        border: 1px dashed #ccc;
        margin-bottom: .1rem;
    
        h2{
            margin-bottom: .5rem;
        }
    }
    `]
})
export class FormComponent  {

}
