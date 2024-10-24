// Función para alternar el modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

// Event listener para el botón de modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

// Función para crear tarjetas de libros
function createBookCard(title, author) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
        <h3>${title}</h3>
        <p>${author}</p>
    `;
    return card;
}

// carga los libros favoritos
const featuredBooks = document.getElementById('featuredBooks');
const books = [
    { title: 'Codigo Limpio', author: 'Robert C. Martin' },
    { title: 'Git y GitHub', author: 'Brais Moure' },
    { title: 'Contabilidad Basica', author: 'Gustavo Ledezma' },
    { title: 'Algebra I', author: 'Armando O. Rojo' },
    { title: 'Finanzas de Empresas', author: 'Henry Rivera' }
];

books.forEach(book => {
    featuredBooks.appendChild(createBookCard(book.title, book.author));
});

// Anima el libro del día
const bookCover = document.querySelector('.book-cover');
setInterval(() => {
    bookCover.style.transform = 'scale(1.05)';
    setTimeout(() => {
        bookCover.style.transform = 'scale(1)';
    }, 500);
}, 3000);