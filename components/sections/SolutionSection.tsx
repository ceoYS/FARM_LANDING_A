import { SolutionSectionProps } from '@/lib/types';

export default function SolutionSection({ title, description, stats }: SolutionSectionProps) {
  return (
    <section className="bg-primary/5">
      <div className="section-container section-padding">
        <div className="max-w-4xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>
          
          {/* 통계 데이터 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* 해결책 하이라이트 */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">맞춤 매칭</h3>
                <p className="text-gray-600 text-sm">
                  나에게 꼭 맞는 지원사업만 골라서 추천
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">빠른 처리</h3>
                <p className="text-gray-600 text-sm">
                  복잡한 절차를 간단한 3단계로 축소
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">안전 보장</h3>
                <p className="text-gray-600 text-sm">
                  정부 공식 데이터 기반 신뢰할 수 있는 정보
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}