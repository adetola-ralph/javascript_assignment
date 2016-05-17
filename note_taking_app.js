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
		return notes[note_id];
	}

	this.search = function(search_text){
		

		for(let i=0;i>this.notes.length;i++)
		{
			if(regularExpression.test(this.notes[i]))
			{
				arrIndex.push(i);
			}
		}
	}

	this.delete = function(note_id){
		this.notes.splice(note_id,1);
	}

	this.edit = function(note_id, new_content){
		this.notes[note_id] = new_content;
	}

}