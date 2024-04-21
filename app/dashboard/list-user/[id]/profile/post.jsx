import { useParams } from 'next/navigation';

export default function UserPost() {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      post user {id}
    </div>
  )
}
