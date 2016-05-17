function NotesApplication(author){
	this.author = author;
	this.notes = [];

	this.create = function(note_content){
		this.notes.push(note_content);
	};

	this.listNotes = function(){
		for(let i=0;i<this.notes.length;i++){
			console.log("Note ID: " + i);
			console.log(this.notes[i]);
			console.log("By Author " + this.author);
		}
	}

	this.get = function(note_id){
		return this.notes[note_id];
	}

	this.search = function(search_text){
		
		var arrIndex = [];
		var regularExpression = new RegExp(search_text,"i");
		
		for(let j=0;j<this.notes.length;j++)
		{
			
			if(regularExpression.test(this.notes[j]))
			{
				arrIndex.push(j);
				//console.log(j);
			}
		}

		var returnedString = "Showing results for search ‘[ "+search_text+" ]’\n";

		for(let i=0;i<arrIndex.length;i++)
		{
			returnedString += "Note ID: "+arrIndex[i]+"\n";
			returnedString += this.notes[arrIndex[i]]+"\n";
			returnedString += "By Author"+this.author+"\n\n\n";
		}
		
		return returnedString;
	}

	this.delete = function(note_id){
		this.notes.splice(note_id,1);
	}

	this.edit = function(note_id, new_content){
		this.notes[note_id] = new_content;
	}

}