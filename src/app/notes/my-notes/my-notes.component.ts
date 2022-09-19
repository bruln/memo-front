import { Component, OnInit } from '@angular/core';
import { Note } from 'app/interfaces/note';
import { MOCK_NOTES } from 'app/models/mock-notes';

@Component({
  selector: 'app-my-notes',
  templateUrl: './my-notes.component.html',
  styleUrls: ['./my-notes.component.scss']
})
export class MyNotesComponent implements OnInit {
  notes: Note[] = MOCK_NOTES;
  constructor() { }

  ngOnInit(): void {
  }

}
