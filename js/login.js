// let submit = document.querySelector('.btn-success');

// submit.addEventListener('click', function(e){
//     e.preventDefault();
//     let email = $("#email").val();
//     let pass1 = $("#pass1").val();

//     localStorage.setItem("myValue",email);

    
//     if(email =='' || pass1 ==''){
//         alert('please fill all fields');
//     }
//     else{
//         $.ajax({
//             url:"/guvi/php/login.php",
//             type:'post',
//             data: {
//                 email:email,
//                 pass1:pass1
//             },
//             async:true,
//             success:function(response){
//                 if(response == 1){
//                    alert("Login successfully...");
//                    window.location.assign("profile.html");
//                 }
//                 else{
//                     alert("Invalid try again");
//                 }
//             }
//         });
//         // alert('Registered successfully...');
//     }
// });