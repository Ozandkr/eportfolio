import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.html',
  styleUrl: 'footer.scss',
  imports: [DatePipe]
})
export class Footer {
  new: any;
  today = new Date();
}
