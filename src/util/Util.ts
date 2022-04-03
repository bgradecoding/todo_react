export function getDateLabel(weekNum: number): string {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  return `${week[weekNum]}요일`;
}
