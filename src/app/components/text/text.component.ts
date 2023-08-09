// text.component.ts
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-text',
  template: `<p>{{ content }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {
  @Input() content: string = '';
}