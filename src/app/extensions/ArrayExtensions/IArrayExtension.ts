/* eslint-disable @typescript-eslint/no-unused-vars */
interface Array<T> {
  getBy<P extends keyof T>(prop: P, value: T[P]): T | null;
}
