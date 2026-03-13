import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Pagina1 } from './pagina1/pagina1';
import { Pagina2 } from './pagina2/pagina2';
import { Pagina3 } from './pagina3/pagina3';
import { Pagina4 } from './pagina4/pagina4';
import { Pagina5 } from './pagina5/pagina5';
import { Pagina6 } from './pagina6/pagina6';
import { Pagina7 } from './pagina7/pagina7';
import { Pagina8 } from './pagina8/pagina8';
import { Pagina9 } from './pagina9/pagina9';


export const routes: Routes = [
  { path: '', component: Homepage }, 
  { path: 'pagina1', component: Pagina1 },
  { path: 'pagina2', component: Pagina2 },
  { path: 'pagina3', component: Pagina3 },
  { path: 'pagina4', component: Pagina4 },
  { path: 'pagina5', component: Pagina5 },
  { path: 'pagina6', component: Pagina6 },
  { path: 'pagina7', component: Pagina7 },
  { path: 'pagina8', component: Pagina8 },
  { path: 'pagina9', component: Pagina9 },

  
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
