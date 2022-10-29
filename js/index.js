// ________________screen loading_____________________________
$(document).ready(function (){
    $('#loading .spinner').fadeOut(1000 , function (){
        $('#loading').fadeOut(1000 , function(){
            $('#loading').remove();
            $('body').css('overflow' , 'auto');
        })
    })
})

// ______________________________siderBar_____________________

let openNav = document.getElementById('openNav');

let boxWidth = $('.box').outerWidth();
$('#siderbar').animate({left:`-${boxWidth}`} , 500);

$('.icon2').click(function(){
    let boxWidth = $('.box').outerWidth();

    if(  $('#siderbar').css('left') == '0px'){
      $('#siderbar').animate({left:`-${boxWidth}`} , 500);
      openNav.innerHTML='☰';

      // $("#liContact").fadeOut(10,function(){
      //   $("#liIngredients").fadeOut(10,function(){
      //       $("#liArea").fadeOut(10,function(){
      //           $("#liCategories").fadeOut(10,function(){
      //               $("#liSearch").fadeOut(10)
      //           })
      //       })
      //   })
      // })

    $("#liSearch").css('top' , '200px')
    $("#liSearch").css('opacity' , '0')
    // $("#liCategories").css('transition' , '1s')

    $("#liCategories").css('top' , '200px')
    $("#liCategories").css('opacity' , '0')
    // $("#liCategories").css('transition' , '1s')


    $("#liArea").css('top' , '200px')
    $("#liArea").css('opacity' , '0')
    // $("#liArea").css('transition' , '1s')
    
    $("#liIngredients").css('top' , '200px')
    $("#liIngredients").css('opacity' , '0')
    // $("#liIngredients").css('transition' , '1s')


    $("#liContact").css('top' , '200px')
    $("#liContact").css('opacity' , '0')
    // $("#liContact").css('transition' , '1s')


    }

    else{
      $('#siderbar').animate({left:`0px`} , 500);
      openNav.innerHTML='x'

    //   $("#liContact").fadeIn(1000,function(){
    //     $("#liIngredients").fadeIn(1000,function(){
    //         $("#liArea").fadeIn(1000,function(){
    //             $("#liCategories").fadeIn(1000,function(){
    //                 $("#liSearch").fadeIn(1000)
    //             })
    //         })
    //     })
    // })

    $("#liSearch").css('top' , '0px')
    $("#liSearch").css('opacity' , '1')

    $("#liCategories").css('top' , '0px')
    $("#liCategories").css('opacity' , '1')

    $("#liArea").css('top' , '0px')
    $("#liArea").css('opacity' , '1')

    $("#liIngredients").css('top' , '0px')
    $("#liIngredients").css('opacity' , '1')

    $("#liContact").css('top' , '0px')
    $("#liContact").css('opacity' , '1')

    }
})

// ____________________start home_________________________
// function getalllmeals() { 
var allItems = [];
async function getMeal(){
  var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=garlic`)
  var finalResult = await apiResponse.json();
  allItems=finalResult ;
  displayMael();
  // console.log(allItems);
}
getMeal();

function displayMael(){
  let cartona = ``;

  for( let i=0 ; i < allItems.meals.length-56; i++){

    cartona += ` <div class="col-lg-3 col-md-6  py-3"  onclick="oncli()">
      <div class="work-item">
      <img src="${allItems.meals[i].strMealThumb}" alt="">
      <div class="work-layer d-flex align-items-center justify-content-center">
          <div class="layer-work">
            <h3>${ allItems.meals[i].strMeal}</h3>
          </div>
      </div> 
  </div>
</div>
`
  }
document.getElementById('homeMeal').innerHTML = cartona;
// _______________________<<test..مهم لل>>_____
// console.log(allItems.meals[0].strMealThumb);
//______________________________________________
}
// }
// getalllmeals()
// ____________________Categories___________________________________________________

var allCategories = [];
async function getCategories(){
  var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  var finalResult = await apiResponse.json();
  allCategories=finalResult ;
  displayCategories()
}
getCategories();

function displayCategories(){
  let cartona = ``;

  for(let n=0 ; n < allCategories.categories.length; n++){

    cartona += `<div class="col-lg-3 col-md-6 py-3" onclick="getalllmeals()">
      <div class="work-item">
      <img src="${allCategories.categories[n].strCategoryThumb}" alt="">
      <div class="work-layer d-flex align-items-center justify-content-center">
          <div class="layer-work">
            <h3 class='text-center'>${ allCategories.categories[n].strCategory}</h3>
            <p class="pCategories">${allCategories.categories[n].strCategoryDescription}</p>
          </div>
      </div> 
  </div>
</div>`
  }
document.getElementById('Categories').innerHTML = cartona;
// _______________________<<test..مهم لل>>______________________
// console.log(allCategories.categories[0].strCategoryDescription);
//_______________________________________________________________
}

$('#Categories').css('display', 'none');

$('#liCategories').click(function(){
$('#search').css('display', 'none');
$('#Categories').css('display', 'flex');
$('#homeMeal').css('display', 'none');
$('#area').css('display', 'none');
$('#Ingredients').css('display', 'none');
$('#contact').css('display', 'none');
})


// _____________________________Area___________________________________________________
var allArea = [];
async function getArea(){
  var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
  var finalResult = await apiResponse.json();
  allArea=finalResult ;
  displayArea();
}
getArea();

function displayArea(){
  let cartona = ``;

for( let i=0 ; i < allArea.meals.length; i++){

  cartona += `
  <div class="col-lg-3 col-md-6  py-3 contArea" onclick="getalllmeals()">
    <i class="fa-solid fa-city fa-3x " id=""></i>
    <h3>${allArea.meals[i].strArea}</h3>
  </div>`
}
document.getElementById('area').innerHTML = cartona;
// _______________________<<test..مهم لل>>_____
// console.log(allArea.meals[0].strArea);
//______________________________________________
}

$('#area').css('display', 'none');

$('#liArea').click(function(){
$('#search').css('display', 'none');
$('#area').css('display', 'flex');
$('#homeMeal').css('display', 'none');
$('#Categories').css('display', 'none');
$('#Ingredients').css('display', 'none');
$('#contact').css('display', 'none');
})
// //  ____________ mealArea>>
// var mealArea = [];
// async function getmealArea(){
//   var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian`)
//   var finalResult = await apiResponse.json();
//   mealArea=finalResult ;
//   // console.log(mealArea);
//   displaymealArea();
// }
// getmealArea();

// function displaymealArea(){
//   let cartona = ``;

// for( let i=0 ; i < mealArea.meals.length ; i++){

//   cartona += `
//   <div class="col-lg-3 col-md-6 py-3 ">
//       <div class="work-item ">
//       <img src="${mealArea.meals[i].strMealThumb}" alt="">
//       <div class="work-layer d-flex align-items-center justify-content-center">
//           <div class="layer-work">
//             <h3>${ mealArea.meals[i].strMeal}</h3>
//           </div>
//       </div> 
//   </div>
// </div>`
// }
// document.getElementById('mealArea').innerHTML = cartona;
// // _______________________<<test..مهم لل>>_____
// console.log(mealArea);
// //______________________________________________
// }
// $('#mealArea').css('display', 'none');



// $(window).click(function (e) {
//   var nameArea =(e.target).innerHTML;
//   // console.log(nameArea);

//   // $('#mainImage').attr('src' , imgSrc);
// })


// $('.contArea').click(function(){
// // $('#mealArea').css('display', 'flex');
// // $('#homeMeal').css('display', 'none');
// // $('#area').css('display', 'none');
// // $('#Categories').css('display', 'none');
// console.log('jo');


// })


// _______________________ Ingredients _________________________________

var allIngredients = [];

async function getIngredients(){
  var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  var finalResult = await apiResponse.json();
  allIngredients=finalResult ;
  displayIngredients();
  // console.log(allIngredients)
}
getIngredients();

function displayIngredients(){
  let cartona = ``;
  for(let n=0 ; n < allIngredients.meals.length-555; n++){
    cartona += `
    <div  class="col-lg-3 col-md-6 mb-5  py-3 contIngredients" onclick="getalllmeals()">
    <i class="fa-solid fa-bowl-food fa-3x" id=""></i>
    <h3>${allIngredients.meals[n].strIngredient}</h3>
    <p>${allIngredients.meals[n].strDescription}</p>
    </div>`
  }
document.getElementById('Ingredients').innerHTML = cartona;
// _______________________<<test..مهم لل>>______________________
// console.log(allIngredients.meals[0].strDescription);
//_______________________________________________________________
}

$('#Ingredients').css('display', 'none');

$('#liIngredients').click(function(){
$('#search').css('display', 'none');
$('#Ingredients').css('display', 'flex');
$('#homeMeal').css('display', 'none');
$('#area').css('display', 'none');
$('#Categories').css('display', 'none');
$('#contact').css('display', 'none');
})


// ________________________________ search _____________________________________________
var nameSearch = document.getElementById('nameSearch')
var letterSearch = document.getElementById('letterSearch')
var allnameSearch =[]

// nameSearch
nameSearch.addEventListener('keyup' ,function(){
  async function getnameSearch(){
    var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameSearch.value}`)
    var finalResult = await apiResponse.json();
    allnameSearch=finalResult ;
    displayNameSearch();
 }
 getnameSearch();
});

//  letterSearch
letterSearch.addEventListener('keyup' ,function(){
  async function getnameSearch(){
    var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${letterSearch.value}`)
    var finalResult = await apiResponse.json();
    allnameSearch=finalResult ;
    displayNameSearch();
 }
 getnameSearch();
});
// display >> NameSearch & letterSearch
function displayNameSearch(){
  let cartona = ``;
  for( let i=0 ; i < allnameSearch.meals.length; i++){
    cartona +=`<div class="col-lg-3 col-md-6 py-3"  onclick="oncli()">
    <div class="work-item">
    <img src="${allnameSearch.meals[i].strMealThumb}" alt="">
    <div class="work-layer d-flex align-items-center justify-content-center">
        <div class="layer-work">
          <h3 class='text-center'>${allnameSearch.meals[i].strMeal}</h3>
        </div>
    </div> 
    </div>
    </div>`
  }

  document.getElementById('displayNameSearch').innerHTML = cartona;
}

$('#search').css('display', 'none');

$('#liSearch').click(function(){
$('#search').css('display', 'block');
$('#homeMeal').css('display', 'none');
$('#area').css('display', 'none');
$('#Categories').css('display', 'none');
$('#Ingredients').css('display', 'none');
$('#details').css('display', 'none');
$('#contact').css('display', 'none');
})


// __________ details ______________________
var allDetails = [];

async function getDetails(){
  var apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
  var finalResult = await apiResponse.json();
  allDetails=finalResult ;
  displayDetails();
  // console.log(allDetails)
}
getDetails();

function displayDetails(){
  let cartona = ``;
  for(let n=0 ; n < allDetails.meals.length; n++){
    cartona += `
    <div class="part1">
    <img src="${allDetails.meals[0].strMealThumb}" alt="">
    <h2 class="text-center">${allDetails.meals[n].strMeal}</h2>
    </div>
 <div class="part2">
    <h4>Instructions</h4>
    <p>${allDetails.meals[n].strInstructions}</p>
    <h4>Area:<span>${allDetails.meals[n].strArea}</span></h4>
    <h4>Category:<span>${allDetails.meals[n].strCategory}</span></h6>
    <h4>Recipes :</h4>
    <div class="Recipes d-flex flex-wrap">
        <h5>${allDetails.meals[n].strIngredient1}</h5>
        <h5>${allDetails.meals[n].strIngredient2}</h5>
        <h5>${allDetails.meals[n].strIngredient3}</h5>
        <h5>${allDetails.meals[n].strIngredient4}</h5>
        <h5>${allDetails.meals[n].strIngredient5}</h5>
        <h5>${allDetails.meals[n].strIngredient6}</h5>
        <h5>${allDetails.meals[n].strIngredient7}</h5>
        <h5>${allDetails.meals[n].strIngredient8}</h5>
        <h5>${allDetails.meals[n].strIngredient9}</h5>
        <h5>${allDetails.meals[n].strIngredient10}</h5>
        <h5>${allDetails.meals[n].strIngredient11}</h5>
        <h5>${allDetails.meals[n].strIngredient12}</h5>
    </div>

    <h4 class="mt-4"> Tags :</h4>
    <div class="tags d-flex flex-wrap">
      <h5>${allDetails.meals[n].strTags}</h5>
    </div> 
    <div class="links">
     <a class="btnSource btn btn-info" href="${allDetails.meals[n].strSource}">Source</a>
     <a class="btnYoutube btn btn-danger" href="${allDetails.meals[n].strYoutube}">Youtube</a>
    </div> 
 </div>`
}
document.getElementById('details').innerHTML = cartona;
// _______________________<<test..مهم لل>>_____________________
console.log(allDetails.meals[0].strSource);
//______________________________________________________________
}




// ___________________________contact___________________________

let nameInput=document.getElementById("nameInput")
let emailInput=document.getElementById("emailInput")
let phoneInput=document.getElementById("phoneInput")
let ageInput=document.getElementById("ageInput")
let passwordInput=document.getElementById("passwordInput")
let rePasswordInput=document.getElementById("rePasswordInput")
let singInBtn=document.getElementById("singInBtn")
var loginFormation=[];
$("#li5").click( function(){
    $("#demo").addClass("d-none")
    $("#logIn").removeClass("d-none")
    
   
    
    singUp()
})

var nameRegex=/^[A-Za-z]{3,}$/
function isNameEnable(){
    if(nameRegex.test(nameInput.value)){
        $("#error").addClass("opacity-0")
        
        return true;
    }
    else{
        $("#error").addClass("opacity-1")
        document.getElementById("error").innerHTML=`<p class="text-center  text-danger pt-2 pb-2  m-auto mt-1    rounded-1 "> Special Characters and Numbers not allowed</p></p>`
        return false;
        
    }
}
var emailRegex=/^[A-Za-z]{3,10}[0-9]{0,3}\.gamil\.[a-z]{3}$/
function isEmailEnable(){
    if(emailRegex.test(emailInput.value)){
        $("#error1").addClass("opacity-0")
       
        return true;
    }
    else{
        $("#error1").addClass("opacity-1")
        document.getElementById("error1").innerHTML=`<p class="text-center  text-danger pt-2 pb-2  m-auto mt-1    rounded-1 ">Enter valid email. *Ex: xxx@yyy.zzz</p></p>`
        return false;
       
        
    }
}
var phoneRegex=/^(010||012||011||015)[0-9]{8}$/
function isPhoneEnable(){
    if(phoneRegex.test(phoneInput.value)){
        $("#error2").addClass("opacity-0")
       
        return true;
    }
    else{
        $("#error2").addClass("opacity-1")
        document.getElementById("error2").innerHTML=`<p class="text-center  text-danger pt-2 pb-2  m-auto mt-1    rounded-1 ">Enter valid Egyption Number. *Ex: 01012345678</p></p>`
        return false;
       
    }
}
var ageRegex=/^[1-9]{1}[1-9]{1}$/
function isAgeEnable(){
    if(phoneRegex.test(phoneInput.value)){
        $("#error3").addClass("opacity-0")
       return true;
    }
    else{
        $("#error3").addClass("opacity-1")
        document.getElementById("error3").innerHTML=`<p class="text-center  text-danger pt-2 pb-2  m-auto mt-1    rounded-1 ">Enter age betweeb 1-99</p></p>`
        return false;
        
    }
}
var passRegex=/^[a-zA-Z]{5,10}[1-9]{1,5}$/
function isPassEnable(){
    if(passRegex.test(passwordInput.value)){
        $("#error4").addClass("opacity-0")
        return true;
    }
    else{
        $("#error4").addClass("opacity-1")
        document.getElementById("error4").innerHTML=`<p class="text-center  text-danger pt-2 pb-2  m-auto mt-1    rounded-1 ">Enter valid password Minimum five characters, at least  one number:</p></p>`
        return false;  
    }
}
var repassRegex=/^[a-zA-Z]{5,10}[1-9]{1,5}$/
function isRePassEnable(){
    if(repassRegex.test( rePasswordInput.value)){
        $("#error5").addClass("opacity-0")
        return true;
    }
    else{
        $("#error5").addClass("opacity-1")
        document.getElementById("error5").innerHTML=`<p class="text-center  text-danger pt-2 pb-2  m-auto mt-1    rounded-1 ">Enter valid password Minimum five characters, at least  one number:</p></p>`
        return false;
       
        
    }
}



function singUp(){
    if( nameInput.value==nameRegex||emailInput.value==emailRegex||phoneInput.value==phoneRegex||ageInput.value==ageRegex||passwordInput.value==passRegex||rePasswordInput.value==repassRegex&&passwordInput.value==rePasswordInput.value ){
        $("#singInBtn").removeClass("disabled")
        
    }
    else{
        let sing={
            name:nameInput.value,
            email:emailInput.value,
            phone:phoneInput.value,
            age:ageInput.value,
            password:passwordInput.value,
            rePassword:rePasswordInput.value
        }
       
    }
}



$('#contact').css('display', 'none');

$('#liContact').click(function(){
$('#contact').css('display', 'block');
$('#homeMeal').css('display', 'none');
$('#area').css('display', 'none');
$('#Categories').css('display', 'none');
$('#Ingredients').css('display', 'none');
$('#details').css('display', 'none');

})

// ____________________ end contact ____________________


// ______________ay7aga_______________________________________
$('#details').css('display', 'none');

function oncli() { 
$('#details').css('display', 'flex');
$('#search').css('display', 'none'); 
$('#homeMeal').css('display', 'none'); 
$('#area').css('display', 'none');
$('#Categories').css('display', 'none');
$('#Ingredients').css('display', 'none');
$('#contact').css('display', 'none');
 }

function getalllmeals(){ 
$('#homeMeal').css('display', 'flex');
  $('#details').css('display', 'none');
$('#area').css('display', 'none');
$('#Categories').css('display', 'none');
$('#Ingredients').css('display', 'none');
$('#contact').css('display', 'none');
 }
//  ________________________________________________________





// __________________ animate nav ___________________

