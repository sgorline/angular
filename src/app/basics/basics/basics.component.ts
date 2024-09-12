import { ChildComponent } from '../child/child.component';
import { Component, inject, OnInit } from '@angular/core';
import { Multiplier } from '../../enums/multiplier.enum';
import { JsonPipe, NgClass, NgStyle } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [ChildComponent, JsonPipe, NgClass, NgStyle],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.scss'
})
export class BasicsComponent implements OnInit {

  protected userService = inject(UserService);

  public cars: { id: number, model: string, year: string }[] = [
    { id: 1, model: 'Mustang', year: '1965' },
    { id: 2, model: 'Land Cruiser', year: '2024' },
    { id: 3, model: 'Bug', year: '1978' }
  ];
  public hidden: boolean = true;
  public loading: boolean = true;
  public name: string = 'Abi';
  public url: string = 'assets/images/babyhead.jpg';

  ngOnInit(): void {

    setTimeout(() => {
      this.loading = false;
    }, 2000);

    setTimeout(() => {
      this.hidden = false;
    }, 4000);

    for (let i = 1; i <= 10; i++) {
      if (i % 3 === 0) {
        console.log(`${i} is divisible by 3`);
      } else {
        console.log(i);
      }
    }

    const person = { first_name: 'Henry', last_name: 'Gorline' };
    for (const [key, value] of Object.entries(person)) {
      console.log(key, value);
    }

    const token = 'OWCYQ3A8HWF9WHFCCHE';
    token.slice(0, 3);
    console.log(token);
    const shortened = token.slice(6, 9);
    console.log(shortened);

    const places = ['Ireland', 'New York', 'St. Louis'];
    places.splice(2, 1, 'Jamaica');
    console.log(places);

    const animals = ['cat', 'dog', 'bird'];
    const updated = animals.slice(0, 1);
    console.log(updated);

    let isGood = 'yah';
    const weather = isGood ?? 'not so good';
    console.log(weather);

    const sixMillionDollars = 6 * Multiplier.m;
    console.log(sixMillionDollars);

    const dailyValues = [4, 90, 1, 5, 9, 23, 18];

    const result: { buy: number, profit: number, sell: number } = { buy: 0, profit: 0, sell: 0 };
    dailyValues.forEach((f, i) => {
      dailyValues.slice(i + 1).forEach(s => {
        if (s > f && (s - f > result.profit)) {
          result.buy = f;
          result.profit = s - f;
          result.sell = s;
        }
      });
    });
    console.log(dailyValues, result);

  }

  public onMouseOver(): void {
    alert('You mouseovered that button!');
  }

  public onNameChanged(newValue: string): void {
    this.name = `${newValue}`;
  }

}
