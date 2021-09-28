function clickEventHandler()
{
    var birthDate = document.getElementById("birthdateId").value;
    var luckyNumber = parseInt(document.getElementById("luckyNumberId").value);
    if(birthDate==undefined || birthDate==null || birthDate=="")
    {
        alert("Please enter birth date ");return false;
    }
    if(isNaN(luckyNumber))
    {
        alert("Please enter lucky number ");return false;
    }
    birthDate = birthDate.replaceAll('-','');
    var sum = 0;
    for(var i = 0; i < birthDate.length; i++)
    {
        sum += parseInt(birthDate[i]);
    }
    sum = parseInt(sum);
    if(sum % luckyNumber == 0)
    {
        var Message="You have a lucky birthday";
    }
    else
    {
        var Message="You don't have a lucky birthday";
    }
    document.getElementById("resultId").innerHTML=Message;
}