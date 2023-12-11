import ContactList from '@/components/ContactList';
import Image from 'next/image';

export default function MyInfo() {
  return (
    <div className="mb-12 mt-5 flex items-center justify-center space-x-6">
      <Image
        src="/images/profile.jpeg"
        alt="profile"
        width={200}
        height={200}
        className="h-36 w-36 rounded-full border border-gray-100 shadow-lg"
      />
      <div className="shrink-0">
        <p className="whitespace-pre-line text-xl">
          안녕하세요,{`\n`}
          <strong className="text-primary">개발자 홍건우</strong>
          {`\n`}입니다.
        </p>
        <div className="absolute flex items-center gap-3 pl-1">
          <ContactList />
        </div>
      </div>
    </div>
  );
}
