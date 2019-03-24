const fs=require('fs');
const os=require('os');

const notes= require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
var command = argv._[0];
/*
console.log('command:', command);
console.log('yargs', argv);
*/
if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note){
    console.log('Note created');
    notes.logNote(note);

  } else {
    console.log('Note title taken');
  }

}else if (command=== 'list'){
  var getAllNotes = notes.getAll();
  console.log(`There are ${getAllNotes.length} note(s).`);
  getAllNotes.forEach((note) => notes.logNote(note));

} else if (command==='read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Note found');
    notes.logNote(note);
  } else{
    console.log('Note not found!!');
  }
} else if(command==='delete'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}else{
  console.log('Command not recognized');
}
