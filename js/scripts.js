$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#tryAgain").hide();
    $("#books").hide();
    $("#channing").hide();
    $("#margot").hide();
    const gender = $("#genderInput").val();
    const age = $("#ageInput").val();
    const date = $("#dateInput").val();

    if (isNaN(age) || age < 1) {
      $("#tryAgain").show();
    } else if (age < 18) {
      $("#books").show();
    } else if (gender === "Both" && date === "Fancy dinner date") {
      $("#margot").show();
    } else if (gender === "Both" && date === "Night out at the club/bar") {
      $("#channing").show();
    } else if (gender === "Female") {
      $("#margot").show();
    } else {
      $("#channing").show();
    }
  });
});