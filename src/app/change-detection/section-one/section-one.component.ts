import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class SectionOneComponent implements OnChanges, DoCheck {

  @Input() parentData: Person;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngDoCheck() {
    // console.log('SectionOneComponent - ngDoCheck');
  }

}
