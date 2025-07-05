/* ---------- Quiz data (edit to suit) ---------- */
const questions = [
  {
    title: "What is your goal?",
    options: ["Relax and unwind", "Stay active", "Learn something new", "Have fun"]
  },
  {
    title: "Pick a time of day",
    options: ["Morning", "Afternoon", "Evening", "Late night"]
  },
  {
    title: "Choose a location",
    options: ["Indoors", "Outdoors", "Online", "Anywhere"]
  },
  {
    title: "Select a budget",
    options: ["Free", "Under $20", "Under $50", "Sky’s the limit"]
  },
  {
    title: "How social do you feel?",
    options: ["Solo", "With a friend", "Small group", "Big crowd"]
  }
];

/* ---------- Cache key DOM nodes ---------- */
const stepSpan   = document.querySelector(".step span");
const goalEl     = document.querySelector(".goal");
const answersEl  = document.querySelector(".answers");
const containerQ = document.querySelector(".container-question");

/* ---------- State ---------- */
let current = 0;
const userAnswers = [];   // stores value of each choice

/* ---------- Render current question ---------- */
function renderQuestion() {
  const q = questions[current];

  // Update header text
  stepSpan.textContent = current + 1;
  goalEl.textContent   = q.title;

  // Build option markup
  answersEl.innerHTML = "";
  q.options.forEach(opt => {
    const label = document.createElement("label");
    label.className = "options";
    label.innerHTML = `
      <input type="radio" name="quiz" value="${opt}">
      <span class="custom-radio"></span>
      <span class="label-text">${opt}</span>
    `;
    answersEl.appendChild(label);
  });

  // Attach click / change handlers
  answersEl.querySelectorAll("input[type=radio]").forEach(input => {
    input.addEventListener("change", () => {
      /* ---- visual feedback that works in every browser ---- */
      answersEl.querySelectorAll(".options").forEach(l => l.classList.remove("selected"));
      input.closest(".options").classList.add("selected");

      /* ---- save answer & move on after short pause ---- */
      userAnswers[current] = input.value;
      setTimeout(nextStep, 350);   // 350 ms lets highlight be seen
    });
  });
}

/* ---------- Advance or finish ---------- */
function nextStep() {
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showSummary();   // all done
  }
}

/* ---------- Simple results screen ---------- */
function showSummary() {
  containerQ.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;gap:1rem;margin-top:20%; font-size:30px">
      <h2 style="color:#0c88a9;font-family:'Archivo Black',sans-serif;">Thanks!</h2>
      <p style="font-family:'Fjalla One',sans-serif;text-align:center;">Here’s what you picked:</p>
      <ul style="list-style:none;padding:0;font-family:'Poppins',sans-serif;">
        ${userAnswers.map((ans,i)=>`<li><strong>Step ${i+1}:</strong> ${ans}</li>`).join("")}
      </ul>
    </div>
  `;
}

/* ---------- Kick things off ---------- */
renderQuestion();

/* ---------- Optional: back-arrow navigation ---------- */
document.querySelector(".nav").addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
});
