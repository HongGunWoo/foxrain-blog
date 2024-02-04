const siteMetadata = {
  title: 'Foxrain Blog',
  author: 'GunWoo Hong',
  headerTitle: 'FoxRain',
  description: 'Blog by GunWoo Hong.',
  language: 'ko-KR',
  contact: {
    email: 'foxrain.gg@gmail.com',
    github: 'https://github.com/HongGunWoo',
  },
  about: {
    activities: [
      {
        title: '제2회 Postech Open Innovation Bigdata Challenge - 우수상',
        duration: '2020.11',
      },
      {
        title: '2023년도 하계종합학술대회 및 대학생논문경진대회 - 동상',
        duration: '2023.06',
      },
      {
        title: '프로그래머스 프론트엔드 데브코스 4기 수료',
        duration: '2023.06 ~ 2023.12',
      },
    ],
    projects: [
      {
        title: '아동급식카드 가맹점 조회 서비스',
        description:
          '사용자 위치를 기반으로 아동급식카드 가맹점 조회가 가능한 웹 서비스',
        duration: '2023.04 ~ 2023.06',
        stacks: ['React', 'JavaScript', 'Styled-components'],
        github: 'https://github.com/KITtowel/UW-Frontend',
      },
      {
        title: '혼콕',
        description: '1인 가구를 타겟으로한 자취 정보 공유 커뮤니티',
        duration: '2023.09 ~ 2023.10',
        stacks: ['React', 'TypeScript', 'Tanstack-Query', 'TailwindCSS'],
        github:
          'https://github.com/prgrms-fe-devcourse/FEDC4_HONKOK_JunilHwang',
        url: 'https://honkok.vercel.app',
      },
      {
        title: '우이삭(우리 이거 삭제하지말자)',
        description:
          '연인들을 위한 커플 다이어리 및 커플 관련 콘텐츠를 제공하는 서비스',
        duration: '2023.10 ~ 2023.12',
        stacks: [
          'React',
          'TypeScript',
          'Tanstack-Query',
          'TailwindCSS',
          'Emotion',
          'Jotai',
        ],
        github: 'https://github.com/Lovely-4K/love-frontend',
        url: 'https://woisac.netlify.app',
      },
      {
        title: '개발 블로그',
        description: '개발하며 배웠던 지식과 느낀 점을 정리하는 개인 블로그',
        duration: '2023.12 ~',
        stacks: ['Next.js', 'TypeScript', 'TailwindCSS'],
        github: 'https://github.com/HongGunWoo/foxrain-blog',
      },
    ],
  },
  locale: 'ko-KR',
};

export default siteMetadata;
