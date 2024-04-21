import { useParams } from 'next/navigation';

export default function UserAlbum() {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      album user {id}
    </div>
  )
}
