import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CardShape, CardSize } from '../models/enums';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  @Input() cardShape: CardShape = CardShape.HORIZONTAL;
  @Input() cardSize: CardSize = CardSize.SMALL;
  @Input() imagePath: string = 'marca-logo.svg';
  @Input() title: string = 'News in progress';
  @Input() author: string = 'TBD';

  @Output() newsSeen: EventEmitter<string> = new EventEmitter<string>();

  onClick(title: string): void {
    this.newsSeen.emit(title);
  }
}
