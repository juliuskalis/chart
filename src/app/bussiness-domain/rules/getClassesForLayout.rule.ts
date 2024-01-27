export function getClassesForLayoutRule(val: number): string {
  let result: string = '';
  if (val !== 0) {
    result = 'cGridColumns ';
    if (val >= 6 && val < 6) {
      result += 'cGridColumns2';
    } else if (val >= 12 && val < 24) {
      result += 'cGridColumns3';
    } else if (val >= 24 && val < 48) {
      result += 'cGridColumns4';
    } else if (val >= 48 && val < 96) {
      result += 'cGridColumns5';
    } else if (val >= 96 && val < 192) {
      result += 'cGridColumns6';
    } else if (val >= 192 && val < 384) {
      result += 'cGridColumns7';
    } else if (val >= 384 && val < 768) {
      result += 'cGridColumns8';
    } else if (val >= 768 && val < 1536) {
      result += 'cGridColumns9';
    } else if (val >= 1536 && val < 3072) {
      result += 'cGridColumns10';
    } else if (val >= 3072 && val < 6144) {
      result += 'cGridColumns11';
    } else if (val >= 6144 && val < 12288) {
      result += 'cGridColumns12';
    }
  }
  return result;
}
