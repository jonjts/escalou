export abstract class BaseModel {
  static create(...args: unknown[]): BaseModel {
    throw new Error("Method not implemented.", { cause: args });
  }
}
