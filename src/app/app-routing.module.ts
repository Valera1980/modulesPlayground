import { NotFoundComponent } from './not-found/not-found.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: 'one', component: OneComponent },
  { path: 'two',      component: TwoComponent },
  { path: 'three',    component: ThreeComponent },
  { path: '',
    redirectTo: '/one',
    pathMatch: 'full'
  },
  { path: 'one',
    loadChildren: () => import('./newsactions/newsactions.module').then(m => m.NewsactionsModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
