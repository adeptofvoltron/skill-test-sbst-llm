/**
 * Applies a percentage discount to a price.
 *
 * @param priceCents - the original price, in cents
 * @param discountPercent - the discount to apply, e.g. 10 for 10% off
 * @returns the discounted price, in cents, rounded to the nearest cent
 */
export function applyDiscount(priceCents: number, discountPercent: number): number {
  return Math.round(priceCents * (1 - discountPercent / 100));
}
