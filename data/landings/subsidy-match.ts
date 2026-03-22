import { 
  HeroSectionProps,
  ProblemSectionProps,
  SolutionSectionProps,
  StepsSectionProps,
  TrustSectionProps,
  FAQSectionProps 
} from '@/lib/types';

export const subsidyMatchData = {
  // 페이지 메타데이터
  metadata: {
    title: '농업 보조금 매칭 서비스 - 팜헬프',
    description: '복잡한 농업 보조금 신청, 이제 3분만에 해결하세요. AI가 나에게 맞는 지원사업을 찾아드립니다.',
    keywords: '농업 보조금, 농업 지원사업, 농림축산식품부, 농업인 혜택, 보조금 신청',
  },

  // Hero 섹션
  hero: {
    headline: '우리 농가가 놓치고 있는 보조금,\n3분 만에 찾아드립니다',
    subCopy: '2026년 농림축산식품부 보조금 530개 + 지자체 보조금까지. 당신이 받을 수 있는데 몰라서 못 받고 있는 보조금이 있습니다.',
    ctaText: '무료로 매칭 결과 받기',
    ctaLink: '#cta-form'
  } as HeroSectionProps,

  // Problem 섹션
  problem: {
    title: '혹시 이런 경험 있으신가요?',
    items: [
      {
        icon: '🏛️',
        text: '농업기술센터에 전화했더니 \'홈페이지 보세요\'라는 답변만'
      },
      {
        icon: '📋',
        text: '보조금 종류가 너무 많아서 뭘 받을 수 있는지 모르겠음'
      },
      {
        icon: '💸',
        text: '옆집은 받았는데 나는 몰라서 못 받은 보조금이 있었음'
      }
    ]
  } as ProblemSectionProps,

  // Solution 섹션
  solution: {
    title: '4가지만 입력하면, AI가 전부 찾아드립니다',
    description: '지역, 영농형태, 경지면적, 연령. 이 4가지 정보로 530개 이상의 보조금 DB를 자동 스캔합니다.',
    stats: [
      {
        number: '530+',
        label: '농식품부 내역사업 수'
      },
      {
        number: '평균 3.2건',
        label: '농가당 놓치고 있는 보조금 수'
      },
      {
        number: '연 150~400만 원',
        label: '추가 수령 가능 예상 금액 범위'
      }
    ]
  } as SolutionSectionProps,

  // Steps 섹션
  steps: {
    title: '이렇게 간단합니다',
    steps: [
      {
        icon: '📝',
        title: '내 농가 정보 입력',
        description: '지역·작물·면적·나이 4개만'
      },
      {
        icon: '🤖',
        title: 'AI 자동 매칭',
        description: '530+ 보조금 DB 실시간 스캔'
      },
      {
        icon: '📊',
        title: '매칭 결과 확인',
        description: '받을 수 있는 보조금 + 예상 금액 + 신청 마감일'
      }
    ]
  } as StepsSectionProps,

  // Trust 섹션
  trust: {
    items: [
      {
        text: '공공데이터포털(data.go.kr) 공식 데이터 기반',
        source: '행정안전부 공공데이터포털'
      },
      {
        text: '보조금24 연동으로 실시간 정보 업데이트',
        source: '복권위원회 보조금24'
      },
      {
        text: '농림축산식품부 2026년 예산 20.1조 원 중 당신 몫을 찾아드립니다',
        source: '농림축산식품부 2026년 예산안'
      }
    ]
  } as TrustSectionProps,

  // FAQ 섹션
  faq: {
    faqs: [
      {
        question: '정말 무료인가요?',
        answer: '네, 보조금 매칭 결과 확인은 완전 무료입니다.'
      },
      {
        question: '개인정보는 안전한가요?',
        answer: '입력하신 정보는 보조금 매칭 목적으로만 사용되며, 제3자에게 제공하지 않습니다.'
      },
      {
        question: '매칭 결과가 정확한가요?',
        answer: '공공데이터 기반이라 90% 이상 정확하지만, 지자체별 세부 조건은 신청 시 재확인이 필요할 수 있습니다.'
      }
    ]
  } as FAQSectionProps,

  // 추가 메타데이터
  landingSource: 'subsidy-match'
};