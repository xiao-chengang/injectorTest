import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectorComponent } from './injector/injector.component';
import { ComponentInjectorComponent } from './component-injector/component-injector.component';
import { Router ,RouterModule,Routes} from '@angular/router'

export const routes:Routes=[
  { path: '', component: InjectorComponent },
  { path: 'comInj', component: ComponentInjectorComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InjectorComponent,ComponentInjectorComponent]
})
export class IModule { }
