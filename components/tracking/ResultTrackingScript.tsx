'use client';

import { useEffect } from 'react';

// 글로벌 타입 선언
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

interface ResultTrackingScriptProps {
  region: string;
  farmType: string;
  area?: string;
  pain?: string;
}

export default function ResultTrackingScript({ region, farmType, area, pain }: ResultTrackingScriptProps) {
  useEffect(() => {
    // 페이지 로드 시 funnel_result_view 이벤트 전송
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'funnel_result_view', {
        region,
        farm_type: farmType,
        area: area || undefined,
        pain: pain || undefined
      });
    }
  }, [region, farmType, area, pain]);

  // 이 컴포넌트는 시각적으로 렌더링되지 않음
  return null;
}