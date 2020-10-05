import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppCoreModule } from 'app-core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OrderlistComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppCoreModule
  ],
  exports: [OrderlistComponent],
  entryComponents: [] // important
})
export class Module1Module {}
