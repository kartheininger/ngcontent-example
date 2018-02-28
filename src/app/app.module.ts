import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {Panel01Component} from './comps/01_panel/panel-01.component';
import {Panel02Component} from './comps/02_panel/panel-02.component';
import {Panel03Component} from './comps/03_panel/panel-03.component';
import {RouterModule, Routes} from '@angular/router';
import {BaseComponent} from './views/00_base/base.component';
import {Example1Component} from './views/example1-component/example1.component';
import {Example2Component} from './views/example2-component/example2.component';
import {Example3Component} from './views/example3-component/example3.component';
import {Example4Component} from './views/example4-component/example4.component';
import {Panel04Component, Panel05Component} from './comps/04_panel/panel-04.component';

const appRoutes: Routes = [
  {path: 'example0', component: BaseComponent},
  {path: 'example1', component: Example1Component},
  {path: 'example2', component: Example2Component},
  {path: 'example3', component: Example3Component},
  {path: 'example4', component: Example4Component},

  {
    path: '',
    redirectTo: '/example0',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    Example1Component,
    Example2Component,
    Panel01Component,
    Panel02Component,
    Panel03Component,
    Panel04Component,
    Panel05Component,
    Example3Component,
    Example4Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
