const button = document.getElementById("identifyBtn");
const output = document.getElementById("output");

const fakeMovieDB = [
  { clue: "why so serious", title: "The Dark Knight" },
  { clue: "i'll be back", title: "The Terminator" },
  { clue: "to infinity and beyond", title: "Toy Story" }
];

button.addEventListener("click", () => {
  const userText = document.getElementById("userInput").value.toLowerCase();

  const match = fakeMovieDB.find(movie =>
    userText.includes(movie.clue)
  );

  if (match) {
    output.textContent = `🎬 Movie Identified: ${match.title}`;
  } else {
    output.textContent = "❌ No match found (yet)";
  }
});