import BookTable from '@/components/book-table/book-table';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { getAllBook } from '@/services/book.service';

// Le composant React qui représente la page, doit toujours etre export par defaut
export default function BookIndex({ message, booksData}) {

  const router = useRouter();

  const handleSelectBook = useCallback((bookId) => {
    router.push('/book-ssr/' + bookId);
  }, []);

  return (
    <main>
      <h1>Liste des livre SSR</h1>
      <BookTable 
        books={booksData}
        onSelectBook={handleSelectBook} />
    </main>
  )
}

// Comme on a besoin de donnée, il faut définir la page soit 
//  - en SGR avec Data (Génération lors du build) 
//  - en SSR           (Génération en direct) 

// Choix SSR avec données
//  - Lancer a chaque requete !!!
//  - Permet de recup les données pour le pre-render
export async function getServerSideProps(context) {
  console.log('\n\r BookServer -> getServerSideProps');

  // Etant donné que la méthode 'getServerSideProps' est lancé a chaque requete,
  // elle possede le parametre "context" qui contient les infos de la requete
  // => { req : IncommingMessage, res : ServerResponse }

  // Récuperation des livres de la DB
  const booksData = await getAllBook();

  // Envoi des données vers la page
  return {
    props: {
      message: 'Hello Server Side !',
      booksData
    }
  }
}