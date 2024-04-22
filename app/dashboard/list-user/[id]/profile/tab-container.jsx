'use client';

import { useState } from "react";
import UserAlbum from "./album";
import UserPost from "./post";

export default function DetailTabContainer({albums, posts}) {
  const [open, setOpen] = useState("post");
  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  const details = {
    post: <UserPost data={posts} />,
    album: <UserAlbum data={albums} />,
  };
  return (
    <section className="py-1">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-1">
            <div className="mb-14 w-full">
              <div
                className="flex flex-col flex-wrap rounded-lg border-t border-b border-[#E4E4E4] px-4 py-3 sm:flex-row"
                role="tablist"
                style={{gap: '10px'}}
              >
                <button
                  onClick={() => handleTabOpen("post")}
                  className={`cursor-pointer rounded-md px-4 py-3 text-sm md:text-base lg:px-6 ${
                    open === "post"
                      ? "bg-blue-600 text-white"
                      : "text-body-color hover:bg-blue-600 hover:text-white"
                  }`}
                  role="tab"
                  >
                  Post
                </button>
                <button
                  onClick={() => handleTabOpen("album")}
                  className={`cursor-pointer rounded-md px-4 py-3 text-sm md:text-base lg:px-6 ${
                    open === "album"
                      ? "bg-blue-600 text-white"
                      : "text-body-color hover:bg-blue-600 hover:text-white"
                  }`}
                  role="tab"
                  >
                  Album
                </button>
              </div>
              {Object.keys(details).map((key) => (
                <div
                  key={key}
                  className={`px-6 py-2 text-base leading-relaxed text-body-color ${
                    open === key ? "block" : "hidden"
                  } `}
                  id={key}
                  role="tabpanel"
                  aria-labelledby={`${key}-tab`}
                >
                  {details[key]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}