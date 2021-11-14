import { React, useState }  from "react";
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';
import useAxios from 'axios-hooks'

// Masory Options
const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 30,
  itemSelector: ".photo-item",
};

const App = () => {
  const [{ data, loading, error }, refetch] = useAxios('/api/gallery');
  const [open, setOpen] = useState(false);
  function onCloseModal() {
    setOpen(!open);
  }
  function onClickImg() {
    setOpen(!open);
  }
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  return (
    <div>
      <Modal
            ariaHideApp={false}  
           isOpen={open}
           contentLabel="Minimal Modal Example"
      >
        <img src="https://res.cloudinary.com/omher/image/upload/v1636455564/blender/Apples_twodxd.jpg" alt=""/>
        <button onClick={onCloseModal}>Close Modal</button>
      </Modal>
      <Masonry
        className={"photo-list"}
        elementType={"ul"}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {data.images.map((photo, index) => (
          <li key={index} className={`photo-item`}>
            <img src={photo.imageUrl} alt="" onClick={ onClickImg }/>
          </li>
        ))}
      </Masonry>
    </div>
  );
};

export default App;