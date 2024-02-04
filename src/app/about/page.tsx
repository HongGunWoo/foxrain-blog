import CustomLink from '@/components/CustomLink';
import siteMetadata from '@/constants/siteMetadata';
import AboutItem from '@/containers/about/AboutItem';

export default function About() {
  return (
    <div className="flex h-full w-full flex-col gap-12 break-keep">
      <AboutItem title="Introduce">
        <p className="text-lg">
          안녕하세요, 프론트엔드 개발자 홍건우입니다.
          <br />
          <br />
          기술의 원리를 이해하고 적용하여 흐름을 놓치지 않도록 노력하고
          있습니다.
          <br />
          서비스 이용자와 동료 개발자 모두를 만족시킬 수 있는 개발자가 되는 것이
          목표입니다.
        </p>
      </AboutItem>
      <AboutItem title="Skills">
        <ul className="ml-4 list-disc space-y-2">
          <li>TypeScript, React, Next.js</li>
          <li>TailwindCSS, Emotion</li>
          <li>Tanstack-Query, Jotai</li>
        </ul>
      </AboutItem>
      <AboutItem title="Side Project">
        <ul className="space-y-10">
          {siteMetadata.about.projects.map(
            ({ title, description, duration, github, stacks, url }) => (
              <li key={title} className="flex flex-col sm:flex-row">
                <div className="mb-2 w-64 shrink-0">
                  <p className="text-lg font-bold">{title}</p>
                  <p className="text-sm">{duration}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>{description}</p>
                  <div className="flex flex-wrap">
                    {stacks.map((stack) => (
                      <span key={stack} className="mr-2">
                        {stack}
                      </span>
                    ))}
                  </div>
                  <div>
                    <CustomLink
                      href={github}
                      className="mr-2 text-gray-500 underline"
                    >
                      GitHub
                    </CustomLink>
                    {url && (
                      <CustomLink
                        href={url}
                        className="text-gray-500 underline"
                      >
                        Website
                      </CustomLink>
                    )}
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </AboutItem>
      <AboutItem title="Activities">
        <ul className="space-y-5">
          {siteMetadata.about.activities.map(({ title, duration }) => (
            <li key={title}>
              <p className="font-bold">{title}</p>
              <p className="text-sm">{duration}</p>
            </li>
          ))}
        </ul>
      </AboutItem>
      <AboutItem title="Education">
        <h3 className="text-lg font-bold">금오공과대학교</h3>
        <p>컴퓨터공학과 (2018.03 ~ )</p>
      </AboutItem>
    </div>
  );
}
