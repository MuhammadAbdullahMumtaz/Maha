function alertfun()
{
var email = document.getElementById("inpEmail").value;
alert (" Your email is :  " + email + " . ");
}  
function submitfun()
{
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    alert (" Your email is :  " + email + " .  and Your name is : "+ name + " . Your message is : "+message + " has been send to admins . ");
}
