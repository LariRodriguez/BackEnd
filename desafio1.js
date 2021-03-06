class Usuario {

    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre
        this.apellido = apellido
        this.mascotas = mascotas
        this.libros = libros
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

     addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    getMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }

    getBooks() {
        let nombres = []
        for (let i = 0; i < this.libros.length; i++) {
            nombres.push(this.libros[i].nombre)
        }
        return nombres
    }
}

let nombre = 'Lara'
let apellido = 'Rodriguez'
let mascotas = []
let libros = []
let usuario = new Usuario(nombre, apellido, mascotas, libros);

usuario.addMascota('Gato llamado Aramis')
usuario.addMascota('Gata llamada Helena')
usuario.addBook('Harry Potter:Y El Caliz de Fuego','J.K.ROWLING')
usuario.addBook('Harry Potter:Y La Camara Secreta','J.K.ROWLING')

console.log(usuario.getFullName())
console.log(usuario.getMascotas())
console.log(usuario.getBooks())