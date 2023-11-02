
function scrollFunction() {
   
    let nav =document.getElementById("navbarNav");

    nav.classList.remove("show");
   
 
    const humBar = document.getElementById("hum-bar");
    humBar.classList.toggle("collapsed");
    
    

  
  
  }




  const htmlProgressbar = document.getElementById('html-progress-bar');
  const  htmValue=document.getElementById("html-vlue");

  const cssProgressbar = document.getElementById('css-progress-bar');
  const  cssValue=document.getElementById("css-vlue");
  
  const jsProgressbar = document.getElementById('js-progress-bar');
  const  jsValue=document.getElementById("js-vlue");
  
   
    
  function updateProgressBar(progress) {
    htmlProgressbar.style.width = progress.htmValue + '%';
    htmValue.style.marginLeft= progress.htmValue + '%';
    htmValue.innerHTML=progress.htmValue + '%';


    cssProgressbar.style.width = progress.cssValue + '%';
    cssValue.style.marginLeft= progress.cssValue + '%';
    cssValue.innerHTML=progress.cssValue + '%';

    jsProgressbar.style.width = progress.jsValue + '%';
    jsValue.style.marginLeft= progress.jsValue + '%';
    jsValue.innerHTML=progress.jsValue + '%';
   
    
  }
  // let progressValue = {
  //   htmValue:"" ,
  //   cssValue: "",
  //   jsValue: "" ,
  // };
  setTimeout(() => {
    updateProgressBar(progressValue);
  },3 );
  