// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
//
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalDevice(name, power, isConnected = false) {
    this.name = name
    this.power = power
    this.isConnected = isConnected
    this.status = function() {
        console.log(`В настоящее время прибор ${this.name} ${this.isConnected ? 'подключен': 'выключен'}`)
        console.log('___________________')
    }
    this.energyConsumption = function() {
        console.log(`${this.isConnected ? `Данный прибор потребляет ${this.power} ватт в час` : 'Прибор отключен'}`)
        console.log('___________________')
    }
}

ElectricalDevice.prototype.plugIn = function () {
    console.log(`Прибор: ${this.name} успешно подключен`)
    console.log('___________________')
    this.isConnected = true
}

ElectricalDevice.prototype.plugOut = function () {
    console.log(`Прибор: ${this.name} выкючен`)
    console.log('___________________')
    this.isConnected = false
}


// Думаю, можно обойтись одной функцией-конструктором для всех приборов.
function Device(name, power, brand, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isConnected = false;
}
Device.prototype = new ElectricalDevice()

const blender = new Device('Блендер', 1800, 'Biolomix', 'Соковыжималка', 'Перемалывать')
const monitor = new Device('Монитор', 60, 'MSI', 'VA', 'Показывать изображение')
