'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { CTAFormProps, FARMING_TYPE_OPTIONS, REGION_OPTIONS, FARM_SIZE_OPTIONS, BIGGEST_PAIN_OPTIONS, LeadFormData } from '@/lib/types';

// 글로벌 타입 선언
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function CTAForm({ landingSource, additionalFields = [], prefillData }: CTAFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  const [formData, setFormData] = useState<LeadFormData>({
    region: prefillData?.region || '',
    farming_type: prefillData?.farming_type || '',
    farm_size: '',
    landing_source: landingSource,
    referral_source: prefillData?.referral_source || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [additionalData, setAdditionalData] = useState<Record<string, string>>({});

  // UTM 파라미터 추출
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      setFormData(prev => ({
        ...prev,
        utm_source: urlParams.get('utm_source') || undefined,
        utm_medium: urlParams.get('utm_medium') || undefined,
        utm_campaign: urlParams.get('utm_campaign') || undefined,
      }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value || undefined,
    }));
  };

  const handleAdditionalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAdditionalData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // 제출할 데이터 준비
      const submitData = {
        ...formData,
        ...additionalData, // 추가 필드 데이터 포함
        phone: formData.phone,
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        throw new Error('제출에 실패했습니다.');
      }

      // 분석 이벤트 전송
      if (typeof window !== 'undefined') {
        // GA4 이벤트
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'lead_submit', {
            landing_source: landingSource,
            farming_type: formData.farming_type,
            region: formData.region,
            farm_size: formData.farm_size,
            biggest_pain: formData.biggest_pain,
          });
        }

        // Meta Pixel 이벤트
        if (typeof window.fbq !== 'undefined') {
          window.fbq('track', 'Lead', {
            content_name: landingSource,
            content_category: formData.farming_type,
            value: 0,
            currency: 'KRW'
          });
        }
      }

      // 보조금 매칭 랜딩페이지인 경우 결과 페이지로 리다이렉트
      if (landingSource === 'subsidy_match') {
        // URL 파라미터 생성
        const params = new URLSearchParams({
          region: formData.region,
          farm_type: formData.farming_type,
        });
        
        if (formData.farm_size) {
          params.set('farm_size', formData.farm_size);
        }
        
        // 결과 페이지로 리다이렉트
        const resultUrl = `${pathname}/result?${params.toString()}`;
        router.push(resultUrl);
        return; // 리다이렉트 후 함수 종료
      }

      // 다른 랜딩페이지인 경우 기존 로직 유지
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="cta-form" className="bg-primary/5">
        <div className="section-container section-padding">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                접수 완료
              </h3>
              <p className="text-gray-600 leading-relaxed">
                입력하신 번호로 매칭 결과를 보내드리겠습니다.
                <br />
                (영업일 기준 1일 이내)
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  문의사항이 있으시면 언제든 연락해주세요
                </p>
                <div className="flex justify-center space-x-4 mt-3">
                  <a
                    href="mailto:help@farmhelp.co.kr"
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    이메일 문의
                  </a>
                  <span className="text-gray-300">|</span>
                  <a
                    href="tel:1588-1234"
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    전화 상담
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="cta-form" 
      className="bg-primary/5"
      style={{
        backgroundColor: 'rgba(45, 80, 22, 0.05)',
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
          className="max-w-md mx-auto"
          style={{
            maxWidth: '28rem',
            margin: '0 auto'
          }}
        >
          <div 
            className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '2rem',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              border: '1px solid #F3F4F6'
            }}
          >
            <div 
              className="text-center mb-6"
              style={{
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}
            >
              <h3 
                className="text-2xl font-bold text-gray-900 mb-2"
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginBottom: '0.5rem'
                }}
              >
                우리 농가에 맞는 보조금, 무료로 찾아드립니다
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  color: '#4B5563',
                  fontSize: '16px'
                }}
              >
                아래 정보를 입력하시면, 받을 수 있는 보조금 목록을 정리해서 보내드립니다
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 지역 */}
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                  지역 <span className="text-red-500">*</span>
                </label>
                <select
                  id="region"
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-cta focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                >
                  <option value="">시·도를 선택해주세요</option>
                  {REGION_OPTIONS.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              {/* 영농형태 */}
              <div>
                <label htmlFor="farming_type" className="block text-sm font-medium text-gray-700 mb-1">
                  영농형태 <span className="text-red-500">*</span>
                </label>
                <select
                  id="farming_type"
                  name="farming_type"
                  value={formData.farming_type}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-cta focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                >
                  <option value="">영농형태를 선택해주세요</option>
                  {FARMING_TYPE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 경지면적 */}
              <div>
                <label htmlFor="farm_size" className="block text-sm font-medium text-gray-700 mb-1">
                  경지면적 <span className="text-red-500">*</span>
                </label>
                <select
                  id="farm_size"
                  name="farm_size"
                  value={formData.farm_size || ''}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-cta focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                >
                  <option value="">경지면적을 선택해주세요</option>
                  {FARM_SIZE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 농가 문제점 */}
              <div>
                <label htmlFor="biggest_pain" className="block text-sm font-medium text-gray-700 mb-1">
                  지금 가장 골치 아픈 문제가 뭔가요? <span className="text-red-500">*</span>
                </label>
                <select
                  id="biggest_pain"
                  name="biggest_pain"
                  value={formData.biggest_pain || ''}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-cta focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                >
                  <option value="">선택해주세요</option>
                  {BIGGEST_PAIN_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* 기타 상세 입력 - biggest_pain이 '기타'일 때만 표시 */}
              {formData.biggest_pain === '기타' && (
                <div>
                  <label htmlFor="biggest_pain_other" className="block text-sm font-medium text-gray-700 mb-1">
                    구체적으로 어떤 문제인지 알려주세요 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="biggest_pain_other"
                    name="biggest_pain_other"
                    value={formData.biggest_pain_other || ''}
                    onChange={handleInputChange}
                    placeholder="예: 유기농 인증 받는 방법을 모르겠어요"
                    required
                    className="w-full px-3 py-3 border border-gray-300 rounded-cta focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              )}

              {/* 전화번호 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  전화번호 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone || ''}
                  onChange={handleInputChange}
                  placeholder="매칭 결과를 문자로 보내드립니다"
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-cta focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              {/* 추가 필드들 */}
              {additionalFields.map((field, index) => (
                <div key={index}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  
                  {field.type === 'select' ? (
                    <select
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={additionalData[field.name] || ''}
                      onChange={handleAdditionalChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-cta focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    >
                      <option value="">선택해주세요</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={3}
                      required={field.required}
                      value={additionalData[field.name] || ''}
                      onChange={handleAdditionalChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-cta focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={additionalData[field.name] || ''}
                      onChange={handleAdditionalChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-cta focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  )}
                </div>
              ))}

              {/* 에러 메시지 */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-cta">
                  {error}
                </div>
              )}

              {/* 제출 버튼 */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cta-button text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '제출 중...' : '무료로 매칭 결과 받기'}
              </button>

              {/* 개인정보 동의 */}
              <p className="text-xs text-gray-500 text-center">
                신청하시면{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  개인정보처리방침
                </a>
                에 동의하시는 것으로 간주됩니다.
              </p>
            </form>

            {/* 하단 추가 문구 */}
            <div className="mt-6 text-center">
              <p className="text-sm text-red-600 font-medium">
                지금 확인하지 않으면, 올해도 놓칠 수 있습니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}