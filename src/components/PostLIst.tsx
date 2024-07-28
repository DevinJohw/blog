import { getSortedPostList } from '@/lib/posts';
import PostItem from './PostItem';

export default async function PostLIst() {
  try {
    const sortedPostList = await getSortedPostList();
    return (
      <ul className="w-full">
        {sortedPostList.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </ul>
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('unknown error!');
    }
    return (
      <div className="w-full dark:text-white">Something went wrong😭!</div>
    );
  }
}
