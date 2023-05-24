// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
// и значения только собственных свойств. Данная функция не должна возвращать значение.

// Функция

function Detals(obj) {
    this.obj = obj
    this.disassemble = function () {
        for (let i in this.obj) {
            if(this.obj.hasOwnProperty(i)) {
                console.log(`Данный объект содержит ключ с именем "${i}" и значением: "${this.obj[i]}"`)
            }
        }
    }
}

// Класс

class Pieces {
    constructor(obj) {
        this.obj = obj
    }

    disassemble() {
        for (let i in this.obj) {
            if (this.obj.hasOwnProperty(i)) {
                console.log(`Данный объект содержит ключ с именем "${i}" и значением: "${this.obj[i]}"`)
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
