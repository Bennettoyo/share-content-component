import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShareContentCardComponent } from './share-content-card/share-content-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShareContentCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'share-content-component';
}
