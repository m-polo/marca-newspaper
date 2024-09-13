import { Component } from '@angular/core';
import { CardShape, CardSize } from '../models/enums';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.less',
})
export class MainContentComponent {
  CardShape: typeof CardShape = CardShape;
  CardSize: typeof CardSize = CardSize;

  onNewsSeen(title: string) {
    alert($localize`Noticia vista: ${title}`);
  }
}
