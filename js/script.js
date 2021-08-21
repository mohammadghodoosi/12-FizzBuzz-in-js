function getValue(){
  let fizz=document.getElementById('fizz').value
  let buzz=document.getElementById('buzz').value
  processValue(fizz,buzz)
}

function processValue(a,b){
  let generateNumber=[]
  for(let i=1;i<=100;i++){
    
    let value=((i%a==0?'Fizz':'')+(i%b==0?'Buzz':'')||i)
    generateNumber.push(value)
  }
  displayValue(generateNumber)

}

function displayValue(generateNumber){
  let result=document.getElementById('tableResults')
  let tableNumbers=''
  let hundred=generateNumber.length
   for(let index=0;index<hundred;index+=5){
     tableNumbers+=`
      <tr>
        <td class="${generateNumber[index]}">${generateNumber[index]}</td>
        <td class="${generateNumber[index+1]}">${generateNumber[index+1]}</td>
        <td class="${generateNumber[index+2]}">${generateNumber[index+2]}</td>
        <td class="${generateNumber[index+3]}">${generateNumber[index+3]}</td>
        <td class="${generateNumber[index+4]}">${generateNumber[index+4]}</td>
      </tr>
     `
   }
  result.innerHTML=tableNumbers

}
