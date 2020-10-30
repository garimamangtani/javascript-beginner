const totalOptions = 3;
const questions = [
  {
    question: "How many actors have played the role of James Bond?",
    answer: {
      a: "9",
      b: "8",
      c: "7",
    },
    correct: "a",
  },
  {
    question: "What is a baby goat called?",
    answer: {
      a: "Joey",
      b: "Kid",
      c: "Pawn",
    },
    correct: "b",
  },
  {
    question: "Which European country eats the most chocolate per capita?",
    answer: {
      a: "Switzerland",
      b: "Germany",
      c: "Serbia",
    },
    correct: "a",
  },
  {
    question: `What color is the black box in an aeroplane?`,
    answer: {
      a: "Red",
      b: "Orange",
      c: "Black",
    },
    correct: "b",
  },
  {
    question: `The Ring of Fire is located in the basin of which ocean?`,
    answer: {
      a: "The Arctic Ocena",
      b: "The Atlantic Ocean",
      c: "The Pacific Ocean",
    },
    correct: "c",
  },
  {
    question: "How many dimples does the average golf ball have?",
    answer: {
      a: "336",
      b: "332",
      c: "330",
    },
    correct: "a",
  },
  {
    question: "What is the world's longest river?",
    answer: {
      a: "Amazon",
      b: "Ganges",
      c: "Nile",
    },
    correct: "c",
  },
  {
    question: "What do the rings on the Olympic Games symbol represent?",
    answer: {
      a: "The Oceans",
      b: "The continents",
      c: "The Stars",
    },
    correct: "b",
  },
  {
    question: "What part of a horse would you examine to tell its age?",
    answer: {
      a: "Ears",
      b: "Teeth",
      c: "Tail",
    },
    correct: "b",
  },
  {
    question: "How many years was Nelson Mandela imprisoned for?",
    answer: {
      a: "27",
      b: "25",
      c: "20",
    },
    correct: "a",
  },
];

document.querySelector("#sumitbtn").style.display = "none";
document.querySelector("#trybtn").style.display = "none";
document.querySelector("#result").style.display = "none";
const output = [];

function generatequiz() {
  var noOfQuestions = 1;
  for (var i = 0; i < questions.length; i++) {
    var answers = [];
    var j = 0;

    //for options
    for (key in questions[i].answer) {
      answers.push(
        `<div id="lid${i}${j}"><label><input type="radio" id="id${i}${j}" name="question${i}" value="${key}"> ${key}: ${questions[i].answer[key]}</label></div>`
      );
      j++;
    }
    //for set of questions
    output.push(
      `<div id="questions${i}" class="container1">
          <p class="themecolor">${noOfQuestions}. ${questions[i].question}</p>
                ${answers.join("")}
          </div>
          `
    );
    noOfQuestions++;
  }

  document.querySelector("#questions").innerHTML = output.join("");
  document.querySelector("#sumitbtn").style.display = "block";
  document.querySelector("#genbtn").style.display = "none";
  document.querySelector("#maintext").style.display = "none";
}
function result() {
  document.querySelector("#questions").style.display = "none";
}

// var input = document.getElementsByName("questions1").value;
// console.log(input);
function displayRadioValue() {
  document.querySelector("#sumitbtn").style.display = "none";
  var resArr = [];
  var count = 0;
  for (var i = 0; i < questions.length; i++) {
    //questions
    var isCorrect = false;
    for (var j = 0; j < totalOptions; j++) {
      //options
      var radioelem = document.querySelector(`#id${i}${j}`);
      if (radioelem.checked && radioelem.value === questions[i].correct) {
        isCorrect = true;
        document.querySelector(`#lid${i}${j}`).style.color = "lightgreen";
        break;
      }
      if (radioelem.checked && radioelem.value != questions[i].correct) {
        document.querySelector(`#lid${i}${j}`).style.color = "tomato";
      }
    }
    //questions
    if (isCorrect) {
      resArr.push({ question: questions[i].question, isCorrect: true });
      count++;
    } else {
      resArr.push({ question: questions[i].question, isCorrect: false });
    }
  }
  window.scroll(0, 0);
  document.querySelector("#result").style.display = "block";
  document.querySelector("#correct").innerHTML = `${count} `;
  document.querySelector("#total").innerHTML = `${questions.length} `;

  document.querySelector("#trybtn").style.display = "block";
}
//out of ${questions.length} correct!`;
