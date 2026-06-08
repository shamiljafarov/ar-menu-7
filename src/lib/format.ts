export function formatPrice(price: number, currency = '$'): string {
  return currency === '₼' ? `${price} ₼` : `${currency}${price}`;
}