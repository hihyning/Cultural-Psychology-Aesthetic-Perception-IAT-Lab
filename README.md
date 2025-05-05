## 🧠 Project Overview: Cross-Cultural Aesthetic Perception IAT

### 🗂️ Purpose

This project is a web-based psychology experiment that adapts the **Implicit Association Test (IAT)** to study how individuals from different cultural backgrounds implicitly associate visual design styles (Eastern vs Western) with emotional valence (Good vs Bad).

The goal is to detect **perceptual bias or fluency** in aesthetic categorisation across cultures. The experiment is framed as a research project for a design/psychology lab context.

---

### 🧪 Core Research Question

> How do cultural backgrounds shape the **implicit associations** between visual design styles (e.g. East Asian vs Western graphic language) and affective categories (good/bad)?

---

### 🛠️ What I’m Building

I am creating a **multi-step browser-based experiment**, with the following key features:

* Fully built in **HTML/CSS/JavaScript**
* Runs on **desktop or laptop** (not mobile)
* Uses **keyboard inputs** (`E` and `I` keys) for binary categorisation
* Measures **reaction time (RT)** in milliseconds
* Stores user responses to a **Google Sheets backend** (via Apps Script webhook)

---

### 🧩 Experiment Procedure

The experiment follows a modified IAT format with the following stages:

#### 1. Welcome / Consent Page

* Brief intro
* Consent button → starts the experiment

#### 2. **Pre-Task Questionnaire**

Collects baseline data without priming:

* **Appeal rating** of design (Likert scale 1–7)
* **Confidence** in recognising visual styles
* Self-report: “Does your culture shape how you see design?” (Yes/No/Unsure)

#### 3. **Practice Block 1** – Categorise Images

* Users categorise 10 images as either **East** or **West**
* Press `E` = EAST, `I` = WEST
* Images are pre-labeled; used for practice only
* Reaction times and accuracy are optionally recorded

#### 4. **Practice Block 2** – Categorise Words

* Users categorise words as either **Good** or **Bad**
* `E` = GOOD, `I` = BAD
* Stimuli: positive and negative words (e.g. joy, failure, respect, hate)

#### 5. **Trial A (Congruent Block)**

* Key mappings: `E` = EAST or GOOD, `I` = WEST or BAD
* Mixed random sequence of images and words
* Reaction time recorded for each item
* Stimuli presented one-by-one with forced choice

#### 6. **Trial B (Incongruent Block)**

* Key mappings reversed: `E` = EAST or BAD, `I` = WEST or GOOD
* Same format as Trial A, but with flipped logic
* RT data used to compute **bias score (D-score)**

#### 7. **Post-Task Questionnaire**

Gathers metadata:

* Age, gender, nationality
* Design training (Y/N)
* Familiarity with Eastern and Western design (Likert 1–7)
* Open-ended reflection on difficulty or naturalness of pairings

#### 8. **Thank You Screen**

---

### 🧮 Data Captured per Participant

* Reaction time (in milliseconds) per stimulus
* Whether response was correct/incorrect
* Block type (Practice, Congruent, Incongruent)
* Participant metadata: age, gender, nationality, design background, etc.
* Confidence score (optional every N trials)
* IAT bias score (D-score calculation) – computed in JS
* Data sent to Google Sheets

---

### 📊 Analysis Plan (not implemented in code yet)

1. **D-score calculation** between congruent and incongruent RT blocks
2. Paired t-tests for within-subject differences
3. ANOVA for interaction between cultural group and trial block
4. Correlation between bias score and design exposure
5. Optional: cluster participants by self-identified background

---

### 🧱 Current Structure

#### ✅ Files

* `index.html` – Full experiment page with all sections (`<section>` elements toggled)
* `styles.css` – UI styling (font: Space Grotesk, Urbanist; neutral UI)
* `iat-script.js` – JS logic for advancing stages, tracking response time
* (To be added) `stimuli.js` or JSON – for storing East/West image paths and word lists
* Google Sheets webhook placeholder present in `submitData()`

---

### 🧾 Example Key Mapping Logic (JS)

```js
// Congruent: E = East/Good | I = West/Bad
const congruentMap = {
  EAST: 'E',
  GOOD: 'E',
  WEST: 'I',
  BAD: 'I',
};

// Incongruent: E = East/Bad | I = West/Good
const incongruentMap = {
  EAST: 'E',
  BAD: 'E',
  WEST: 'I',
  GOOD: 'I',
};
```