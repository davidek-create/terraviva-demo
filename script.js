const filters = document.querySelector(".filters");
const filterButtons = filters.querySelectorAll("button[data-filter]");
const dishes = document.querySelectorAll(".dishes [data-course]");
const status = document.querySelector("#menu-status");

// The full menu remains visible when JavaScript is disabled.
filters.hidden = false;

filters.addEventListener("click", (event) => {
  const selected = event.target.closest("button[data-filter]");
  if (!selected) return;

  const course = selected.dataset.filter;
  let visibleCount = 0;

  for (const button of filterButtons) {
    button.setAttribute("aria-pressed", String(button === selected));
  }

  for (const dish of dishes) {
    const visible = course === "all" || dish.dataset.course === course;
    dish.hidden = !visible;
    visibleCount += Number(visible);
  }

  status.textContent = `${selected.textContent}. Showing ${visibleCount} dishes.`;
});
