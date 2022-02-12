import Head from 'next/head'
import { useMoralis } from "react-moralis";
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection, connectFirestoreEmulator } from 'firebase/firestore';
import {db} from '../firebase'
import {useState} from 'react'


export default function Home() {
  const {Moralis, authenticate, isAuthenticated, logout} = useMoralis()
  const { user } = useMoralis();
  const [errorMessage, setErrorMessage] = useState('')
  const [snapshot, loading, error] = useCollection(collection(db, 'products'));
  type TransferType = Parameters<typeof Moralis.transfer >[0]
  const purchase = async (price: number) => {
    // sending 0.5 ETH
  const options: TransferType = 
  {
    type: "native",
     amount: Moralis.Units.Token('MATIC', price),
    receiver: "0x4a085333DF4338437ff8605e0A2c82a9416Ec263"
  }
  Moralis.transfer(options).then((transaction) => {
    console.log(transaction)
  }).catch( (error )=> {
    console.log(error.data)
    setErrorMessage(error)
  })
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mb-5 text-4xl">welcome to the polygon </h1>
      <p className='text-red-500'> {errorMessage}</p>
      {!isAuthenticated ? (
        <button onClick={()=>authenticate()}>Login</button>
      ) :
      (
        <div>
        <button onClick={()=> logout()} >logout</button>
          {snapshot?.docs.map(doc => (
            <div className ='flex justify-between transform cursor-pointer space-x-6 p-5 shadow-md m-2 hover:scale-110 transition duration-200' 
            key={doc.id}
            onClick={()=> purchase(doc.data().price)}
            >
              <p>{doc.data().name}</p>
              <p>{doc.data().price}Matic </p>
            </div>
          ))}
        </div>
        
      )
    }
      
    </div>
  )
}
