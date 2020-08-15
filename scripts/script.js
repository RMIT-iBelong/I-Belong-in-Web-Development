// "All things JS" Lesson

function submitThoughts() {
  var today = new Date();
  var thoughts = document.getElementById("thoughts").value;
  console.log(today + ":", thoughts);
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
