import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: '팜헬프 - 농업인을 위한 맞춤형 금융 솔루션',
  description: '복잡한 보조금 신청부터 대출, 세금 가이드까지 한 번에 해결하는 농업인 전용 플랫폼입니다.',
  keywords: '농업, 보조금, 대출, 세금, 농업인, 금융, 지원사업, 농림축산식품부',
  authors: [{ name: '팜헬프' }],
  creator: '팜헬프',
  publisher: '팜헬프',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://farmhelp.co.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://farmhelp.co.kr',
    title: '팜헬프 - 농업인을 위한 맞춤형 금융 솔루션',
    description: '복잡한 보조금 신청부터 대출, 세금 가이드까지 한 번에 해결하는 농업인 전용 플랫폼입니다.',
    siteName: '팜헬프',
  },
  twitter: {
    card: 'summary_large_image',
    title: '팜헬프 - 농업인을 위한 맞춤형 금융 솔루션',
    description: '복잡한 보조금 신청부터 대출, 세금 가이드까지 한 번에 해결하는 농업인 전용 플랫폼입니다.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console에서 설정
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 환경변수에서 분석 스크립트 ID 가져오기
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="ko">
      <head>
        {/* 기본 메타 태그 */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#2D5016" />
        
        {/* 파비콘 */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.facebook.com" />
        
        {/* 프리로드 중요 리소스 */}
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          as="style"
        />

        {/* Google Analytics 4 */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_title: document.title,
                  page_location: window.location.href,
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel */}
        {metaPixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      
      <body className="antialiased">
        {/* Meta Pixel Noscript */}
        {metaPixelId && (
          <noscript>
            <img 
              height="1" 
              width="1" 
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
        
        {/* 메인 콘텐츠 */}
        <div id="root">
          {children}
        </div>
        
        {/* 추가 분석 스크립트들 */}
        <Script id="lead-tracking" strategy="afterInteractive">
          {`
            // 리드 추적 함수
            window.trackLead = function(data) {
              // Google Analytics 이벤트
              if (typeof gtag !== 'undefined') {
                gtag('event', 'generate_lead', {
                  currency: 'KRW',
                  value: 0,
                  landing_source: data.landing_source,
                  farming_type: data.farming_type,
                  region: data.region
                });
              }
              
              // Meta Pixel 이벤트
              if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead', {
                  content_name: data.landing_source,
                  content_category: data.farming_type,
                  value: 0,
                  currency: 'KRW'
                });
              }
            };
            
            // 페이지뷰 추적 (SPA 대응)
            window.trackPageView = function(url, title) {
              if (typeof gtag !== 'undefined') {
                gtag('config', '${gaId}', {
                  page_title: title,
                  page_location: url,
                  send_page_view: true
                });
              }
              
              if (typeof fbq !== 'undefined') {
                fbq('track', 'PageView');
              }
            };
          `}
        </Script>
      </body>
    </html>
  );
}