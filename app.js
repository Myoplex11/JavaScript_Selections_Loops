console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(i =1; i <=100; i++) {
    if(i%2 != 0) {
        console.log(i);
    }

}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(i =1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 ==0) {
        console.log(`${i} FIZZBUZZ`);
    }
    else if(i % 3  == 0) {
        console.log(`${i} FIZZ`);
    }
    else if(i % 5 == 0) {
        console.log(`${i} BUZZ`);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// FIZZBUZZ using a while loop.
i = 1;
while(i <= 100) {
    if(i % 3 == 0 && i % 5 ==0) {
        console.log(`${i} FIZZBUZZ`);
    }
    else if(i % 3  == 0) {
        console.log(`${i} FIZZ`);
    }
    else if(i % 5 == 0) {
        console.log(`${i} BUZZ`);
    }

    i++

}

// FIZZBUZZ using a do while loop.

i =1;

do {
    if(i % 3 == 0 && i % 5 ==0) {
        console.log(`${i} FIZZBUZZ`);
    }
    else if(i % 3  == 0) {
        console.log(`${i} FIZZ`);
    }
    else if(i % 5 == 0) {
        console.log(`${i} BUZZ`);
    }
    i++

    } while(i <= 100);


//Exercise 4
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

for(i = 0; i <= n; i++) {
    if(i == value) {
        console.log(`"The value is ${i} and we found the value"`);
    break;
    }

    if(i == n) {
        console.log(`"The value is ${i} and we did not find the value" `);
    }

}






//Exercise 5
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(i= start; i <= m; i++) {
    if(i % fizzDivisor ==0 && i % buzzDivisor ==0) {
        console.log(`${i} FIZZBUZZ`);
    }
    else if(i % 3 == 0) {
        console.log(`${i} FIZZ`);
    }
    else if(i %5 == 0) {
        console.log(`${i} BUZZ`)
    }
}
