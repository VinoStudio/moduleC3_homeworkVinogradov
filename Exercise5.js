// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
//
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// Я бы просто сделал один класс, который создаёт прибор и определяет его потребление. Но если принципиально сделать, как в задании, напишу версию 2.

// Версия 1
class ElectricalDevice {
    constructor(name, brand, power, type, functionality, isConnected = false) {
        this.name = name
        this.brand = brand
        this.power = power
        this.type = type
        this.functionality = functionality
        this.isConnected = isConnected
    }
    plugIn() {
        console.log(`Прибор: ${this.name} успешно подключен`)
        this.isConnected = true
    }
    plugOut() {
        console.log(`Прибор: ${this.name} выкючен`)
        this.isConnected = false
    }
    status() {
        console.log(`В настоящее время прибор ${this.isConnected ? 'подключен': 'выключен'}`)
    }
    energyConsumption(){
        console.log(`${this.isConnected ? `Данный прибор потребляет ${this.power} ватт в час` : 'Прибор отключен'}`)
    }
}

// Версия 2

class ElectroDevice {
    constructor(name, power, isConnected = false) {
        this.name =  name
        this.power = power
        this.isConnected = isConnected
    }
    plugOut() {
        console.log(`Прибор: ${this.name} выкючен`)
        console.log('___________________')
        this.isConnected = false
    }
    status() {
        console.log(`В настоящее время прибор ${this.name} ${this.isConnected ? 'подключен': 'выключен'}`)
        console.log('___________________')
    }
    energyConsumption(){
        console.log(`${this.isConnected ? `Данный прибор потребляет ${this.power} ватт в час` : 'Прибор отключен'}`)
        console.log('___________________')
    }
}

ElectroDevice.prototype.plugIn = function() {
    console.log(`Прибор: ${this.name} успешно подключен`)
    console.log('___________________')
    this.isConnected = true
}

ElectroDevice.prototype.specifications = function() {
    for (let key in this) {
        if(this.hasOwnProperty(key) && key !== 'isConnected') {
            console.log(`Прибор ${this.name} имеет характеристики: ${key} - ${this[key]}`)
        }
    }
}

class Device extends ElectroDevice {
    constructor(name, power, brand, type, functionality) {
        super(name, power);
        this.brand = brand
        this.type = type
        this.functionality = functionality
        this.isConnected = false
    }
}

class Monitor extends Device {
    constructor(name, power, brand, type, functionality, matrixType, diagonal) {
        super(name, power, brand, type, functionality);
        this.matrixType = matrixType
        this.isConnected = false
        this.diagonal = diagonal
    }
}

const blender = new Device('Блендер', 1800, 'Biolomix', 'Соковыжималка', 'Перемалывать')
const monitor = new Monitor('Монитор', 60, 'MSI', 'ЖК', 'Показывать изображение', 'VA', 24)


