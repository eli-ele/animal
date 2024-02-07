class animal {
    constructor (name, wow){
        this.name = name;
        this.wow = wow;
    }
    makeSound() {
       console.log(`${this.name} ${this.wow}`);
    }
}

class anima2 extends animal{
    makeSound() {
        return `the lion${this.name} ${this.wow}`
    }
}

const resulte = new anima2("gio", "wof");
console.log(resulte.makeSound);