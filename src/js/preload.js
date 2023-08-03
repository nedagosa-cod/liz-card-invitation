const playMusic = () => {
    audio.play()
    document.querySelector(".modal").scrollIntoView();
    document.querySelector('.modal').className = ''
}