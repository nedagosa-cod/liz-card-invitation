const playMusic = (e) => {
    audio.play()
    document.getElementById("modal").scrollIntoView();
    window.scrollTo(0, 0);
    document.querySelector('body').className = ''
}

window.onload = function() {
    // Desplaza la página hacia el elemento con el id "header"
    let elemento = `<h2>Bienvenidos a la invitación de boda de <br>Brayan y Liseth</h2>
    <h3>La música de fondo es parte de la experiencia</h3>
    <div id="toggleMusic">
      <button type="button" name="play" onclick="playMusic(this)">Ver invitación</button>
    </div>`

    document.querySelector('#modal').innerHTML = elemento
    document.querySelector('body').className = ''
    document.getElementById("modal").scrollIntoView();
    window.scrollTo(0, 0);
    document.querySelector('body').className = 'modal'
  };