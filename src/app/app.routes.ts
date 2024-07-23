import { Routes } from '@angular/router';
import { Component1Component } from './pages/component1/component1.component';
import { Component2Component } from './pages/component2/component2.component';
import { Component3Component } from './pages/component3/component3.component';


export const routes: Routes = [
    {path: 'login', component:Component1Component},
    {path: 'menu', component:Component2Component},
    {path: 'cap1', component:Component3Component},
];