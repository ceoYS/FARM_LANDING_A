import Link from 'next/link';
import { ResultCTASectionProps } from '@/lib/types';

export default function ResultCTASection({ region, farmingType, farmSize }: ResultCTASectionProps) {
  // URL 파라미터 생성
  const createSubsidyDocsUrl = () => {
    const params = new URLSearchParams({
      region,
      farm_type: farmingType,
      from: 'subsidy_match'
    });
    
    if (farmSize) {
      params.set('farm_size', farmSize);
    }
    
    return `/subsidy-docs?${params.toString()}`;
  };

  return (
    <section 
      className="py-16"
      style={{
        padding: '4rem 0'
      }}
    >
      <div 
        className="section-container"
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        {/* 핵심 CTA 카드 */}
        <div 
          className="max-w-4xl mx-auto"
          style={{
            maxWidth: '56rem',
            margin: '0 auto'
          }}
        >
          <div 
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center"
            style={{
              backgroundColor: '#FFF8E1',
              border: '1px solid #FDE68A',
              borderRadius: '8px',
              padding: '2rem',
              textAlign: 'center'
            }}
          >
            {/* 아이콘 */}
            <div 
              className="text-4xl mb-4"
              style={{
                fontSize: '32px',
                marginBottom: '1rem'
              }}
            >
              📝
            </div>
            
            {/* 메인 메시지 */}
            <h2 
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '1rem'
              }}
            >
              이 보조금, 신청서를 AI가 대신 써드릴까요?
            </h2>
            
            {/* 설명 */}
            <div 
              className="text-gray-700 mb-6 leading-relaxed"
              style={{
                color: '#374151',
                marginBottom: '1.5rem',
                lineHeight: '1.6',
                fontSize: '16px'
              }}
            >
              <p className="mb-3">
                보조금 신청서 작성에 보통 <strong>3~5시간</strong>이 걸립니다.
              </p>
              <p className="mb-3">
                AI가 <strong>10분 만에</strong> 초안을 완성해드립니다.
              </p>
              <p>
                대행업체 비용 <span className="line-through text-gray-500">50~100만원</span> → <strong className="text-primary">무료 체험</strong>
              </p>
            </div>
            
            {/* CTA 버튼 */}
            <Link 
              href={createSubsidyDocsUrl()}
              className="cta-button text-lg px-8 py-4 inline-block w-full sm:w-auto max-w-md mx-auto"
              style={{
                backgroundColor: '#F5A623',
                color: 'white',
                fontWeight: '600',
                padding: '1rem 2rem',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                display: 'inline-block',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '18px',
                maxWidth: '20rem',
                width: '100%',
                margin: '0 auto'
              }}
            >
              무료로 신청서 초안 받아보기
            </Link>
            
            {/* 소텍스트 */}
            <p 
              className="text-sm text-gray-500 mt-4"
              style={{
                fontSize: '14px',
                color: '#6B7280',
                marginTop: '1rem'
              }}
            >
              현재 베타 테스트 중 · 선착순 100명 무료
            </p>
          </div>
        </div>
        
        {/* 하단 보조 CTA (옵션) */}
        <div 
          className="max-w-2xl mx-auto mt-12 text-center"
          style={{
            maxWidth: '32rem',
            margin: '3rem auto 0 auto',
            textAlign: 'center'
          }}
        >
          <div 
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E7EB',
              padding: '1.5rem'
            }}
          >
            <p 
              className="text-gray-700 mb-4"
              style={{
                color: '#374151',
                marginBottom: '1rem',
                fontSize: '16px'
              }}
            >
              매칭 결과를 카카오톡으로도 받아보시겠어요?
            </p>
            
            <button 
              className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-md font-medium hover:bg-yellow-500 transition-colors duration-200"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#FBBF24',
                color: '#111827',
                borderRadius: '6px',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F59E0B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FBBF24';
              }}
            >
              📱 카카오톡 채널 추가
            </button>
            
            <p 
              className="text-xs text-gray-500 mt-2"
              style={{
                fontSize: '12px',
                color: '#6B7280',
                marginTop: '0.5rem'
              }}
            >
              * 추후 업데이트 예정
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}