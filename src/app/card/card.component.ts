import { Component, OnInit } from '@angular/core';
import { SnotifyPosition, SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  mail = 'contact@julianschmidt.codes';

  constructor(readonly service: SnotifyService) { }

  ngOnInit(): void {
  }

  copyMailToClipboard(): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.mail;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.service.success('Copied to clipboard', 'Done', {
      showProgressBar: false,
      position: SnotifyPosition.centerTop,
    });
  }
}
