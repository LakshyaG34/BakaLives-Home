CREATE TABLE IF NOT EXISTS inquiries (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(160) NOT NULL,
  organization VARCHAR(200),
  email VARCHAR(320) NOT NULL,
  phone VARCHAR(80),
  service_package VARCHAR(80),
  timing VARCHAR(120),
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS inquiries_created_at_idx ON inquiries (created_at DESC);
