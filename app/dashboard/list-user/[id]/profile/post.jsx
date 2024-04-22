import PostComment from "@/app/dashboard/list-user/[id]/profile/comment";
import { getPostComment } from "@/app/lib/actions";
import { useState } from "react";

export default function UserPost({data, user}) {
  const [selectPost, setSelectPost] = useState(0);
  const [postComment, setPostComment] = useState([]);

  const showComment = async (postId) => {
    if (postId === selectPost) {
      setSelectPost(0);
      setPostComment([]);
      return;
    }
    const comment = await getPostComment(postId)
    setPostComment(comment);
    setSelectPost(postId);
  }

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
              {/* <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
                <span className="sr-only">Comment settings</span>
              </button> */}
              {/* <div id="dropdownComment3"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow">
                <ul className="py-1 text-sm text-gray-700"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100">Remove</a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 hover:bg-gray-100">Report</a>
                    </li>
                </ul>
              </div> */}
            </footer>
            <div className="grid grid-cols-6 border-b border-[#E4E4E4] pb-2">
              <label className="col-span-1">Title : </label>
              <p className="col-span-5">{post.title}</p>
            </div>
            <p className="text-gray-500">{post.body}</p>
            <div className="flex items-center mt-4 space-x-4">
              <button type="button"
                className="flex items-center text-sm text-gray-500 hover:underline"
                onClick={() => showComment(post.id)}
                >
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>
                {selectPost === post.id ? 'Hide Comment' : 'See Comment'}
              </button>
            </div>
            {selectPost === post.id && <PostComment data={postComment}/>}
          </article>
        ))}
      </div>
    </section>
  );
}
