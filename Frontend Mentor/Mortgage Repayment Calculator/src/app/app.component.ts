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
  mortgageAmount = ""
  mortgageTerm = ""

  manageInput(e: KeyboardEvent){
    console.log(e.key)
    // Allow only digits
    if (!/^[\d,]$/.test(e.key)) {
      e.preventDefault();
    }
  }

  onAmountInput(event: Event) {
    const raw = (event.target as HTMLInputElement).value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.mortgageAmount = raw;
  }

  onTermInput(event: Event) {
    const raw = (event.target as HTMLInputElement).value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.mortgageTerm = raw 
  }

}
 