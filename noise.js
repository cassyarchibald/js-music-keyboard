$(document).ready(function() {
  // your code here
  // Use event delegation? audio_embeds .click(function(event){
  // get class via event / do class.play()?
  // })
  $(".instrument").on("click", "button", function(event) {
    // Swith case for class?
    if ($(event.target).hasClass("a")) {
      $("#aAudio")[0].play();
    } else if ($(event.target).hasClass("b")) {
      $("#bAudio")[0].play();
    } else if ($(event.target).hasClass("c")) {
      $("#cAudio")[0].play();
    } else if ($(event.target).hasClass("d")) {
      $("#dAudio")[0].play();
    } else if ($(event.target).hasClass("e")) {
      $("#eAudio")[0].play();
    } else if ($(event.target).hasClass("f")) {
      $("#fAudio")[0].play();
    } else if ($(event.target).hasClass("g")) {
      $("#gAudio")[0].play();
    }
    // case .hasClass("c")
  });
  // Get class? - audio_embeds - if cAudio, daudio, etc.
  // Enter switch statement to apply class?
  // cAudio.play();
});
