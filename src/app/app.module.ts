import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule} from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule, MatSidenavModule, MatListModule} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

// my components
import { FermentBatchComponent } from './ferment-batch/ferment-batch.component';
import { FermentOverviewComponent } from './ferment-overview/ferment-overview.component';
import { FermentDetailComponent } from './ferment-detail/ferment-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { FermentBatchStepAddComponent } from './ferment-batch-step-add/ferment-batch-step-add.component';
import { FermentBatchStepComponent } from './ferment-batch-step/ferment-batch-step.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    FermentOverviewComponent,
    FermentBatchComponent,
    FermentDetailComponent,
    FermentBatchStepAddComponent,
    FermentBatchStepComponent
  ],
  imports: [
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    DragDropModule,
    FontAwesomeModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
