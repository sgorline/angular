import { AttributeDirective } from './attribute/attribute.directive';
import { Component } from '@angular/core';
import { StructuralDirective } from './structural/structural.directive';

export interface User {
  permissions: {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
  }
};

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [AttributeDirective, StructuralDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  public color = 'grey';

  public user: User =
    {
      permissions: {
        create: true,
        read: true,
        update: true,
        delete: true
      }
    };

}
