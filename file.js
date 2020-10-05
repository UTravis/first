//javascript object
const person = {
    name: {
        first: "Travis",
        second: "Uche"
    },
    age: 20,
    hobby: ["reading","coding"],
    bio : function(){
        console.log(`That guy over there is ${this.name.first} ${this.name.second}. He is ${this.age} years old and loves to ${this.hobby[0]} and this.hobby[1]. `);
    }
}