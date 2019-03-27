document.querySelector("#table").addEventListener("click", event => {
  
  const target = event.target;

  const pressed = document.querySelector(".on");

  if (target.classList.contains("on")) 
  {
    target.classList.remove("on");
  } else
   {
    target.classList.add("on");
    
    if (pressed) 
    {
      pressed.classList.remove("on");
    }
   }
});
