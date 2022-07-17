const btn=document.getElementById("Results")
btn.addEventListener("click",(event)=>{
    event.preventDefault()
let inputA=document.getElementById("shedA").value
let inputB=document.getElementById("inputB").value
let inputC=document.getElementById("inputC").value
let inputD=document.getElementById("inputD").value
let days=document.getElementById("days").value
let totals=totalProduce(inputA,inputB,inputC,inputD);
incomeOverTime (45,days,totals)
console.log(inputA)
})
function totalProduce(A,B,C,D){
let production=`total production in shed A ${A} litres\n 
total production in shed B ${B} litres\n
total production in shed C ${C}  litres\n
total production in shed D ${D}litres`
totalProduce=parseInt(A)+parseInt(B)+parseInt(C)+parseInt(D)
console.log(production);
let holder=document.getElementById("produce")
holder.textContent+=production
let totalHolder=document.querySelector("#total")
totalHolder.innerHTML+=`<p style="color: white;">total production in all sheds is ${totalProduction}<br></p>`
return totalProduce
}