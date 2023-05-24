// Написать функцию, которая создает пустой объект, но без прототипа.

// Функция

function nullObj() {
    return Object.create(null)
}

// Класс

class NullObject {
    constructor() {
    }
    objWithoutProto() {
        return Object.create(null)
    }
}
