import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { LeadFormData, LeadInsert, Database } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    // Supabase 클라이언트 생성
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { error: 'Supabase 설정이 누락되었습니다.' },
        { status: 500 }
      );
    }

    const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
    
    const body: LeadFormData = await request.json();
    
    // 필수 필드 검증
    if (!body.region || !body.farming_type || !body.farm_size || !body.landing_source) {
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 전화번호 필수 검증
    if (!body.phone) {
      return NextResponse.json(
        { error: '전화번호를 입력해주세요.' },
        { status: 400 }
      );
    }

    // biggest_pain 필수 검증
    if (!body.biggest_pain) {
      return NextResponse.json(
        { error: '가장 골치 아픈 문제를 선택해주세요.' },
        { status: 400 }
      );
    }

    // biggest_pain이 "기타"일 때 biggest_pain_other 필수 검증
    if (body.biggest_pain === '기타' && !body.biggest_pain_other?.trim()) {
      return NextResponse.json(
        { error: '구체적인 문제 내용을 입력해주세요.' },
        { status: 400 }
      );
    }

    // Supabase에 데이터 삽입
    const insertData: LeadInsert = {
      name: body.name || null,
      phone: body.phone,
      kakao_id: null, // subsidy-match에서는 전화번호만 사용
      region: body.region,
      farming_type: body.farming_type,
      farm_size: body.farm_size || null,
      age: body.age || null,
      landing_source: body.landing_source,
      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      biggest_pain: body.biggest_pain || null,
      biggest_pain_other: body.biggest_pain_other || null,
    };

    const { data, error } = await supabase
      .from('leads')
      .insert(insertData as any)
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '데이터 저장에 실패했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: '성공적으로 등록되었습니다.',
        data: data?.[0] 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// GET 요청 처리 (관리자용 - 추후 인증 추가 필요)
export async function GET(request: NextRequest) {
  try {
    // Supabase 클라이언트 생성
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { error: 'Supabase 설정이 누락되었습니다.' },
        { status: 500 }
      );
    }

    const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
    
    const { searchParams } = new URL(request.url);
    const landingSource = searchParams.get('landing_source');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (landingSource) {
      query = query.eq('landing_source', landingSource);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '데이터 조회에 실패했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}