
let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
    arr.map(printMap);
    function printMap(arr){
        if(arr.marks > 50){
            console.log(arr);
        }
    }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
    arr.forEach(arr =>{
        if(arr.marks > 50){
            console.log(arr);
        }
    })
}

function addData() {
  //Write your code here, just console.log
    let newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
        arr.push(newStudent);
        console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
    arr = arr.filter(function(arr){
        if(arr.marks > 50){
            return arr;
        }
    })
    console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
    let arr2 = [
        { id: 5, name: "rohit", age: "17", marks: 55 },
        { id: 6, name: "aman", age: "19", marks: 65 },
        { id: 7, name: "sahil", age: "20", marks: 24 },
    ];

    arr = arr.concat(arr2);
    console.log(arr);
}