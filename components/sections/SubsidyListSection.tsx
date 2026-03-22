import { SubsidyListSectionProps } from '@/lib/types';

export default function SubsidyListSection({ subsidies }: SubsidyListSectionProps) {
  const getStatusBadge = (status: 'available' | 'urgent') => {
    if (status === 'urgent') {
      return (
        <span 
          className="inline-flex items-center px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium"
          style={{
            backgroundColor: '#FED7AA',
            color: '#EA580C',
            borderRadius: '4px',
            padding: '0.25rem 0.5rem',
            fontSize: '12px',
            fontWeight: '500'
          }}
        >
          마감 임박
        </span>
      );
    } else {
      return (
        <span 
          className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium"
          style={{
            backgroundColor: '#DCFCE7',
            color: '#166534',
            borderRadius: '4px',
            padding: '0.25rem 0.5rem',
            fontSize: '12px',
            fontWeight: '500'
          }}
        >
          신청 가능
        </span>
      );
    }
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
        {/* 섹션 제목 */}
        <div 
          className="text-center mb-12"
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <h2 
            className="text-2xl font-bold text-primary mb-4"
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#2D5016',
              marginBottom: '1rem'
            }}
          >
            매칭된 보조금 목록
          </h2>
          <p 
            className="text-gray-600"
            style={{
              color: '#6B7280',
              fontSize: '16px'
            }}
          >
            현재 신청 가능한 보조금들을 확인해보세요
          </p>
        </div>

        {/* 보조금 카드 목록 */}
        <div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
          }}
        >
          {subsidies.map((subsidy, index) => (
            <div 
              key={subsidy.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
              style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                border: '1px solid #E5E7EB',
                padding: '1.5rem',
                transition: 'box-shadow 0.2s ease'
              }}
            >
              {/* 상태 뱃지 */}
              <div 
                className="flex justify-between items-start mb-4"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}
              >
                <span 
                  className="text-sm text-gray-500"
                  style={{
                    fontSize: '14px',
                    color: '#6B7280'
                  }}
                >
                  보조금 #{index + 1}
                </span>
                {getStatusBadge(subsidy.status)}
              </div>

              {/* 보조금명 */}
              <h3 
                className="font-semibold text-gray-900 mb-3 leading-tight"
                style={{
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.75rem',
                  lineHeight: '1.4',
                  fontSize: '16px'
                }}
              >
                {subsidy.name}
              </h3>

              {/* 지원 금액 */}
              <div 
                className="mb-3"
                style={{
                  marginBottom: '0.75rem'
                }}
              >
                <span 
                  className="text-sm text-gray-600"
                  style={{
                    fontSize: '14px',
                    color: '#6B7280'
                  }}
                >
                  지원 금액
                </span>
                <div 
                  className="text-lg font-semibold text-primary"
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#2D5016'
                  }}
                >
                  {subsidy.maxAmount}
                </div>
              </div>

              {/* 신청 마감일 */}
              <div 
                className="mb-4"
                style={{
                  marginBottom: '1rem'
                }}
              >
                <span 
                  className="text-sm text-gray-600"
                  style={{
                    fontSize: '14px',
                    color: '#6B7280'
                  }}
                >
                  신청 마감일
                </span>
                <div 
                  className="text-sm font-medium text-gray-900"
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#111827'
                  }}
                >
                  {subsidy.deadline}
                </div>
              </div>

              {/* 더 자세히 보기 링크 */}
              <button 
                className="w-full px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors duration-200 text-sm font-medium"
                style={{
                  width: '100%',
                  padding: '0.5rem 1rem',
                  border: '1px solid #2D5016',
                  color: '#2D5016',
                  backgroundColor: 'transparent',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s ease',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(45, 80, 22, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                자세히 보기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}