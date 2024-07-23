import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { start } from 'repl';
import { Exercise1Component } from './pages/exercise1/exercise1.component';

export const routes: Routes = [
    {path: 'menu', component:LoginComponent},
    {path: 'cap1', component:Exercise1Component},
];

