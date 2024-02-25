document.body.onload = function() {
  myFunction();
};

function myFunction() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var part = who.length;
  var part2 = action.length;
  var part3 = what.length;
  var part4 = when.length;

  var ramdomwho = Math.floor(Math.random() * part);
  var randomaction = Math.floor(Math.random() * part2);
  var randomwhat = Math.floor(Math.random() * part3);
  var randomwhen = Math.floor(Math.random() * part4);

  document.getElementById("excuse").innerHTML =
    "OMG, You will not believe me but ...<br>" +
    who[ramdomwho] +
    " " +
    action[randomaction] +
    " " +
    what[randomwhat] +
    " " +
    when[randomwhen];
}
