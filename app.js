const inputText = document.querySelector ("input")

const containerImage = document.getElementById("elementos")

inputText.addEventListener("keypress", (event) => {
    let key = event.whitch || event.keyCode;
    if (key ===13){
        let gif = inputText.value;
       
        inputText.value ="";
        
        fetch (`http://www.omdbapi.com/?i=${movie}&apikey=8d5b0ca6`)
          .then(response => response.json())
          .then(data => {
              
              renderInfo(data);
          })
    }

})
 const renderInfo = data =>{
    data.forEach(function(element => {
     let gifImage = element.images.downsized_large.url;  
     
     containerImage.innerHTML = `<img src="${gifImage}">`;
 
    }
}


 //$(document).ready(function({
 //   var dibujarGifs = function(data{
 //       var gif ="";
   //     var url ="";
   //     data.forEach(function(element){
    //        gif = element.images.downsized_large.url;
     //       url = element.bitly_gif_url;
      //      $("#elementos").append(armarTemplate(gif,url));

      
