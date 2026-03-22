# 팜헬프 (FarmHelp) - 농업인 맞춤형 금융 솔루션 플랫폼

농업인을 위한 보조금, 대출, 세금 가이드를 제공하는 랜딩 페이지 프로젝트입니다.

## 🌟 주요 기능

- **보조금 매칭 서비스**: AI 기반 맞춤형 농업 지원사업 추천
- **반응형 디자인**: 모바일 퍼스트 접근법으로 농업인 모바일 사용률 80% 대응
- **동적 랜딩페이지**: 각 서비스별 맞춤형 랜딩페이지
- **데이터 수집**: Supabase를 통한 리드 데이터 관리
- **분석 추적**: Google Analytics 4 + Meta Pixel 통합

## 🛠 기술 스택

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS, Pretendard 폰트
- **Analytics**: Google Analytics 4, Meta Pixel
- **Deployment**: Vercel (권장)

## 🚀 설치 및 실행

### 1. 의존성 설치
\`\`\`bash
npm install
\`\`\`

### 2. 환경변수 설정
\`.env.local\` 파일을 생성하고 다음 값들을 설정하세요:

\`\`\`bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=your-pixel-id
\`\`\`

### 3. Supabase 테이블 설정
Supabase에 다음 테이블을 생성하세요:

\`\`\`sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT,
  phone TEXT,
  kakao_id TEXT,
  region TEXT NOT NULL,
  farming_type TEXT NOT NULL,
  landing_source TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

-- RLS 정책 설정 (필요시)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
\`\`\`

### 4. 개발 서버 실행
\`\`\`bash
npm run dev
\`\`\`

http://localhost:3000에서 확인할 수 있습니다.

### 5. 빌드
\`\`\`bash
npm run build
npm run start
\`\`\`

## 📁 프로젝트 구조

\`\`\`
├── app/                          # App Router 구조
│   ├── (landings)/              # 랜딩페이지 그룹
│   │   └── [slug]/              # 동적 랜딩페이지
│   │       └── page.tsx
│   ├── api/                     # API 라우트
│   │   └── leads/
│   │       └── route.ts
│   ├── globals.css              # 글로벌 스타일
│   ├── layout.tsx               # 루트 레이아웃 (GA4, Meta Pixel 포함)
│   ├── page.tsx                 # 홈페이지
│   └── not-found.tsx           # 404 페이지
├── components/                  # 컴포넌트
│   ├── forms/
│   │   └── CTAForm.tsx         # CTA 폼 컴포넌트
│   ├── layout/
│   │   ├── NavBar.tsx          # 네비게이션
│   │   └── Footer.tsx          # 푸터
│   └── sections/               # 랜딩페이지 섹션들
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── SolutionSection.tsx
│       ├── StepsSection.tsx
│       ├── TrustSection.tsx
│       └── FAQSection.tsx
├── data/                       # 랜딩페이지 데이터
│   └── landings/
│       └── subsidy-match.ts
├── lib/                        # 유틸리티
│   ├── supabase.ts            # Supabase 클라이언트
│   └── types.ts               # TypeScript 타입 정의
└── public/                     # 정적 파일
\`\`\`

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: #2D5016 (진한 초록 - 농업 신뢰감)
- **Secondary**: #F5A623 (주황 - CTA 강조)
- **Background**: #FAFAF5 (따뜻한 화이트)

### 폰트
- **한글**: Pretendard
- **본문**: 16px
- **헤드라인**: 32px (모바일) / 40px (데스크톱)

### 모바일 최적화
- 터치 최적화 버튼 높이: 56px
- 라운드 모서리: 8px
- 모바일 퍼스트 반응형 그리드

## 🌐 랜딩페이지 추가

새로운 랜딩페이지를 추가하려면:

1. \`data/landings/\`에 새 데이터 파일 생성
2. \`app/(landings)/[slug]/page.tsx\`의 \`landingDataMap\`에 추가
3. 필요시 \`generateStaticParams\`에 슬러그 추가

예시:
\`\`\`typescript
// data/landings/loan-guide.ts
export const loanGuideData = {
  metadata: { ... },
  hero: { ... },
  // ... 다른 섹션들
};

// app/(landings)/[slug]/page.tsx
const landingDataMap = {
  'subsidy-match': subsidyMatchData,
  'loan-guide': loanGuideData, // 새로 추가
};
\`\`\`

## 📊 성능 최적화

- **Lighthouse 목표 점수**: 90+
- **첫 로드 시간**: 2초 이내
- **이미지 최소화**: CSS + 이모지 활용
- **폰트 최적화**: 프리로드 적용
- **코드 스플리팅**: Next.js 자동 적용

## 🔧 배포

### Vercel 배포 (권장)
1. Vercel 계정 연결
2. 환경변수 설정
3. 자동 배포

### 환경변수 설정
프로덕션 환경에서 다음 환경변수들을 설정하세요:
- \`NEXT_PUBLIC_SUPABASE_URL\`
- \`NEXT_PUBLIC_SUPABASE_ANON_KEY\`
- \`NEXT_PUBLIC_GA_ID\`
- \`NEXT_PUBLIC_META_PIXEL_ID\`

## 📈 분석 및 추적

### Google Analytics 4
- 페이지뷰 자동 추적
- 리드 생성 이벤트 추적
- 커스텀 이벤트 지원

### Meta Pixel
- 페이지뷰 추적
- 리드 이벤트 추적
- 커스텀 전환 추적

### 이벤트 추적 예시
\`\`\`javascript
// 폼 제출 시 자동으로 추적됨
window.trackLead({
  landing_source: 'subsidy-match',
  farming_type: '논벼',
  region: '경기도'
});
\`\`\`

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📞 문의

- **이메일**: help@farmhelp.co.kr
- **전화**: 1588-1234

---

*농업인의 더 나은 미래를 위해 함께합니다. 🌾*