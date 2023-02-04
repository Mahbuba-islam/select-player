function getPlayerName(playerName){
    const playerNameField = document.getElementById(playerName)
    const playerNameValue = playerNameField.innerText
    return playerNameValue;
}
      //set value function
function setValue(elementId, value){
 const elementIdField = document.getElementById(elementId)
 elementIdField.innerText = value;
}
    //   disable button function
function disableClick (elementId) {
    const x = document.getElementById(elementId);
    x.disabled = true;
    if(x.disabled=true){
        x.style.backgroundColor='gray'
    }
  }
  

  

       //add evnt listner
        //nymer button
document.getElementById('nymer-btn').addEventListener('click', function(){
    const nymerName = getPlayerName('nymer')
    const ol = document.getElementById('selected-player')
    const numberOfChild = ol.childElementCount
    if(numberOfChild<5){
        const li = document.createElement('li')
        li.setAttribute("id", "selected-player1");
        ol.appendChild(li) 
        setValue('selected-player1', nymerName)
       disableClick ('nymer-btn')
    }
    else{
       alert("You can't add more than 5")
    }
       
    
    
 })




   //Kylian btn
document.getElementById('kylian-btn').addEventListener('click', function(){
    const kylianName = getPlayerName('kylian')
    const ol = document.getElementById('selected-player')
    const numberOfChild = ol.childElementCount
    if(numberOfChild<5){
        const li = document.createElement('li')
        li.setAttribute('id', 'selected-player2')
        ol.appendChild(li)
        setValue('selected-player2', kylianName)
        disableClick ('kylian-btn')
    
    }
    else{
        alert("You can't add more than 5")
    }
   
   })




document.getElementById('mbappe-btn').addEventListener('click', function(){
    const mbappeName = getPlayerName('mbappe')
    const ol = document.getElementById('selected-player')
    const numberOfChild = ol.childElementCount
    if(numberOfChild<5){
        li = document.createElement('li')
        li.setAttribute('id', "selected-player6")
        ol.appendChild(li)
        setValue('selected-player6', mbappeName)
        disableClick ('mbappe-btn')
    }
    else{
        alert("You can't add more than 5")
    }
   
})




   //sergio-btn
document.getElementById('sergio-btn').addEventListener('click', function(){
    const sergioName = getPlayerName('sergio')
    const ol = document.getElementById('selected-player')
    const numberOfChild = ol.childElementCount
    if(numberOfChild<5){
        const li = document.createElement('li')
        li.setAttribute("id", "selected-player3");
        ol.appendChild(li) 
        setValue('selected-player3', sergioName)
        disableClick ('sergio-btn')
    }
    else{
        alert("You can't add more than 5")
    }
    // this.disabled = true
    // if(this.disabled = true){
    //  this.style.backgroundColor='gray'
    // }
    // else{
    //  this.style.backgroundColor='rgb(27, 25, 155)'
    // }

   })



   //renato-btn
document.getElementById('renato-btn').addEventListener('click', function(){
    const renatoName = getPlayerName('renato')
    const ol = document.getElementById('selected-player')
    const numberOfChild = ol.childElementCount
    if(numberOfChild<5){
        const li = document.createElement('li')
        li.setAttribute("id", "selected-player4");
        ol.appendChild(li) 
        setValue('selected-player4', renatoName)
        disableClick ('renato-btn')
    }
    else{
        alert("You can't add more than 5")
    }
    
})





//    messi-btn
document.getElementById('messi-btn').addEventListener('click', function(){
    const messiName = getPlayerName('messi')
    const ol = document.getElementById('selected-player')
    const numberOfChild = ol.childElementCount
    if(numberOfChild<5){
        const li = document.createElement('li')
        li.setAttribute("id", "selected-player5");
        ol.appendChild(li) 
        setValue('selected-player5', messiName)
        disableClick ('messi-btn')
    }
    else{
        alert("You can't add more than 5")
    }
   
   })


//calculate function
function getInputValue(inputId){
    const inputField = document.getElementById(inputId)
    const inputFieldValue = parseInt(inputField.value)
    inputField.value = ''
    return inputFieldValue;
}




// calculate
document.getElementById('calculate-btn').addEventListener('click' ,function(){
  const perPlayer = getInputValue('per-player')
  const totalPlayer = document.getElementById('selected-player')
  const total =  totalPlayer.childElementCount
  const playerExpense = perPlayer*total
  setValue('expense', playerExpense )

})

// calculate total
document.getElementById('total-btn').addEventListener('click' ,function(){
    const playerExpense = getPlayerName('expense')
    const managerExpense = getInputValue('manager')
    const coaachExpense = getInputValue('coach')
    const totalExpense = parseInt(playerExpense) + managerExpense + coaachExpense
    setValue('total', totalExpense)

})



