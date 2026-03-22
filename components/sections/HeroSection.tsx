import Link from 'next/link';
import { HeroSectionProps } from '@/lib/types';

export default function HeroSection({ headline, subCopy, ctaText, ctaLink }: HeroSectionProps) {
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
          {/* 헤드라인 */}
          <h1 
            className="font-bold text-primary mb-6 leading-tight"
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#2D5016',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              whiteSpace: 'pre-line'
            }}
          >
            {headline}
          </h1>
          
          {/* 서브카피 */}
          <p 
            className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto"
            style={{
              fontSize: '18px',
              color: '#374151',
              marginBottom: '2rem',
              lineHeight: '1.6',
              maxWidth: '48rem',
              margin: '0 auto 2rem auto'
            }}
          >
            {subCopy}
          </p>
          
          {/* CTA 버튼 */}
          <div 
            className="flex flex-col items-center"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Link 
              href={ctaLink as string} 
              className="cta-button text-lg px-8 w-full sm:w-auto max-w-sm hero-cta-button"
              style={{
                backgroundColor: '#F5A623',
                color: 'white',
                fontWeight: '600',
                padding: '1rem 2rem',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
                fontSize: '18px',
                maxWidth: '24rem',
                width: '100%'
              }}
            >
              {ctaText}
            </Link>
            
            {/* 버튼 아래 소텍스트 */}
            <p 
              className="text-sm text-gray-500 mt-3"
              style={{
                fontSize: '14px',
                color: '#6B7280',
                marginTop: '0.75rem'
              }}
            >
              30초면 끝납니다 · 완전 무료
            </p>
          </div>
          
          {/* 신뢰 지표 */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="text-primary font-semibold mr-2">✓</span>
                정부 인증 데이터
              </div>
              <div className="flex items-center">
                <span className="text-primary font-semibold mr-2">✓</span>
                100% 무료 서비스
              </div>
              <div className="flex items-center">
                <span className="text-primary font-semibold mr-2">✓</span>
                농업인 전용 맞춤 서비스
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}