export default function UserPost({data, user}) {
  return (
    <section>
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900">Post ({data ? data.length : 0})</h2>
        </div>
        {data.map((post, i) => (
          <article key={i} className="p-6 mb-3 text-base bg-white border-t border-gray-200">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900"><img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="/no-profile-picture-128.png"
                  alt={user.name}/>{user.name}</p>
              </div>
            </footer>
            <div className="grid grid-cols-6 border-b border-[#E4E4E4] pb-2">
              <label className="col-span-1">Title : </label>
              <p className="text-black-500 col-span-5">{post.title}</p>
            </div>
            <p className="text-gray-500">{post.body}</p>
            <div className="flex items-center mt-4 space-x-4">
              <button type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline">
                  <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                  </svg>
                  See Comment
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
