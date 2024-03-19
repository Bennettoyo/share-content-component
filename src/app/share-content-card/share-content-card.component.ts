import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-share-content-card',
  standalone: true,
  imports: [MatCardModule, FormsModule],
  templateUrl: './share-content-card.component.html',
  styleUrl: './share-content-card.component.scss'
})
export class ShareContentCardComponent {
  link: string = "https://bennettocv.web.app/"
  btnText: string = "copy"

  copyText() {
    this.btnText = "copied!"
    navigator.clipboard.writeText(this.link);
    setTimeout(() => {
      this.btnText = "copy";
    }, 2000)
  }
}
