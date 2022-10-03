//1.Do the below programs in IIFE(Immediately Invoked Function Expression).



var array = [ 1,2,3,4,5,6,7,8,9 ]


//a.Print odd numbers in an array.
;(function odd(){
    var result = array.filter(num=>num%2!=0)
    return result
    })
    console.log(odd());


//b.Convert all the strings to title caps in a string array.

//c.Sum of all numbers in an array.

;(function sum(){
    var result = array.reduce((a, b) => a + b )
    return result
    })
    console.log(sum());


//d.Return all the prime numbers in an array.

;(function prime(num){
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false
        }
        
    }
    return num > 1;
})

console.log(array.filter(prime))


//e.Return all the palindromes in an array.
//f.Return median of two sorted arrays of the same size.
//g.Remove duplicates from an array.
//h.Rotate an arrayby k times.

