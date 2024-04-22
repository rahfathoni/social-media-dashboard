export default function UserAlbum({ data }) {
  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900">Album ({data ? data.length : 0})</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.map((album, index) => (
          <div key={index} className="bg-gray-900 shadow-lg rounded p-3">
            <div className="group relative">
              <img className="w-full md:w-72 block rounded" src="/no-image.png" alt={album.title} />
              <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  See Pictures
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
    </section>
  );
}