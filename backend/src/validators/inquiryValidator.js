function optionalText(value, maxLength) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : null;
}

export function validateInquiry(body = {}) {
  const { name, email, message } = body;

  if (![name, email, message].every((value) => typeof value === "string" && value.trim())) {
    return { valid: false, error: "Name, email, and message are required." };
  }
  if (name.trim().length > 160 || email.trim().length > 320 || message.trim().length > 10_000) {
    return { valid: false, error: "One or more fields exceed the allowed length." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return { valid: false, error: "Enter a valid email address." };
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      organization: optionalText(body.organization, 200),
      email: email.trim().toLowerCase(),
      phone: optionalText(body.phone, 80),
      package: optionalText(body.package, 80),
      timing: optionalText(body.timing, 120),
      message: message.trim(),
    },
  };
}
