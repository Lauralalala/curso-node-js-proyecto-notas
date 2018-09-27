console.log('Módulo de notas cargado')

  const addNote = () => {
     console.log(`Nueva nota`)
      return 'Nueva nota'
  }
  const addNoteParam = (titulo, body) =>{
    console.log('Nueva nota añadida: ',titulo, body)
  }
  const getAll = () => {
    console.log('Listando todas las notas')
  }
  const getNote = (titulo) => {
    console.log(`Leyendo nota con el título ${titulo}`)
  }
  const removeNoteParam = (titulo) =>{
    console.log(`Eliminando nota con el título ${titulo}`)
  }
  const removeNote = (id) =>{
    console.log(`Eliminando nota ${id}`)
    return 'Eliminando nota'
  }
  const listarNote = () => {
    console.log('Listar todas las notas')
    return 'Listar todas las notas'
  }
  const readNote = (id) =>{
    console.log(`Leer la nota ${id}`)
    return 'Leer la nota'+id
  }

  module.exports = {
    addNote,
    addNoteParam,
    removeNote,
    removeNoteParam,
    listarNote,
    readNote,
    getAll,
    getNote,
  }

/*
Otra manera sería:   
module.exports.addNote = function () {
  console.log('Nueva nota')
  return 'Nueva nota'
} */