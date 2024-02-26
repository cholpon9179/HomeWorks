//1-задание
function shortName(lastName, firstName, surName) {
  return `${lastName} ${firstName[0]}.${surName[0]}.`
}

console.log(shortName("Смайылбекова", "Чолпон", "Смайылбековна"))

//2-задание

function filterBooks(...books) {
    const booksWithU = books.filter(book => book.includes("у"))
    const otherBooks = books.filter(book => !book.includes("у"))
    console.log("Книги с буквой 'у':", booksWithU)
    console.log("Остальные книги:", otherBooks)
}

filterBooks(
    "Унесенные ветром",
    "Гарри Поттер и узник Азкабана",
    "Война и мир",
    "Мастер и Маргарита"
)

//3-задание

var users = [
    { name: "Анна", birthDate: "1990-05-15" },
    { name: "Иван", birthDate: "1985-12-28" },
    { name: "Петр", birthDate: "1978-08-03" },
    { name: "Мария", birthDate: "1995-02-10" },
    { name: "Сергей", birthDate: "1980-11-20" }
]

users.forEach(user => {
  console.log(`Пользователь ${user.name} родился ${user.birthDate}`)
})

//4-задание

function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^а-яё]/g, "")
    const sedSrevertr = cleanStr.split("").reverse().join("")
    return cleanStr === reversedStr;
}

console.log(isPalindrome("А роза упала на лапу Азора"))
console.log(isPalindrome("Мама мыла раму"))
  


