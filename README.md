# Algebra & Pre-Calculus Notes Site

A Paul's Online Notes-style math tutorial site for Algebra through Pre-Calculus.
Built with plain HTML, CSS, JavaScript, and MathJax for math rendering.
No build tools required — open any `.html` file directly in a browser.

## Structure

```
index.html                        ← Homepage
css/style.css                     ← All site styles
js/site.js                        ← Show/hide solutions + sidebar JS
classes/
  algebra/
    algebra.html                  ← Algebra course overview
    ch1-exponents.html            ← Chapter 1: Exponents & Radicals  ✅ Full
    ch2-polynomials.html          ← Chapter 2: Polynomials           ✅ Full
    ch3-factoring.html            ← Chapter 3: Factoring             ✅ Full
    ch4-rational.html             ← Chapter 4: Rational Expressions  🔲 Stub
    ch5-equations.html            ← Chapter 5: Solving Equations     ✅ Full
    ch6-inequalities.html         ← Chapter 6: Inequalities          🔲 Stub
    ch7-functions.html            ← Chapter 7: Functions & Graphs    🔲 Stub
    ch8-lines.html                ← Chapter 8: Lines & Systems       🔲 Stub
    ch9-explog.html               ← Chapter 9: Exponentials & Logs   ✅ Full
  precalc/
    precalc.html                  ← Pre-Calc course overview
    ch1-trig-basics.html          ← Chapter 1: Trig Basics           ✅ Full
    ch2-trig-graphs.html          ← Chapter 2: Trig Graphs           🔲 Stub
    ch3-trig-identities.html      ← Chapter 3: Trig Identities       ✅ Full
    ch4-inverse-trig.html         ← Chapter 4: Inverse Trig          🔲 Stub
    ch5-polar.html                ← Chapter 5: Polar Coordinates     🔲 Stub
extras/
  cheatsheets.html                ← Algebra & Trig reference sheets  ✅ Full
  errors.html                     ← Common math errors               ✅ Full
```

## Deploy to GitHub Pages (free hosting)

1. Create a new GitHub repository (e.g., `math-notes`)
2. Upload all files keeping the folder structure exactly as-is
3. Go to **Settings → Pages**
4. Under "Source", select `main` branch, `/ (root)` folder
5. Click **Save** — your site will be live at `https://yourusername.github.io/math-notes/`

## Adding New Content

To add a full chapter, copy an existing full chapter (e.g., `ch1-exponents.html`) and:
- Update the `<title>` and breadcrumb
- Replace the content between the breadcrumb and `<div class="page-nav">`
- Update the prev/next links at the bottom

### Adding a practice problem

```html
<div class="problem-block">
  <div class="problem-header">
    <span class="problem-number">Problem N</span>
    <button class="btn-solution" onclick="toggleSolution(this)">Show Solution</button>
  </div>
  <div class="problem-body">
    Your problem text here. Math: $x^2 + 5x + 6 = 0$
  </div>
  <div class="problem-solution">
    <div class="solution-label">Solution</div>
    Your solution here. Display math: $$x = \frac{-5 \pm \sqrt{1}}{2}$$
  </div>
</div>
```

### Math notation (MathJax)

- Inline math: `$x^2 + 1$`
- Display math: `$$\int_0^1 x^2\,dx = \frac{1}{3}$$`

## Callout Boxes

```html
<div class="box note">   <!-- blue left border -->
<div class="box warn">   <!-- orange left border -->
<div class="box proof">  <!-- green left border -->
<div class="box definition">  <!-- purple left border -->
<div class="box theorem">     <!-- red left border -->
```

Each box should have `<div class="box-title">Title Here</div>` as the first child.
