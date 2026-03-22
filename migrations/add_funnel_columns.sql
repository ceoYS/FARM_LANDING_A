-- Supabase Migration: Add funnel tracking columns to leads table
-- Generated: 2026-03-23

-- Add new columns to leads table for enhanced funnel tracking
ALTER TABLE leads 
ADD COLUMN target_subsidy text,
ADD COLUMN referral_source text,
ADD COLUMN from_funnel boolean DEFAULT false;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_referral_source ON leads(referral_source);
CREATE INDEX IF NOT EXISTS idx_leads_from_funnel ON leads(from_funnel);
CREATE INDEX IF NOT EXISTS idx_leads_target_subsidy ON leads(target_subsidy);

-- Add comments for documentation
COMMENT ON COLUMN leads.target_subsidy IS '사용자가 선택한 신청하려는 보조금명';
COMMENT ON COLUMN leads.referral_source IS '리드 소스 추적 (subsidy_match, direct 등)';
COMMENT ON COLUMN leads.from_funnel IS '퍼널을 통해 유입된 리드인지 여부';