import { ProblemSectionProps } from '@/lib/types';

export default function ProblemSection({ title, items }: ProblemSectionProps) {
  return (
    <section className="bg-white">
      <div className="section-container section-padding">
        <div className="max-w-4xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          {/* 문제점 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div 
                key={index}
                className="bg-red-50 border border-red-100 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-800 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 공감 메시지 */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 italic">
              "이런 고민들, 혹시 나만 하는 건 아니겠지...?"
            </p>
            <p className="text-sm text-gray-500 mt-2">
              전국 농업인 10명 중 8명이 경험한 공통적인 어려움입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}