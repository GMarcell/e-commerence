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
  value.replace(/\D/g, "").slice(0, 5)

export const formatPhoneNumber = (value: string) => {
  // keep + only if first char
  let input = value.replace(/[^\d+]/g, "")
  if (input.includes("+")) {
    input = "+" + input.replace(/\+/g, "")
  }

  // limit digits (E.164 max)
  const digits = input.replace(/\D/g, "").slice(0, 15)

  // re-add +
  const hasPlus = input.startsWith("+")
  let formatted = hasPlus ? "+" + digits : digits

  // simple grouping: +62 812 3456 7890
  formatted = formatted.replace(
    /^(\+\d{1,3})(\d{3})(\d{4})(\d+)?/,
    "$1 $2 $3 $4"
  )

  return formatted.trim()
}

