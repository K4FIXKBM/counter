function Increase()
{
    var number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number+1
}
function Decrease()
{
    var number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number-1
}
function Neutral(){
    
    document.getElementById('number').innerHTML = 0
}