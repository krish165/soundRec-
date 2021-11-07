function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lWOErEdVx/model.json",modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
    
}
 budgie=0;
   lion=0;
   dog=0;
   cat=0;
   
function gotResults(error,results)
{
  

   if(error)
   {
       console.log(error);
   }
   else{
       console.log(results);

       random_r=Math.floor(Math.random()*255)+1;
       random_g=Math.floor(Math.random()*255)+1;
       random_b=Math.floor(Math.random()*255)+1; 

       document.getElementById("result_confidence").innerHTML="Detected lion roaring"+"  :  "+lion+" , "+"Detected dog barking"+" :  "+dog+" , "+"Detected cat meowing"+" :  "+cat+" , "+"Detected budgies chirping"+" : "+budgie;
       document.getElementById("result_label").innerHTML="Detected Animal Sound"+" : "+results[0].label;
    }

  

   img=document.getElementById("image_results");

   if(results[0].label=="Budgie Chirping")
   {
       document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
       document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
       img.src="budgies.gif";
       budgie=budgie+1;
       
    }
    else if(results[0].label=="Cat Meow")
   {
       document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
       document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
       img.src="cat.gif";
       cat=cat+1;
    }

    else if(results[0].label=="Dog Bark")
    {
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        img.src="dog.gif";
        dog=dog+1
     }
     else if(results[0].label=="Lion Roar")
     {
         document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
         document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
         img.src="lion_roar.gif";
         lion=lion+1
      }
    else
     {
        img.src="https://images.squarespace-cdn.com/content/v1/550297e8e4b0bbcda6d9cd85/1563863770484-2WKAZ1P9YJ8TP04D7KWU/Ear.gif?format=2500w";
        
        
     }
}
