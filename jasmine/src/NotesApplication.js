"use strict";

function NotesApplication(author){
  this.author = author;
	this.notes = [];

  this.create = function(note_content){
		this.notes.push(note_content);
	};

  this.get = function(note_id){
		if(note_id >= 0 && note_id < this.notes.length)
		{
			return this.notes[note_id]+"\n";
		}
		else
		{
			return "No such entry!\n";
		}
	};

  this.delete = function(note_id){
    if(note_id >= 0 && note_id < this.notes.length)
    {
      this.notes.splice(note_id,1);
    }
  };

  this.edit = function(note_id, new_content){
		if(note_id >= 0 && note_id < this.notes.length)
		{
			this.notes[note_id] = new_content;
		}
	};

  this.listNotes = function(){
    var result = "";

		for(let i=0;i<this.notes.length;i++){
			result += "Note ID: " + i+"\n";
			result += this.notes[i]+"\n";
			result += "By Author " + this.author+"\n\n\n";
		}
    return result;
	};

  this.search = function(search_text){

		var arrIndex = [];
		//var regularExpression = new RegExp(search_text,"i");

		for(let j=0;j<this.notes.length;j++)
		{

			//if(regularExpression.test(this.notes[j]))
			if(this.notes[j].toLowerCase().includes(search_text.toLowerCase()))
			{
				arrIndex.push(j);
				//console.log(j);
			}
		}

		var returnedString = "Showing results for search ‘[ "+search_text+" ]’\n";


		if(arrIndex.length>0)
		{
			for(let i=0;i<arrIndex.length;i++)
			{
				returnedString += "Note ID: "+arrIndex[i]+"\n";
				returnedString += this.notes[arrIndex[i]]+"\n";
				returnedString += "By Author"+this.author+"\n\n\n";
			}
		}
		else
		{
			returnedString += "No Such string exists in the application";
		}

		return returnedString;
	};

}
