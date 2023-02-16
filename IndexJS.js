function grabQuote() {
  const loadingQuote = document.getElementById('LoadingQuote');

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://quotes15.p.rapidapi.com/quotes/random/",
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "eb33b3735emsh6630f59760fd8c3p1fa8d7jsn39ffd81c4dca",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com"
    }
  };
  
  $.ajax(settings).done(function (response) {
    const author = response["originator"].name
    const text = response.content
	  loadingQuote.innerHTML = '"'+text+'", '+'-'+author
  });
}

function getTime() {
  var now = new Date();
  var hou = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var pe = "am";

  if(hou >= 12){
    pe = "pm";
  }
  if(hou == 0){
    hou = 12;
  }
  if(hou > 12){
    hou = hou - 12;
  }
  
  Number.prototype.pad = function(digits){
    for(var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  }
  
  document.getElementById("clock").innerHTML = hou.pad(2)+":"+min.pad(2)+":"+sec.pad(2)+pe
}

function transitionLoading() {
  grabQuote()
  setTimeout(function(){
    document.getElementById("LoadingDiv").classList.toggle('transition');
    document.getElementById("LoadingIcon").classList.toggle('transition');
  }, 4000)
  setTimeout(function(){
    var domElement = document.getElementById('LoadingDiv');// don't go to to DOM every time you need it. Instead store in a variable and manipulate.
    domElement.style.position = "absolute";
    domElement.style.top = 50000; //or whatever 
    domElement.style.left = 50000; // or whatever
  }, 5000)
}

window.setInterval("getTime()", 500)
// setTimeout(transitionLoading, 5000)
