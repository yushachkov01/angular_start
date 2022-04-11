import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimerService } from './timer.service';
import uniqid from 'uniqid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private timerService: TimerService) {}
  
  public productForm: FormGroup = new FormGroup({
    id: new FormControl(uniqid()),
    name: new FormControl(),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
    categories: new FormControl([], Validators.required)
  });

  public attribute = { id: 'text' };
  public number: number = 24637423.123;
  public isInitial: boolean = true;

  public onGenerateId(): void {
    this.productForm.get('id').setValue(uniqid());
  }

  public onSubmit(): void {
    if (this.productForm.invalid) {
      alert('Form is not valid!');
      return;
    }

    console.log(this.productForm.value);
  }

  public onClick() {
    if (this.attribute.id === 'text') {
      this.attribute = { id: 'paragraph' };
    } else {
      this.attribute = { id: 'text' };
    }
  }

  public onFormatChange() {
    if (this.number !== 24637423.12) {
      this.isInitial = !this.isInitial;
    }
  }

  public ngAfterViewInit() {
    this.timerService.start();
  }
}
