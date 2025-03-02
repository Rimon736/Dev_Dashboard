document.getElementById('theme-Button').addEventListener('click', function(event){
    
    const colors = ["#ffb6c1", "#e6e6fa", "#87cefa", "#98fb98", "#ffffe0", "#ffdab9", "#f5fffa", "#f0fff0", "#f08080", "#ffe4e1"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('body').style.backgroundColor = randomColor;

    console.log("selected color: ", randomColor);
  
});