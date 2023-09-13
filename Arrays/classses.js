// reference type
let object1 = { value: 10 }
let object2 = object1
let object3 = { value: 10 }

// context vs scope
const object4 = {
    a: function(){
        console.log(this)
    }
}

// instantiation

class Play {
    constructor(name, type){
        console.log('player', this)
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I am ${this.type}`);
    }
}

class Wizard extends Play{
    constructor(name, type){
        super(name, type);
        console.log('wizard', this);
    }
    play(){
        console.log(`WEE I AM ${this.type}`);
    }
}

const wizard1 = new Wizard('ali', 'alizadah');
const wizard2 = new Wizard('karim', 'karimi')