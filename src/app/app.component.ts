import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { inject } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'neflix-clone';
  
  faIconLibrary: FaIconLibrary = inject(FaIconLibrary);


  ngOnInit(): void {
    this.initFontAwesomeIcons();
    
  }


  private initFontAwesomeIcons() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
