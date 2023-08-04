export function getSelectedUserBoxLayoutRule(innerWidth: number): string {
  if (innerWidth >= 1280) {
    return 'default';
  } else {
    return 'reversed';
  }
}
