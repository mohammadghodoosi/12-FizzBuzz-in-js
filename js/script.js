function getValue(){
  let fizz=document.getElementById('fizz').value
  let buzz=document.getElementById('buzz').value
  processValue(fizz,buzz)
}

function processValue(a,b){
  let showNumber=[]
  for(let i=1;i<=100;i++){
    
    showNumber.push(i)
  }
  displayValue(showNumber)

}

function displayValue(showNumber){
  let result=document.getElementById('tableResults')
  let tableNumbers=''
  showNumber.map((num)=>{
    if(num%5==0){
      return(
        tableNumbers+=`<td>${num}<td></tr>`
      )
    }else if(num%5==1||num==1){
      return(
        tableNumbers+=`<tr><td>${num}<td>`
      )
    }else{
      return(
        tableNumbers+=`<td>${num}<td>`
      )
    }
  })
  result.innerHTML=tableNumbers

}
