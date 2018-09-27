const notas = require ('./notes')
const { argv } = require ('yargs')
console.log(argv)

const commando = argv._[0]

 if(commando==='add'){
   console.log(`Añadiendo nueva nota con título ${argv.title}`)
 }
 switch (commando){
  case 'add':
   notas.addNoteParam(argv.title,argv.body)
  break
  case 'list':
       notas.getAll()
  break
  case 'read':
  notas.getNote(argv.title)
  break
  case 'remove':
    notas.removeNoteParam(argv.title)
  break
  default:
  console.log('No se ha encontrado el comando. Por favor pruebe con otro.')
  break
}