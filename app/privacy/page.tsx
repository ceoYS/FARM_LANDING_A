import { Metadata } from 'next';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '개인정보처리방침 - 팜헬프',
  description: '팜헬프의 개인정보처리방침을 확인하세요.',
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">개인정보처리방침</h1>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 개인정보의 처리 목적</h2>
                <p>
                  팜헬프('farmhelp.co.kr')는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <ul className="mt-3 ml-6 space-y-2 list-disc">
                  <li>농업 보조금 매칭 서비스 제공</li>
                  <li>고객 상담 및 서비스 안내</li>
                  <li>맞춤형 농업 정보 제공</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 개인정보의 처리 및 보유 기간</h2>
                <p>
                  팜헬프는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <strong>보유기간: 서비스 제공 목적 달성 시 즉시 파기</strong>
                  <p className="mt-2 text-sm">
                    보조금 매칭 결과 제공 완료 후 개인정보는 즉시 삭제되며, 법령에서 정한 의무보관 기간이 있는 경우에만 해당 기간 동안 보관합니다.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 처리하는 개인정보의 항목</h2>
                <p>팜헬프는 다음의 개인정보 항목을 처리하고 있습니다.</p>
                
                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">필수항목</h3>
                  <ul className="ml-6 space-y-1 list-disc">
                    <li>전화번호</li>
                    <li>지역 (시·도)</li>
                    <li>영농형태</li>
                    <li>경지면적</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">선택항목</h3>
                  <ul className="ml-6 space-y-1 list-disc">
                    <li>농가 운영 관련 애로사항</li>
                    <li>희망 보조금 분야 (해당 서비스 이용 시)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 개인정보의 제3자 제공</h2>
                <p>
                  팜헬프는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <strong className="text-blue-800">현재 제3자 제공은 하지 않습니다.</strong>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 정보주체의 권리·의무 및 그 행사방법</h2>
                <p>정보주체는 팜헬프에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
                <ul className="mt-3 ml-6 space-y-2 list-disc">
                  <li>개인정보 처리정지 요구</li>
                  <li>개인정보 열람요구</li>
                  <li>개인정보 정정·삭제요구</li>
                  <li>개인정보 처리정지 요구</li>
                </ul>
                
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <strong className="text-yellow-800">동의 거부 권리</strong>
                  <p className="mt-2 text-sm text-yellow-700">
                    개인정보 수집·이용에 대한 동의를 거부할 권리가 있으나, 동의를 거부할 경우 보조금 매칭 서비스 이용이 제한될 수 있습니다.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 개인정보의 안전성 확보조치</h2>
                <p>팜헬프는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                <ul className="mt-3 ml-6 space-y-2 list-disc">
                  <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
                  <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
                  <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 개인정보 보호책임자</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>이메일:</strong> privacy@farmhelp.co.kr</p>
                  <p><strong>전화번호:</strong> 1588-1234</p>
                  <p className="mt-2 text-sm text-gray-600">
                    정보주체께서는 팜헬프의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">8. 개인정보처리방침 변경</h2>
                <p>이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
                
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p><strong>시행일자:</strong> 2026년 3월 23일</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}