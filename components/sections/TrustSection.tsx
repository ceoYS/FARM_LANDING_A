import { TrustSectionProps } from '@/lib/types';

export default function TrustSection({ items }: TrustSectionProps) {
  return (
    <section className="bg-gray-50">
      <div className="section-container section-padding">
        <div className="max-w-4xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              신뢰할 수 있는 서비스
            </h2>
            <p className="text-lg text-gray-600">
              정확하고 신뢰할 수 있는 정보로 안심하고 이용하세요
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          {/* 신뢰 요소들 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {items.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-800 leading-relaxed mb-2">
                      {item.text}
                    </p>
                    {item.source && (
                      <p className="text-xs text-gray-500 font-medium">
                        출처: {item.source}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}