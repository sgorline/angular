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

  public reset(): void {
    this.person = {
      first_name: 'New',
      last_name: 'Guy'
    }
  }

}
