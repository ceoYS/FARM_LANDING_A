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
          
          {/* 인증 마크들 */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                공식 인증 및 파트너십
              </h3>
              <p className="text-gray-600">
                정부기관과의 공식 협력으로 더욱 안전하게
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🏛️</div>
                <p className="text-sm text-gray-600 font-medium">농림축산식품부</p>
                <p className="text-xs text-gray-500">데이터 연동</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🏦</div>
                <p className="text-sm text-gray-600 font-medium">농협은행</p>
                <p className="text-xs text-gray-500">대출 상품 제휴</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">📊</div>
                <p className="text-sm text-gray-600 font-medium">통계청</p>
                <p className="text-xs text-gray-500">농업 데이터</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">🔒</div>
                <p className="text-sm text-gray-600 font-medium">보안 인증</p>
                <p className="text-xs text-gray-500">개인정보보호</p>
              </div>
            </div>
          </div>
          
          {/* 이용자 통계 */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">
              지금까지 <span className="text-primary font-semibold">12,847명</span>의 농업인이 이용했습니다
            </p>
            <div className="flex justify-center items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">⭐</span>
              ))}
              <span className="text-gray-600 text-sm ml-2">
                평균 만족도 4.8/5.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}