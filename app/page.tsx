import Link from 'next/link';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-background to-primary/5">
          <div className="section-container section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-bold text-primary mb-6 leading-tight">
                농업인을 위한<br />맞춤형 금융 솔루션
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                복잡한 보조금 신청부터 대출, 세금 가이드까지<br />
                한 번에 해결하는 농업인 전용 플랫폼입니다.
              </p>
              
              {/* 서비스 카드들 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Link 
                  href="/subsidy-match" 
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">보조금 매칭</h3>
                  <p className="text-gray-600 mb-4">
                    AI가 나에게 맞는 농업 지원사업을 찾아드려요
                  </p>
                  <div className="text-primary font-medium group-hover:text-primary/80">
                    자세히 보기 →
                  </div>
                </Link>

                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 opacity-75">
                  <div className="text-4xl mb-4">🏦</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">대출 가이드</h3>
                  <p className="text-gray-600 mb-4">
                    농업인 전용 대출 상품을 비교하고 추천받으세요
                  </p>
                  <div className="text-gray-400 font-medium">
                    준비 중
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 opacity-75">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">세금 가이드</h3>
                  <p className="text-gray-600 mb-4">
                    농업인 세금 혜택과 신고 방법을 쉽게 알아보세요
                  </p>
                  <div className="text-gray-400 font-medium">
                    준비 중
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12">
                <Link href="/subsidy-match" className="cta-button text-lg px-8">
                  무료로 시작하기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 통계 섹션 */}
        <section className="bg-white">
          <div className="section-container py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                농업인들의 선택
              </h2>
              <p className="text-lg text-gray-600">
                이미 많은 농업인분들이 팜헬프와 함께하고 있어요
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">12,847명</div>
                <div className="text-gray-600">누적 이용자 수</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">340억원</div>
                <div className="text-gray-600">총 지원금액</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">847개</div>
                <div className="text-gray-600">지원사업 DB</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.8/5.0</div>
                <div className="text-gray-600">평균 만족도</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}