const play = document.getElementById('play');
const music = document.querySelector('audio');
const img = document.querySelector('img');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [
    {
        name:"ms-1",
        title:"Mere khawbon",
        artist:"Lata Mangeshkar",
        img:"img1"
    },
    {
        name:"ms2",
        title:"Nile Nile Ambar",
        artist:"Khishor Kumar",
        img:"img2"
        
    },
    {
        name:"ms-3",
        title:"Dillbar",
        artist:"Alka Yagnik" ,
        img:"img3"  
    }

]

let onPlaying = false;
// on play function
const playMusic = ()=>{
    onPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add('anime')
}

// on pause function
const pauseMusic=()=>{
    onPlaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play')
    img.classList.remove('anime')
}

play.addEventListener('click',()=>{
    if(onPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
})

// changing music data

const loadSong = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src ="assets/music/" + songs.name + ".mp3";
    img.src = "assets/img/" + songs.img + ".jpg"
}
// loadSong(songs[2]);

// for next song
songList = 0;
const nextSong = ()=>{
    songList = (songList + 1) % songs.length  // using this songs index is in infinite
    loadSong(songs[songList])
    playMusic();
}

// for prev song
const prevSong = ()=>{
    songList = (songList - 1 + songs.length)% songs.length;  // using this songs index is in infinite
    loadSong(songs[songList])
    playMusic();
}
next.addEventListener('click',nextSong)
prev.addEventListener('click',prevSong)
