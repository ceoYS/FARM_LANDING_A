import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import StepsSection from '@/components/sections/StepsSection';
import TrustSection from '@/components/sections/TrustSection';
import FAQSection from '@/components/sections/FAQSection';
import CTAForm from '@/components/forms/CTAForm';

// 랜딩페이지 데이터 import
import { subsidyMatchData } from '@/data/landings/subsidy-match';

// 사용 가능한 랜딩페이지 데이터 맵
const landingDataMap = {
  'subsidy-match': subsidyMatchData,
  // 추후 다른 랜딩페이지 추가
  // 'loan-guide': loanGuideData,
  // 'tax-guide': taxGuideData,
} as const;

type LandingSlug = keyof typeof landingDataMap;

interface LandingPageProps {
  params: {
    slug: string;
  };
}

// 정적 메타데이터 생성
export async function generateMetadata({ params }: LandingPageProps): Promise<Metadata> {
  const landingData = landingDataMap[params.slug as LandingSlug];
  
  if (!landingData) {
    return {
      title: '페이지를 찾을 수 없습니다 - 팜헬프',
      description: '요청하신 페이지를 찾을 수 없습니다.',
    };
  }

  const { metadata } = landingData;
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'website',
      locale: 'ko_KR',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
  };
}

// 정적 경로 생성 (빌드 시 미리 생성할 페이지들)
export async function generateStaticParams() {
  return Object.keys(landingDataMap).map((slug) => ({
    slug,
  }));
}

export default function LandingPage({ params }: LandingPageProps) {
  const landingData = landingDataMap[params.slug as LandingSlug];

  // 존재하지 않는 슬러그인 경우 404 페이지로 리다이렉트
  if (!landingData) {
    notFound();
  }

  const { hero, problem, solution, steps, trust, faq, landingSource } = landingData;

  return (
    <>
      <NavBar />
      <main>
        {/* Hero Section */}
        <HeroSection {...hero} />

        {/* Problem Section */}
        <ProblemSection {...problem} />

        {/* Solution Section */}
        <SolutionSection {...solution} />

        {/* Steps Section */}
        <StepsSection {...steps} />

        {/* Trust Section */}
        <TrustSection {...trust} />

        {/* FAQ Section */}
        <FAQSection {...faq} />

        {/* CTA Form */}
        <CTAForm landingSource={landingSource} />
      </main>
      <Footer />
    </>
  );
}

// 페이지 설정
export const dynamic = 'force-static';
export const revalidate = 3600; // 1시간마다 재생성