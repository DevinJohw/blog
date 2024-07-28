import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

interface PostItemProps {
  id: string;
  title: string;
  date: string;
}

export default function PostItem({ id, title, date }: PostItemProps) {
  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline hover:to-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <p className="text-sm mt-1">{getFormattedDate(date)}</p>
    </li>
  );
}
