/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
  evt.preventDefault();
  const response = await axios.post("/api/get-lucky-num", {
    name: $("#name").val(),
    email: $("#email").val(),
    year: parseInt($("#year").val()),
    color: $("#color").val().toLowerCase(),
  });

  handleResponse(response);
}

/** handleResponse: deal with response from our lucky-num API. */

async function handleResponse(resp) {
  const lucky = resp.data.lucky_number_fact;
  const year = resp.data.year_fact;

  let luckyNum = lucky.split(" ").shift();
  let newLucky = lucky.replace(luckyNum, "").trim();

  let yearNum = year.split(" ").shift();
  let newYear = year.replace(yearNum, "").trim();

  const $luckyCont = $("<div>").attr("id", "lucky-container");
  const $yearCont = $("<div>").attr("id", "year-container");
  $("#lucky-results").append($luckyCont, $yearCont);

  $luckyCont.html(
    `<h3 class="ml-5 w-40">Your lucky number is <strong class="underline decoration-sky-500">${luckyNum}</strong>, and your lucky number fact:${newLucky}</h3>`
  );

  $yearCont.html(
    `<h3 class="ml-5 w-40">Your birth year is <strong class="underline decoration-sky-500">${yearNum}</strong>, and your birth year fact:${newYear}</h3>`
  );
  $("#lucky-results").css("display", "none");
  $("#lucky-results").fadeIn(300);
}

$("#lucky-form").on("submit", processForm);
