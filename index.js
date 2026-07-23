// console.log("AMG")
// console.log(5 * 6)

// rect=area(4,6)
// console.log(rect)

// let student={
//     fullName: "Robin Mwenda",
//     Age: 18,
//     Height: 1.87,
//     Student: true,
// };
// student.fullName

// const fullName="YRN"
// console.log("Fullname:"+fullName)
// let Age=17
// console.log("Age:"+ Age)
// let Height=1.88
// console.log("Height:"+Height)
// let student=true
// console.log("Student:"+student)
// 
let number=1
while(number < 100){
    if (number % 5 == 0 && number % 3 == 0){
        console.log("fizz and buzz")
    }
    else if (number % 3 == 0){
    console.log("fizz")
    }
    else if (number % 5 == 0){
    console.log("buzz")
    }
    
    else{
        console.log(number)
    }
    number ++
}
