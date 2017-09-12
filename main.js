$(function(){
  var background_transparency = 0.75;

  $("#profile_page").hide();
  $("#education_page").hide();
  $("#projects_page").hide();
  $("#title p1").fadeTo(1,0);
  $("#title p2").fadeTo(1,0);
  $("#title p3").fadeTo(1,0);
  $("#footer").fadeTo(1,0);
  $("#home_button").fadeTo(1,0);
  $("#profile_button").fadeTo(1,0);
  $("#education_button").fadeTo(1,0);
  $("#projects_button").fadeTo(1,0);

  $("#title p1").fadeTo(2500, 1, function(){
    $("#title p3").fadeTo(1500, 1, function(){
      $("#title p2").fadeTo(1500, 1, function(){
        $("#footer").fadeTo(1500, 1, function(){
          $("#home_button").fadeTo(200, 1, function(){
            $("#profile_button").fadeTo(200, 1, function(){
              $("#education_button").fadeTo(200, 1, function(){
                $("#projects_button").fadeTo(200, 1);
              });
            });
          });
        });
      });
    });
  });

  $("#home_button").click(function(){
    focusObject("home_button");
    showAndHide("#home_page");
    $("#background_image").fadeTo(1500, 1);
  });
  $("#profile_button").click(function(){
    focusObject("profile_button");
    showAndHide("#profile_page");
    $("#background_image").fadeTo(1500, background_transparency);
  });
  $("#education_button").click(function(){
    focusObject("education_button");
    showAndHide("#education_page");
    $("#background_image").fadeTo(1500, background_transparency);
  });
  $("#projects_button").click(function(){
    focusObject("projects_button");
    showAndHide("#projects_page");
    $("#background_image").fadeTo(1500, background_transparency);
  });

  $(".card img").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Expand";
        });
    });

});
});


function focusObject(clickedItem){
  var prev = document.getElementsByClassName("selected")[0];
  var item = document.getElementById(clickedItem);
  prev.classList.remove("selected");
  prev.classList.add("unselected");
  item.classList.add("selected");
  item.classList.remove("unselected");
}

function showAndHide(clickedItem){
  var list = ["#home_page", "#profile_page", "#education_page", "#projects_page"];

  list.forEach(function(list_item){
    if (list_item != clickedItem){
      $(list_item).fadeOut(1000);
    }
  });
  $(clickedItem).fadeIn(1000);
}
