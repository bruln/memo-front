import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes/notes.component';
import { MyNotesComponent } from './my-notes/my-notes.component';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    NotesComponent,
    MyNotesComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
