import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.scss'
})
export class SectionOneComponent {

  @Input() parentData: string;

  @Output() dataUpdated = new EventEmitter<string>();

  public inputChanged(): void {
    this.dataUpdated.emit(this.parentData);
  }

}
