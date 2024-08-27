import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Person = {
  first_name: string,
  last_name: string
};

@Component({
  selector: 'app-section-three',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionThreeComponent implements OnInit, OnChanges {

  @Input() parentData: Person;

  private originalFirstName: string;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.parentData);
    this.originalFirstName = this.parentData.first_name;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngDoCheck() {
    if (this.parentData.first_name !== this.originalFirstName) {
      this.cd.markForCheck();
      this.originalFirstName = this.parentData.first_name;
    }
  }

}
