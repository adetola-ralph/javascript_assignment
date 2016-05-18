"use strict";

function NotesApplication(author){
  this.author = author;
	this.notes = [];

  this.create = function(note_content){
		this.notes.push(note_content);
	};

}
