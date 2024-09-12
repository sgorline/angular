import { ChildComponent } from '../child/child.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.scss'
})
export class BasicsComponent implements OnInit {

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

  }

  public onMouseOver(): void {
    alert('You mouseovered that button!');
  }

  public onNameChanged(newValue: string): void {
    this.name = `${newValue}`;
  }

}
