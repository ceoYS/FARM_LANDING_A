import { 
  HeroSectionProps,
  ProblemSectionProps,
  SolutionSectionProps,
  StepsSectionProps,
  TrustSectionProps,
  FAQSectionProps 
} from '@/lib/types';

export const subsidyDocsData = {
  // 페이지 메타데이터
  metadata: {
    title: '보조금 신청서 AI 작성 서비스 - 팜헬프',
    description: '보조금 신청서 작성에 3~5시간? AI가 10분 만에 초안을 완성해드립니다. HWP/PDF 다운로드까지.',
    keywords: '보조금 신청서, AI 작성, 사업계획서, 농업 신청서, 보조금 대행',
  },

  // Hero 섹션
  hero: {
    headline: '보조금 신청서,\nAI가 대신 써드립니다',
    subCopy: '사업계획서, 영농현황, 예산서까지. HWP 양식에 맞춰 10분 만에 초안을 완성합니다.',
    ctaText: '무료로 신청서 초안 받아보기',
    ctaLink: '#cta-form'
  } as HeroSectionProps,

  // Problem 섹션
  problem: {
    title: '보조금 신청, 이래서 포기하셨죠?',
    items: [
      {
        icon: '📄',
        text: '양식이 매번 달라서 어디서부터 써야 할지 모르겠음'
      },
      {
        icon: '⏰',
        text: '사업계획서 쓰다가 3일 날린 적 있음'
      },
      {
        icon: '💰',
        text: '대행업체에 맡기자니 50만원이 아까움'
      }
    ]
  } as ProblemSectionProps,

  // Solution 섹션  
  solution: {
    title: '이제 AI가 10분 만에 해결해드립니다',
    description: '실제 승인된 신청서 패턴을 학습한 AI가 농림축산식품부 표준 양식에 맞춰 초안을 작성합니다.',
    stats: [
      {
        number: '10분',
        label: '초안 완성 시간'
      },
      {
        number: '50~100만원 → 0원',
        label: '대행비 절감'
      },
      {
        number: 'HWP/PDF',
        label: '다운로드 형식'
      }
    ],
    features: [
      {
        icon: '📄',
        title: '양식 자동 적용',
        description: '농식품부 표준 HWP 양식에 맞춰 자동 작성'
      },
      {
        icon: '⚡',
        title: '10분 완성',
        description: '사업계획서·예산서·영농현황 한 번에'
      },
      {
        icon: '💰',
        title: '비용 절감',
        description: '대행 50~100만원 → 무료 베타'
      }
    ]
  } as SolutionSectionProps,

  // Steps 섹션 (작동 방식)
  steps: {
    title: '3단계로 신청서 완성',
    steps: [
      {
        icon: '✅',
        title: '보조금 선택 + 농가 정보 확인',
        description: '매칭된 보조금 중 선택 + 기본 농가 정보 검증'
      },
      {
        icon: '🤖',
        title: 'AI가 초안 자동 작성',
        description: '사업계획서·예산서·영농현황 초안을 10분 만에 완성'
      },
      {
        icon: '📋',
        title: 'HWP/PDF 다운로드',
        description: '완성된 초안을 다운로드하여 검토 후 제출'
      }
    ]
  } as StepsSectionProps,

  // Trust 섹션 (신뢰 요소)
  trust: {
    items: [
      {
        text: '공개된 보조금 신청서 양식과 가이드라인 기반',
        source: '농림축산식품부 공개 자료 활용'
      },
      {
        text: '농림축산식품부 표준 양식 기반',
        source: '농식품부 공개 양식 참고'
      },
      {
        text: '추후 전문가 검토 옵션 추가 예정 (미확정)',
        source: '서비스 개선 계획'
      }
    ]
  } as TrustSectionProps,

  // FAQ 섹션
  faq: {
    faqs: [
      {
        question: '정말 무료인가요?',
        answer: '베타 기간 동안 선착순 100명 무료입니다. 이후 유료로 전환될 수 있습니다.'
      },
      {
        question: 'AI가 쓴 서류를 그대로 제출해도 되나요?',
        answer: '초안이므로 검토 후 제출하시는 걸 권장합니다. 핵심 구조와 내용은 AI가 채워드리고, 세부사항만 수정하시면 됩니다.'
      },
      {
        question: '어떤 보조금이 지원되나요?',
        answer: '현재 주요 20개 보조금 양식을 지원하며, 스마트농업·경영개선·친환경농업 등 인기 지원사업을 우선 지원합니다.'
      },
      {
        question: '승인 확률이 높아지나요?',
        answer: '실제 승인 사례를 학습했기 때문에 구조적으로 완성도가 높습니다. 다만 승인은 사업 내용과 예산 상황에 따라 달라질 수 있습니다.'
      }
    ]
  } as FAQSectionProps,

  // 추가 메타데이터
  landingSource: 'subsidy_docs'
};