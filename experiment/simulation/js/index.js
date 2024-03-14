/*var message=[
  "Step 1:- Make yourself familiar with the equipments by hovering over them",
  "Step 2:- Click on the next button",
  "Step 3:- Turn on the Weingmachine for weighing 1gm Charcoale ",

  ]
  
  var hmessage=["चरण 1:-उपकरणों पर मंडराकर स्वयं को उनसे परिचित कराएं",
  "चरण 2:- अगले बटन पर क्लिक करें",
  "चरण 3:- 1 ग्राम चारकोल का वजन करने के लिए वेइंगमशीन चालू करें",
  ]
  
  var mes=document.querySelector("#update")
  var lang
  var mes1
  var hindibtn = document.querySelector("#hindi")
  var engbtn = document.querySelector("#eng")
  var headertext = document.querySelector("#headertext")
  var langselector = document.querySelector("#langselector")
  
  messcounter = 0
  
  function hindi1(){
      console.log(lang)
      lang="hindi"
      //headertext.innerText="'एसिटिक' एसिड के पृथक्करण स्थिरांक को निर्धारित करने के लिए विद्युत चालकता का मापन"
      langselector.style.visibility="hidden"
      update()
  }
  
  function eng11(){
      console.log(lang)
      lang="eng"
      //headertext.innerText="Measurement of Electrical conductance to determine dissociation constant of 'Acetic' acid"
      langselector.style.visibility="hidden"
      update() 
  }
  
  
  
  function speech1(){
      if(lang=="hindi"){
          mes1=hmessage[messcounter-1]
          console.log(mes1)
      }
      else if(lang=="eng"){
          mes1=message[messcounter-1]
          console.log(mes1)
      }
      setTimeout(function(){ 
          //mes1=hmessage[messcounter]
          const utterance = new SpeechSynthesisUtterance(mes1);
          utterance.lang = 'hi-IN';
          utterance.pitch=1;
          utterance.rate=1;
          utterance.volume=1;
          speechSynthesis.speak(utterance);
      },500)
  }
  
  function update(){
      console.log(message[messcounter])
      if(lang=="hindi"){
          mes.innerText=hmessage[messcounter]
      }
      else if(lang=="eng"){
          mes.innerText=message[messcounter]
      }
      //mes.innerText=hmessage[messcounter]
      messcounter+=1
          speech1()
  }*/

   


var flask11=document.querySelector("#flask1")

var masurwater11=document.querySelector("#masurwater")
var masurcyll=document.querySelector("#masurcylender")
var mkippi11=document.querySelector("#mkippi")
var mdrop11=document.querySelector("#mdrop")
var fkippi11=document.querySelector("#fkippi1")
var f1drop11=document.querySelector("#f1drop")
var f1sol11=document.querySelector("#f1sol")
var fkippi22=document.querySelector("#fkippi2")
var f1drop22=document.querySelector("#f2drop")
var f1sol22=document.querySelector("#f2sol")
var fkippi33=document.querySelector("#fkippi3")
var f1drop33=document.querySelector("#f3drop")
var f1sol33=document.querySelector("#f3sol")


var s=1;
function flask1put(){
    if(s==1){
        console.log("hello")
        flask11.style.transform = " translate(260%,-60%) rotate(80deg) ";
       
        mkippi11.style.visibility="visible";
        setTimeout (function(){
           masurwater11.style.visibility="visible";
            mdrop11.style.visibility="visible";
            setTimeout(function() {
                mdrop11.style.visibility="hidden";
            },400);
        },2200)
        setTimeout(function(){
            flask11.style.transform = " translate(0%,0%) rotate(0deg) ";
           
            mkippi11.style.visibility="hidden";

        },3000)
        s+=1; 
     
    }
    else if(s==3){
        console.log("hello")
        flask11.style.transform = " translate(260%,-60%) rotate(80deg) ";
     
        mkippi11.style.visibility="visible";
        setTimeout (function(){
           masurwater11.style.visibility="visible";
            mdrop11.style.visibility="visible";
            setTimeout(function() {
                mdrop11.style.visibility="hidden";
            },400);
        },2200)
        setTimeout(function(){
            flask11.style.transform = " translate(0%,0%) rotate(0deg) ";
           
            mkippi11.style.visibility="hidden";

        },3000)
        s+=1; 
     
    }
    else if(s==5){
        console.log("hello")
        flask11.style.transform = " translate(260%,-60%) rotate(80deg) ";
  
        mkippi11.style.visibility="visible";
        setTimeout (function(){
           masurwater11.style.visibility="visible";
            mdrop11.style.visibility="visible";
            setTimeout(function() {
                mdrop11.style.visibility="hidden";
            },400);
        },2200)
        setTimeout(function(){
            flask11.style.transform = " translate(0%,0%) rotate(0deg) ";
         
            mkippi11.style.visibility="hidden";

        },3000)
        s+=1;
    }
}

function masurcyput(){
    if(s==2){
        masurcyll.style.transform = " translate(130%,-80%) rotate(80deg) ";
        masurwater11.style.transform = " translate(168%,-163%) rotate(80deg) ";
        fkippi11.style.visibility="visible";
        masurwater11.style.visibility="hidden";
        setTimeout (function(){
           
           
            f1drop11.style.visibility="visible";
            f1sol11.style.visibility="visible";
            
            setTimeout(function() {
                f1drop11.style.visibility="hidden";
               
            },400);
        },2200)
        setTimeout(function(){
           
        masurcyll.style.transform = " translate(0%,0%) rotate(0deg) ";
        masurwater11.style.transform = " translate(0%,-0%) rotate(0deg) ";
        fkippi11.style.visibility="hidden";
    
        },3000)
        s+=1;
        update()
    }
    else if(s==4){
        masurcyll.style.transform = " translate(330%,-80%) rotate(80deg) ";
        masurwater11.style.transform = " translate(600%,-163%) rotate(80deg) ";
        fkippi22.style.visibility="visible";
        masurwater11.style.visibility="hidden";
        setTimeout (function(){
           
           
            f1drop22.style.visibility="visible";
            f1sol22.style.visibility="visible";
            
            setTimeout(function() {
                f1drop22.style.visibility="hidden";
               
            },400);
        },2200)
        setTimeout(function(){
           
        masurcyll.style.transform = " translate(0%,0%) rotate(0deg) ";
        masurwater11.style.transform = " translate(0%,-0%) rotate(0deg) ";
        fkippi22.style.visibility="hidden";
    
        },3000)
        s+=1;

    }
    else if(s==6){
        masurcyll.style.transform = " translate(500%,-80%) rotate(80deg) ";
        masurwater11.style.transform = " translate(1000%,-166%) rotate(80deg) ";
        fkippi33.style.visibility="visible";
        masurwater11.style.visibility="hidden";
        setTimeout (function(){
           
           
            f1drop33.style.visibility="visible";
            f1sol33.style.visibility="visible";
            
            setTimeout(function() {
                f1drop33.style.visibility="hidden";
               
            },400);
        },2200)
        setTimeout(function(){
           
        masurcyll.style.transform = " translate(0%,0%) rotate(0deg) ";
        masurwater11.style.transform = " translate(0%,-0%) rotate(0deg) ";
        fkippi33.style.visibility="hidden";
    
        },3000)
        s+=1;
    }
}

var f;
function nextstep(){
    if(s==7){
        window.open("step2.html")
       
    }
    else if(f==3){
        window.open("step3.html")
    }
    else if(k==0){
  
      window.open("step4.html")
  }
  else if(m==5){
    window.open("step5.html")
  }
}

/*********************************step2nd*******************************************************/
var f=0 ;
var activater = document.querySelector("#actdroper")
var drp = document.querySelector("#actdrp")

var drp2 = document.querySelector("#actdrp2")

var drp4 = document.querySelector("#actdrp4")


function act1() {
  if (f==0) {
    activater.style.transform = "translate(-1300%,-160%)";
    setTimeout(function () {
      drp.style.visibility = "visible";
  
     
    }, 2500)

    setTimeout(function () {
      act1reverse()
      drp.style.visibility = "hidden";
     
    }, 3000);
    
    
  }

  function act1reverse() {
    drp.style.visibility = "hidden";

    activater.style.transform = "translate(0%,-0%)";
    
    f += 1; 
  }
 console.log(f)
}


function act2() {
    if (f==1) {
         console.log('sonu pgl h')
      activater.style.transform = "translate(-990%,-160%)";
      setTimeout(function () {
        drp2.style.visibility = "visible";
       
       
      }, 2500)
  
      setTimeout(function () {
        act2reverse()
        drp2.style.visibility = "hidden";
     
      }, 3000);
    
      
    }
  
    function act2reverse() {
      drp2.style.visibility = "hidden";
      
      activater.style.transform = "translate(0%,-0%)";
      f +=1 ;
    }
  }

/*step3*/
function act3() {
  if (f==2) {
       console.log('sonu pgl h')
    activater.style.transform = "translate(-680%,-160%)";
    setTimeout(function () {
      drp4.style.visibility = "visible";
    
     
    }, 2500)

    setTimeout(function () {
      act3reverse()
      drp4.style.visibility = "hidden";
   
    }, 3000);
  
    
  }

  function act3reverse() {
    drp4.style.visibility = "hidden";
   
    activater.style.transform = "translate(0%,-0%)";
    f +=1 ;
  }
}





 
/**************************************************************step3*******************************/

var k;
var l = 0;
var pflask1 = document.querySelector("#pink1")
var pflask2 = document.querySelector("#pink2")
var pflask3 = document.querySelector("#pink3")
var orgl = document.querySelector("#orgflsk")
var aql = document.querySelector("#flask2")
var flask3 = document.querySelector("#flask3")
var drp11 = document.querySelector("#drop")

// ********************************************************************** titration1 **********************************************************************

function titration1() {
  if (l== 0) {
 
    orgl.style.transform = "translate(680%,0%) ";


  }
  l = +1;
}

function titrate() {
  if (l== 1) {
    drp11.style.visibility = "visible"
    drp11.style.transform = "translate(0%,700%) ";

    setTimeout(() => {
      drp11.style.visibility = "hidden"
    }, 200);

    setTimeout(() => {
      drp11.style.transform = "translate(0%,0%)"
    }, 1000);

    setTimeout(() => {
      pflask1.style.opacity = "20%"
      pflask1.style.opacity = "60%"
      pflask1.style.opacity = "100%"
      orgl.style.visibility = "hidden";

    }, 4000);

  }

}
function pink1() {
  pflask1.style.transform = "translate(-680%,0%)";

  l = +1
}

// ********************************************************************** titration2 **********************************************************************

function titration2() {
  if (l == 1) {
    aql.style.transform = "translate(480%,0%) ";



    setTimeout(() => {
      pflask2.style.opacity = "20%"
      pflask2.style.opacity = "60%"
      pflask2.style.opacity = "100%"
      aql.style.visibility = "hidden";

    }, 3000);

  }

}

function pink2() {
  pflask2.style.transform = "translate(-480%,0%)";
  l= +1;
}
//------------------------------------------------------------/*step3 rd*/
function titration3() {
  if (l == 1) {
    flask3.style.transform = "translate(280%,0%) ";

    setTimeout(() => {
      pflask3.style.opacity = "20%"
      pflask3.style.opacity = "60%"
      pflask3.style.opacity = "100%"
      flask3.style.visibility = "hidden";
      
    }, 4000);

  }

}

function pink3() {
  pflask3.style.transform = "translate(-280%,0%)";
  k=0;
}
/***********************************step4******************************** */
var m=0 ;
var act = document.querySelector("#droper")
var dp = document.querySelector("#actd")
var dp1 = document.querySelector("#actd1")
var dp2 = document.querySelector("#actd2")
var dp3 = document.querySelector("#actd3")
var dp4 = document.querySelector("#actd4")






 




function activater1() {
  if (m==0) {
    act.style.transform = "translate(-1630%,-160%)";
    setTimeout(function () {
      dp.style.visibility = "visible";
      
     
    }, 2500)

    setTimeout(function () {
      activater1reverse()
      dp.style.visibility = "hidden";
      
    }, 3000);
    
    
  }

  function activater1reverse() {
    dp.style.visibility = "hidden";
    
    act.style.transform = "translate(0%,-0%)";
    
    m+= 1; 
  }
 console.log(f)
}


function activater2() {
    if (m==1) {
         console.log('sonu pgl h')
      act.style.transform = "translate(-1300%,-160%)";
      setTimeout(function () {
        dp1.style.visibility = "visible";
       
       
      }, 2500)
  
      setTimeout(function () {
        activater2reverse()
        dp1.style.visibility = "hidden";
     
      }, 3000);
    
      
    }
  
    function activater2reverse() {
      dp1.style.visibility = "hidden";
     
      act.style.transform = "translate(0%,-0%)";
      m+=1 ;
    }
  }

/*step3*/
function activater3() {
  if (m==2) {
       console.log('sonu pgl h')
    act.style.transform = "translate(-990%,-160%)";
    setTimeout(function () {
      dp2.style.visibility = "visible";
      
     
    }, 2500)

    setTimeout(function () {
      activater3reverse()
      dp2.style.visibility = "hidden";
      
    }, 3000);
  
    
  }

  function activater3reverse() {
    dp2.style.visibility = "hidden";
    
    act.style.transform = "translate(0%,-0%)";
    m+=1 ;
  }
}
/*step4*/
function activater4() {
  if (m==3) {
       console.log('sonu pgl h')
    act.style.transform = "translate(-670%,-160%)";
    setTimeout(function () {
      dp3.style.visibility = "visible";
     
     
    }, 2500)

    setTimeout(function () {
      activater4reverse()
      dp3.style.visibility = "hidden";
      
    }, 3000);
  
    
  }

  function activater4reverse() {
    dp3.style.visibility = "hidden";
    
    act.style.transform = "translate(0%,-0%)";
    m+=1 ;
  }
}
/*step4*/
function activater5() {
  if (m==4) {
       console.log('sonu pgl h')
    act.style.transform = "translate(-350%,-160%)";
    setTimeout(function () {
      dp4.style.visibility = "visible";
      
     
    }, 2500)

    setTimeout(function () {
      activater5reverse()
      dp4.style.visibility = "hidden";
      
    }, 3000);
  
    
  }

  function activater5reverse() {
    dp4.style.visibility = "hidden";
    
    act.style.transform = "translate(0%,-0%)";
    m+=1 ;
   
  }
}




/************************************************************step5 */
var n= 0;
var pflask11 = document.querySelector("#pink11")
var pflask22 = document.querySelector("#pink21")
var pflask33 = document.querySelector("#pink31")
var pflask44 = document.querySelector("#pink41")
var pflask55 = document.querySelector("#pink51")
var orgl1 = document.querySelector("#orgflsk1");
var aql2= document.querySelector("#flask21")
var aql3=document.querySelector("#flask31")
var aql4=document.querySelector("#flask41")
var aql5=document.querySelector("#flask51")
var drp101 = document.querySelector("#drop111")

// ********************************************************************** titration1 **********************************************************************

function titration11() {
  if (n == 0) {
    orgl1.style.transform = "translate(1110%,0%) ";


  }
n = +1;
}

function titrate1() {
  if (n== 1) {
    drp101.style.visibility = "visible"
    drp101.style.transform = "translate(0%,700%) ";

    setTimeout(() => {
      drp101.style.visibility = "hidden"
    }, 200);

    setTimeout(() => {
      drp101.style.transform = "translate(0%,0%)"
    }, 1000);

    setTimeout(() => {
      pflask11.style.opacity = "20%"
      pflask11.style.opacity = "60%"
      pflask11.style.opacity = "100%"
      orgl1.style.visibility = "hidden";

    }, 4000);

  }

}
function pink11() {
  pflask11.style.transform = "translate(-1110%,0%)";

  n= +1
}

// ********************************************************************** titration2 **********************************************************************

function titration22() {
  if (n == 1) {
    aql2.style.transform = "translate(940%,0%) ";



    setTimeout(() => {
      pflask22.style.opacity = "20%"
      pflask22.style.opacity = "60%"
      pflask22.style.opacity = "100%"
      aql2.style.visibility = "hidden";

    }, 4000);

  
  
  }
}

function pink22() {
  pflask22.style.transform = "translate(-940%,0%)";
  n= +1 ;
}
//------------------------------------------------------step3--------------------------------------------
function titration33() {
  if (n== 1 ) {

    aql3.style.transform = "translate(771%,0%) ";



    setTimeout(() => {
      pflask33.style.opacity = "20%"
      pflask33.style.opacity = "60%"
      pflask33.style.opacity = "100%"
      aql3.style.visibility = "hidden";

    }, 4000);

  }
  
}

function pink33() {
  pflask33.style.transform = "translate(-771%,0%)";
  n= +1 ;
}
//-----------------------------------------------------/*step 4 th*/
function titration44() {
  if (n == 1 ) {

    aql4.style.transform = "translate(590%,0%) ";



    setTimeout(() => {
      pflask44.style.opacity = "20%"
      pflask44.style.opacity = "60%"
      pflask44.style.opacity = "100%"
      aql4.style.visibility = "hidden";

    }, 4000);

  }
  

}
function pink44() {
   pflask44.style.transform = "translate(-590%,0%)";
  n= +1; 
}

//--------------------------------------------------------/*step 5th*/
function titration55() {  
if (n== 1 ) {

    aql5.style.transform = "translate(410%,0%) ";



    setTimeout(() => {
      pflask55.style.opacity = "20%"
      pflask55.style.opacity = "60%"
      pflask55.style.opacity = "100%"
      aql5.style.visibility = "hidden";

    }, 4000);

  }
  
}

function pink55() {
  pflask55.style.transform = "translate(-410%,0%)";
  
}

