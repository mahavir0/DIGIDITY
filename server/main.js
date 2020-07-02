var express = require("express");
var firebase = require("firebase");
var admin = require("firebase-admin");
const serviceAccount = require("./sgh2020-b56ce-firebase-adminsdk-mwrnf-ebb7c66cd7.json");
var firebaseConfig = {
  apiKey: "AIzaSyD6PUvJDA32jUw2JeoLqd39rGau5dPj-18",
  authDomain: "sgh2020-b56ce.firebaseapp.com",
  databaseURL: "https://sgh2020-b56ce.firebaseio.com",
  projectId: "sgh2020-b56ce",
  storageBucket: "sgh2020-b56ce.appspot.com",
  messagingSenderId: "692087981842",
  appId: "1:692087981842:web:42c09081ce6e712a7e55cb",
  measurementId: "G-10X6YVWRZP"
};
var app = express();
app.all("/aadharcard/:fname/:mname/:lname/:aadharno", function(req, res) {
  var flag=0;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var database = firebase.database();
  var ref = database.ref("Data");
   ref
    .orderByChild("aadharno")
    .equalTo(req.params.aadharno)
    .on(
      "child_added",
      function(snapshot) {
         flag=1;
          console.log(snapshot.val());
          var newPostKey = snapshot.key;
          var json = JSON.stringify(snapshot);
          var FinalJson=JSON.parse(json);
          console.log(FinalJson);
          if(FinalJson.firstname == req.params.fname && FinalJson.middlename == req.params.mname && FinalJson.lastname == req.params.lname){
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(true);
              }else{
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(false);
              }
            },
      function(errorObject) {
        flag=1;
        console.log("The read failed: " + errorObject.code);
      }
    );
    setTimeout(function(){
       if(flag == 0){
       res.header("Access-Control-Allow-Origin", req.headers.origin);
       res.send(false);
     }
    },10000);
    
   
});
app.all("/email/:fname/:mname/:lname/:email", function(req, res) {
  console.log("in url");
  var flag=0;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var database = firebase.database();
  var ref = database.ref("Data");
  console.log("after data");
   ref
    .orderByChild("email")
    .equalTo(req.params.email)
    .on(
      "child_added",
      function(snapshot) {
         flag=1;
          console.log(snapshot.val());
          var newPostKey = snapshot.key;
          var json = JSON.stringify(snapshot);
          var FinalJson=JSON.parse(json);
          console.log(FinalJson);
          if(FinalJson.firstname == req.params.fname && FinalJson.middlename == req.params.mname && FinalJson.lastname == req.params.lname){
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(true);
              }else{
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(false);
              }
            },
      function(errorObject) {
        flag=1;
        console.log("The read failed: " + errorObject.code);
      }
    );
    setTimeout(function(){
       if(flag == 0){
       res.header("Access-Control-Allow-Origin", req.headers.origin);
       res.send(false);
     }
    },4000);
    
   
});
app.all("/voterid/:fname/:mname/:lname/:voterid", function(req, res) {
  console.log("in url");
  var flag=0;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var database = firebase.database();
  var ref = database.ref("Data");
  console.log("after data");
   ref
    .orderByChild("voterid")
    .equalTo(req.params.voterid)
    .on(
      "child_added",
      function(snapshot) {
         flag=1;
          console.log(snapshot.val());
          var newPostKey = snapshot.key;
          var json = JSON.stringify(snapshot);
          var FinalJson=JSON.parse(json);
          console.log(FinalJson);
          if(FinalJson.firstname == req.params.fname && FinalJson.middlename == req.params.mname && FinalJson.lastname == req.params.lname){
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(true);
              }else{
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(false);
              }
            },
      function(errorObject) {
        flag=1;
        console.log("The read failed: " + errorObject.code);
      }
    );
    setTimeout(function(){
       if(flag == 0){
       res.header("Access-Control-Allow-Origin", req.headers.origin);
       res.send(false);
     }
    },4000);
    
   
});
app.all("/birthcertificate/:fname/:mname/:lname/:birthcertificate", function(req, res) {
  console.log("in url");
  var flag=0;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var database = firebase.database();
  var ref = database.ref("Data");
  console.log("after data");
   ref
    .orderByChild("birthcertificate")
    .equalTo(req.params.birthcertificate)
    .on(
      "child_added",
      function(snapshot) {
         flag=1;
          console.log(snapshot.val());
          var newPostKey = snapshot.key;
          var json = JSON.stringify(snapshot);
          var FinalJson=JSON.parse(json);
          console.log(FinalJson);
          if(FinalJson.firstname == req.params.fname && FinalJson.middlename == req.params.mname && FinalJson.lastname == req.params.lname){
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(true);
              }else{
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(false);
              }
            },
      function(errorObject) {
        flag=1;
        console.log("The read failed: " + errorObject.code);
      }
    );
    setTimeout(function(){
       if(flag == 0){
       res.header("Access-Control-Allow-Origin", req.headers.origin);
       res.send(false);
     }
    },4000);
    
   
});
app.all("/leavingcertificate/:fname/:mname/:lname/:schooling", function(req, res) {
  console.log("in url");
  var flag=0;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var database = firebase.database();
  var ref = database.ref("Data");
  console.log("after data");
   ref
    .orderByChild("schooling")
    .equalTo(req.params.schooling)
    .on(
      "child_added",
      function(snapshot) {
         flag=1;
          console.log(snapshot.val());
          var newPostKey = snapshot.key;
          var json = JSON.stringify(snapshot);
          var FinalJson=JSON.parse(json);
          console.log(FinalJson);
          if(FinalJson.firstname == req.params.fname && FinalJson.middlename == req.params.mname && FinalJson.lastname == req.params.lname){
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(true);
              }else{
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(false);
              }
            },
      function(errorObject) {
        flag=1;
        console.log("The read failed: " + errorObject.code);
      }
    );
    setTimeout(function(){
       if(flag == 0){
       res.header("Access-Control-Allow-Origin", req.headers.origin);
       res.send(false);
     }
    },4000);
    
   
});
app.all("/degreecertificate/:fname/:mname/:lname/:degreecertificate", function(req, res) {
  console.log("in url");
  var flag=0;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var database = firebase.database();
  var ref = database.ref("Data");
  console.log("after data");
   ref
    .orderByChild("degreecertificate")
    .equalTo(req.params.degreecertificate)
    .on(
      "child_added",
      function(snapshot) {
         flag=1;
          console.log(snapshot.val());
          var newPostKey = snapshot.key;
          var json = JSON.stringify(snapshot);
          var FinalJson=JSON.parse(json);
          console.log(FinalJson);
          if(FinalJson.firstname == req.params.fname && FinalJson.middlename == req.params.mname && FinalJson.lastname == req.params.lname){
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(true);
              }else{
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(false);
              }
            },
      function(errorObject) {
        flag=1;
        console.log("The read failed: " + errorObject.code);
      }
    );
    setTimeout(function(){
       if(flag == 0){
       res.header("Access-Control-Allow-Origin", req.headers.origin);
       res.send(false);
     }
    },4000);
    
   
});
app.all("/castecertificate/:fname/:mname/:lname/:castecertificate", function(req, res) {
  console.log("in url");
  var flag=0;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var database = firebase.database();
  var ref = database.ref("Data");
  console.log("after data");
   ref
    .orderByChild("castecertificate")
    .equalTo(req.params.castecertificate)
    .on(
      "child_added",
      function(snapshot) {
         flag=1;
          console.log(snapshot.val());
          var newPostKey = snapshot.key;
          var json = JSON.stringify(snapshot);
          var FinalJson=JSON.parse(json);
          console.log(FinalJson);
          if(FinalJson.firstname == req.params.fname && FinalJson.middlename == req.params.mname && FinalJson.lastname == req.params.lname){
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(true);
              }else{
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(false);
              }
            },
      function(errorObject) {
        flag=1;
        console.log("The read failed: " + errorObject.code);
      }
    );
    setTimeout(function(){
       if(flag == 0){
       res.header("Access-Control-Allow-Origin", req.headers.origin);
       res.send(false);
     }
    },4000);
    
   
});
app.all("/incomeproofcertificate/:fname/:mname/:lname/:incomeproof", function(req, res) {
  console.log("in url");
  var flag=0;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var database = firebase.database();
  var ref = database.ref("Data");
  console.log("after data");
   ref
    .orderByChild("incomeproof")
    .equalTo(req.params.incomeproof)
    .on(
      "child_added",
      function(snapshot) {
         flag=1;
          console.log(snapshot.val());
          var newPostKey = snapshot.key;
          var json = JSON.stringify(snapshot);
          var FinalJson=JSON.parse(json);
          console.log(FinalJson);
          if(FinalJson.firstname == req.params.fname && FinalJson.middlename == req.params.mname && FinalJson.lastname == req.params.lname){
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(true);
              }else{
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(false);
              }
            },
      function(errorObject) {
        flag=1;
        console.log("The read failed: " + errorObject.code);
      }
    );
    setTimeout(function(){
       if(flag == 0){
       res.header("Access-Control-Allow-Origin", req.headers.origin);
       res.send(false);
     }
    },4000);
    
   
});
app.all("/pannumber/:fname/:mname/:lname/:pannumber", function(req, res) {
  console.log("in url");
  var flag=0;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var database = firebase.database();
  var ref = database.ref("Data");
  console.log("after data");
   ref
    .orderByChild("pannumber")
    .equalTo(req.params.pannumber)
    .on(
      "child_added",
      function(snapshot) {
         flag=1;
          console.log(snapshot.val());
          var newPostKey = snapshot.key;
          var json = JSON.stringify(snapshot);
          var FinalJson=JSON.parse(json);
          console.log(FinalJson);
          if(FinalJson.firstname == req.params.fname && FinalJson.middlename == req.params.mname && FinalJson.lastname == req.params.lname){
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(true);
              }else{
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(false);
              }
            },
      function(errorObject) {
        flag=1;
        console.log("The read failed: " + errorObject.code);
      }
    );
    setTimeout(function(){
       if(flag == 0){
       res.header("Access-Control-Allow-Origin", req.headers.origin);
       res.send(false);
     }
    },4000);
    
   
});
app.all("/drivinglicense/:fname/:mname/:lname/:drivinglicense", function(req, res) {
  console.log("in url");
  var flag=0;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var database = firebase.database();
  var ref = database.ref("Data");
  console.log("after data");
   ref
    .orderByChild("drivinglicense")
    .equalTo(req.params.drivinglicense)
    .on(
      "child_added",
      function(snapshot) {
         flag=1;
          console.log(snapshot.val());
          var newPostKey = snapshot.key;
          var json = JSON.stringify(snapshot);
          var FinalJson=JSON.parse(json);
          console.log(FinalJson);
          if(FinalJson.firstname == req.params.fname && FinalJson.middlename == req.params.mname && FinalJson.lastname == req.params.lname){
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(true);
              }else{
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(false);
              }
            },
      function(errorObject) {
        flag=1;
        console.log("The read failed: " + errorObject.code);
      }
    );
    setTimeout(function(){
       if(flag == 0){
       res.header("Access-Control-Allow-Origin", req.headers.origin);
       res.send(false);
     }
    },4000);
    
   
});
app.all("/Passport/:fname/:mname/:lname/:passport", function(req, res) {
  console.log("in url");
  var flag=0;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var database = firebase.database();
  var ref = database.ref("Data");
  console.log("after data");
   ref
    .orderByChild("passport")
    .equalTo(req.params.passport)
    .on(
      "child_added",
      function(snapshot) {
         flag=1;
          console.log(snapshot.val());
          var newPostKey = snapshot.key;
          var json = JSON.stringify(snapshot);
          var FinalJson=JSON.parse(json);
          console.log(FinalJson);
          if(FinalJson.firstname == req.params.fname && FinalJson.middlename == req.params.mname && FinalJson.lastname == req.params.lname){
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(true);
              }else{
               res.header("Access-Control-Allow-Origin", req.headers.origin);
                res.send(false);
              }
            },
      function(errorObject) {
        flag=1;
        console.log("The read failed: " + errorObject.code);
      }
    );
    setTimeout(function(){
       if(flag == 0){
       res.header("Access-Control-Allow-Origin", req.headers.origin);
       res.send(false);
     }
    },4000);
    
   
});
app.all("/dgdt/:dgdt", function(req, res) {
  console.log("in url");
  var flag=0;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var database = firebase.database();
  var ref = database.ref("Auth");
  console.log("after data");
   ref
    .orderByChild("digiditynumber")
    .equalTo(req.params.dgdt)
    .on(
      "child_added",
      function(snapshot) {
         flag=1;
          console.log(snapshot.val());
          var newPostKey = snapshot.key;
          var json = JSON.stringify(snapshot);
          var FinalJson=JSON.parse(json);
          console.log(FinalJson);
          res.header("Access-Control-Allow-Origin", req.headers.origin);
          res.send(FinalJson);
          
          },
      function(errorObject) {
        flag=1;
        console.log("The read failed: " + errorObject.code);
      }
    );
});


app.listen(5000, () => console.log("server start at port 5000"));
