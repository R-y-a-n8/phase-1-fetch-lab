document.addEventListener("DOMContentLoaded", function() {
    fetchBooks();
  });
  
  function fetchBooks() {
    fetch("https://anapioficeandfire.com/api/books")
      .then(response => response.json())
      .then(data => renderBooks(data)); 
  
  function renderBooks(data) {
    
    const bookList = document.getElementById("book-list");
  
   
    data.forEach(book => {
      const listItem = document.createElement("li");
      listItem.textContent = book.name;
      bookList.appendChild(listItem);
    });
  }
}