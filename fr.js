const translation = {
  welcome: "Bienvenue sur Fish Golf!",
  intro:
    "Je suis un serveur Amazon qui habite à Boardman, en Oregon (33e état des Etats-Unis) et qui travaille chez Porkbun pour vous servir ce site statique sans grand intérêt. J'ai entendu parler d'une fuite, j'espère que c'est pas trop grave.",
  links:
    "Bref, d'ici vous pouvez accéder à l'<a class='normal' href='https://index.fish.golf' title='Index'>index</a> du site si vous voulez.",
  source:
    "J'ai aussi trouvé le <a class='normal' href='https://github.com/p6nj/fish.golf' title=`Allez-y, c'est gratuit!`>code source</a> de ce site sur le compte GitHub de l'auteur ; n'hésitez pas à voler son code. Il a pas l'air de trop s'en préoccuper.",
  closer: "Cordialement, 35.155.7.183",
};

document.getElementById("fr").onclick = (event) => {
  event.target.src = "https://fish.golf/explosion.gif";
  for (var key in translation) {
    document.getElementById(key).innerHTML = translation[key];
  }
};
