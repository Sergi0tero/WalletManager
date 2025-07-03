import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-element',
  standalone: true,
  imports: [],
  templateUrl: './list-element.component.html',
  styleUrl: './list-element.component.scss'
})
export class ListElementComponent {
  @Input() title: string = '';
  @Input() type: 'income' | 'outcome' = 'income';
  @Input() description: string = '';
  @Input() amount: number = 0;
  @Input() category: string = '';
  @Input() date: Date = new Date();
}
