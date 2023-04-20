// Le composant App (=> Fichier "_App") englobe toutes les pages, ca permet : 
// - Utiliser un CSS global
// - Conserver des states
// - Injecté des données

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
