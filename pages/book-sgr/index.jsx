import BookTable from '@/components/book-table/book-table';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { getAllBook } from '@/services/book.service';

// Le composant React qui représente la page, doit toujours etre export par defaut
export default function BookIndex({ message, booksData}) {

  const router = useRouter();

  const handleSelectBook = useCallback((bookId) => {
    router.push('/book-sgr/' + bookId);
  }, []);

  return (
    <main>
      <h1>Liste des livre SGR</h1>
      <BookTable 
        books={booksData}
        onSelectBook={handleSelectBook} />
    </main>
  )
}

// Comme on a besoin de donnée, il faut définir la page soit 
//  - en SGR avec Data (Génération lors du build) 
//  - en SSR           (Génération en direct) 

// Choix SGR avec données
//  - Lancer au BUILD du serveur
//  - Permet de recup les données pour le pre-render
export async function getStaticProps() {
  console.log('\n\r BookStatic -> getStaticProps');

  // Récuperation des livres de la DB
  const booksData = await getAllBook();

  // Envoi des données vers la page
  return {
    props: {
      message: 'Hello Static !',
      booksData
    }
  }
}