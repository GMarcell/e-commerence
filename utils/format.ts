export const formatCardNumber = (value: string) =>
  value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();

export const formatExpiryDate = (value: string) => {
  // numbers only
  let digits = value.replace(/\D/g, "").slice(0, 4);

  // validate month
  if (digits.length >= 2) {
    const month = parseInt(digits.slice(0, 2), 10);
    if (month < 1) digits = "01" + digits.slice(2);
    if (month > 12) digits = "12" + digits.slice(2);
  }

  // format MM/YY
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};

export const formatCVV = (value: string) =>
  value.replace(/\D/g, "").slice(0, 3);

export const formatPostalCode = (value: string) =>
  value.replace(/\D/g, "").slice(0, 5);

export const formatPhoneNumber = (value: string) => {
  if (!value) return "";

  // Remove all non-numeric characters
  const digits = value.replace(/\D/g, "");

  // Limit length (example: max 13 digits)
  const limited = digits.slice(0, 13);

  // Format: 0812-3456-7890
  if (limited.length <= 4) return limited;
  if (limited.length <= 8) return `${limited.slice(0, 4)}-${limited.slice(4)}`;

  return `${limited.slice(0, 4)}-${limited.slice(4, 8)}-${limited.slice(8)}`;
};
