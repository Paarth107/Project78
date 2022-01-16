var names= ["Mom, Dad, Maanya, Surabhi, Me, Chloe"]
var images= ["Mom.jpeg", "Dad.jpeg", "Maanya.jpeg", "Surabhi.jpeg", "Me.jpeg", "Chloe.jpg"]

var i=0
function nextslide() {
  document.getElementById("img1").src=
    images [i]
  i++;
}
if (i==5)
  {
    i=0;
  };

  function lol() {
    document.getElementById("lol").value=
      names [i]
    i++;
  }
  if (i==5)
    {
      i=0;
    };

