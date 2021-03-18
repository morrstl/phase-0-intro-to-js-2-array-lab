// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
   console.log(name)
    cats.push("Ralph");    
}
function destructivelyPrependCat(name){
    console.log(name)
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name){
    console.log(name)
    cats.pop("Ralph")
}
function destructivelyRemoveFirstCat(name){
    console.log(name)
    cats.shift("Bob")
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name,...cats]
}
function removeLastCat(name){
    let copyCats = [...cats]
    return copyCats.slice(0,2)
    
}
function removeFirstCat(name){
    let copyOfCats = [...cats]
    return copyOfCats.slice(1)
}






