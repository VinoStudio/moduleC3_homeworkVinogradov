// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет,
// есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

// Функция

function Detals(obj, str) {
    this.obj = obj
    this.str = str
    this.determine = function () {
        for (let i in this.obj) {
            if(this.obj.hasOwnProperty(i)) {
                console.log(this.str === i ? true : false)
            }
        }
    }
}

// Класс

class strInObject {
    constructor(obj, str) {
        this.obj = obj
        this.str = str
    }
    determine() {      // lesion 2
        for(let i in this.obj){
            if(this.obj.hasOwnProperty(i)){
                console.log(this.str === i ? true : false)
            }
        }
    }
}

const obj = {
    name : 'Vasya',
    age : 26,
    profession : 'Seller',
    salary : '30.000'
}
