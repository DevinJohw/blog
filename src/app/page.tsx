import PostLIst from '@/components/PostLIst';
import { getSortedPostList } from '@/lib/posts';

export default async function Home() {
  try {
    const sortedPostList = await getSortedPostList();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('unknown error!');
    }
  }
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Devin</span>
        </span>
      </p>
      <section className="mt-6 mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
        <PostLIst />
      </section>
    </main>
  );
}
