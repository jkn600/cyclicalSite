
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

$('#expandMenu').on('click', () => {
  var x = document.getElementById("navBar");
    var y = document.getElementById("header");
    if (x.className === "topNav") {
      x.className += " responsive";
      y.style.height = "200px";
    } else {
      x.className = "topNav";
      y.style.height = "100px";
    }
});