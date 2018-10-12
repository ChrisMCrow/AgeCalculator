import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalculator } from "./ageCalculator.js";

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let birthdate = $("#birthdate").val();
    let gender = $("input[name='gender']:checked").val();
    let origin = $("#origin option:selected").val();
    let newUser = new AgeCalculator(birthdate, gender, origin);

    $("#result").show();
    $("#earthAge").text(newUser.age);
    $("#mercuryAge").text(newUser.mercuryAge());
    $("#venusAge").text(newUser.venusAge());
    $("#marsAge").text(newUser.marsAge());
    $("#jupiterAge").text(newUser.jupiterAge());
    $("#earthTimeLeft").text(Math.ceil(newUser.timeLeft));
    $("#mercuryTimeLeft").text(newUser.mercuryTimeLeft());
    $("#venusTimeLeft").text(newUser.venusTimeLeft());
    $("#marsTimeLeft").text(newUser.marsTimeLeft());
    $("#jupiterTimeLeft").text(newUser.jupiterTimeLeft());
    $("#genderInput").text(newUser.gender);
    $("#originInput").text(newUser.origin);
    $("#lifeExpectancyInput").text(newUser.lifeExpectancy)
  });
});
