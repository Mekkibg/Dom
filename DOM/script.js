var plusBtn = document.getElementsByClassName('plus-btn');
// console.log(plusBtn)
for(let i=0; i< plusBtn.length; i++){
   

    plusBtn[i].addEventListener('click', function(){
        plusBtn[i].nextElementSibling.innerText++;
        totalPrice();
    })
  
}

var moinsBtn = document.getElementsByClassName('moins-btn');
// console.log(plusBtn)
for(let i=0; i< moinsBtn.length; i++){
   

    moinsBtn[i].addEventListener('click', function(){
        if(moinsBtn[i].previousElementSibling.innerText > 0){
            moinsBtn[i].previousElementSibling.innerText--;
            totalPrice();
        }
        
    })
  
}
let hearts = document.getElementsByClassName('fa-heart');
// console.log(hearts)

for (let heart of hearts){

  heart.addEventListener('click', function(){

 if ( heart.style.color === "black"){
   heart.style.color = "red"
 } else {
   heart.style.color ="black"
 }
}
 )
}
let  deletebtn= document.getElementsByClassName('fa-times-circle');
console.log(deletebtn)
for (let btnDelete of deletebtn){
    btnDelete.addEventListener('click', function(){
        btnDelete.parentElement.parentElement.parentElement.remove();
       totalPrice();
    })
}

function totalPrice(){
    let quantity=document.getElementsByClassName("quantity");
    let totPrice=document.getElementsByClassName("prix");
    let sum = 0;
    for(let i=0; i<totPrice.length; i++){
    sum+=totPrice[i].innerText * quantity[i].innerText
    console.log(sum);
    document.getElementById("totalPrix").innerText=sum;  
   }
 }

