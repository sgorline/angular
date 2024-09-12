import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

interface User {
  permissions: {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
  }
};

@Directive({
  selector: '[appStructural]',
  standalone: true
})
export class StructuralDirective implements OnInit {

  @Input() set appStructural(user: User) {
    console.log(user);
    if (user.permissions.delete) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);

    } else {
      this.viewContainerRef.clear();
    }
  };

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {

  }

}
