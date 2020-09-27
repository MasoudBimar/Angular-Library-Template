import { AngularProjectComponent } from './angular-project.component';
import { Module1Module } from './modules/module1/module1.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AngularProjectComponent],
  imports: [Module1Module
  ],
  exports: [AngularProjectComponent, Module1Module]
})
export class AngularProjectModule { }
