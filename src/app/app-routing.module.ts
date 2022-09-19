import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './views/body/body.component';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  {
    path: '', component: BodyComponent, children: [
      { path: 'notes', loadChildren: () => import('./notes/notes.module').then((m) => m.NotesModule) }
    ]
  },
  { path: '**', redirectTo: 'notes', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
