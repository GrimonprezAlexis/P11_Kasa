# A propos
Projet 11 - Développez une application Web avec React et React Router
- Kasa fait partie des leaders de la location d’appartements entre particuliers en France

### Fonction
Développeur Front-end

### Maquette
- [Maquette](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=4%3A1)


### Details du projet
Le site actuel a été codé il y à plus de 10 ans en ASP.NET, la CTO souhaite une refonte totale pour passer en stack JavaScript / NodeJS / React avec de nouvelles maquettes.

### Objectif
Développer l'ensemble de l'application du Front end au Back-end / data en React / JavaScript / NodeJS.

#### Ressource
[20 dernières annonce de logements pour le Front](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json)

### Contraintes techniques
- Fournir tout le HTML, le CSS et le JavaScript nécessaires au prototype
- [Coding guidelines de Kasa ici](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/Coding+guidelines+Kasa.pdf) 
- [Respect de la maquette](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=4%3A1)
- Code Robuste / Lisible
- Version moderne (ES6 ou supérieure) de JavaScript
- Validation W3C sans erreur
- Implémentation du fichier JSON des annonces de logement
- Pour le défilement des photos dans la galerie (composant Gallery) :
	- Si le user se trouve à la première image et il clique sur "image précédente", la galerie affiche la dernière image. 
	- Inversement, quand limage affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image. 
	- Si ny a qu'une seule image, les boutons "suivant" et "précédent" napparaissent pas.
	- La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de limage.
- Collapse : Par défaut, les Collapses sont fermés à linitialisation de la page. 
- Si le Collapse est ouvert, le clic de lutilisateur permet de le fermer.
	- Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.


### Livrable
- Le lien du repository Github
- Le code React du projet 
- Le code React Router pour les routes dans un fichier dédié

### Technlogies
HTML, CSS, SASS, Javascript, Jquery, , NodeJS, React, Github, Heroku

### Hébergement
> Heroku
[#Projet 11 - Kasa](https://kasa-app.herokuapp.com/)


# React Express Starter Pack
> full stack apps with React and Express. Run your client and server with a single command. 
[React starter with API Router](https://github.com/GrimonprezAlexis/react-redux-express-starter)

## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

### Author
[Alexis GRIMONPREZ](https://grimonprez-alexis.herokuapp.com/)

### Version
1.0.0
