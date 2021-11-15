import { useState, useCallback }  from "react";
import useAxios from 'axios-hooks'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [{ data, loading, error }, refetch] = useAxios('/api/gallery');
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
        <Gallery photos={data.photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={data.photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        
      </main>

    </div>
  )
}
