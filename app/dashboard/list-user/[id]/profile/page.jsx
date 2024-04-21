import { getUserProfile } from "@/app/lib/actions"
import UserDetail from "./detail";

export const metadata = {
  title: 'Profile'
}

export default async function Page({params}) {
  const user = await getUserProfile(params.id);
  
  return (
    <main className="w-full">
      <header>
        <h1 className="text-2xl">
            <span className="font-bold">{user.name}</span>'s Profile
        </h1>
      </header>
      <section>
        <UserDetail data={user} />
      </section>
    </main>
  )
}