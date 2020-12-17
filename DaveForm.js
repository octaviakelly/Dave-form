document.addEventListener(DOMContentLoaded,function(){});
        function getInfo(){
               document.getElementById("response").innerHTML="";  
                var jsfname=document.getElementById("fname").value;
                var jslname=document.getElementById("lname").value;
                var jsemail=document.getElementById("email").value;
                var jsmobile=document.getElementById("mobile").value;
                
                document.getElementById("subConf").innerHTML +=
                "You submitted your name as "+jsfname+" "+jslname+", your email address as "+jsemail+" and your mobile number as "+jsmobile+"; is that correct?";
                 
               document.getElementById("radButs").innerHTML='<label for="yRadio">Yes</label><input type="radio" id="yRadio" onclick="yChecked();" value="Yes" name="yRadio"><label for="nRadio">No</label><input type="radio" id="nRadio" onclick="nChecked();" value="No" name="nRadio">';                   
               }

          function yChecked(){
               
               document.getElementById("response").innerHTML +="Thank you for the information.";
               var inputFName=document.getElementById("fname");
               localStorage.setItem("fname",fname.value);
               var storedFName = localStorage.getItem("fname");
               var savedInfo = window.open("", "savedInfo");
               savedInfo.document.write("<p>First name: </p>"+storedFName+"<br><br>");
               savedInfo.document.write('<button onclick="window.print()">Print this page</button>');

               
          }

     
          function nChecked(){
               document.getElementById("response").innerHTML +="Please re-enter your details."
               document.getElementById("fname").value="";
               document.getElementById("lname").value=""
               document.getElementById("email").value="";
               document.getElementById("mobile").value="";   
               document.getElementById("subConf").innerHTML="";
               document.getElementById("radButs").innerHTML="";
               document.getElementById("nRadio").checked=false;
               pls.insertAdjacentElement("afterend","");    
                     
               
               
          }

          
          
     