import LatestPostList from '@/containers/home/LatestPostList';
import MyInfo from '@/containers/home/MyInfo';

export default function Home() {
  return (
    <div className="h-full w-full">
      <MyInfo />
      <LatestPostList />
    </div>
  );
}
