
document.addEventListener("DOMContentLoaded", () => {
  const myArray = [1, 2, 3, 4, 5]
  const myString = "Learning Java Script"
  const stringExpression = "5+5+10/2"
  let array = []
  let string = ""

  document.getElementById("myArray").innerText = `myArray = [${myArray}]`
  document.getElementById("myString").innerText = `myString = "${myString}"`
  document.getElementById("stringExpression").innerText = `stringExpression = "${stringExpression}"`

  document.getElementById("arrayLength").innerText = `myArray.length >>> ${myArray.length}`
  document.getElementById("stringLength").innerText = `myString.length >>> ${myString.length}`

  document.getElementById("subString").innerText = `myString.substring(0,8) >>> "${string=myString.substring(0,8)}"`
  document.getElementById("subString2").innerText = `myString.substring(0,-1) >>> "${string=myString.substring(0,-1)}"`
  
  document.getElementById("stringSlice").innerText = `myString.slice(0,8) >>> "${string=myString.slice(0,8)}"`
  document.getElementById("stringSlice2").innerText = `myString.slice(0,-1)  >>> "${string=myString.slice(0,-1)}"`

  document.getElementById("stringSplit").innerText = `myString.split(" ") >>> [${array = myString.split(" ")}]`
  document.getElementById("stringSplit2").innerText = `myString.split(/[aic]/) >>> [${array = myString.split(/[aic]/)}]`
  document.getElementById("stringSplit3").innerText = `stringExpression.split(/[+/]/) >>> [${array = stringExpression.split(/[+/]/)}]`

  document.getElementById("arrayFrom").innerText = `myString.split(" ") >>> [${Array.from(myString)}]`

  document.getElementById("eval").innerText = `eval(stringExpression) >>> [${eval(stringExpression)}]`
 



})

