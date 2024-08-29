function interperatedDream(response) {
  let interpretingMessage = document.querySelector("#interpreting-message");
  interpretingMessage.innerHTML = "";

  new Typewriter("#Interpretation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  console.log(response.data.answer);
}

function generateDream(event) {
  event.preventDefault();

  let key = "9d0d4df38e762b48ade23c7aefo5tbbd";
  let context =
    "you are an ancient dream interpreter and you have to interprete people's dream. Make nice and clear answers and never say I dont know or its too general or dreams doesn't have any meaning. your interpretaions shold not be less than 4 sentences and also it shold have a title with h2 size and a signature with the color of #4059837 also between your title and paragraph should be 30px space and between your signature and paragraph shold be 20px space. your signature shold have a font wight of 400 and its the words of signature(AI oneirologist), make sure that the title and also the signature is separated by a <br> from the body  and also the signature should be like a footer and ateast 30px away from the body.)";
  let instruction = document.querySelector("#input").value;
  let prompt = `interpreate the dream about ${instruction}`;
  let api = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${key}`;

  let interpreting = document.querySelector("#Interpretation");
  interpreting.innerHTML =
    '<div id="interpreting-message" class="blink">⏳ Interpreting the dream...</div>';

  axios.get(api).then(interperatedDream);
}

let form = document.querySelector("#form");
form.addEventListener("submit", generateDream);
