# Exo : Créer deux pages avec Next.JS base sur un mockup.

## Route
```
 - /book      => Liste des livres
 - /book/42   => Detail du livre qui l'id 42
```

## Exemple de donnée
```
[
  {
    "id": 1,
    "title": "Titre du livre",
    "author": "Auteur du livre",
    "publicationDate": "2023-04-20",
    "category": "Informatique",
    "summary": "Ceci sera le resumé du livre",
    "price": 42.13,
    "ISBN": 9782123456803,
    "inStock": true
  },
  {
    ...
  }
]
```

Remarque, un ISBN s'affiche au format : ISBN 978-2-12-345680-3