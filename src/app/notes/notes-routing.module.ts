import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { MyNotesComponent } from './my-notes/my-notes.component';

const routes: Routes = [
  { path: '', redirectTo: 'my-notes', pathMatch: 'full' },
  {
    path: '', component: NotesComponent, children: [
      { path: 'my-notes', component: MyNotesComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
