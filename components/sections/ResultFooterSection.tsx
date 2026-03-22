import Link from 'next/link';

export default function ResultFooterSection() {
  return (
    <section 
      className="py-12 bg-gray-50"
      style={{
        padding: '3rem 0',
        backgroundColor: '#F9FAFB'
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
        <div 
          className="max-w-2xl mx-auto text-center"
          style={{
            maxWidth: '32rem',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          {/* 안내 문구 */}
          <div 
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6"
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              border: '1px solid #E5E7EB',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            <div 
              className="text-2xl mb-3"
              style={{
                fontSize: '24px',
                marginBottom: '0.75rem'
              }}
            >
              📱
            </div>
            <p 
              className="text-gray-700 font-medium mb-2"
              style={{
                color: '#374151',
                fontWeight: '500',
                marginBottom: '0.5rem',
                fontSize: '16px'
              }}
            >
              입력하신 번호로 상세 결과를 보내드리겠습니다
            </p>
            <p 
              className="text-sm text-gray-500"
              style={{
                fontSize: '14px',
                color: '#6B7280'
              }}
            >
              보조금 신청 방법과 필요 서류 안내를 포함한<br />
              상세한 매칭 결과를 문자로 전송해드립니다
            </p>
          </div>

          {/* 뒤로가기 링크 */}
          <div 
            className="flex justify-center space-x-4"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            <Link
              href="/subsidy-match"
              className="text-primary hover:text-primary/80 text-sm font-medium underline"
              style={{
                color: '#2D5016',
                fontSize: '14px',
                fontWeight: '500',
                textDecoration: 'underline'
              }}
            >
              ← 뒤로 가기
            </Link>
            
            <span 
              className="text-gray-300"
              style={{
                color: '#D1D5DB'
              }}
            >
              |
            </span>
            
            <a
              href="mailto:help@farmhelp.co.kr"
              className="text-primary hover:text-primary/80 text-sm font-medium"
              style={{
                color: '#2D5016',
                fontSize: '14px',
                fontWeight: '500',
                textDecoration: 'none'
              }}
            >
              문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}