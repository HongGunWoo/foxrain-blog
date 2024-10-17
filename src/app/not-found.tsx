import CustomLink from '@/components/CustomLink';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <h1 className="text-4xl font-bold text-gray-700">Not Found</h1>
      <p>해당하는 페이지를 찾을 수 없어요...</p>
      <CustomLink
        href="/"
        replace
        className="mt-3 text-gray-500 transition-colors hover:text-primary"
      >
        메인페이지로 이동하기
      </CustomLink>
    </div>
  );
}
