
class Rating {


  constructor() {


   this.button = document.getElementById("send-rate");
   this.inputs = document.getElementsByTagName("input")
   this.img = document.getElementsByTagName("img")
   this.imgContainer = document.getElementsByClassName("img-container-default");
   this.setEvents();


  }

  setEvents() {

    // Accept the checked input
  
     this.button.addEventListener("click",(e) => {
       
       e.preventDefault()
       let value;
       
       for(let i=0;i<=this.inputs.length-1;i++) {

         if(this.inputs[i].checked === true) {

          value = this.inputs[i].getAttribute("id")


         }


       }

       // Set new CSS properties
  
       this.imgContainer[0].style.width = "auto"
       this.imgContainer[0].style.heigth = "auto";
       this.imgContainer[0].style.borderRadius = "0px"
       this.imgContainer[0].setAttribute("class","img-container-sub ")
       this.img[0].setAttribute("src","images/illustration-thank-you.svg");
       this.img[0].setAttribute("class","thank-you-img");
       this.img[0].setAttribute("alt","");
       document.getElementsByClassName("rating-section")[0].remove()
       document.getElementsByTagName("h1")[0].textContent = "Thank you !";
       document.getElementsByClassName("app-description")[0].style.textAlign = "center";
       document.getElementsByClassName("app-description")[0].style.marginRight = "0px";
       document.getElementsByClassName("app-description")[0].style.marginBottom = "2em";
       document.getElementsByTagName("p")[0].textContent = "We appreciate you taking the time to give a rating. If you ever need more support,dont hesitate to get in touch!"
       this.button.remove();
       document.getElementsByClassName("rate-value-container")[0].style.display = "block";
       document.getElementsByClassName("rate-value-container")[0].textContent = `You selected ${value[value.length-1]} out of 5`

      

       

     })


     //if any input isnt focused, he will be set to not to checked state, we want of course only one checked input:)
     document.body.addEventListener("click",(e) => {

        let focusedElement = document.activeElement.getAttribute("for");
   
        if(e.target.nodeName === "INPUT")   {

           for(let i=0;i<=this.inputs.length-1;i++) {

              if(this.inputs[i].getAttribute("id") !== focusedElement) {

                this.inputs[i].checked = false;
      

              }
 

           }


        }  


     })


  }



}