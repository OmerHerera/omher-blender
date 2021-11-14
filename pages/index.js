import { useState }  from "react";
import useAxios from 'axios-hooks'
import Modal from 'react-modal';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [{ data, loading, error }, refetch] = useAxios('/api/gallery');
  const [open, setOpen] = useState(false);
  const [work, setWork] = useState('');
  function onCloseModal() {
    setOpen(!open);
  }
  function onClickImg(workPath) {
    setOpen(!open);
    setWork(workPath);
  }
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  return (
    <div className={styles.container}>
      <Head>
        <title>Omer Blender WIP</title>
        <meta name="Omer Herera blender works" content="Works created used blender" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.explanation}>
          <img src="https://res.cloudinary.com/omher/image/upload/v1636886131/blender/blender.png" width="100" />
          Works done using <a href="https://www.blender.org/">blender!</a>
        </div>
        <Modal
            ariaHideApp={false}  
           isOpen={open}
           contentLabel="Minimal Modal Example"
      >
          <img src={ work } alt=""/>
        <button onClick={onCloseModal}>Close Image</button>
      </Modal>

        <div className={styles.grid}>
          {data.images.map((photo, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={photo.imageUrl}
                alt=""
                width={300}
                height={300}
                onClick={() => { onClickImg(photo.imageUrl);} }
            />
          </div>
        ))}
          

        </div>
      </main>

    </div>
  )
}
