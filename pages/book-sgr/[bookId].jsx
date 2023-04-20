import { getAllBookId, getDetailBook } from '@/services/book.service';

export default function BookDetail ({ bookSelected }) {

  const { title, inStock, price } = bookSelected;

  return (
    <main>
      <h1>Detail d'un livre</h1>

      <p>Titre : {title}</p>
      <p>En stock : {inStock ? 'Dispo' : 'Rupture'}</p>
      <p>Prix : {price}</p>
    </main>
  )
} 

// Cette méthode permet au serveur de connaitre les valeurs de parametres
// pour la route, dans le but de faire un pre-render lors du BUILD.
// ⚡ La méthode "getStaticPaths" est toujours utiliser avec "getStaticProps"
export async function getStaticPaths() {
  console.log('\n\r BookDetailStatic -> getStaticPaths');

  // Récuperation de la liste des id possibles
  const bookIds = await getAllBookId();

  // Pour valider les "paths", il faut créer un objet dans le format : 
  // {  params: {  <Les parametres> } }

  // Transformation de la liste des params en objet "paths"
  const paths = bookIds.map(id => ({
    params: {
      bookId: id.toString()
    }
  }));

  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({ params }) {
  console.log('\n\r BookDetailStatic -> getStaticProps');

  // Récuperation du parametre de la route
  const bookId = parseInt(params.bookId);

  // Récuperation des infos d'un livre
  const bookSelected = await getDetailBook(bookId);

  // Envoi les données dans la page
  return {
    props : { bookSelected }
  }
}