// Activity 1 : For loop
//------------------------------------------------
// Task1 : No. from 1 - 10
for(let i = 1; i<=10; i++){
    console.log(i);
};

// Task2 : multiplicaion table of 5
for (let i = 1; i < 11; i++) {
    let a = 5*i;
    console.log(`5 * ${i} = ${a}`);
};


// Activity 2 : While loop
//------------------------------------------------
// Task3 : sum of no. from 1-10
let b = 1,c =0;
while(b<=10){
    c += b;
    b++;
}
console.log(c);

// Task4 : print no. from 1 - 10
let d = 10 ;
while(d>0){
    console.log(d);
    d--;
};

// Activity 3 : Do..While loop
//------------------------------------------------
// Task5 : no. from 1 to 5
let e = 1;
do{
    console.log(e);
    e++;
}
while(e<=5);

// Task6 : 
let f =5,ans=1;
do{
    ans = ans* f;
    f--;
}while(f>0);
console.log(ans);


// Activity 4 : Nested loops
//------------------------------------------------
// Task7 : pattern using nested for loops
let h = "";
for(let g = 1; g<=5; g++){
    h += "*"+" ";
    console.log(h);
};


// Activity 5 : loop Control Statements
//------------------------------------------------
// Task8 : skip 5 using continue
for(let j=1; j<=10; j++){
    if(j == 5){
        continue;
    }else{
        console.log(j);
    }
}

// Task9 : stop at 7 using break
for(let j=1; j<=10; j++){
    if(j == 7){
        break;
    }else{
        console.log(j);
    }
}

