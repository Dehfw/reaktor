import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FermentOverviewComponent } from './ferment-overview/ferment-overview.component';
import { FermentDetailComponent }  from './ferment-detail/ferment-detail.component';
import { FermentBatchComponent }  from './ferment-batch/ferment-batch.component';
import { FermentBatchStepAddComponent } from './ferment-batch-step-add/ferment-batch-step-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/ferments', pathMatch: 'full' },
  { path: 'ferments', component: FermentOverviewComponent },
  { path: 'ferment/:id', component: FermentBatchComponent },
  { path: 'ferment/:id/edit', component: FermentDetailComponent },
  { path: 'batch/step/add', component:  FermentBatchStepAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
