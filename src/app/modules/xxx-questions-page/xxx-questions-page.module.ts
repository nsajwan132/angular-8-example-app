import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {XxxAlertModule, XxxDataModule, XxxEventMgrModule, XxxStateStoreModule} from '@app/xxx-common';
import {XxxQuestionsPageComponent} from './xxx-questions-page.component';
import {XxxQuestionsPageRoutingModule} from './xxx-questions-page-routing.module';

@NgModule({
  declarations: [XxxQuestionsPageComponent],
  exports: [XxxQuestionsPageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    XxxAlertModule,
    XxxDataModule,
    XxxEventMgrModule,
    XxxStateStoreModule,
    XxxQuestionsPageRoutingModule
  ]
})

export class XxxQuestionsPageModule {
}
