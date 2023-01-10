var btn = 't';
function c()
{
    var btn1 = document.getElementById('sub_btn')
    ;
    if(btn=='t'){
        btn1.value='SUSCRIBED'
        btn= 'f';
    }
    else{
        btn1.value= "SUSCRIBE NOW!";
        btn= 'f';
    }
}

var form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()
var email = document.getElementById('email').value
console.log(email)

var comment = document.getElementById('comment').value
console.log(comment)
})


