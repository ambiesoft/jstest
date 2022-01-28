// console.log('hello!!!!!!!!!!')

class User {
    constructor(name) {
        this.name = name;
    }
    func() {
        console.log('func')
    }
}

const user = new User("Kaz")
user.func()