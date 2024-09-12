import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { User } from '../../models/user.model';

@Directive({
  selector: '[appStructural]',
  standalone: true
})
export class StructuralDirective {

  @Input() set appStructural(user: User) {
    if (user.permissions.update) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  };

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
