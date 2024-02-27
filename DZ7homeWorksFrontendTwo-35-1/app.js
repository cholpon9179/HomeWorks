      const movies = [
    { title: "Человек-паук", year:2002, rating: 7.4, director: "Сэм Рейми" },
    { title: "Вонка", year: 2023, rating: 7.1, director: "Поул Кинг" },
    { title: "Оппенгеймер", year: 2023, rating: 8.4, director: "Кристофер Нолан" }
    ]

    function renderTable() {
    const tableBody = document.querySelector("#moviesTable tbody")
    tableBody.innerHTML = ''

    movies.forEach(movie => {
    const row = document.createElement("tr")
    row.innerHTML = `
        <td>${movie.title}</td>
        <td>${movie.year}</td>
        <td>${movie.rating}</td>
        <td>${movie.director}</td>
        <td>
          <button onclick="buyTicket(this)">Купить</button>
        </td>
      `
    tableBody.appendChild(row)
})
}
    function buyTicket(button) {
    const row = button.parentNode.parentNode
    row.classList.add("bought")
    button.remove()
    alert("Подтверждение")
}

  
    renderTable()
