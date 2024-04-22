export default function PostComment({data}) {
  return (
    <section>
      {data.map((comment, i) => (
        <article key={i}>
          <div className="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg text-sm">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900"><img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="/no-profile-picture-128.png"
                  alt='tes'
                />
                  {comment.email}
                </p>
              </div>
              {/* <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                  </svg>
                  <span className="sr-only">Comment settings</span>
              </button>
              <div id="dropdownComment2"
                  className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconHorizontalButton">
                      <li>
                          <a href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                      </li>
                      <li>
                          <a href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                      </li>
                      <li>
                          <a href="#"
                              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                      </li>
                  </ul>
              </div> */}
            </footer>
            <div className="grid grid-cols-6 border-b border-[#E4E4E4] pb-2">
              <label className="col-span-1">Subject : </label>
              <p className="col-span-5">{comment.name}</p>
            </div>
            <p className="text-gray-500">
              {comment.body}
            </p>
          </div>  
        </article>
      ))}
    </section>
  )
}