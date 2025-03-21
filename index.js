import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mandanten-Chat</title>
        <meta name="description" content="Mandanteninformation per KI" />
      </Head>
      <main className="min-h-screen bg-white py-10 text-center">
        <h1 className="text-2xl font-bold">Willkommen zum Mandanten-Chat</h1>
        <p>Hier können Mandanten steuerliche Fragen stellen.</p>
      </main>
    </>
  )
}
