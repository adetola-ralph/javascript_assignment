"use strict";

describe("This class should have the following functions and behaviours",function(){
  var noteApp= new NotesApplication("Oreofe");

  //beforeEach(function(){spyOn(noteApp, "get");})

  //tests the create function
  it("adds values into notes array",function(){
    var notesLength = noteApp.notes.length;
    noteApp.create("New note");
    var newNotesLength = noteApp.notes.length;
    expect(newNotesLength).toBe(notesLength+1);
  });

  //tests the get args
  describe("Testing the get functions",function(){

    beforeEach(function(){spyOn(noteApp, "get");})

    it("attempts to get only one value from the app",function(){
      noteApp.get(2);
      expect(noteApp.get.calls.argsFor(0).length).toBe(1);
    });

    it("supplies a number argument to get a note from the app",function(){
      noteApp.get(3);
      expect(typeof(noteApp.get.calls.argsFor(0)[0])).toBe("number");
    });
  });

  
});
