export function formatCents(cents: number): string {
  const sign = cents < 0 ? "-" : "";
  const abs = Math.abs(cents);
  const dollars = Math.floor(abs / 100);
  const remainder = abs % 100;
  return `${sign}$${dollars}.${remainder.toString().padStart(2, "0")}`;
}

export function addTax(priceCents: number, taxRatePercent: number): number {
  return Math.round(priceCents * (1 + taxRatePercent / 100));
}
