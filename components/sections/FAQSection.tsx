'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQSectionProps } from '@/lib/types';

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 첫 번째 FAQ를 기본으로 열어둠

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white">
      <div className="section-container section-padding">
        <div className="max-w-3xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-lg text-gray-600">
              궁금한 점이 있다면 먼저 이곳을 확인해보세요
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          {/* FAQ 목록 */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary/30 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 pt-2 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 추가 문의 안내 */}
          <div className="mt-12 text-center">
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                더 궁금한 점이 있으신가요?
              </h3>
              <p className="text-gray-600 mb-4">
                언제든 편하게 문의해주세요. 친절하게 안내해드리겠습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:help@farmhelp.co.kr"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary bg-white rounded-cta hover:bg-primary hover:text-white transition-colors duration-200 font-medium"
                >
                  <span>📧</span>
                  <span className="ml-2">이메일 문의</span>
                </a>
                <a
                  href="tel:1588-1234"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary bg-white rounded-cta hover:bg-primary hover:text-white transition-colors duration-200 font-medium"
                >
                  <span>📞</span>
                  <span className="ml-2">전화 상담</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}