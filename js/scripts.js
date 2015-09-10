function multipleCounter(unit, limit) {
  var amount = Math.floor(limit / unit);
  var numbers = new Array();
  for(var i = 1; i <= amount; i++) {
    numbers.push((i * unit))
  }
  return numbers;
};

$(document).ready(function(){
  $("form#multipleCounter").submit(function(event){
    var multiple = parseInt($("input#multiple").val());
    var limit = parseInt($("input#limit").val());
    var result = multipleCounter(multiple, limit);

    $(".multiple").text(multiple);
    $(".limit").text(limit);
    $(".counter").text(result.join(", "));
    $("#result").show();
    event.preventDefault();
  });
});
