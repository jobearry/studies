import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';

  manageInput(e: KeyboardEvent){
    console.log(e.key)
    // Allow only digits
    if (!/^[\d,]$/.test(e.key)) {
      e.preventDefault();
    }
  }

  formatInput(e: any){
    const element = e.target as HTMLInputElement
    const raw = element.value.replace(/,/g, '');
    element.value = Number(raw).toLocaleString()
  }
}
 