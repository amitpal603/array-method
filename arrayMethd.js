let arr = [1,2,3,4,5]

// 1 push method

const add = arr.push(9,[1,2,3])
// console.log(add);
// console.log(arr);

// 2 pop method

const pop = arr.pop()
// console.log(pop);
// console.log(arr);


// 3 shift method delete ele starting in array

const res = arr.shift()
// console.log(res);
// console.log(arr);

// 4 unshift method used to add ele for starting in array return arr total length 

const res1  = arr.unshift(1)
// console.log(res1);
// console.log(arr);


// 5 concat method used to concat two array and return new array
const num = [9,10,11,12]

const res3 = arr.concat(num)
// console.log(res3);

// 6 indexOf method used to return index of ele  for array yadi ele nhi hai to return -1

const res4 = arr.indexOf(9)
// console.log(res4);

// 7 includes method are used to find ele in array return true  ele hai to nhi to false

const res5 = arr.includes(9)
// console.log(res5);

// 8 reverse method are used to revers the array change original array
const res6 = arr.reverse()
// console.log(res6);
// console.log(arr);

// 9 sort are used to change original array sort ele in based on latter and based on assic value
const latter = ['cow','elephant','Goat']
const res7 = latter.sort()
// console.log(res7);
// console.log(latter);

// 10 slice are used to want to slice of this array
const res8 = arr.slice(2,5)
// console.log(res8);

// 11 splice method are used to delete and replace original array modify

const res9 = arr.splice(2,3)
// console.log(res9);
// console.log(arr);



