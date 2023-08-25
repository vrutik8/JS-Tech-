// 1)Leap year

var arr1 = [2011,2019,2022,2016,2023,2000,2004,2034,2044]
let ans = arr1.filter((val)=>{
    return val/4;
})
console.log(ans);

//2) frequent repeated 

let arr2 = [3,'a','a',6,'a',90,'a','a','a']
let ans2 = arr2.filter((value)=>{
    return value==='a'
});
console.log(ans2)

// 3) addition of two arrays

// let arr3 = [1,2,3,4,5,6,7,8]
// let arr4 = [1,2,34,5,6,7,8,9,10] ?

// let ans3 = arr3.map((value,i)=>{

//     if (arr3.length>arr4.length){
//         return (value + arr4[i]);
//     }
//     else (arr4.length>arr3.length) 
//     {
//         return (value + arr4[i]) ;
//     }
// })
// console.log(ans3)

// 4) filter an array

// 5)find Dublicate in an given array

// const arr5 = [11,22,33,44,44,2,2,8]

// let ans4 = arr5.map((val,ind)=>{
//     return arr5.indexOf(val)!==ind
// })

let ans3 = [11,2,23,33,33]

let s = new Set(ans3);
console.log(s)








