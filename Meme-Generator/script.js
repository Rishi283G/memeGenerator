const generateMemeBtn = document.querySelector(`.generateMemeBtn`)
const memeTittle = document.querySelector(`.meme-tittle`)
const memeImg = document.querySelector(`.meme-img`)
const memeAuthor = document.querySelector(`.meme-author span`)


   function loadMeme(){
                fetch(`https://meme-api.com/gimme/wholesomememes`)
    .then((res)=> res.json())
    .then((data)=>{ console.log(data)
    const{title, author, url} = data;
    memeTittle.innerText = title
    memeAuthor.innerText = author
    memeImg.src =url
    console.log(title.innerText)
    })
        }
generateMemeBtn.addEventListener("click",()=>{
    console.log(`button clicked`)
loadMeme();
        })

     loadMeme();