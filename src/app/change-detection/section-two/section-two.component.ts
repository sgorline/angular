import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Person = {
  first_name: string,
  last_name: string
};

@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './section-two.component.html',
  styleUrl: './section-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionTwoComponent implements OnChanges{

  @Input() parentData: Person;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

}
