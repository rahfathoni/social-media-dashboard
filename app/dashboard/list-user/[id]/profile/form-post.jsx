import { postNewPost, getUserPosts } from "@/app/lib/actions";

export default function FormPost({user}) {
  const createPost = async (event) => {
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      body: event.target.body.value,
      id: user.id
    };
    await postNewPost(data);
    // await getUserPosts(user.id);
  }

  return (
    <form className="mb-6" onSubmit={createPost}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
        <label htmlFor="title" className="sr-only">Title</label>
        <input type="text" id="title" rows="6" name="title"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
          placeholder="Post Title..." required />
      </div>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
          <textarea id="comment" rows="6" name="body"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
            placeholder="Write a post..." required></textarea>
      </div>
      <button type="submit"
        className="rounded-md border-solid border-2 border-indigo-600 p-2 hover:bg-gray-100 hover:text-black bg-green-600 text-white">
        New Post
      </button>
    </form>
  )
}