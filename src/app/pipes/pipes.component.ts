import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImpurePipe } from './impure/impure.pipe';
import { PurePipe } from './pure/pure.pipe';

type Person = {
  first_name: string,
  last_name: string
};

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [FormsModule, ImpurePipe, PurePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {

  public person: Person = {
    first_name: 'steve',
    last_name: 'gorline'
  };

  private persons: Person[] = [
    { first_name: 'alice', last_name: 'smith' },
    { first_name: 'bob', last_name: 'jones' },
    { first_name: 'carol', last_name: 'williams' },
    { first_name: 'david', last_name: 'brown' },
    { first_name: 'emily', last_name: 'taylor' },
    { first_name: 'frank', last_name: 'thomas' },
    { first_name: 'grace', last_name: 'johnson' },
    { first_name: 'hannah', last_name: 'white' },
    { first_name: 'isaac', last_name: 'miller' },
    { first_name: 'jessica', last_name: 'davis' }
  ];

  public reset(): void {
    this.person = this.persons[Math.floor(Math.random() * 10)];
  }

}
