-- Table: user_feature_permissions (Granular user access checklist)
CREATE TABLE IF NOT EXISTS user_feature_permissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES internal_users(id) ON DELETE CASCADE,
    feature_id UUID REFERENCES erp_features(id) ON DELETE CASCADE,
    can_access BOOLEAN DEFAULT TRUE,
    UNIQUE(user_id, feature_id)
);
