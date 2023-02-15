const jokeButton = document.querySelector(".getJoke")
const jokeHolder = document.querySelector(".joke-section")


async function fetchJoke() {
  const response = await fetch("http://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = response.json();
  return data;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
}

jokeButton.addEventListener("click", handleClick);








