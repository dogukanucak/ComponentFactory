Array.prototype.getBy = function <T, P extends keyof T>(
  this: T[],
  prop: P,
  value: T[P]
): T | null {
  return this.filter((item) => item[prop] === value)[0] || null;
};
