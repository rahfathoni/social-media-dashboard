import { postNewPost } from "@/app/lib/actions";
import { Alert } from "flowbite-react";
import { useState } from "react";

export default function FormPost({user}) {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const createPost = async (event) => {
    event.preventDefault();
    setShowSuccessAlert(false);
    const data = {
      title: event.target.title.value,
      body: event.target.body.value,
      id: user.id
    };
    const post = await postNewPost(data);
    if(post.id) {
      event.target.title.value = '';
      event.target.body.value = '';
      setShowSuccessAlert(true);
    }
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
      { showSuccessAlert && 
        <Alert color="info" className="mt-3 cursor-pointer" onClick={() => setShowSuccessAlert(false)}>
          <span className="font-medium">Success!</span> Create New Post Success.
        </Alert>
      }
    </form>
  )
}