// ---- Show/Hide individual solution ----
function toggleSolution(btn) {
  const block = btn.closest('.problem-block');
  const sol = block.querySelector('.problem-solution');
  const isVisible = sol.classList.contains('visible');
  sol.classList.toggle('visible', !isVisible);
  btn.textContent = isVisible ? 'Show Solution' : 'Hide Solution';
}

// ---- Show/Hide ALL solutions on the page ----
function showAllSolutions(show) {
  document.querySelectorAll('.problem-solution').forEach(s => {
    s.classList.toggle('visible', show);
  });
  document.querySelectorAll('.btn-solution').forEach(btn => {
    btn.textContent = show ? 'Hide Solution' : 'Show Solution';
  });
}

// ---- Mark active sidebar link ----
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('#sidebar a').forEach(a => {
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href').replace(/^\.\.\//, '').replace(/^\.\//, ''))) {
      a.classList.add('active');
    }
  });
});
