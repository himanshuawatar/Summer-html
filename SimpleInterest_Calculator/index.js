function calculation()
{
    let amount= parseFloat(document.getElementById('amount').value)
    let rate=parseFloat(document.getElementById('rate').value)
    let time=parseFloat(document.getElementById('time').value)

    let si=parseFloat(amount*rate*time)/100;
    
    document.getElementById('result').innerText=si
    
}






