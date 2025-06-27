// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// let evenarr=[];
// let oddarr=[];
// console.log(arr);

// for(let i=0; i<arr.length;i++){
//     if(arr[i]%2==0){
//         evenarr.push(arr[i]);
//     }

//     else{
//         oddarr.push(arr[i]);
//     }
// }

// console.log(evenarr);
// console.log(oddarr);

//For/Of Loop

let arr=[11,12,13,14,15,16,17];
let evenarr=[];
let oddarr=[];

for (let num of arr) {
    if(num%2==0){
        evenarr.push(num);
    }
    else{
        oddarr.push(num);
    }
    
}

console.log(evenarr);
console.log(oddarr);