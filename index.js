
     // Fonction pour créer une liste de films 
function creerListeFilms() {
     // Créer un élément de liste de films
var ol = document.createElement('ol');
     // Ajouter les films dans la liste (li)
var films = [
'Earwig and the Witch : Gorō Miyazaki ',
'The Red Turtle : Michaël Dudok de Wit' ,
'When Marnie Was There : Hiromasa Yonebayashi' ,
'The Tale of the Princess Kaguya : Isao Takahata' ,
'The Wind Rises : Hayao Miyazaki ',
'From Up on Poppy Hill : Gorō Miyazaki' ,
'Arrietty : Hiromasa Yonebayashi ',
'Ponyo : Hayao Miyazaki ',
'Tales from Earthsea : Gorō Miyazaki ',
     //unicode \x27 = << ' >>
'Howl\x27s Moving Castle : Hayao Miyazaki ',
'The Cat Returns : Hiroyuki Morita ',
'Spirited Away : Hayao Miyazaki ',
'My Neighbors the Yamadas : Isao Takahata ',
'Princess Mononoke : Hayao Miyazaki ',
'Whisper of the Heart : Yoshifumi Kondō' ,
'Pom Poko : Isao Takahata ',
'Porco Rosso : Hayao Miyazaki ',
'Only Yesterday : Isao Takahata' ,
'Kiki\x27s Delivery Service : Hayao Miyazaki' ,
'My Neighbor Totoro : Hayao Miyazaki' ,
'Grave of the Fireflies : Isao Takahata ',
'Castle in the Sky : Hayao Miyazaki '
]; 
films.forEach(function (film) {
var li = document.createElement('li');
li.textContent = film;
     //Ajouter la couleur rouge pour chaque film de hayao miyazaki
if (film.toLowerCase().includes('hayao miyazaki')) {
li.style.color = 'red';
}
ol.appendChild(li);
});
     // Ajouter la liste au conteneur HTML
var container = document.getElementById('filmsBy');
container.appendChild(ol);
}
     // Appeler la fonction pour créer la liste
creerListeFilms();


     // Fonction pour créer une liste de directores
function creerListeDirectors() {
     // Créer un élément de liste de directores
var ol2 = document.createElement('ol');
     // Ajouter les directores dans la liste (li2)
var directors = [
'Michaël Dudok de Wit',
'Yoshifumi Kondō',
'Gorō Miyazaki',
'Hayao Miyazaki',
'Hiroyuki Morita',
'Isao Takahata',
'Hiromasa Yonebayashi'
];
directors.forEach(function (director) {
var li2 = document.createElement('li');
li2.textContent = director;
ol2.appendChild(li2);
});
     // Ajouter la liste au conteneur HTML
var container = document.getElementById('directors');
container.appendChild(ol2);
} 
     // Appeler la fonction pour créer la liste
creerListeDirectors()

 
     // Fonction pour créer une liste de films par réalisateurs
function creerListeFilmsParRealisateur() {
     // Créer un élément de liste de films par réalisateurs
var ul = document.createElement('ul');
     // Ajouter de films par réalisateurs dans la liste 
var filmsParRealisateur = {
'Michaël Dudok de Wit': [
    'The Red Turtle'
],
'Hiromasa Yonebayashi': [
    'When Marnie Was There', 'Arrietty'
],
'Gorō Miyazaki': [
    'Earwig and the Witch',
    'From Up on Poppy Hill',
    'Tales from Earthsea'
],
'Hiroyuki Morita': [
    'The Cat Returns'
],
'Yoshifumi Kondō': [
    'Whisper of the Heart'
],
'Isao Takahata': [
    'The Tale of the Princess Kaguya',
    'My Neighbors the Yamadas',
    'Pom Poko',
    'Only Yesterday',
    'Grave of the Fireflies'
],
'Hayao Miyazaki': [
    'The Wind Rises',
    'Howl\x27s Moving Castle',
    'Spirited Away',
    'Princess Mononoke',
    'Porco Rosso',
    'Kiki\x27s Delivery Service',
    'My Neighbor Totoro',
    'Castle in the Sky'
],};
     //Trier chaque film avec son réalisateur
for (var directors in filmsParRealisateur) {
if (filmsParRealisateur.hasOwnProperty(directors)) {
var liRealisateur = document.createElement('li');
liRealisateur.textContent = directors;
ul.appendChild(liRealisateur);
     // Créer un élément de liste (UL) pour les films du réalisateur
var listeFilmsRealisateur = document.createElement('ul');
     // Ajouter des éléments de liste (LI) pour chaque film du réalisateur
filmsParRealisateur[directors].forEach(function (film) {
var liFilm = document.createElement('li');
liFilm.textContent = film;
listeFilmsRealisateur.appendChild(liFilm);
});
     // Ajouter la liste de films du réalisateur à l'élément de liste (li) du réalisateur
liRealisateur.appendChild(listeFilmsRealisateur);
}}
     // Ajouter la liste de tous les films au document
var container = document.getElementById('directorsfilmsList');
container.appendChild(ul);
}
     // Appeler la fonction pour créer la liste de films par réalisateurs
creerListeFilmsParRealisateur();

