// Function 1:Array slice
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
console.log(foods.splice(1,3))
// Function 2:Array Splice
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
foods.splice(2,0,'noodle','icecream')
console.log(foods)
// Function 3:Filter
const numberArray = [12,324,213,4,2,3,45,4234];
let isEven=numberArray.filter(function(item){
    return item%2==0
});
console.log(isEven)
// Finding prime
function isPrime(arr){
    for(let i=2;i*i<=arr;i++){
        if(arr%i ===0)
            return false
        return num > 1;
    }
}
console.log(isPrime(numberArray))
// // Function 4: Rejcet
function reject(array,fn){
    return array.filter(function(item){
        return !fn(item)
    });
}
const nonPrime=reject(numberArray,function(num){
    return numberArray%num===0
});
console.log(nonPrime)
// Function 5: Lambda isEven()
let isEven1 = numberArray.filter((item) => item%2==0)
console.log(isEven1)
// Function 6: map
const myArray = [11, 34, 20, 5, 53, 16];
let arr1=myArray.map(function(item){
    return item**2
})
console.log(arr1)
// Function 7 : Reduce
const myArray1=[2,3,5,10]
let multiply=myArray1.reduce(function(initial,item){
    return initial*item;
})
console.log(multiply)