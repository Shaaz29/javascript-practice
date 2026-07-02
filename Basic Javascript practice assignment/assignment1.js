// Question 1:
let arr=[1,2,3,4,5,6,2,3];
let number=2;

for(let i=0; i<arr.length; i++){
    if(arr[i]==number){
        arr.splice(i,1);
    }
}
    console.log(arr);


// Question:2

let num=287152;
let count=0;
while(num>0){
    let rem=num%10;
    count++;
    num=Math.floor(num/10);
}
console.log(count);


// Question 3:

let n=287152;
let sum=0;
while(n>0){
    let rem=n%10;
    sum=sum+rem;
    n=Math.floor(n/10);
}
console.log(sum);


// Question:4

let fact=1;
let nums=5;
for(let i=1; i<=nums; i++){
    fact=fact*i;
}
console.log(fact);


// Question 5:

let arr2=[2,5,10,4,2,7,1,9];
let largest=0;
for(let i=0;i<=arr2.length;i++){
    if(largest<arr2[i]){
        largest=arr2[i];
    }
}
console.log(largest);



