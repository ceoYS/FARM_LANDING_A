import { SolutionSectionProps, FeatureCardProps } from '@/lib/types';

export default function SolutionSection({ title, description, stats, features }: SolutionSectionProps) {
  // 기본 특징 카드들 (기존 하드코딩된 내용)
  const defaultFeatures: FeatureCardProps[] = [
    {
      icon: '🎯',
      title: '맞춤 매칭',
      description: '나에게 꼭 맞는 지원사업만 골라서 추천'
    },
    {
      icon: '⚡',
      title: '빠른 처리',
      description: '복잡한 절차를 간단한 3단계로 축소'
    },
    {
      icon: '🛡️',
      title: '데이터 기반',
      description: '공공데이터포털·보조금24 공개 데이터 활용'
    }
  ];
  
  // features가 전달되면 사용, 없으면 기본값 사용
  const displayFeatures = features || defaultFeatures;
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
              {displayFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}