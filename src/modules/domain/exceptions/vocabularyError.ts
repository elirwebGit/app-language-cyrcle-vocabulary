export class VocabularyError extends Error {
  constructor(
    public field: string,
    message: string,
  ) {
    super(message);
    this.name = 'VocabularyError';
    Object.setPrototypeOf(this, VocabularyError.prototype);
  }
}
