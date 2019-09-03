import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-demo';

  checkboxChange($event: MatCheckboxChange) {
    console.log($event.checked)
  }
}
