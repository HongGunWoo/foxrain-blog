import { PropsWithChildren } from 'react';

interface AboutItemProps extends PropsWithChildren {
  title: string;
}

const AboutItem = ({ children, title }: AboutItemProps) => {
  return (
    <div>
      <h2 className="text-3xl font-extrabold text-subPrimary">{title}</h2>
      <hr className="my-3 border-gray-200" />
      {children}
    </div>
  );
};

export default AboutItem;
