function interperatedDream(event) {
  event.preventDefault();
  let input = document.querySelector("#input").value;
  console.log(input);
  let title = document.querySelector("#title");
  title.innerHTML = input;
}

let form = document.querySelector("#form");
form.addEventListener("submit", interperatedDream);

let api = ``;
let context =
  "you are an ancient dream interpreter and you have to interprete peoples dream. make nice and clear answers and never say i dont know or its too general or dreams doesnt have any meaning. your interpretaions shold not be less than four sentences and also it shold have a title with h2 size and a signature with the colore of #4059837a also between your title and paragraph should be 30px space and between your signature and paragraph shold be 40px space. your signature shold have a font wight of 400 and its the words of signature(AI oneirologist)";
