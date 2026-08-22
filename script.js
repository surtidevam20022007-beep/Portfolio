const yearNode = document.querySelector("#year");
const repoCountNode = document.querySelector("#repoCount");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

async function hydrateGithubStats() {
  if (!repoCountNode) return;

  try {
    const response = await fetch("https://api.github.com/users/surtidevam20022007-beep", {
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!response.ok) return;

    const profile = await response.json();
    if (typeof profile.public_repos === "number") {
      repoCountNode.textContent = profile.public_repos;
    }
  } catch {
    repoCountNode.textContent = "6";
  }
}

hydrateGithubStats();

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
