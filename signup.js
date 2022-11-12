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
         alert('You have Sign in Successfully',gotohome())
        //  gotohome()
     }
    let obj={
        email:formdata.email.value,
        password:formdata.password.value,
    }
    lsdata.push(obj);
    localStorage.setItem('signupdata',JSON.stringify(lsdata));

})

console.log(lsdata);

function gotohome(){
    window.location.href = 'index.html';
}
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



// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e169a233b2mshbfa80ca1ef4f5d2p14dbabjsn5ccc389086d4',
// 		'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
// 	}
// };

// fetch('https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));