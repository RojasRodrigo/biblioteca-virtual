const books = [
    /*{ id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", categoria: "programación",editorial:"sudamericana", año: 1967 },
    { id: 2, titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", categoria:"Marketero", editorial: "Minotauro", año: 1954 },
    { id: 3, titulo: "El alquimista", autor: "Paulo Coelho", categoria: "programación", editorial: "Planeta", año: 1988 },
    { id: 4, titulo: "El código Da Vinci", autor: "Dan Brown", categoria: "programación", editorial: "Doubleday", año: 2003 },
    { id: 5, titulo: "El principito", autor: "Antoine de Saint-Exupéry", categoria: "programación", editorial: "Reynal & Hitchcock", año: 1943 },
    { id: 6, titulo: "El perfume", autor: "Patrick Süskind", categoria: "programación", editorial: "Diogenes Verlag", año: 1985 },
    { id: 7, titulo: "El retrato de Dorian Gray", autor: "Oscar Wilde", categoria: "programación", editorial: "Lippincott's Monthly Magazine", año: 1890 },
    { id: 8, titulo: "El señor de las moscas", autor: "William Golding", categoria: "programación", editorial: "Faber and Faber", año: 1954 },
    { id: 9, titulo: "El túnel", autor: "Ernesto Sabato", categoria: "programación", editorial: "Sur", año: 1948 },
    { id: 10, titulo: "La ciudad y los perros", autor: "Mario Vargas Llosa", categoria: "programación", editorial: "Seix Barral", año: 1963 },*/
];

// Función para cargar los libros en la tabla
function loadBooks(booksToLoad) {
    const tableBody = document.querySelector("#booksTable tbody");
    tableBody.innerHTML = "";
    booksToLoad.forEach(book => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.titulo}</td>
            <td>${book.autor}</td>
            <td>${book.editorial}</td>
            <td>${book.categoria}</td>
            <td>${book.año}</td>
            <td><button class="btn-ver" onclick="verLibro(${book.id})">Ver</button></td>
        `;
    });
}

// Función para filtrar los libros
function filterBooks() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.titulo.toLowerCase().includes(searchTerm) ||
        book.autor.toLowerCase().includes(searchTerm) ||
        book.editorial.toLowerCase().includes(searchTerm) ||
        book.categoria.toLowerCase().includes(searchTerm) ||
        book.año.toString().includes(searchTerm)
    );
    loadBooks(filteredBooks);
}

// Función para ver detalles del libro (placeholder)
function verLibro(id) {
    alert(`Ver detalles del libro con ID: ${id}`);
}

// Cargar todos los libros al inicio
loadBooks(books);

// Agregar evento de escucha al input de búsqueda
document.getElementById("searchInput").addEventListener("input", filterBooks);
