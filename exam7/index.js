

let sendButton1 = document.querySelector('#send1')
let sendButton2 = document.querySelector('#send2')
// let sendButton = document.querySelector('button');
function send1() {
  let oneone = $('input:radio:checked[name="oneone"]').val();
  let onetwo = $('input:radio:checked[name="onetwo"]').val();
  let onethree = $('input:radio:checked[name="onethree"]').val();
  let onefour = $('input:radio:checked[name="onefour"]').val();
  let onefive = $('input:radio:checked[name="onefive"]').val();
  let onesix = $('input:radio:checked[name="onesix"]').val();
  let oneseven = $('input:radio:checked[name="oneseven"]').val();
  let oneeight = $('input:radio:checked[name="oneeight"]').val();
  if(oneone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(onetwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(onethree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(onefour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(onefive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(onesix == undefined){
    alert("每題皆為必填，請確實填答");
    
  }
  else if(oneseven == undefined){
    alert("每題皆為必填，請確實填答");
    
  }
  else if(oneeight == undefined){
    alert("每題皆為必填，請確實填答");
    
  }
  else{
    localStorage.setItem('oneone', oneone);
    localStorage.setItem('onetwo', onetwo);
    localStorage.setItem('onethree', onethree);
    localStorage.setItem('onefour', onefour);
    localStorage.setItem('onefive', onefive);
    localStorage.setItem('onesix', onesix);
    localStorage.setItem('oneseven', oneseven);
    localStorage.setItem('oneeight', oneeight);
    console.log(oneone);
    console.log(onetwo);
    console.log(localStorage.getItem('oneone'));

    var exam = localStorage.getItem('exam'); 

    if(exam==7){
      location.href= "news2.html";
    }else if (exam==8){
      location.href= "news4.html";
    }
  }
};

function send2() {
  let twoone = $('input:radio:checked[name="twoone"]').val();
  let twotwo = $('input:radio:checked[name="twotwo"]').val();
  let twothree = $('input:radio:checked[name="twothree"]').val();
  let twofour = $('input:radio:checked[name="twofour"]').val();
  let twofive = $('input:radio:checked[name="twofive"]').val();
  let twosix = $('input:radio:checked[name="twosix"]').val();
  let twoseven = $('input:radio:checked[name="twoseven"]').val();
  let twoeight = $('input:radio:checked[name="twoeight"]').val();
  if(twoone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(twotwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(twothree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(twofour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(twofive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(twosix == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else if(twoseven == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else if(twoeight == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else{
    localStorage.setItem('twoone', twoone);
    localStorage.setItem('twotwo', twotwo);
    localStorage.setItem('twothree', twothree);
    localStorage.setItem('twofour', twofour);
    localStorage.setItem('twofive', twofive);
    localStorage.setItem('twosix', twosix);
    localStorage.setItem('twoseven', twoseven);
    localStorage.setItem('twoeight', twoeight);
    console.log(twoone);
    console.log(twotwo);
    console.log(localStorage.getItem('twoone'));

      var exam = localStorage.getItem('exam'); 

    if(exam==7){
      location.href= "news3.html";
    }else if (exam==8){
      location.href= "news1.html";
    }
  }
};

function send3() {
  let threeone = $('input:radio:checked[name="threeone"]').val();
  let threetwo = $('input:radio:checked[name="threetwo"]').val();
  let threethree = $('input:radio:checked[name="threethree"]').val();
  let threefour = $('input:radio:checked[name="threefour"]').val();
  let threefive = $('input:radio:checked[name="threefive"]').val();
  let threesix = $('input:radio:checked[name="threesix"]').val();
  let threeseven = $('input:radio:checked[name="threeseven"]').val();
  let threeeight = $('input:radio:checked[name="threeeight"]').val();
  if(threeone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(threetwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(threethree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(threefour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(threefive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(threesix == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(threeseven == undefined){
    alert("每題皆為必填，請確實填答");
  }
  else if(threeeight == undefined){
    alert("每題皆為必填，請確實填答");
  }
  else{
    localStorage.setItem('threeone', threeone);
    localStorage.setItem('threetwo', threetwo);
    localStorage.setItem('threethree', threethree);
    localStorage.setItem('threefour', threefour);
    localStorage.setItem('threefive', threefive);
    localStorage.setItem('threesix', threesix);
    localStorage.setItem('threeseven', threeseven);
    localStorage.setItem('threeeight', threeeight);
    console.log(threeone);
    console.log(threetwo);
    console.log(localStorage.getItem('threeone'));

    var exam = localStorage.getItem('exam'); 

    if(exam==7){
      location.href= "news4.html";
    }else if (exam==8){
      location.href= "news6.html";
    }
  }
};

function send4() {
  let fourone = $('input:radio:checked[name="fourone"]').val();
  let fourtwo = $('input:radio:checked[name="fourtwo"]').val();
  let fourthree = $('input:radio:checked[name="fourthree"]').val();
  let fourfour = $('input:radio:checked[name="fourfour"]').val();
  let fourfive = $('input:radio:checked[name="fourfive"]').val();
  let foursix = $('input:radio:checked[name="foursix"]').val();
  let fourseven = $('input:radio:checked[name="fourseven"]').val();
  let foureight = $('input:radio:checked[name="foureight"]').val();


  if(fourone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fourtwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fourthree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fourfour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fourfive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(foursix == undefined){
    alert("每題皆為必填，請確實填答");
    
  }
  else if(fourseven == undefined){
    alert("每題皆為必填，請確實填答");
    
  }
  else if(foureight == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else{
    localStorage.setItem('fourone', fourone);
    localStorage.setItem('fourtwo', fourtwo);
    localStorage.setItem('fourthree', fourthree);
    localStorage.setItem('fourfour', fourfour);
    localStorage.setItem('fourfive', fourfive);
    localStorage.setItem('foursix', foursix);
    localStorage.setItem('fourseven', fourseven);
    localStorage.setItem('foureight', foureight);
    console.log(fourtwo);
    // console.log(onetwo);
    console.log(localStorage.getItem('fourone'));

    var exam = localStorage.getItem('exam'); 

    if(exam==7){
      location.href= "news5.html";
    }else if (exam==8){
      location.href= "news3.html";
    }


  }
};

function send5() {
  let fiveone = $('input:radio:checked[name="fiveone"]').val();
  let fivetwo = $('input:radio:checked[name="fivetwo"]').val();
  let fivethree = $('input:radio:checked[name="fivethree"]').val();
  let fivefour = $('input:radio:checked[name="fivefour"]').val();
  let fivefive = $('input:radio:checked[name="fivefive"]').val();
  let fivesix = $('input:radio:checked[name="fivesix"]').val();
  let fiveseven = $('input:radio:checked[name="fiveseven"]').val();
  let fiveeight = $('input:radio:checked[name="fiveeight"]').val();

  if(fiveone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fivetwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fivethree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fivefour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fivefive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(fivesix == undefined){
    alert("每題皆為必填，請確實填答");
    
  }
  else if(fiveseven == undefined){
    alert("每題皆為必填，請確實填答");
    
  }
  else if(fiveeight == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else{
    localStorage.setItem('fiveone', fiveone);
    localStorage.setItem('fivetwo', fivetwo);
    localStorage.setItem('fivethree', fivethree);
    localStorage.setItem('fivefour', fivefour);
    localStorage.setItem('fivefive', fivefive);
    localStorage.setItem('fivesix', fivesix);
    localStorage.setItem('fiveseven', fiveseven);
    localStorage.setItem('fiveeight', fiveeight);
    console.log(fiveone);
    console.log(fivetwo);
    console.log(localStorage.getItem('fiveone'));

    var exam = localStorage.getItem('exam'); 

    if(exam==7){
      location.href= "news6.html";
    }else if (exam==8){
      location.href= "check1.html";
    }

  }
};

function send6() {
  let sixone = $('input:radio:checked[name="sixone"]').val();
  let sixtwo = $('input:radio:checked[name="sixtwo"]').val();
  let sixthree = $('input:radio:checked[name="sixthree"]').val();
  let sixfour = $('input:radio:checked[name="sixfour"]').val();
  let sixfive = $('input:radio:checked[name="sixfive"]').val();
  let sixsix = $('input:radio:checked[name="sixsix"]').val();
  let sixseven = $('input:radio:checked[name="sixseven"]').val();
  let sixeight = $('input:radio:checked[name="sixeight"]').val();
  if(sixone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sixtwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sixthree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sixfour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sixfive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sixsix == undefined){
    alert("每題皆為必填，請確實填答");
    
  }
  else if(sixseven == undefined){
    alert("每題皆為必填，請確實填答");
    
  }
  else if(sixeight == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else{
    localStorage.setItem('sixone', sixone);
    localStorage.setItem('sixtwo', sixtwo);
    localStorage.setItem('sixthree', sixthree);
    localStorage.setItem('sixfour', sixfour);
    localStorage.setItem('sixfive', sixfive);
    localStorage.setItem('sixsix', sixsix);
    localStorage.setItem('sixseven', sixseven);
    localStorage.setItem('sixeight', sixeight);
    console.log(sixone);
    console.log(sixtwo);
    console.log(localStorage.getItem('oneone'));


    var exam = localStorage.getItem('exam'); 

    if(exam==7){
      location.href= "check1.html";
    }else if (exam==8){
      location.href= "news5.html";
    }


  }
};

function send7() {
  let sevenone = $('input:radio:checked[name="sevenone"]').val();
  let seventwo = $('input:radio:checked[name="seventwo"]').val();
  let seventhree = $('input:radio:checked[name="seventhree"]').val();
  let sevenfour = $('input:radio:checked[name="sevenfour"]').val();

  if(sevenone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(seventwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(seventhree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(sevenfour == undefined){
    alert("每題皆為必填，請確實填答");
  }else{
    localStorage.setItem('sevenone', sevenone);
    localStorage.setItem('seventwo', seventwo);
    localStorage.setItem('seventhree', seventhree);
    localStorage.setItem('sevenfour', sevenfour);

    console.log(sevenone);
    console.log(seventwo);
    console.log(localStorage.getItem('sevenone'));
    location.href='check2.html'
  }
};

function send8() {

  let eightone = $('input:radio:checked[name="eightone"]').val();
  let eighttwo = $('input:radio:checked[name="eighttwo"]').val();
  let eightthree = $('input:radio:checked[name="eightthree"]').val();
  let eightfour = $('input:radio:checked[name="eightfour"]').val();
  let eightfive = $('input:radio:checked[name="eightfive"]').val();

  let eightsix = $('input:radio:checked[name="eightsix"]').val();
  let eightseven = $('input:radio:checked[name="eightseven"]').val();
  let eighteight = $('input:radio:checked[name="eighteight"]').val();
  let eightnine = $('input:radio:checked[name="eightnine"]').val();

  if(eightone == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(eighttwo == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(eightthree == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(eightfour == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(eightfive == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(eightsix == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(eightseven == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(eighteight == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(eightnine == undefined){
    alert("每題皆為必填，請確實填答");
  }
  
  else{
    localStorage.setItem('eightone', eightone);
    localStorage.setItem('eighttwo', eighttwo);
    localStorage.setItem('eightthree', eightthree);
    localStorage.setItem('eightfour', eightfour);
    localStorage.setItem('eightfive', eightfive);
    localStorage.setItem('eightsix', eightsix);
    localStorage.setItem('eightseven', eightseven);
    localStorage.setItem('eighteight', eighteight);
    localStorage.setItem('eightnine', eightnine);

    console.log(eightone);
    console.log(eighttwo);
    console.log(localStorage.getItem('eightone'));
    location.href='check3.html'
  }
};
// $('input[name=name]').val(),


function send9() {
  let personinfo_1 = $('input:radio:checked[name="personinfo_1"]').val();
  let personinfo_2 = $('input:radio:checked[name="personinfo_2"]').val();
  let personinfo_3 = $('input:radio:checked[name="personinfo_3"]').val();
  let personinfo_4 = $('select[name="personinfo_4"]').val();
  let personinfo_5 = $('input:radio:checked[name="personinfo_5"]').val();
  let personinfo_6 = $('input[name="personinfo_6"]').val();
  

  var oneone = localStorage.getItem('oneone');  
  var onetwo = localStorage.getItem('onetwo');  
  var onethree = localStorage.getItem('onethree');  
  var onefour = localStorage.getItem('onefour');  
  var onefive = localStorage.getItem('onefive');  
  var onesix = localStorage.getItem('onesix');  
  var oneseven = localStorage.getItem('oneseven');  
  var oneeight = localStorage.getItem('oneeight');  


  var twoone = localStorage.getItem('twoone');  
  var twotwo = localStorage.getItem('twotwo');  
  var twothree = localStorage.getItem('twothree');  
  var twofour = localStorage.getItem('twofour');  
  var twofive = localStorage.getItem('twofive');  
  var twosix = localStorage.getItem('twosix');  
  var twoseven = localStorage.getItem('twoseven');  
  var twoeight = localStorage.getItem('twoeight');  


  var threeone = localStorage.getItem('threeone');  
  var threetwo = localStorage.getItem('threetwo');  
  var threethree = localStorage.getItem('threethree');  
  var threefour = localStorage.getItem('threefour');  
  var threefive = localStorage.getItem('threefive');  
  var threesix = localStorage.getItem('threesix');  
  var threeseven = localStorage.getItem('threeseven');  
  var threeeight = localStorage.getItem('threeeight');  



  var fourone = localStorage.getItem('fourone');  
  var fourtwo = localStorage.getItem('fourtwo');  
  var fourthree = localStorage.getItem('fourthree');  
  var fourfour = localStorage.getItem('fourfour');  
  var fourfive = localStorage.getItem('fourfive');  
  var foursix = localStorage.getItem('foursix');  
  var fourseven = localStorage.getItem('fourseven');  
  var foureight = localStorage.getItem('foureight');  


  var fiveone = localStorage.getItem('fiveone');  
  var fivetwo = localStorage.getItem('fivetwo');  
  var fivethree = localStorage.getItem('fivethree');  
  var fivefour = localStorage.getItem('fivefour');  
  var fivefive = localStorage.getItem('fivefive');  
  var fivesix = localStorage.getItem('fivesix');  
  var fiveseven = localStorage.getItem('fiveseven');  
  var fiveeight = localStorage.getItem('fiveeight');  



  var sixone = localStorage.getItem('sixone');  
  var sixtwo = localStorage.getItem('sixtwo');  
  var sixthree = localStorage.getItem('sixthree');  
  var sixfour = localStorage.getItem('sixfour');  
  var sixfive = localStorage.getItem('sixfive');  
  var sixsix = localStorage.getItem('sixsix');  
  var sixseven = localStorage.getItem('sixseven');  
  var sixeight = localStorage.getItem('sixeight');  


  var sevenone = localStorage.getItem('sevenone');  
  var seventwo = localStorage.getItem('seventwo');  
  var seventhree = localStorage.getItem('seventhree');  
  var sevenfour = localStorage.getItem('sevenfour');  

 
  var eightone = localStorage.getItem('eightone');  
  var eighttwo = localStorage.getItem('eighttwo');  
  var eightthree = localStorage.getItem('eightthree');  
  var eightfour = localStorage.getItem('eightfour');  
  var eightfive = localStorage.getItem('eightfive');  
  var eightsix = localStorage.getItem('eightsix');  
  var eightseven = localStorage.getItem('eightseven');  
  var eighteight = localStorage.getItem('eighteight');  
  var eightnine = localStorage.getItem('eightnine');  
  


  var exam = localStorage.getItem('exam');  
  var systemsupport = localStorage.getItem('systemsupport');  
  var perspectivetaking = localStorage.getItem('perspectivetaking');  

  var today = new Date();
  var date;
  date = (today.getFullYear()) +"-" + (today.getMonth() + 1 ) + "-" + today.getDate() + "-" + today.toLocaleTimeString();
  console.log(date)
  console.log(today)
  
  console.log(localStorage.getItem('oneone'))


  console.log(personinfo_1)
  console.log(personinfo_2)
  console.log(personinfo_3)
  console.log(personinfo_4)
  console.log(personinfo_5)
  console.log(personinfo_6)


  // console.log(oneone)
  if(personinfo_1 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(personinfo_2 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(personinfo_3 == undefined){
    alert("每題皆為必填，請確實填答");
  }else if(personinfo_4 == null){
    alert("每題皆為必填，請確實填答");
    
  }else if(personinfo_5 == undefined){
    alert("每題皆為必填，請確實填答");
    
  }else{
    $.ajax({
      url: "https://corsanywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbxQkWZjVFxEHULPU7nSvmF9d0h2r9HXQ0rY3kvtxWXXYcztCBmkZUvOUZha_aYRgbxJ/exec",
      data: {

          "exam":exam,
          "oneone": oneone,
          "onetwo": onetwo,
          "onethree": onethree,
          "onefour": onefour,
          "onefive": onefive,
          "onesix": onesix,
          "oneseven": oneseven,
          "oneeight": oneeight,

          "twoone": twoone,
          "twotwo": twotwo,
          "twothree": twothree,
          "twofour": twofour,
          "twofive": twofive,
          "twosix": twosix,
          "twoseven": twoseven,
          "twoeight": twoeight,


          "threeone": threeone,
          "threetwo": threetwo,
          "threethree": threethree,
          "threefour": threefour,
          "threefive": threefive,
          "threesix": threesix,
          "threeseven": threeseven,
          "threeeight": threeeight,


          "fourone": fourone,
          "fourtwo": fourtwo,
          "fourthree": fourthree,
          "fourfour": fourfour,
          "fourfive": fourfive,
          "foursix": foursix,
          "fourseven": fourseven,
          "foureight": foureight,



          "fiveone": fiveone,
          "fivetwo": fivetwo,
          "fivethree": fivethree,
          "fivefour": fivefour,
          "fivefive": fivefive,
          "fivesix": fivesix,
          "fiveseven": fiveseven,
          "fiveeight": fiveeight,


          "sixone": sixone,
          "sixtwo": sixtwo,
          "sixthree": sixthree,
          "sixfour": sixfour,
          "sixfive": sixfive,
          "sixsix": sixsix,
          "sixseven": sixseven,
          "sixeight": sixeight,


          "sevenone": sevenone,
          "seventwo": seventwo,
          "seventhree": seventhree,
          "sevenfour": sevenfour,
         
          "eightone": eightone,
          "eighttwo": eighttwo,
          "eightthree": eightthree,
          "eightfour": eightfour,
          "eightfive": eightfive,
          "eightsix": eightsix,
          "eightseven" : eightseven,
          "eighteight" : eighteight,
          "eightnine" : eightnine,

          "personinfo_1": personinfo_1,
          "personinfo_2": personinfo_2,
          "personinfo_3": personinfo_3,
          "personinfo_4": personinfo_4,
          "personinfo_5": personinfo_5,
          "personinfo_6": personinfo_6,


          "systemsupport": systemsupport,
          "perspectivetaking" : perspectivetaking,
          "date": date,
          "today": today

      },
      success: function(response) {
        if(response == "成功"){
          location.href='thanks.html'

        }
      },
    });
  }
};

// sendButton1.addEventListener('click', send1);
// sendButton2.addEventListener('click', send2);



// $('input:radio:checked[name="gender"]').val();


