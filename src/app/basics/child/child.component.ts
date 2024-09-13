import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() name: string = '';
  @Output() nameChanged = new EventEmitter<string>();

  protected count: WritableSignal<number>;

  ngOnInit(): void {
    this.count = signal(0);
    setTimeout(() => {
      this.count.set(3);
    }, 1000);
    setTimeout(() => {
      this.count.update(value => value + 1);
    }, 2000);
  }

  public onNameChanged(): void {
    this.nameChanged.emit(this.name);
  }

}
