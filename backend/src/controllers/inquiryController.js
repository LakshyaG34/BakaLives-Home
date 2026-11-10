import { createInquiryRecord } from "../services/inquiryService.js";
import { validateInquiry } from "../validators/inquiryValidator.js";

export async function createInquiry(req, res) {
  const validation = validateInquiry(req.body);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  const inquiry = await createInquiryRecord(validation.data);
  return res.status(201).json({ inquiry });
}
