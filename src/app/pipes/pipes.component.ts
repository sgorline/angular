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
