import { AttributeDirective } from './attribute/attribute.directive';
import { Component } from '@angular/core';
import { StructuralDirective } from './structural/structural.directive';
import { User } from '../models/user.model';

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
        create: false,
        read: true,
        update: true,
        delete: false
      }
    };

}
