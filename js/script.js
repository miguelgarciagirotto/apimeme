function aleatorio() {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => {
        const memes = data.data.memes;
        const aleatorio = Math.floor(Math.random() * memes.length);
        const meme_aleatorio = memes[aleatorio];

        document.getElementById("meme").src = meme_aleatorio.url;
    });
}

aleatorio();

function meme(){
    fetch("https://api.imgflip.com/get_memes")
    .then(data =>{
        return data.json();
    })
    .then(data =>{
        console.log (data.data.memes[11]);
       
    });
    
}

meme()     