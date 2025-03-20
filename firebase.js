console.log("firebase")


// JSC.Chart('chartDiv', {
  
//   type: 'vertical column',
//   series: [
//      {
//         points: [
//            {x: 'Product1', y: 50},
//            {x: 'Product2', y: 42},
//            {x: 'Product3', y: 50},
//            {x: 'Product4', y: 42},
//            {x: 'Product5', y: 50},
         
//         ]
//      }
//   ]
// });
var firebaseConfig = {
	apiKey: "AIzaSyA1Eu8xyx7OAQ8y4ng-Fu6phrCWJWHiYlc",
	authDomain: "trial-b04e6.firebaseapp.com",
	databaseURL: "https://trial-b04e6-default-rtdb.firebaseio.com",
	projectId: "trial-b04e6",
	storageBucket: "trial-b04e6.appspot.com",
	messagingSenderId: "870551973559",
	appId: "1:870551973559:web:151d8cb3f567a01109e732",
	measurementId: "G-HM63X09XYF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
	  console.log("save")
    var email = document.getElementById('form3Examplev2').value
    var password = document.getElementById('form3Examplev3').value
    var username = document.getElementById('form3Examplev4').value
    var say_something = document.getElementById('form3Examplev5').value
    var favourite_food = document.getElementById('form3Examplev4').value
   // form3Examplea2')
   var email1 = document.getElementById('h').value
   var password1 = document.getElementById('h1').value
   var username1 = document.getElementById('h2').value
   var say_something1 = document.getElementById('h3').value
   var favourite_food1 = document.getElementById('h4').value
   var username2 = document.getElementById('h5').value
   var say_something2 = document.getElementById('h6').value
   var favourite_food2 = document.getElementById('h7').value
   var favourite_food3 = document.getElementById('h8').value

    console.log(email)
    database.ref('users/arrival' + username).set({
      customer_name : email,
      customer_ID : password,
      customer_number : username,
      package_ID : say_something,
      package_number : favourite_food,
      house_number : email1,
      street_name : password1,
      area : username1,
      landmark : say_something1,
      city : favourite_food1,
      state : username2,
      country : say_something2,
      pincode : favourite_food2,
      product_size : favourite_food3,
    })
  
    alert('Saved')
  }
  
  function get() {
    console.log("okok")
    //var username = document.getElementById('username').value
    
    var user_ref = database.ref('dataset' )
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
      
      //alert(data.email)
      document.getElementById("p1").innerHTML = "Product 1 :"+data.email;
      document.getElementById("p2").innerHTML = "Product 2 :"+data.password;
      document.getElementById("p3").innerHTML = "Product 3 :"+data.username;
      document.getElementById("p4").innerHTML = "Product 4 :"+data.say_something;
      document.getElementById("p5").innerHTML = "Product 5 :"+data.favourite_food;
      document.getElementById("p6").innerHTML = data.email;
      document.getElementById("p7").innerHTML = data.password;
      document.getElementById("p8").innerHTML = data.username;
      document.getElementById("p9").innerHTML = data.say_something;
      document.getElementById("p10").innerHTML = data.favourite_food;      
      document.getElementById("p11").innerHTML = data.email;
      document.getElementById("p12").innerHTML = data.password;
      document.getElementById("p13").innerHTML = data.username;
      document.getElementById("p14").innerHTML = data.say_something;
      document.getElementById("p15").innerHTML =data.favourite_food;   
      console.log(data.favourite_food);
  
    })
    alert(data.email)

    
  }

  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }
