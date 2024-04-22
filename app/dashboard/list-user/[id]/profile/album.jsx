import { getPhotoAlbum } from "@/app/lib/actions";
import { Modal, Button } from "flowbite-react";
import { useState } from "react";

export default function UserAlbum({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [selectAlbum, setSelectAlbum] = useState({
    id: 0,
    title: ''
  });
  const [photos, setPhotos] = useState([]);

  const showModalAlbum = async (data) => {
    if(showModal || !data) {
      setPhotos([]);
      setSelectAlbum({
        id: 0,
        title: ''
      });
      setShowModal(false);
      return
    }
    const photos = await getPhotoAlbum(data.id);
    setPhotos(photos)
    setSelectAlbum({
      id: data.id,
      title: data.title
    });
    setShowModal(true);
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900">Album ({data ? data.length : 0})</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.map((album, index) => (
          <div key={index} className="bg-gray-900 shadow-lg rounded p-3">
            <div className="group relative">
              <img className="w-full block rounded" src="/no-image.png" alt={album.title} />
              <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                <button 
                  className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                  onClick={() => showModalAlbum(album)}
                >
                  See Photos
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-white text-lg">{album.title}</h3>
              <p className="text-gray-400">{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} size="7xl" onClose={() => showModalAlbum()}>
        <Modal.Header>{selectAlbum.title} Album Photos</Modal.Header>
        <Modal.Body>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="group relative">
              <img className="h-auto max-w-full rounded-lg" src={photo.url} alt={photo.url} />
              <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                <p 
                  className="text-center hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                >
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => showModalAlbum()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}