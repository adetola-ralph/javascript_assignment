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
			console.log("By Author " + this.author+"\n");
		}
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

}

var oreofe = new NotesApplication("Oreofe");

oreofe.create("This is a good exercise");
oreofe.create("This is also a good exercise");
oreofe.create("That is an exercise");
oreofe.create("Now this can be a good exercise");
oreofe.create("Talk about this");
oreofe.create("Lol, that was awesome");
oreofe.listNotes();
console.log(oreofe.get(2));
oreofe.delete(2);
oreofe.edit(2,"new Content");
oreofe.listNotes();
console.log(oreofe.search("this"));