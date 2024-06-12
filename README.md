# 1) Création du composant “users”.


Vous devez un composant nommés users . Affichez juste un simple titre pour montrer que le composant s’affiche bien

C'est une page qui affichera la liste des utilisateurs. 



 #  2) Créer un composant “user-card”



Chaque carte - ou vignette - est un sous composant du composant UsersComponent. ça représente un seul utilisateur 

A partir de la propriétés “users” - ajoutée ensemble - dans le composant UsersComponent:


1. Créez le composant user-card
2. Affichez autant de fois le composant user-card qu'il y a d'utilisateurs dans le tableau
3. Le composant user-card à son propre template. Vous devez afficher le nom et l’adresse email de la personne

Vous pouvez utiliser https://picocss.com/docs/cards.html pour afficher une carte

4. (extra) Créez l’interface “User” en TypeScript


#  3) Changer la langue d'un bouton


1. Ajouter un bouton Supprimer dans le composant UserCard
2. Créer un Pipe qui va afficher Supprimer ou Delete selon la langue envoyée en paramètre ( fr ou en ). Voici
comment appliquer le Pipe dans le template :

{{ 'REMOVE' | lang:'fr' }}

est un identifiant qui sera remplacé par le bon mot selon la langue

Deux moyens pour créer: soit un dictionnaire avec des objets, soit un simple switch...case. Pour la correction, nous utiliserons la méthode “dictionnaire”



#  4) Filtrer les utilisateurs selon l’extension de leur adresse email



1. Créer une liste déroulante à partir des extensions du tableau suivant:

    extensions: string[]  = ['tv', 'biz', 'io', 'me']

Lorsqu'on sélectionne une extension, ça affiche que les utilisateurs ayant un email terminant par cette extension .


 # 5) Exercice de ViewChildren


Ajoutez un champ de texte où l'utilisateur peut entrer un numéro correspondant à l'index d'une carte utilisateur dans la liste. Lorsqu'un bouton "Scroll to User" est cliqué, l'application doit faire défiler en douceur la liste pour amener la carte utilisateur spécifiée au centre de la vue. Utilisez @ViewChildren pour accéder aux éléments DOM des cartes utilisateurs et implémentez la fonctionnalité de défilement en utilisant l'API DOM scrollIntoView. Assurez-vous de gérer les entrées invalides (par exemple, des index hors de portée) en affichant un message d'erreur approprié.



Aide: Scroller: Element.scrollIntoView({ behavior: 'smooth', block: 'center' });


# Liste des utilisateurs dans le signal



1.  Le service UserService doit avoir le tableau d'utilisateurs dans un signal

2. Affichage de la Liste des Utilisateurs : Le composant doit affiché la liste des utilisateurs qui se trouve dans le signal

3. Filtrage de la Liste des Utilisateurs : Le composant doit affiché la liste des utilisateurs qui se trouve dans le signal en fonction de la valeur du champ de recherche (Aide: Utiliser computed())



# Supprimer un utilisateur


Avoir un bouton pour supprimer un utilisateur. Comment actualiser l'interface après la suppression ?


Aide

Utiliser filter() pour supprimer l’utilisateur du tableau

UserCardComponent ne doit pas avoir d’injection de dépendances. Donc l’action (l’appel de la requête) doit être effectuée dans UsersComponent



Exercice en plus:

Dans SearchComponent, au lieu d’avoir une propriété “firstNames” fictive, afficher la liste des noms des utilisateurs provenant du signal “users”



# Formulaire pour créer un utilisateur



1. Créer le formulaire pour ajouter un utilisateur. Deux champs: Nom et Email. Les données du formulaire sont envoyées ensuite au service (au clic sur le bouton)
2. Mettre des validateurs: savoir si les champs ne sont pas vides
3. Afficher un loading avec https://picocss.com/docs/loading.html durant la création d’un utilisateur. Il faut que le bouton soit désactivé à ce moment pour éviter que l’utilisateur clique plusieurs fois dessus

Note: Sur Angular, les attributs HTML sont écrits en CamelCase. Utilisez ariaBusy et non aria-busy

# Créer le formulaire Login


1. Créez une nouvelle page LoginComponent
2. Ajoutez au routeur. On doit pouvoir aller dessus avec /login
3. Dans LoginComponent, créez un formulaire avec 2 champs: email et mot de passe
4. Créer un nouveau service: core/service/auth.service.ts. Ce service doit avoir une méthode login() qui doit faire une requête sur l’API https://reqres.in/api/login. Vous récupérez un token (voir la documentation sur https://reqres.in/)
5. Stockez ce token en signal de propriété du service
---

# Formulaire pour modifier un utilisateur


1. Afficher l'utilisateur en question grâce à l’identifiant récupéré. Avoir un titre avec le nom de l'utilisateur


```html
<h1> Nom de l'utilisateur ici </h1>
```


2. Avoir 3 champs pour modifier les propriétés name , username , email

Utilisez le module ReactiveFormsModule

Les champs doivent être pré remplis 



3. Au clic, sur le bouton Modifier , effectuer une requête PUT pour mettre à jour l'utilisateur. 

    a. Mettez à jour le nom d’utilisateur qui se trouve dans le titre

    b. Mettez à jour le signal pour mettre à jour le tableau d’utilisateurs (on doit voir cette modification dans le filtre dans la barre de recherche)



# Directive : supprimer un utilisateur seulement après une confirmation


Nous supprimons un utilisateur, seulement lorsque la confirmation est positive !

