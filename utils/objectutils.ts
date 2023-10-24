export function RemoveEmptyProps(object: any) {
  for (const key in object) {
    if (object[key] === '' || object[key] == null)

      delete object[key]
  }
}

export function RangeNumber(start: number, end: number) {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}
