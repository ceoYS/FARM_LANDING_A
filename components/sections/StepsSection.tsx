import { StepsSectionProps } from '@/lib/types';

export default function StepsSection({ title, steps }: StepsSectionProps) {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="section-container section-padding">
        <div className="max-w-4xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600">
              간단한 3단계로 나에게 맞는 지원을 받아보세요
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
          </div>
          
          {/* 단계별 설명 */}
          <div className="relative">
            {/* 연결선 (데스크톱) */}
            <div className="hidden md:block absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
              <div className="h-0.5 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary h-full opacity-30"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  {/* 아이콘과 번호 */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <div className="text-3xl">{step.icon}</div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* 제목과 설명 */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* 모바일 화살표 */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden mt-8 mb-4">
                      <div className="flex justify-center">
                        <svg 
                          className="w-6 h-6 text-gray-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              지금 바로 시작해서 나에게 맞는 지원을 찾아보세요!
            </p>
            <a 
              href="#cta-form" 
              className="cta-button inline-flex items-center px-8"
            >
              무료로 시작하기
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}