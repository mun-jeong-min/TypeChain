const name:string =  'jeongmin'
const age:number = 24;
const gender:string =  'male'

const sayHi = (name? : string, age? : number, gender?: string) : string => { // arguments 중 arguments 뒤에 ?를 붙여서 선택적으로 매개변수를 쓸수 있게한다.
    return `hello ${name}, you are ${age}, you are a ${gender}`;   
}
console.log(sayHi(name,age));
export{};