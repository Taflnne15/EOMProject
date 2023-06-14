function total(){
  // let idAdd = parseInt(prompt('Please confirm'));  //input id
  let  = newTarget= list.find(function(locate){
     return locate.id == idAdd;
  })
  let index = list.indexOf(newTarget).price
  // totalList.push(index)
  // console.log(newTarget);
  totalList.push(parseInt(newTarget.price))
  // console.log(sum);
  localStorage.setItem('calculation',JSON.stringify(totalList) ) //send to storage
  let sum = 0;
  //the calculation
  totalList.forEach(n=> sum += n)
//output
  totalOutcome.innerHTML=`
  Total = ${sum}
  `
}