import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { PipesComponent } from './pipes/pipes.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'change-detection', component: ChangeDetectionComponent },
    { path: 'pipes', component: PipesComponent },
];