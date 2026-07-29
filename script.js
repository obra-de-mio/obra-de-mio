function filterSelection(category) {
  const items = document.querySelectorAll('.portfolio-item');
  const buttons = document.querySelectorAll('.filter-btn');

  // Update active button state
  buttons.forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');

  // Filter items
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}