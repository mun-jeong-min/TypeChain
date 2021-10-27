class human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age:number, gender?:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lnn = new human ("lnn", 17, "male");

const sayHi = (person : human) : string => { // arguments 중 arguments 뒤에 ?를 붙여서 선택적으로 매개변수를 쓸수 있게한다.
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;   
}
console.log(sayHi(lnn));
export{};