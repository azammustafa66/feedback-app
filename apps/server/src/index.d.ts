export {}

declare global {
  namespace Express {
    interface Request {
      foo: {
        bar: string
      }
    }
  }
}
