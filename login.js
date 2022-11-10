let formdata = document.querySelector("#form");

let lsdata = JSON.parse(localStorage.getItem("signupdata"));


formdata.addEventListener('submit',function(){
    let entered_email = formdata.email.value;
    let enter_password = formdata.password.value;
    
    for(let i=0;i<lsdata.length;i++){
        if(entered_email== lsdata[i].email && enter_password==lsdata[i].password){
           alert('You have successfully login');
           break;
        }
        else if(entered_email==lsdata[i].email){
            if(enter_password != lsdata[i].password){
               alert('wrong password');
               break;
            }
        }
        else if(entered_email=='' && enter_password==''){
            alert('please fill the required details');
            break;
        }
        else if(enter_password==''){
            alert('Please fill the password');
            break;
        }
        else if(entered_email==''){
            alert('Please fill the password');
            break;
        }
    }
})


// -----------------------------------------------------------------------------------------------------
// formdata.addEventListener("submit", function () {
//     let entered_email = formdata.email.value;
//     let enter_password = formdata.password.value;
  
//     for (let i = 0; i < lsdata.length; i++) {
//       if (entered_email == lsdata[i].email) {
//       //   console.log(lsdata[i].email);
//         if (enter_password == lsdata[i].password) {
//           alert("You have log in successfully");
//           break;
//         } else {
//           alert("wrong Password");
//           break;
//         }
//       } else if (entered_email == lsdata[i].email) {
//         if (enter_password != lsdata[i].password) {
//           alert("Incorrect Password");
//           // console.log(lsdata[i].password,lsdata[i].email)
//           break
//         }
//       } else if (entered_email == "" && enter_password == "") {
//         alert("Please fill the requred details");
//       //   console.log(lsdata[i].password,lsdata[i].email)
//         break;
//       } else if (entered_email !== lsdata[i].email && enter_password !==lsdata[i].password) {
        
//           alert("You are New Please Sign in");
//           // console.log(enter_password,entered_email)
//           break;
        
//       }
//     }
//   });
  