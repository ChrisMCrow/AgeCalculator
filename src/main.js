import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let birthdate = $("#birthdate").val();
    let gender = $("input[name='gender']:checked").val();
    let origin = $("#origin option:selected").val();
    let newUser = new AgeCalculator(birthdate, gender, origin);
  });
});
