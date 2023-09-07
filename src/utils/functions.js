export default function getDiscountPercentage(total, totalAfterDiscount) {
  return parseInt(((total - totalAfterDiscount) / total) * 100) % 100
}
