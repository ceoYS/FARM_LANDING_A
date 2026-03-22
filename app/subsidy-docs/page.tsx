import { Metadata } from 'next';
import { Suspense } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import StepsSection from '@/components/sections/StepsSection';
import TrustSection from '@/components/sections/TrustSection';
import FAQSection from '@/components/sections/FAQSection';
import CTAForm from '@/components/forms/CTAForm';

// 랜딩 B 데이터 import
import { subsidyDocsData } from '@/data/landings/subsidy-docs';
import { TARGET_SUBSIDY_OPTIONS } from '@/lib/types';

// 메타데이터 생성
export const metadata: Metadata = {
  title: subsidyDocsData.metadata.title,
  description: subsidyDocsData.metadata.description,
  keywords: subsidyDocsData.metadata.keywords,
  openGraph: {
    title: subsidyDocsData.metadata.title,
    description: subsidyDocsData.metadata.description,
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: subsidyDocsData.metadata.title,
    description: subsidyDocsData.metadata.description,
  },
};

// 랜딩 B 페이지 컴포넌트 (URL 파라미터 처리 포함)
function SubsidyDocsContent({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const { region, farm_type, area, from, farm_size } = searchParams;
  
  // 하위 호환성을 위한 area 값 처리 (farm_size가 있으면 우선 사용)
  const farmArea = farm_size || area;
  
  // URL 파라미터로부터 prefill 데이터 생성
  const prefillData = {
    region: region || '',
    farming_type: farm_type || '',
    referral_source: from === 'subsidy_match' ? 'subsidy_match' : 'direct'
  };

  // 랜딩 B 전용 추가 필드 (보조금 선택 드롭다운)
  const additionalFields = [
    {
      name: 'target_subsidy',
      label: '신청하려는 보조금',
      type: 'select' as const,
      required: true,
      options: [
        '스마트팜 구축 지원',
        '청년농업인 영농정착 지원',
        '농업용 시설 현대화',
        '친환경농업 직접지불금',
        '농촌 태양광 발전사업',
        '기타'
      ]
    }
  ];

  const { hero, problem, solution, steps, trust, faq, landingSource } = subsidyDocsData;

  return (
    <>
      <NavBar />
      <main>
        {/* Hero 섹션 - 핵심 가치 제안 */}
        <HeroSection {...hero} />

        {/* Problem 섹션 - 보조금 신청의 어려움 */}
        <ProblemSection {...problem} />

        {/* Solution 섹션 - AI 솔루션 소개 */}
        <SolutionSection {...solution} />

        {/* Steps 섹션 - 3단계 작동 방식 */}
        <StepsSection {...steps} />

        {/* Trust 섹션 - 신뢰도 요소 */}
        <TrustSection {...trust} />

        {/* FAQ 섹션 - 자주 묻는 질문 */}
        <FAQSection {...faq} />

        {/* CTA Form - URL 파라미터 자동 채움 */}
        <CTAForm 
          landingSource={landingSource}
          additionalFields={additionalFields}
          prefillData={prefillData}
        />
      </main>
      <Footer />
    </>
  );
}

// 메인 페이지 컴포넌트
export default function SubsidyDocsPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">페이지를 불러오는 중...</p>
          </div>
        </div>
      }
    >
      <SubsidyDocsContent searchParams={searchParams} />
    </Suspense>
  );
}

// 페이지 설정
export const dynamic = 'force-dynamic'; // URL 파라미터를 사용하므로 동적 생성