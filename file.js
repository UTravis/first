//javascript object
const person = {
    name: {
        first: "Travis",
        second: "Uche"
    },
    age: 20,
    career: "web developers",
    hobby: ["reading","coding"],
    bio : function(){
        console.log(`That guy over there is ${this.name.first} ${this.name.second}. He is ${this.age} years old and loves to ${this.hobby[0]} and this.hobby[1]. He is a ${this.career}`);
    }
}

person.name.second = 'Gregory';

//changing the object memebers
person.name.first = 'don';
person.name.last = 'larry';