var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;

var submitButton = document.getElementById('submit')

      function submitQuestion() {

        var question;
        var answer;

        var newQuestion = {
          question = nquestion,
          password = npassword,
        }

        // Send post request with new user's data.
        $.post( "/insertquestion", newQuestion );
      }

      signUpButton.addEventListener('click', submit, false);
      