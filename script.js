// document.querySelector("h1").innerHTML = " Hi"; // Javascript
// $("h1").text("Goodbye"); //Jquery
// $(".my-div h1, p, h1").html("<b> Goodbye </b>");

// $("h,p").append(" Goodbye");

// $(" h1,p").prepend("Goodbye ");
// var mypara = $("<p> </p>").text("This is paragraph");
// $("p").after(mypara);
// $("p").before(mypara);
// var myattr = document.querySelector("a").getAttribute("href");
// console.log(myattr);
// $("a").attr("href");
// document.querySelector("a").setAttribute("href", "https://youtube.com"); // Javascript
// $("a").attr("href", "https://youtube.com"); //JQuery
// $("h1").css("color", "red");
// $("h1").css("padding", "1rem");
// $("h1").css("font-size", "3rem");
// $("h1").css({ color: "red", "font-size": "3rem", "font-style": "italic" });
// document.querySelector("button").addEventListener("click", function () {
//   document.querySelector("h1").innerHTML = "You have to add this";
// });

// $("button").click(function () {
//   $("h1").text("You have to add this");
// });

// $("button").click(function () {
//   $("h1").toggleclass("style1");
// });

// $(".mybutton").click(function () {
//   var value = this.innerHTML;
//   $("h1").text(value + " is clicked");
// });

// $(".mybutton").on("click", function () {
//   var value = this.innerHTML;
//   $("h1").text(value + " is clicked");
// });

// $(".mybutton").on("mouseover", function () {
//   var value = this.innerHTML;
//   $("h1").text(value + " is clicked");
// });

// $(".mybutton").on("mouseout", function () {
//   var value = this.innerHTML;
//   $("h1").text(value + " is clicked");
// });

// $("#loginbutton").click(function () {
//   var password1 = $("#pass1").val();
//   var password2 = $("#pass2").val();
//   if (password1 != "" && password2 != "") {
//     if (password1 == password2) {
//       alert("Successfully login");
//     } else {
//       alert("Password Mismatch");
//     }
//   } else {
//     alert("Please Enter Password");
//   }
// });

// $(".btn").click(function () {
//   $("#div1").hide(2000).show(2000);
// });
// $(".btn").click(function () {
//   $("#div1").toggle(2000);
// });
// $(".btn").click(function () {
//   $("#div1").fadeOut(2000).fadeIn(2000);
// });

// $(".btn").click(function () {
//   $("#div1").fadeToggle(2000);
// });

// $(".btn").click(function () {
//   $("#div1").fadeTo(2000, 0.7);
// });

// $(".btn").click(function () {
//   $("#div1").slideUp(2000).slideDown(2000);
// });
// $(".btn").click(function () {
//   $("#div1").slideToggle(2000);
// });

$(".btn").click(function () {
  $("#div1").animate({ height: "800px", width: "900px" }, 2000);
});
