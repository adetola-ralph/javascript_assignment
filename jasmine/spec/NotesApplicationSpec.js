"use strict";


describe("This object should have the following attributes, functions and behaviours",function(){
  var noteApp= new NotesApplication("Oreofe");

  describe("The object should have the following attributes",function(){

    it("author attribute must be defined",function(){
      expect(noteApp.author).toBeDefined();
    });

    it("notes attribute must be an array object",function(){
      expect(typeof(noteApp.notes)).toBe("object");
    });
  });

  //tests the create function
  describe("Create function",function(){
    it("should only add one entry",function(){
      var notesLength = noteApp.notes.length;
      noteApp.create("New note");
      var newNotesLength = noteApp.notes.length;
      expect(newNotesLength).toBe(notesLength+1);
    });

    it("entry should not be empty",function(){
      noteApp.create("New note");
      expect(noteApp.notes[noteApp.notes.length-1]).not.toBe("");
    });
  });

  //tests the get args
  describe("Get functions",function(){

    beforeEach(function(){
      spyOn(noteApp, "get");
    });

    it("attempts to get only one value from the app",function(){
      noteApp.get(2);
      expect(noteApp.get.calls.argsFor(0).length).toBe(1);
    });

    it("supplies a number argument to get a note from the app",function(){
      noteApp.get(3);
      //console.log(noteApp.get.calls.argsFor(0)[0]);
      expect(typeof(noteApp.get.calls.argsFor(0)[0])).toBe("number");
    });

    it("test if the argument is with range",function(){
      noteApp.get(0);
      expect(noteApp.get.calls.argsFor(0)[0]).toBeGreaterThan(-1);
      expect(noteApp.get.calls.argsFor(0)[0]).toBeLessThan(noteApp.notes.length);
    });
  });

  describe("Delete function",function(){
    beforeEach(function(){
      spyOn(noteApp, "delete");
    });

    it("tests the number of passed variable",function(){
      noteApp.delete(2);
      expect(noteApp.delete.calls.argsFor(0).length).toBe(1);
    });

    it("test if the argument is with range",function(){
      noteApp.delete(0);
      expect(noteApp.delete.calls.argsFor(0)[0]).toBeGreaterThan(-1);
      expect(noteApp.delete.calls.argsFor(0)[0]).toBeLessThan(noteApp.notes.length);
    });
  });

  describe("Edit function",function(){
    beforeEach(function(){
      spyOn(noteApp, "edit");
    });

    it("tests the number of passed variable",function(){
      noteApp.edit(0,"test edit");
      expect(noteApp.edit.calls.argsFor(0).length).toBe(2);
    });


  });

  describe("ListNotes function", function(){
    it("Lists all the notes available",function(){
      expect(typeof(noteApp.listNotes())).toBe("string");
    });
  });

  describe("Search function", function(){
    it("returns string",function(){
      expect(typeof(noteApp.search("new"))).toBe("string");
    });
  });

});
