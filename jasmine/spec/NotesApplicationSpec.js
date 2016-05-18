"use strict";

describe("This class should have the following functions and behaviours",function(){
  var noteApp;
  beforeEach(function(){
    noteApp = new NotesApplication("Oreofe");
  });

  //tests the create function
  it("adds values into notes array",function(){
    var notesLength = noteApp.notes.length;
    noteApp.create("New note");
    var newNotesLength = noteApp.notes.length;
    expect(newNotesLength).toEqual(notesLength+1);
  });


});
