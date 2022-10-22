const firebaseConfig = {
    apiKey: "AIzaSyAN6LC189_TXpFtJGcXlETbagQxCR8SCIE",
    authDomain: "hackathon-waste.firebaseapp.com",
    databaseURL: "https://hackathon-waste-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hackathon-waste",
    storageBucket: "hackathon-waste.appspot.com",
    messagingSenderId: "728997122624",
    appId: "1:728997122624:web:dd3024a2f71d942162c5a5"
  };

firebase.initializeApp(firebaseConfig);
const wasteDetailsDB = firebase.database().ref("input-form");

document.getElementById("input").addEventListener("submit", submitForm);

function getValues()
{
  var uname= getElementVal("username")
  console.log("uname")
}

function submitForm(e) {
  e.preventDefault();

  var weight = getElementVal("weight");
  var nature = getElementVal("nature");
  var landmark = getElementVal("landmark");
  var types = getElementVal("types");
  console.log(weight,nature,landmark,types);
  saveMessages(weight,nature,landmark,types);

  //   reset the form
  document.getElementById("input").reset();
}

const saveMessages = (weight,nature,landmark,types) => {
  var newInputForm = wasteDetailsDB.push();

  newInputForm.set({
    weight: weight,
    nature: nature,
    landmark: landmark,
    types: types,
  });
};

var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});

const getElementVal = (id) => {
  return document.getElementById(id).value;
};