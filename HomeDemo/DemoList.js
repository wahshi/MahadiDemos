$(document).ready(function() {
  //Loading JSON info into var data before looping over it
  $.getJSON('ListofSites.json', function(data) {

    // Going over json element
    $.each(data.Pages, function(key, val) {
      // constructing the li element from the json
      var $newLi = "<li>" + val.pName + " <a href=" + val.pURL + ">....</a> <p>" +
      val.pDescr +"</p> </li>";
      $(".siteNames").append($newLi );
    });

  });
});
