const generateMemeBtn = document.querySelector('.generateMemeBtn');
const memeTittle = document.querySelector('.meme-tittle');
const memeImg = document.querySelector('.meme-img');
const memeAuthor = document.querySelector('.meme-author');

function loadMeme() {
    memeTittle.innerText = "Loading...";
    memeAuthor.innerText = "";
    memeImg.src = "";

    fetch('https://meme-api.com/gimme/wholesomememes')
      .then(res => res.json())
      .then(data => {
        const { title, author, url } = data;
        memeTittle.innerText = title || "Title not found 😅";
        memeAuthor.innerText = `Meme By: ${author || "Anonymous 😂"}`;
        memeImg.src = url;
      })
      .catch(() => {
        memeTittle.innerText = "Failed to load meme 😢";
      });
}

loadMeme();
generateMemeBtn.addEventListener("click", loadMeme);
