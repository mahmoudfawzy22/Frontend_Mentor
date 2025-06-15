const listItems = document.querySelectorAll(".links li");

listItems.forEach(li => {
  li.addEventListener("mouseenter", () => {
    li.style.backgroundColor = "hsl(75, 94%, 57%)";
    li.style.color = "black";
  });

  li.addEventListener("mouseleave", () => {
    li.style.backgroundColor = "";
    li.style.color = "";
  });
});
