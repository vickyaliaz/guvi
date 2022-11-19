let submit = document.querySelector('.btn-primary');

submit.addEventListener('click', function(e){
    e.preventDefault();
    let location = $("#location").val();
    let dob = $("#dob").val();
    let gender = $("#gender").val();
    let age = $("#age").val();
    
    if(location =='' || dob =='' || gender =='' || age ==''){
        alert('please fill all fields');
    }
    else{
        $.ajax({
            url:"/guvi/php/profile.php",
            type:'post',
            data: {
                location: location,
                dob:dob,
                gender:gender,
                age:age
            },
            async:true,
            success:function(response){
                if(response == 1){
                   alert("uploaded successfully in mongoDb database...");
                }
                else{
                    alert("Something went wrong..");
                }
            }
        });
        // alert('Registered successfully...');
    }
});

