import LatestPostList from '@/containers/home/LatestPostList';

export default function Home() {
  return (
    <div className="h-full w-full">
      <h2 className="mb-3 border-b-2 border-gray-100 pb-1 text-3xl font-bold ">
        Latest Posts
      </h2>
      <LatestPostList />
    </div>
  );
}
