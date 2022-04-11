import { AfterViewInit, Component } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private timerService: TimerService) {}

  public attribute = { id: 'text' };
  public number: number = 24637423.123;
  public isInitial: boolean = true;

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
