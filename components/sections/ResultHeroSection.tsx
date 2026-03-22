import { ResultHeroSectionProps } from '@/lib/types';

export default function ResultHeroSection({ region, farmingType, matchCount }: ResultHeroSectionProps) {
  return (
    <section 
      className="bg-gradient-to-br from-background via-background to-primary/5"
      style={{
        background: 'linear-gradient(135deg, #FAFAF5 0%, #FAFAF5 60%, rgba(45, 80, 22, 0.05) 100%)',
        padding: '4rem 0'
      }}
    >
      <div 
        className="section-container section-padding"
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1rem'
        }}
      >
        <div 
          className="max-w-4xl mx-auto text-center"
          style={{
            maxWidth: '56rem',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          {/* 상태 뱃지 */}
          <div 
            className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: '#DCFCE7',
              color: '#166534',
              borderRadius: '9999px',
              padding: '0.5rem 1rem',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '1.5rem'
            }}
          >
            ✅ 매칭 완료
          </div>
          
          {/* 메인 제목 */}
          <h1 
            className="font-bold text-primary mb-4 leading-tight"
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#2D5016',
              marginBottom: '1rem',
              lineHeight: '1.3'
            }}
          >
            {region} 지역, {farmingType} 기준<br />
            매칭 결과입니다
          </h1>
          
          {/* 매칭 건수 */}
          <div 
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6 inline-block"
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E7EB',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            <div className="text-center">
              <div 
                className="text-3xl font-bold text-primary mb-2"
                style={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                  color: '#2D5016',
                  marginBottom: '0.5rem'
                }}
              >
                총 {matchCount}건
              </div>
              <p 
                className="text-gray-600"
                style={{
                  color: '#6B7280',
                  fontSize: '16px'
                }}
              >
                의 보조금을 받을 수 있을 것으로 예상됩니다
              </p>
            </div>
          </div>
          
          {/* 안내 메시지 */}
          <p 
            className="text-gray-600 text-center max-w-2xl mx-auto"
            style={{
              color: '#6B7280',
              fontSize: '16px',
              maxWidth: '32rem',
              margin: '0 auto',
              lineHeight: '1.5'
            }}
          >
            아래 목록을 확인하시고, 관심 있는 보조금의 신청서를 AI가 대신 작성해드릴 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}