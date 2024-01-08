// let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.getTimezoneOffset());

// let myCreateDate = new Date(2024, 0, 9)
// let myCreateDate = new Date("2024-01-9")
// let myCreateDate = new Date("01-09-2024")
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

// let myTimeStamp =  Date.now()
// console.log(myCreateDate.getTime());
// console.log(myTimeStamp);

// console.log(Date.now())
// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

// console.log(newDate);
console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday:"long"
})



