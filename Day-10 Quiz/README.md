# Website 10 – Interactive Quiz Wizard 🎯📝

![Quiz App Preview](./assets/Final%20Gif.gif)

[🌐 Visit Interactive Quiz Wizard](https://ranim-k.github.io/Web-Projects/Day-10%20Quiz/)

This is the **tenth & final project** in my *“10 Websites in HTML, CSS & JavaScript”* journey.  
It’s a fully-interactive **multi-step quiz** that showcases dynamic DOM manipulation, state management, and polished UI details.

---

## 📌 Overview

The app walks users through **five questions**—one per screen—collects their answers, and then presents a neat **summary page**.

### Key Features
|  |  |
|---|---|
| 🔄 **Single-page flow** | No page reloads; questions render dynamically. |
| 🎨 **Custom radio buttons** | Native inputs are hidden and replaced with animated, brand-colored circles. |
| 🖥 **Responsive split layout** | Question panel + decorative illustration adapt from desktop to mobile. |
| 📊 **Progress indicator** | “Step X / 5” title updates automatically. |
| ✨ **Animated transitions** | A brief delay after each choice lets users see the selection highlight. |
| 🦊 **Cross-browser styles** | Uses `:has()` where supported, plus JS fallback for Firefox. |

---

## 💡 Purpose

This project cements everything learned in the previous nine sites:

1. **DOM-driven rendering** (looping over a questions array).  
2. **Componentised styling** (radio, option box, progress titles).  
3. **State management** with a mini in-memory store (`current`, `userAnswers`).  
4. **Progressive enhancement**—modern CSS first, graceful JavaScript fallback.  

Use it as a springboard to build surveys, onboarding flows, or personality quizzes.

---

## 🛠 Tech Stack

| Tech | Role |
|------|------|
| **HTML5** | Semantic structure for questions, options & summary. |
| **CSS3**  | Flexbox layout, custom form controls, transitions. |
| **JavaScript (ES6+)** | Dynamic rendering, state, navigation logic. |
| **SVG** | Inline illustration & icons. |
| **Google Fonts** | “Roboto”, “Archivo Black”, “Fjalla One”, “Poppins”. |

---

## 🚀 How It Works

1. On load, `renderQuestion()` injects Question 1 into the `.container-question`.
2. Each option is a `<label>` wrapping a hidden radio + custom circle + text.
3. Selecting an option:
   - JS adds a `.selected` class (Firefox support)  
   - Saves the answer to `userAnswers[current]`  
   - Advances to the next question after **350 ms**.
4. When all five questions are answered, `showSummary()` replaces the question panel with a recap list.
5. The **back arrow** (`.nav`) lets users revisit the previous step.

> **Note:** No backend—data lives in memory only.

![Quiz App Preview](./assets/Final%20Gif.gif)