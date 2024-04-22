import Link from "next/link"

export function UserProfile({id}) {
  return (
    <Link
      href={`/dashboard/list-user/${id}/profile`}
      className="rounded-md border-solid border-2 border-indigo-600 p-2 hover:bg-gray-100"
    >
      Detail
    </Link>
  )
}