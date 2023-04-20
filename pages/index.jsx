import Link from 'next/link';

// Page home du site => Accessible via '/'
export default function Home() {
  return (
    <main className="p-5">
      <h1>Demo Next JS</h1>

      <section>
        <h2 className='text-3xl mb-2'>Liens de navigation</h2>
        {/* Pour naviguer entre les pages => Link */}
        <div>
          <Link href='/demo/about'>About (SGR - No Data)</Link>
        </div>
        <div>
          <Link href='/book-sgr'>Book (SGR - Avec donnée)</Link>
        </div>
        <div>
          <Link href='/book-ssr'>Book (SSR)</Link>
        </div>

      </section>

    </main>
  );
}
