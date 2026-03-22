'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  
  // 페이지별 CTA 버튼 텍스트 결정
  const getCtaText = () => {
    if (pathname.includes('/result')) {
      return '신청서 초안 받기';
    } else {
      return '무료로 매칭 결과 받기';
    }
  };
  
  // 페이지별 CTA 버튼 동작 결정  
  const getCtaAction = () => {
    if (pathname.includes('/result')) {
      // 결과 페이지에서는 랜딩 B로 이동
      return () => {
        window.location.href = '/subsidy-docs?from=result_navbar';
      };
    } else if (pathname === '/subsidy-docs') {
      // 랜딩 B에서는 CTA 폼으로 스크롤
      return () => {
        const ctaSection = document.getElementById('cta-form');
        if (ctaSection) {
          ctaSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    } else {
      // 기본 랜딩페이지에서는 CTA 폼으로 스크롤
      return () => {
        const ctaSection = document.getElementById('cta-form');
        if (ctaSection) {
          ctaSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    }
  };

  return (
    <nav 
      className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50"
      style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #F3F4F6',
        position: 'sticky',
        top: '0',
        zIndex: '50',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
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
          className="flex justify-between items-center h-16"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '4rem'
          }}
        >
          {/* 로고 */}
          <Link 
            href="/subsidy-match" 
            className="flex items-center space-x-2"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none'
            }}
          >
            <div 
              className="w-8 h-8 bg-primary rounded-md flex items-center justify-center"
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: '#2D5016',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span 
                className="text-white font-bold text-lg"
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}
              >
                농
              </span>
            </div>
            <span 
              className="text-primary font-bold text-xl"
              style={{
                color: '#2D5016',
                fontWeight: 'bold',
                fontSize: '20px'
              }}
            >
              팜헬프
            </span>
          </Link>

          {/* CTA 버튼 */}
          <div className="flex items-center">
            <button 
              className="cta-button text-sm px-6 py-2 h-10"
              onClick={getCtaAction()}
            >
              {getCtaText()}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}