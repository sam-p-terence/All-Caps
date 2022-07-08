
const text = document.getElementById("text");
const title = document.getElementById("title");
const text2 = document.getElementById("text2");
const title2 = document.getElementById("title2");
const text3 = document.getElementById("text3");
const title3 = document.getElementById("title3");

text.onmouseover = function () {
  text.innerHTML =
    "He probably failed in the end.";
  title.innerHTML = "Spoiler Alert";
};

text.onmouseout = function () {
  text.innerHTML = "NoZaMa's Album Shop started in July of 2022 when student Terence Sam was forced to create the werbsite in order to pass his Capstone Project Assessment.";
  title.innerHTML = "What is NoZaMa's Album Shop?";
};

text2.onmouseover = function () {
  text2.innerHTML = "Thanks to Fedex, there have been multiple shipping delays. Also, this isn't a real shop either.";
  title2.innerHTML = "Then where are the new albums?";
};

text2.onmouseout = function () {
  text2.innerHTML = "As a locally grown company, we strive to bring the most up to date albums into our collection.";
  title2.innerHTML = "What's unique about NoZaMa's?";
};

text3.onmouseover = function () {
  text3.innerHTML = "Bamboo material stolen from Pandas around the world.";
  title3.innerHTML = "***";
};

text3.onmouseout = function () {
    text3.innerHTML = "We ship out albums using bamboo pacaking and locally sourced materials which have not been tested on animals.***";
    title3.innerHTML = "What's so special about selling albums? Every store does it.";
};
