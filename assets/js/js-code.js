//1
class User {
    constructor(id,usName,usSurname,adress) {
        this.id = id
        this.usName = usName
        this.usSurname =usSurname
        this.adress = adress
    }
}
const user1 = new User(1,'Vova','Ostroskii','Shevchenca 17')
console.log(user1);
class Book {
    constructor(bookId,shelfId,athtor,bookName,year,pages) {
        this.bookId = bookId
        this.userId = null
        this.shelfId = shelfId
        this.athtor = athtor
        this.bookName = bookName
        this.year = year
        this.pages = pages
    }
    isVacant(){
        if(this.userId===null){
            console.log(true)
        }
    }
    getRent(userId){
        this.shelfId = null
        this.userId = userId
    }
    returnBook(shelfId){
        this.userId = null
        this.shelfId = shelfId
    }
}
const book1 = new Book(1,5,'anonymus','nohow',2024,150)
console.log(book1);
book1.isVacant()
book1.userId
book1.shelfId
book1.getRent(user1.id)
book1.userId
book1.shelfId
//2
class Animal{
    constructor(name,age) {
        this.name =name
        this.age = age
    }
    hunting(){
        console.log('Хижак полює');
    }
    voice(){
        console.log('*звук');
    }
}
class Wolf extends Animal{
    constructor(name,age,isMale) {
        super(name,age)
        this.isMale = isMale
    }
    hunting(){
        console.log(`Вовк ${this.name} полює`);
    }
    voice(){
        console.log('ааууууууууууууу');
    }
}
class Tiger extends Animal{
    constructor(name,age,speed) {
        super(name,age)
        this.speed =speed
    }
    hunting(){
        console.log(`Тигр ${this.name} полює`);
    }
    voice(){
        console.log('грррррррррррррр');
    }
}
const tiger1 = new Tiger('Tur',7,75)
tiger1.hunting()
tiger1.voice()
const wolf1= new Wolf('Vir',7,true)
wolf1.hunting()
wolf1.voice()