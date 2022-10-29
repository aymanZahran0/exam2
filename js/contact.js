

// // ___________________________contact___________________________
// $(".nav-item a").click(async (e) => {
//   let listBy = e.target.getAttribute("data-list")

//   document.getElementById("search-container").innerHTML = ""
//   row.innerHTML = ""
//   $("html, body").animate({
//       scrollTop: 0
//   }, 200)

//   if (listBy == "contact") {

//       row.innerHTML = `
//       <section id="contact" class="container myM w-75 mx-auto mb-5 ">
//   <div class="p-2">
//     <h2 class="text-light mb-5">ContacUs...</h2>
//     <div class="row">
//       <div class="col-md-6">
//         <div class="form-group">
//           <input class="form-control shadow " onkeyup="validation()" id="name"
//             placeholder="Enter Your Name">
//           <div class="alert mt-1 alert-danger d-none" id="namealert" role="alert">
//             Special Characters and Numbers not allowed
//           </div>
//         </div>
//       </div>
//       <div class="col-md-6">
//         <div class="form-group">
//           <input onkeyup="validation()" class="form-control" id="email" placeholder="Enter Email">
//           <div class="alert mt-1 alert-danger d-none" id="emailalert" role="alert">
//             Enter valid email. *Ex: xxx@yyy.zzz
//           </div>
//         </div>
//       </div>
//       <div class="col-md-6">
//         <div class="form-group">
//           <input onkeyup="validation()" class="form-control" id="phone" placeholder="Enter phone">
//           <div class="alert mt-1 alert-danger  d-none" id="phonealert" role="alert">
//             Enter valid Phone Number
//           </div>
//         </div>
//       </div>
//       <div class="col-md-6">
//         <div class="form-group">
//           <input onkeyup="validation()" class="form-control" id="age" placeholder="Enter Age">
//           <div class="alert mt-1 alert-danger  d-none" id="agealert" role="alert">
//             Enter valid Age
//           </div>
//         </div>
//       </div>
//       <div class="col-md-6">
//         <div class="form-group">
//           <input onkeyup="validation()" class="form-control" type="password" id="password"
//             placeholder="Enter Password">
//           <div class="alert mt-1 alert-danger  d-none" id="passwordalert" role="alert">
//             Enter valid password *Minimum eight characters, at least one letter and one number:*
//           </div>
//         </div>
//       </div>
//       <div class="col-md-6">
//         <div class="form-group">
//           <input onkeyup="validation()" class="form-control" type="password" id="rePassword"
//             placeholder="Enter RePassword">
//           <div class="alert mt-1 alert-danger  d-none" id="repasswordalert" role="alert">
//             Enter valid Repassword
//           </div>
//         </div>
//       </div>

//     </div>

//     <button type="submit" disabled id="submitBtn" class="btn btn-outline-danger">Submit</button>
//     </div>

//     </section>`
//           userName = document.getElementById("name"),
//           userEmail = document.getElementById("email"),
//           userPhone = document.getElementById("phone"),
//           userAge = document.getElementById("age"),
//           userPassword = document.getElementById("password"),
//           userRePassword = document.getElementById("rePassword"),
//           userNameAlert = document.getElementById("namealert"),
//           userEmailAlert = document.getElementById("emailalert"),
//           userPhoneAlert = document.getElementById("phonealert"),
//           userAgeAlert = document.getElementById("agealert"),
//           userpasswordAlert = document.getElementById("passwordalert"),
//           userRepasswordAlert = document.getElementById("repasswordalert");

//       userName.addEventListener("focus", () => {
//           nameToached = true
//       })
//       userEmail.addEventListener("focus", () => {
//           emailToached = true
//       })
//       userPhone.addEventListener("focus", () => {
//           phoneToached = true
//       })
//       userAge.addEventListener("focus", () => {
//           ageToached = true
//       })
//       userPassword.addEventListener("focus", () => {
//           passwordToached = true
//       })
//       userRePassword.addEventListener("focus", () => {
//           repasswordToached = true
//       })
//   }
//   if (listBy == "search") {
//       row.innerHTML = ""
//       document.getElementById("search-container").innerHTML = `
//       <div class="row">
//       <div class="col-md-6"><input id="searchInput" class="form-control mb-2 " placeholder="Search By Name">
//       </div>
//       <div class="col-md-6">
//         <input class="form-control " type="text" maxlength="1" id="letter"
//           placeholder="search By First Letter...">
//       </div>

//     </div>`

//       $("#searchInput").keyup((e) => {
//           search(e.target.value)
//       })
//       $("#letter").keyup((e) => {
//           getByLetter(e.target.value)
//       })

//       $('#letter').on("input", function () {
//           if (this.value.length > 1)
//               this.value = this.value.slice(0, 1);
//       });
//   }


//   let click_event = new CustomEvent('click');
//   document.querySelector('.strip-toggel-menu').dispatchEvent(click_event);

//   let x;

//   if (listBy == "categories") {
//       $(".loading-container").fadeIn(100)

//       x = await getCategories(listBy + ".php")
//       arr = x.categories.splice(0, 20);
//       displayCategories()
//       $(".loading-container").fadeOut(500)
//   } else if (listBy == "a") {
//       $(".loading-container").fadeIn(100)

//       x = await getCategories("list.php?a=list")
//       arr = x.meals.splice(0, 20);
//       displayArea()
//       $(".loading-container").fadeOut(500)
//   } else if (listBy == "i") {
//       $(".loading-container").fadeIn(100)

//       x = await getCategories("list.php?i=list")
//       arr = x.meals.splice(0, 20);
//       displayIngredients()
//       $(".loading-container").fadeOut(500)
//   }





// })

// $(document).scroll((e) => {

//   if ($(document).scrollTop()) {
//       $(".mmm").css("backgroundColor", "#0D0D0D")
//   }
// })



// let nameToached = false,
//     emailToached = false,
//     phoneToached = false,
//     ageToached = false,
//     passwordToached = false,
//     repasswordToached = false;

// function validation() {

//     if (nameToached) {
//         if (userNameValid()) {
//             userName.classList.remove("is-invalid")
//             userName.classList.add("is-valid")
//             userNameAlert.classList.replace("d-block", "d-none")
//             userNameAlert.classList.replace("d-block", "d-none")

//         } else {
//             userName.classList.replace("is-valid", "is-invalid")
//             userNameAlert.classList.replace("d-none", "d-block")
//         }
//     }

//     if (emailToached) {
//         if (userEmailValid()) {
//             userEmail.classList.remove("is-invalid")
//             userEmail.classList.add("is-valid")
//             userEmailAlert.classList.replace("d-block", "d-none")
//             userEmailAlert.classList.replace("d-block", "d-none")
//         } else {
//             userEmail.classList.replace("is-valid", "is-invalid")
//             userEmailAlert.classList.replace("d-none", "d-block")
//         }
//     }

//     if (phoneToached) {
//         if (userPhoneValid()) {
//             userPhone.classList.remove("is-invalid")
//             userPhone.classList.add("is-valid")
//             userPhoneAlert.classList.replace("d-block", "d-none")
//             userPhoneAlert.classList.replace("d-block", "d-none")
//         } else {
//             userPhone.classList.replace("is-valid", "is-invalid")
//             userPhoneAlert.classList.replace("d-none", "d-block")
//         }
//     }

//     if (ageToached) {
//         if (userAgeValid()) {
//             userAge.classList.remove("is-invalid")
//             userAge.classList.add("is-valid")
//             userAgeAlert.classList.replace("d-block", "d-none")
//             userAgeAlert.classList.replace("d-block", "d-none")
//         } else {
//             userAge.classList.replace("is-valid", "is-invalid")
//             userAgeAlert.classList.replace("d-none", "d-block")
//         }
//     }

//     if (passwordToached) {
//         if (userPasswordValid()) {
//             userPassword.classList.remove("is-invalid")
//             userPassword.classList.add("is-valid")
//             userpasswordAlert.classList.replace("d-block", "d-none")
//             userpasswordAlert.classList.replace("d-block", "d-none")
//         } else {
//             userPassword.classList.replace("is-valid", "is-invalid")
//             userpasswordAlert.classList.replace("d-none", "d-block")
//         }
//     }

//     if (repasswordToached) {
//         if (userRePasswordValid()) {
//             userRePassword.classList.remove("is-invalid")
//             userRePassword.classList.add("is-valid")
//             userRepasswordAlert.classList.replace("d-block", "d-none")
//             userRepasswordAlert.classList.replace("d-block", "d-none")
//         } else {
//             userRePassword.classList.replace("is-valid", "is-invalid")
//             userRepasswordAlert.classList.replace("d-none", "d-block")
//         }
//     }

//     if(userNameValid() && userEmailValid() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid()){
//         document.getElementById("submitBtn").removeAttribute("disabled")
//     }else{
//         document.getElementById("submitBtn").setAttribute("disabled","true")
//     }

// }

// function userNameValid() {
//     return /^[a-zA-Z ]+$/.test(userName.value)
// }

// function userEmailValid() {
//     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)
// }

// function userPhoneValid() {
//     return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)
// }

// function userAgeValid() {
//     return /^[1-9][0-9]?$|^100$/.test(userAge.value)
// }

// function userPasswordValid() {
//     return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)
// }

// function userRePasswordValid() {
//     return userPassword.value == userRePassword.value
// }