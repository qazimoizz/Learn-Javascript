// concatinating strings



// let sentence =  "learning javascript from apna college hope you like it";
// console.log(sentence);

// let res = sentence.replace("javascript", "python");
// console.log(res);

// let  Fullname = prompt("Enter your full name");

// let res = "@"+Fullname+13;

// alert(res);

// let res = "@" + Fullname.concat(13);
// console.log(res);


// Arrays in js 


// let arr = ["iron", "Batman", "superman", "spiderman"];
// console.log(arr);

// let array = [ 84, 74, 99, 100];
// console.log(array);

// let res = arr[1] + array[2];
// console.log(res);

// let arr = ["iron", "Batman", "superman", "spiderman", "aquaman", " hulk" ,"thor", "captain america", "black panther", "black widow"];
// let array = [ 84, 74, 99, 100 , 90 , 80 , 70 , 60 , 50 , 40];

// for ( let i = 0; i < arr.length; i++){
//     console.log(arr[i] +" score is "+ array[i]);
// }

// for (let arrays of arr){
//     console.log(arrays +" score is "+ array[arr.indexOf(arrays)]);
// }


// let marks = [ 84, 74, 99, 100 , 90 , 80 , 70 , 60 , 50 , 40];
// let sum = 0;
// for ( total of marks){
// sum = sum + total
// }
// let average = sum / marks.length;
// console.log(`The average score is ${average}`);

let items = [300, 900, 500, 400];
let i = 0;
for ( val of items ){
    console.log(`value at index ${i} is ${val}`);
   let offer = val / 10;
     items[i] -= offer;
    console.log(`After offer, value at index ${items[i]}`);
    i++;
}
