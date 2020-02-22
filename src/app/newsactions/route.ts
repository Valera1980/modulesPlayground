import { OneComponent } from './../one/one.component';
import { ActionsComponent } from './components/actions/actions.component';
import { NewsComponent } from './components/news/news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '', component: OneComponent, children: [
            // { path: 'one', redirectTo: 'news', pathMatch: 'full' },
            { path: '', component: NewsComponent },
            { path: 'news', component: NewsComponent },
            { path: 'actions', component: ActionsComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewActionsRoutingModule { }