import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router ,RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
export const routes:Routes=[
  
  {
    path: 'i',
    loadChildren: './i/i.module#IModule'
  },
  {
    path: 'm',
    loadChildren: './m/m.module#MModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
