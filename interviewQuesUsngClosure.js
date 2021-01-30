//------function returning function using closure-----------
function interviewQuestion(job) {
  return function (name) {
    if (job === "teacher") {
      console.log(`${name} What is 2nd law of motion`);
    } else if (job === "developer") {
      console.log(`Tell me about closure ${name}`);
    } else if (job === "pilot") {
      console.log(`${name} Why we use flaps in an aeroplane`);
    } else {
      console.log(`What do you do`);
    }
  };
}

interviewQuestion("pilot")("Saransh");

//or

let jobQuestion = interviewQuestion("developer");

jobQuestion("Saransh");
