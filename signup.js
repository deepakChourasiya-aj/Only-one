let formdata = document.querySelector('#form');

// if(formdata.email.value==''){
//     alert('Please fill the required details')
// }else if(formdata.password.value==''){
//     alert('Please fill the required details')
// }

let lsdata = JSON.parse(localStorage.getItem('signupdata'))||[];
formdata.addEventListener('submit',function(){
    if(formdata.email.value==''){
        alert('Please fill the required details')
    }else if(formdata.email.value!='' && formdata.password.value=='' ){
        alert('Please fill the password details')
        // return;
    }   
     if(formdata.email.value!='' && formdata.password.value!=''){
         alert('You have Sign in Successfully')
     }
    let obj={
        email:formdata.email.value,
        password:formdata.password.value,
    }
    lsdata.push(obj);
    localStorage.setItem('signupdata',JSON.stringify(lsdata));

})

console.log(lsdata);

// --------------------------------------------------------------------------------------data saved--------------------------

// let formdata = document.querySelector('#form');

// if(formdata.email.value==''){
//     alert('Please fill the required details')
// }else if(formdata.password.value==''){
//     alert('Please fill the required details')
// }

// let lsdata = JSON.parse(localStorage.getItem('signupdata'))||[];
// formdata.addEventListener('submit',function(){
//     if(formdata.email.value==''){
//         alert('Please fill the required details')
//     }else if(formdata.email.value!='' && formdata.password.value=='' ){
//         alert('Please fill the password details')
//         return;
//     }
//     // else if(formdata.email.value!='' && formdata.password.value!=''){
//     //     alert('You have Sign in Successfully')
//     // }
//     else{
//      if(formdata.email.value!='' && formdata.password.value!=''){
//          alert('You have Sign in Successfully')
//      }
//     let obj={
//         email:formdata.email.value,
//         password:formdata.password.value,
//     }
//     lsdata.push(obj);
//     localStorage.setItem('signupdata',JSON.stringify(lsdata));
// }
// })

// console.log(lsdata);