// class - создание нового классаа
// constructor - метод, который инициирует объект при создании экземпляра класса
// extends - используется для определения наследования
// super - метод, устанавливающий свойства наследования за счет вызова родительского конструктора
// get - возвращает значение
// set - переорпределяет существующее значение
// new - создание объекта через метод конструктора класса

//! Наследование
class Person {
    constructor(name, lastName, age){
        this.name = name
        this.lastName = lastName
        this.age = age
        Person.count++
    }
    sayHello(){
        console.log(`Hello! My name is ${this.name} ${this.lastName}`);
    }

    sayAge(){
        console.log(`I'm ${this.age} y.o.`);
    }

    static countOfObj(){
        console.log(Person.count);
    }
}

class Mentor extends Person {
    constructor(name, lastName, age, position, type){
        super(name, lastName, age)
        this.position = position
        this.type = type
    }

    work(){
        console.log(`I'm a ${this.type} ${this.position}`);
    }
}

let mentor1 = new Mentor('Leo', 'Wayne', 35, 'Mentor', 'Java')
console.log(mentor1);
mentor1.sayHello()
mentor1.sayAge()
mentor1.work()

//! Инкапсуляция
class User{
    constructor(password, userName){
        this.#password = password
        this.userName = userName
    }
    #password

    getPassword(userName){
        if(userName === this.userName){
            return this.#password
        }else{
            return 'Forbidden'
        }
    }

    setPassword(oldPassword, newPassword, userName){
        if(userName === this.userName && oldPassword === this.#password){
            this.#password = newPassword
            console.log('Password changed');
        }else{
            console.log('Forbidden');
        }
    }
}

let user1 = new User('qwerty', 'ph077')
// console.log(user1.password);
console.log(user1.getPassword('ph077'));
user1.setPassword('qwerty', '12345', 'ph077');
console.log(user1.getPassword('ph077'));

// Старый синтаксис
// class User{
//     constructor(password){
//         this._password = password
//     }
//     // ничего не принимает в параметры
//     get getPassword(){
//         return this._password
//     }
//     set setPassword(newPassword){
//         this._password = newPassword
//     }
//     // скрытый метод
//     #sayHello(){
//         console.log('hello');
//     }
//     getPrivateMethod(userName, password){
//         this.#sayHello()
//     }
// }

// let user1 = new User('qwerty')
// console.log(user1._password);
// console.log(user1.getPassword);
// user1.setPassword = '12345'
// console.log(user1.getPassword);
// // user1.#sayHello()
// user1.getPrivateMethod()
//! Полиморфизм
//  способность функции обрабатывать данные разных типов

class Monsters{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    saySMTH(){
        console.log(`${this.name} is peace of shi))`);
    }
}

class Dilfs{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    saySMTH(){
        console.log(`Hey silly girl, you can call me ${this.name} ;)`);
    }
}

let vampire = new Monsters('Demon', 68)
vampire.saySMTH()

let dilf = new Dilfs('Dean', 36)
dilf.saySMTH()

