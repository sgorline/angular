import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { SectionTwoComponent } from './section-two/section-two.component';

type Person = {
  first_name: string,
  last_name: string
};

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SectionOneComponent,
    SectionThreeComponent,
    SectionTwoComponent
  ],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {

  public person: Person = {
    first_name: 'Steve',
    last_name: 'Gorline'
  };

  private persons: Person[] = [
    { first_name: 'Alice', last_name: 'Smith' },
    { first_name: 'Bob', last_name: 'Jones' },
    { first_name: 'Carol', last_name: 'Williams' },
    { first_name: 'David', last_name: 'Brown' },
    { first_name: 'Emily', last_name: 'Taylor' },
    { first_name: 'Frank', last_name: 'Thomas' },
    { first_name: 'Grace', last_name: 'Johnson' },
    { first_name: 'Hannah', last_name: 'White' },
    { first_name: 'Isaac', last_name: 'Miller' },
    { first_name: 'Jessica', last_name: 'Davis' }
  ];

  public reset(): void {
    this.person = this.persons[Math.floor(Math.random() * 10)];
  }

}
