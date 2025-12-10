export default async function validate() {
  let credentials = {
    username: "Admin",
    password: "1234",
  };
  let userdata = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    rememberme:document.getElementById("remember").checked
  };
  //   if (
  //     credentials.username == userdata.username &&
  //     credentials.passsword == userdata.passsword
  //   ) {
  //     alert("login sucessfully");
  //   } else {
  //     alert("re-check the credentials");
  //   }
  let userpromise = new Promise(function (resolve, reject) {
    if (
      credentials.username == userdata.username &&
      credentials.password == userdata.password
    ) {
      resolve("login sucessfully");
    } else {
      reject("login failed");
    }
  });
//   userpromise
//     .then(function (sucessmessage) {
//       alert(sucessmessage);
//     })
//     .catch(function (failmessage) {
//       alert(failmessage);
//     });
//
 
try{
    let successmessage = await userpromise;
    alert(successmessage);
}
catch(failedmessage){
    alert(failedmessage);
}

if(userdata.rememberme){
    localStorage.setItem('username',userdata.username);
    localStorage.setItem('password',userdata.password);
    console.log("password stored locally");
}
else{
    sessionStorage.setItem('username',userdata.username);
    sessionStorage.setItem('password',userdata.password);
    console.log("password stored in session");
}
}
