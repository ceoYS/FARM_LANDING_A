import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 필수 필드 검증
    if (!body.region || !body.farming_type || !body.land_area || !body.concern || !body.phone) {
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // Supabase에 데이터 삽입
    const { data, error } = await supabase
      .from('subsidy_leads')
      .insert([{
        region: body.region,
        farming_type: body.farming_type,
        land_area: body.land_area,
        concern: body.concern,
        phone: body.phone
      }]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '제출 실패' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Supabase error:', error);
    return NextResponse.json(
      { error: '제출 실패' },
      { status: 500 }
    );
  }
}
