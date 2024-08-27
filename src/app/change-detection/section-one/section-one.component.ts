import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Person = {
  first_name: string,
  last_name: string
};

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class SectionOneComponent implements OnChanges {

  @Input() parentData: Person;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

}
