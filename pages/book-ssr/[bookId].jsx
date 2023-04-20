import { getDetailBook } from '@/services/book.service';

export default function BookDetail ({ bookSelected }) {

  if(!bookSelected) {
    return (
      <main>
        <h1>Livre non trouvé !</h1>
      </main>
    )
  }
  
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


export async function getServerSideProps({ params }) {
  console.log('\n\r BookDetailServer -> getServerSideProps');

  // Récuperation du parametre de la route
  const bookId = parseInt(params.bookId);

  // Récuperation des infos d'un livre
  const bookSelected = await getDetailBook(bookId);

  // Envoi les données dans la page
  return {
    props : { bookSelected }
  }
}