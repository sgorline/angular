import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.scss'
})
export class BasicsComponent implements OnInit {

  public loading: boolean = true;
  public cars: { id: number, model: string, year: string }[] = [
    { id: 1, model: 'Mustang', year: '1965' },
    { id: 2, model: 'Land Cruiser', year: '2024' },
    { id: 3, model: 'Bug', year: '1978' }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

}
