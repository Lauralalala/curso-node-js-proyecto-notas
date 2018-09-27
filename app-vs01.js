console.log('Iniciando aplicación de notas')
const notas = require ('./notes')

var argumento=process.argv[2]
switch (argumento){
  case 'add':
   notas.addNote()
  break
  case 'remove':
    if(process.argv[3]!== undefined)
       notas.removeNote(process.argv[3])
    else
       console.log('Debe de pasar el id de la nota a borrar')
  break
  case 'list':
  notas.listarNote()
  break
  case 'read':
   if(process.argv[3]!== undefined)
    notas.readNote(process.argv[3])
  else
    console.log('Debe de pasar el id de la nota a leer')
  break
  default:
  console.log('No se ha encontrado el comando. Por favor pruebe con otro.')
  break
}
/*if(argumento==='add'){
  notas.addNote()
}else if(argumento==='remove'){
  notas.removeNote(process.argv[3])
}else if(argumento==='list'){
  notas.listarNote()
}else if(argumento==='read'){
  notas.readNote(process.argv[3])
}else{
  console.log('No se ha encontrado el comando. Por favor pruebe con otro.')
} */
/*notas.addNote()
notas.removeNote(5)
notas.updateNote()*/