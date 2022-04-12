export function getDateLabel(weekNum: number): string {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  return `${week[weekNum]}요일`;
}

export function setLocalStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export function getLocalStorage(key: string): string | null {
  return localStorage.getItem(key);
}
