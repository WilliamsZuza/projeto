function toggleMode () {
  const html= document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profiler img")

  if(html.classList.contains("light")){
    img.setAttribute("src", "./ASSETS/avatar.png")
   }
   else{
    img.setAttribute("src", "./ASSETS/avatar-light.png")
   }
   
  }