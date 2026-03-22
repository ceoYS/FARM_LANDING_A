// Supabase Database Types
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          created_at: string
          name: string | null
          phone: string | null
          kakao_id: string | null
          region: string
          farming_type: string
          farm_size: string | null
          age: number | null
          landing_source: string
          utm_source: string | null
          utm_medium: string | null
          utm_campaign: string | null
          biggest_pain: string | null
          biggest_pain_other: string | null
          target_subsidy: string | null
          referral_source: string | null
          from_funnel: boolean | null
        }
        Insert: {
          id?: string
          created_at?: string
          name?: string | null
          phone?: string | null
          kakao_id?: string | null
          region: string
          farming_type: string
          farm_size?: string | null
          age?: number | null
          landing_source: string
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          biggest_pain?: string | null
          biggest_pain_other?: string | null
          target_subsidy?: string | null
          referral_source?: string | null
          from_funnel?: boolean | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string | null
          phone?: string | null
          kakao_id?: string | null
          region?: string
          farming_type?: string
          farm_size?: string | null
          age?: number | null
          landing_source?: string
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          biggest_pain?: string | null
          biggest_pain_other?: string | null
          target_subsidy?: string | null
          referral_source?: string | null
          from_funnel?: boolean | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// 컴포넌트에서 사용할 타입들
export type Lead = Database['public']['Tables']['leads']['Row'];
export type LeadInsert = Database['public']['Tables']['leads']['Insert'];

// 폼에서 사용할 타입
export interface LeadFormData {
  name?: string;
  phone?: string;
  kakao_id?: string;
  region: string;
  farming_type: string;
  farm_size?: string;
  age?: number;
  landing_source: string;
  referral_source?: string; // 퍼널 추적을 위한 필드
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  biggest_pain?: string;
  biggest_pain_other?: string;
  target_subsidy?: string; // 선택한 보조금명
  from_funnel?: boolean; // 퍼널을 통해 유입된 리드인지 여부
}

// 보조금 아이템 타입 (결과 페이지용)
export interface SubsidyItem {
  id: string;
  name: string;
  agency: string; // 지원기관 추가
  maxAmount: string;
  deadline: string;
  status: 'available' | 'urgent';
}

// 랜딩 B 전용 폼 데이터 (추가 필드 포함)
export interface SubsidyDocsFormData extends Omit<LeadFormData, 'landing_source'> {
  landing_source: 'subsidy_docs';
}

// 영농형태 옵션
export const FARMING_TYPE_OPTIONS = [
  { value: '논벼', label: '논벼' },
  { value: '밭작물', label: '밭작물' },
  { value: '과수', label: '과수' },
  { value: '채소(노지)', label: '채소(노지)' },
  { value: '채소(시설)', label: '채소(시설)' },
  { value: '특작', label: '특작' },
  { value: '화훼', label: '화훼' },
  { value: '축산(한우)', label: '축산(한우)' },
  { value: '축산(젖소)', label: '축산(젖소)' },
  { value: '축산(돼지)', label: '축산(돼지)' },
  { value: '축산(닭)', label: '축산(닭)' },
  { value: '기타', label: '기타' },
] as const;

// 경지면적 옵션
export const FARM_SIZE_OPTIONS = [
  { value: '0.5ha 미만', label: '0.5ha 미만' },
  { value: '0.5~1ha', label: '0.5~1ha' },
  { value: '1~3ha', label: '1~3ha' },
  { value: '3~5ha', label: '3~5ha' },
  { value: '5ha 이상', label: '5ha 이상' },
] as const;

// 지역 옵션 (시/군/구)
export const REGION_OPTIONS = [
  '서울특별시',
  '부산광역시',
  '대구광역시',
  '인천광역시',
  '광주광역시',
  '대전광역시',
  '울산광역시',
  '세종특별자치시',
  '경기도',
  '강원특별자치도',
  '충청북도',
  '충청남도',
  '전라북도',
  '전라남도',
  '경상북도',
  '경상남도',
  '제주특별자치도',
] as const;

// 농가 문제점 옵션
export const BIGGEST_PAIN_OPTIONS = [
  "받을 수 있는 보조금을 모르겠음",
  "보조금 서류 작성이 너무 복잡함", 
  "영농일지 쓰는 게 귀찮음",
  "농산물 시세를 제때 파악하기 어려움",
  "농약/비료 사용 기록 관리가 번거로움",
  "GAP/친환경 인증 준비가 막막함",
  "세금/부가세 환급을 잘 모르겠음",
  "농기계 빌리기가 어려움",
  "수확철 인력 구하기가 힘듦",
  "농지 시세를 알기 어려움",
  "기타"
] as const;

// 보조금 선택 옵션 (랜딩 B용)
export const TARGET_SUBSIDY_OPTIONS = [
  "2026 스마트농업 시범사업",
  "친환경농업 직접지불금",
  "농업에너지 이용효율화 사업",
  "청년농업인 영농정착 지원",
  "공익직불금",
  "기타 (직접 입력)"
] as const;

// 공통 컴포넌트 props 타입들
export interface HeroSectionProps {
  headline: string;
  subCopy: string;
  ctaText: string;
  ctaLink: string;
}

export interface ProblemItemProps {
  icon: string;
  text: string;
}

export interface ProblemSectionProps {
  title: string;
  items: ProblemItemProps[];
}

export interface StatProps {
  number: string;
  label: string;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface SolutionSectionProps {
  title: string;
  description: string;
  stats: StatProps[];
  features?: FeatureCardProps[]; // 선택적 특징 카드들
}

export interface StepProps {
  icon: string;
  title: string;
  description: string;
}

export interface StepsSectionProps {
  title: string;
  steps: StepProps[];
}

export interface TrustItem {
  text: string;
  source?: string;
}

export interface TrustSectionProps {
  items: TrustItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  faqs: FAQItem[];
}

export interface CTAFormProps {
  landingSource: string;
  additionalFields?: Array<{
    name: string;
    label: string;
    type: 'text' | 'select' | 'textarea';
    required?: boolean;
    options?: string[];
  }>;
  // URL 파라미터로부터 자동 채움을 위한 옵션
  prefillData?: {
    region?: string;
    farming_type?: string;
    referral_source?: string;
  };
}

// 결과 페이지 Hero 섹션용 Props
export interface ResultHeroSectionProps {
  region: string;
  farmingType: string;
  matchCount: number;
}

// 보조금 목록 섹션용 Props
export interface SubsidyListSectionProps {
  subsidies: SubsidyItem[];
}

// 결과 페이지 CTA 섹션용 Props
export interface ResultCTASectionProps {
  region: string;
  farmingType: string;
  farmSize?: string;
}

// 랜딩 B 전용 컴포넌트 Props 타입들
export interface HowItWorksSectionProps {
  title: string;
  steps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}

export interface BenefitSectionProps {
  title: string;
  description: string;
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}