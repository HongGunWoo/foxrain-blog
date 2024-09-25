import ContactList from '@/components/ContactList';
import Image from 'next/image';

export default function MyInfo() {
  return (
    <div className="mb-12 mt-5 flex items-center justify-center space-x-6">
      <Image
        src="/images/sub-profile.jpeg"
        alt="profile"
        priority={true}
        quality={100}
        width={144}
        height={144}
        className="rounded-full border border-gray-100 transition-colors dark:border-gray-600"
      />
      <div className="shrink-0">
        <p className="whitespace-pre-line text-xl">
          안녕하세요,{`\n`}
          <strong className="text-primary">개발자 홍건우</strong>
          {`\n`}입니다.
        </p>
        <div className="absolute mt-1 flex items-center">
          <ContactList />
        </div>
      </div>
    </div>
  );
}
