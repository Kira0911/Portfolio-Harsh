// Add click event listener to projects
document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("click", () => {
    // Get modal container element
    const modalContainer = document.querySelector(".modal-container");

    // Create modal window HTML code
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <h2>${project.querySelector("h2").textContent}</h2>
      <p>${project.querySelector("p").textContent}</p>
      <a href="${
        project.querySelector("a").href
      }" target="_blank">View Project</a>
    `;

    // Append modal window to modal container
    modalContainer.appendChild(modal);

    // Show modal window
    modalContainer.classList.add("show");

    // Add event listener to close modal window when clicked outside
    modalContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal-container")) {
        modalContainer.classList.remove("show");
        modalContainer.innerHTML = "";
      }
    });
  });
});

// Function to check if an element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Add scroll animation to elements
window.addEventListener("scroll", () => {
  // Animate projects
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    const projectTop = project.offsetTop;
    const projectHeight = project.offsetHeight;
    if (window.scrollY + window.innerHeight > projectTop + projectHeight / 2) {
      project.classList.add("visible");
    } else {
      project.classList.remove("visible");
    }
  });

  // Animate sections (including "About Me")
  const sections = document.querySelectorAll(".animate-on-scroll");
  sections.forEach((section) => {
    if (isInView(section)) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});

// Trigger scroll event on load to animate elements already in view
window.dispatchEvent(new Event("scroll"));
