let submit = document.querySelector('.btn-primary');
let error = document.querySelector('.error-message');

submit.addEventListener('click', function(e){
    e.preventDefault();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let phno = $("#phno").val();
    let email = $("#email").val();
    let pass1 = $("#pass1").val();
    let pass2 = $("#pass2").val();

    if(pass1 != pass2){
        alert('password does not match with confirm password');
    }
    else if(firstName =='' || lastName =='' || phno =='' || email =='' || pass1 =='' || pass2 ==''){
        alert('please fill all fields');
    }
    else{
        $.ajax({
            url:"/guvi/php/register.php",
            type:'post',
            data: {
                firstName: firstName,
                lastName:lastName,
                phno:phno,
                email:email,
                pass1:pass1
            },
            async:true,
            success:function(response){
                if(response == 1){
                   alert("registered successfully...");
                   document.getElementById("form").reset();
                }
                else{
                    alert("Email already exists...please try another email");
                }
            }
        });
        // alert('Registered successfully...');
    }
});

