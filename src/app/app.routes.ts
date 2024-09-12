import { BasicsComponent } from './basics/basics/basics.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DirectivesComponent } from './directives/directives.component';
import { Ngrx1Component } from './ngrx/ngrx-1/ngrx-1.component';
import { Ngrx2Component } from './ngrx/ngrx-2/ngrx-2.component';
import { PipesComponent } from './pipes/pipes.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'basics', component: BasicsComponent },
    { path: 'change-detection', component: ChangeDetectionComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'ngrx/ngrx-1', component: Ngrx1Component },
    { path: 'ngrx/ngrx-2', component: Ngrx2Component },
    { path: 'pipes', component: PipesComponent }
];