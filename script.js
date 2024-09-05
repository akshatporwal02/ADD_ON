
function menuopen(){
    document.getElementById("links").style.left="0";
    document.getElementById("links").style.top="0";
    document.getElementById("links").style.padding="20px";
    document.getElementById("links").style.width="50%";
    document.getElementById("links").style.transition="0.5s";


}
function menuclose() {
    document.getElementById("links").style.left = "-400px";
  }


  let i = 0;
let txt1 = `Give Your Vehicle a New Feel With ADD ON AUTO INDUSTRIES`; /* The text */
let speed = 30; /* The speed/duration of the effect in milliseconds */
let txtLength = txt1.length;
const words = txt1.split(' ');

// Function to wrap the last two words in a span with a highlight class
function getHighlightedText() {
  if (words.length < 4) return txt1; // If less than two words, return the text as is

  const lastTwoWords = words.slice(-4).join(' ');
  const textWithoutLastTwo = words.slice(0, -4).join(' ');

  // Return the HTML string with the last two words wrapped in a span
  return `${textWithoutLastTwo} <span class="highlight">${lastTwoWords}</span>`;
}

// Typewriter function
function typeWriter() {
  const highlightedText = getHighlightedText();

  if (i < highlightedText.length) {
    document.getElementById("demo").innerHTML = highlightedText.substring(0, i + 1);
    document.getElementById("demo").style.fontSize = '60px';
    document.getElementById("demo").style.width = '60%';
    document.getElementById("demo").style.lineHeight = '1.5';
    document.getElementById("demo").style.marginTop = '60px';
    document.getElementById("demo").style.color = 'black';
    document.getElementById("demo").style.fontFamily = 'sans-serif';
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Start typing effect
typeWriter();
// script.js




function formclose(){
  document.getElementById("form").style.top='-800px'
  document.getElementById("form").style.transition='0.5s'
  // document.getElementById("hovercard").style.transition=' 0.8s'
  document.getElementById("hovercard").style.top='-1200vh'

}
function formopen(){
  
  document.getElementById("form").style.top='200px'
  document.getElementById("form").style.right='0px'
  document.getElementById("form").style.transition='0.5s'
  document.getElementById("form").style.display='flex'
  document.getElementById("hovercard").style.top='0vh'
  // document.getElementById("hovercard").style.transition='1s'
  
}

function open_search(){
  document.getElementById("search").style.top='0px'
  // document.getElementById("search").style.right='10vh'
  document.getElementById("search").style.display='flex'
}
function close_search(){
  document.getElementById("search").style.top='-100vh'
}

 