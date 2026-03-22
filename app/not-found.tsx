import Link from 'next/link';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main>
        <section className="bg-background">
          <div className="section-container section-padding">
            <div className="max-w-md mx-auto text-center">
              <div className="text-6xl mb-6">🤔</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                페이지를 찾을 수 없어요
              </h1>
              <p className="text-gray-600 mb-8 leading-relaxed">
                찾으시는 페이지가 존재하지 않거나<br />
                주소가 변경되었을 수 있어요.
              </p>
              
              <div className="space-y-4">
                <Link href="/" className="cta-button block">
                  홈으로 돌아가기
                </Link>
                <Link 
                  href="/subsidy-match" 
                  className="block text-primary hover:text-primary/80 font-medium"
                >
                  보조금 매칭 서비스 바로가기 →
                </Link>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
                <p>문제가 계속되면 고객센터로 연락해주세요</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <a href="mailto:help@farmhelp.co.kr" className="hover:text-primary">
                    help@farmhelp.co.kr
                  </a>
                  <span>|</span>
                  <a href="tel:1588-1234" className="hover:text-primary">
                    1588-1234
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}