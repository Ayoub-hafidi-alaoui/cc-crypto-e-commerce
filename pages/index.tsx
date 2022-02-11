import Head from 'next/head'
import { useMoralis } from "react-moralis";
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection } from 'firebase/firestore';
import {db} from '../firebase'

export default function Home() {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const [snapshot, loading, error] = useCollection(collection(db, 'products'));
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mb-5 text-4xl">welcome to the polygon </h1>
      <div>
        {snapshot?.docs.map(doc => (
          <div className ='flex justify-between transform cursor-pointer space-x-6 p-5 shadow-md m-2 hover:scale-110 transition duration-200' key={doc.id}>
            <p>{doc.data().name}</p>
            <p>{doc.data().price}Matic </p>
          </div>
        ))}
      </div>
    </div>
  )
}
