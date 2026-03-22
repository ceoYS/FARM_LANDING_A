import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ResultHeroSection from '@/components/sections/ResultHeroSection';
import SubsidyListSection from '@/components/sections/SubsidyListSection';
import ResultCTASection from '@/components/sections/ResultCTASection';
import { SubsidyItem } from '@/lib/types';

interface ResultPageProps {
  params: {
    slug: string;
  };
  searchParams: {
    region?: string;
    farm_type?: string;
    farm_size?: string;
  };
}

// 더미 보조금 데이터
const getDummySubsidies = (region: string, farmType: string): SubsidyItem[] => {
  const subsidies: SubsidyItem[] = [
    {
      id: '1',
      name: '2026 스마트농업 시범사업',
      maxAmount: '최대 3,000만원',
      deadline: '2026년 5월 31일',
      status: 'available'
    },
    {
      id: '2',
      name: '농업인 경영개선 지원사업',
      maxAmount: '최대 1,500만원',
      deadline: '2026년 4월 15일',
      status: 'urgent'
    },
    {
      id: '3',
      name: '친환경농업 직불제',
      maxAmount: '최대 800만원',
      deadline: '2026년 6월 30일',
      status: 'available'
    },
    {
      id: '4',
      name: '농촌융복합산업 활성화 지원',
      maxAmount: '최대 2,000만원',
      deadline: '2026년 5월 15일',
      status: 'available'
    },
    {
      id: '5',
      name: '청년농업인 영농정착 지원',
      maxAmount: '최대 1,000만원',
      deadline: '2026년 3월 31일',
      status: 'urgent'
    }
  ];

  // 지역과 영농형태에 따라 필터링 (실제로는 더 복잡한 로직)
  return subsidies.slice(0, Math.min(5, Math.max(3, subsidies.length)));
};

// 메타데이터 생성
export async function generateMetadata({ params, searchParams }: ResultPageProps): Promise<Metadata> {
  const { region = '해당', farm_type = '해당' } = searchParams;
  
  return {
    title: `${region} 지역 ${farm_type} 보조금 매칭 결과 - 팜헬프`,
    description: `${region} 지역 ${farm_type} 농가를 위한 맞춤 보조금 매칭 결과를 확인하세요.`,
    robots: {
      index: false, // 결과 페이지는 검색 엔진에 노출하지 않음
      follow: true,
    },
  };
}

// 결과 페이지 컴포넌트
function ResultPageContent({ params, searchParams }: ResultPageProps) {
  const { slug } = params;
  const { region, farm_type: farmType, farm_size: farmSize } = searchParams;

  // 유효한 랜딩페이지인지 확인 (현재는 subsidy-match만 지원)
  if (slug !== 'subsidy-match') {
    notFound();
  }

  // 필수 파라미터 확인
  if (!region || !farmType) {
    notFound();
  }

  // 더미 보조금 데이터 생성
  const subsidies = getDummySubsidies(region, farmType);
  const matchCount = subsidies.length;

  return (
    <>
      <NavBar />
      <main>
        {/* 결과 Hero 섹션 */}
        <ResultHeroSection 
          region={region}
          farmingType={farmType}
          matchCount={matchCount}
        />

        {/* 보조금 목록 섹션 */}
        <SubsidyListSection subsidies={subsidies} />

        {/* CTA 섹션 */}
        <ResultCTASection 
          region={region}
          farmingType={farmType}
          farmSize={farmSize}
        />
      </main>
      <Footer />
    </>
  );
}

export default function ResultPage(props: ResultPageProps) {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">매칭 결과를 불러오는 중...</p>
          </div>
        </div>
      }
    >
      <ResultPageContent {...props} />
    </Suspense>
  );
}

// 페이지 설정
export const dynamic = 'force-dynamic'; // 쿼리 파라미터를 사용하므로 동적 생성