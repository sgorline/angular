import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf, SlicePipe } from '@angular/common';

interface Toggle {
  [key: string]: boolean;
}

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [FormsModule, NgIf, ReactiveFormsModule, SlicePipe],
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent implements OnInit {

  public cars = ['Kicks', 'Bronco', 'Escape'];
  public names = [{ id: 1, name: 'Steve' }, { id: 2, name: 'Abi' }, { id: 3, name: 'Henry' }];
  public numbers = [22, 4, 9, 10];
  public text: string = 'not toggled';
  public toggled: boolean = false;
  public toggles: Toggle = {};

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }]
    });
  }

  ngOnInit(): void {
    this.cars.sort();
    this.names.sort((a, b) => a.name.localeCompare(b.name));
    this.numbers.sort((a, b) => a - b);
  }

  public toggleText(): void {
    this.toggled = !this.toggled;
    this.text = this.toggled ? 'toggled' : 'not toggled';
  }

}
