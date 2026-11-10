import { pool } from "../db/pool.js";

export async function createInquiryRecord(inquiry) {
  const result = await pool.query(
    `INSERT INTO inquiries (name, organization, email, phone, service_package, timing, message)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id, created_at`,
    [
      inquiry.name,
      inquiry.organization,
      inquiry.email,
      inquiry.phone,
      inquiry.package,
      inquiry.timing,
      inquiry.message,
    ],
  );
  return result.rows[0];
}
