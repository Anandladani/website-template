function myfun(){

let btn = document.getElementById("reserv-btn").addEventListener('click',()=>{
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value;
    let number =document.getElementById("number").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let person = document.querySelector('select[type="option"]:checked');

    let i = [name,email,number,date,time];
console.log(i);
// console.log(name.value)
    if(i.length<=0 && i==""){
         alert("fill the data")
    }
    else{
        alert("table book successfully")
    }
 
})
}