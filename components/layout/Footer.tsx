import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">농</span>
              </div>
              <span className="text-white font-bold text-xl">팜헬프</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              농업인을 위한 맞춤형 금융 솔루션을 제공하는 플랫폼입니다.
              <br />
              복잡한 보조금 신청부터 대출, 세금 가이드까지 한 번에 해결하세요.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>사업자등록번호: 123-45-67890</p>
              <p>통신판매업신고번호: 2024-서울강남-1234</p>
              <p>주소: 서울특별시 강남구 테헤란로 123</p>
            </div>
          </div>

          {/* 서비스 링크 */}
          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/subsidy-match"
                  className="hover:text-white transition-colors duration-200"
                >
                  보조금 매칭
                </Link>
              </li>
              <li>
                <Link
                  href="/loan-guide"
                  className="hover:text-white transition-colors duration-200"
                >
                  대출 가이드
                </Link>
              </li>
              <li>
                <Link
                  href="/tax-guide"
                  className="hover:text-white transition-colors duration-200"
                >
                  세금 가이드
                </Link>
              </li>
              <li>
                <Link
                  href="/policy-updates"
                  className="hover:text-white transition-colors duration-200"
                >
                  정책 업데이트
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="text-white font-semibold mb-4">고객지원</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors duration-200"
                >
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  문의하기
                </Link>
              </li>
              <li>
                <a
                  href="mailto:help@farmhelp.co.kr"
                  className="hover:text-white transition-colors duration-200"
                >
                  help@farmhelp.co.kr
                </a>
              </li>
              <li>
                <a
                  href="tel:1588-1234"
                  className="hover:text-white transition-colors duration-200"
                >
                  1588-1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm">
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-200"
              >
                이용약관
              </Link>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-200"
              >
                개인정보처리방침
              </Link>
              <Link
                href="/disclaimer"
                className="hover:text-white transition-colors duration-200"
              >
                면책사항
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} 팜헬프. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}