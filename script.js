let input = document.getElementById('input');
let btn =  document.getElementById('add');
let ul = document.getElementById('ul');
let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let am = "Am"
// console.log(time,min,sec);
if(hour > 12){
   hour = hour - 12
   am = "Pm"
}
if(hour < 10){
   hour = "0" + hour
}
if(min < 10){
   min = "0" + min
}
if(sec < 10){
   sec = "0" + sec
}
function add(){
   if(input.value === ""){
      Swal.fire({
      // title: "The Internet?",
      text: "Please fill out",
      icon: "error"
    });
   }
   else{
      ul.innerHTML += `<li id="li">${input.value} <span>${hour}:${min}:${am}</span> <div class="btn"><i id="btn1" class="fa-solid fa-pen-to-square"></i> <i id="btn2" class="fa-solid fa-trash"></i></div> </li>`
   }
   input.value = ""
   let li = document.getElementById('li')
   let btn2 = document.getElementById('btn2')
   let btn1 = document.getElementById('btn1');
   // let btn3 = document.getElementById('btn3')
   btn1.addEventListener('click',function(){
      let edit = prompt('Enter your task')
      if(edit){
         ul.innerHTML = `<li>${edit} <span>${hour}:${min}:${am}</span> <div class="btn"> <i id="btn1" class="fa-solid fa-pen-to-square"></i> <i id="btn2" class="fa-solid fa-trash"></i> </div> </li>`
      }
      else{
         ul.innerHTML = `<li>${edit} <span>${hour}:${min}:${am}</span> <div class="btn"> <i id="btn1" class="fa-solid fa-pen-to-square"></i> <i id="btn2" class="fa-solid fa-trash"></i> </div> </li>`
      }
   })  
   btn2.addEventListener('click',function(){
      ul.removeChild(ul.lastChild)
      
   })
}
input.addEventListener('keydown',function(event){
  if(event.keyCode == "13"){
     add()
  }
})