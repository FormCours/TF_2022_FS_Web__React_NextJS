import Image from 'next/image';
import Link from 'next/link';

// Page en "Static génération" sans données 
// → Pre-render lors du build du serveur

// Un composant React =)
export default function About() {

  return(
    <main className="p-5">
      <h1>A propos</h1>

      <h2>Della Duck</h2>
      <Image src='/images/della.png' alt='Della duck 👿' 
        height={400} width={200} />

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, velit? Nam hic exercitationem perspiciatis facere dolore harum sit quae sed accusamus itaque, dicta iste quas ea quia sunt quisquam libero.</p>

      <Link href='/'><button className='btn' >Accueil</button></Link>
    </main>
  );
}


