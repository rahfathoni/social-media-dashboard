import { getUserAlbums, getUserPosts, getUserProfile } from "@/app/lib/actions"
import UserDetail from "./detail";
import DetailTabContainer from "./tab-container";

export const metadata = {
  title: 'Profile'
}

export default async function Page({params}) {
  const [user, albums, posts] = await Promise.all([
    getUserProfile(params.id),
    getUserAlbums(params.id),
    getUserPosts(params.id)
  ]);
  
  return (
    <main className="w-full">
      <header>
        <h1 className="text-2xl">
            <span className="font-bold">{user.name}</span>'s Profile
        </h1>
      </header>
      <section className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-1">
            <UserDetail data={user} />
            <DetailTabContainer albums={albums} posts={posts} user={user} />
          </div>
        </div>
      </section>
    </main>
  )
}