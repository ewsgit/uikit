export default function unit(number: number): string {
  return `${number / 4}rem`
}

export function unitToNumber(number: number): number {
  return number / 4
}
