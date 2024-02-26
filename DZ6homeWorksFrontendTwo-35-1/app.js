function addBlogPost(){
    const titleInput = document.getElementById('title')
    const contentInput = document.getElementById('content')
    const blogPostContainer = document.getElementById('blog-posts')

    const title = titleInput.value
    const content = contentInput.value

    if(title && content){
        const article = document.createElement('article')
        article.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
        `
        blogPostContainer.appendChild(article)

        titleInput.value = ''
        contentInput.value = ''
    }else{
        alert('Заполните все поля')
    }
}

// Открытие и закрытие модальных окон
const deleteModal = document.getElementById('deleteModal')
const editModal = document.getElementById('editModal')
const closeButtons = document.querySelectorAll('.close')
const cancelButtonDelete = document.getElementById('cancelDelete')
const cancelButtonEdit = document.getElementById('cancelEdit')

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        deleteModal.style.display = 'none'
        editModal.style.display = 'none'
    })
})

// Функция для удаления статьи
function deleteBlogPost(article) {
    deleteModal.style.display = 'block'

    const confirmButton = document.getElementById('confirmDelete')
    confirmButton.addEventListener('click', () => {
        article.remove();
        deleteModal.style.display = 'none'
    })

    cancelButtonDelete.addEventListener('click', () => {
        deleteModal.style.display = 'none'
    })
}

// Функция для редактирования статьи
function editBlogPost(article) {
    const editedTitleInput = document.getElementById('editedTitle')
    const editedContentInput = document.getElementById('editedContent')

    editModal.style.display = 'block'
    editedTitleInput.value = article.querySelector('h2').innerText
    editedContentInput.value = article.querySelector('p').innerText

    const confirmButton = document.getElementById('confirmEdit')
    confirmButton.addEventListener('click', () => {
        article.querySelector('h2').innerText = editedTitleInput.value
        article.querySelector('p').innerText = editedContentInput.value
        editModal.style.display = 'none'
    });

    cancelButtonEdit.addEventListener('click', () => {
        editModal.style.display = 'none'
    })
}

// Функция добавления статьи
function addBlogPost() {
    const titleInput = document.getElementById('title')
    const contentInput = document.getElementById('content')
    const blogPostContainer = document.getElementById('blog-posts')

    const title = titleInput.value
    const content = contentInput.value

    if (title && content) {
        const article = document.createElement('article')
        article.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
        <button onclick="editBlogPost(this.parentElement)">Редактировать</button>
        <button onclick="deleteBlogPost(this.parentElement)">Удалить</button>
    `
        blogPostContainer.appendChild(article)

        titleInput.value = ''
        contentInput.value = ''
    } else {
        alert('Заполните все поля')
    }
}

