import { VocabularyError } from '../exceptions/vocabularyError';
import { ContextEntity } from './contextEntry';

export class VocabularyEntity {
  private readonly id?: string;
  private term: string;
  private translation: string;
  private contexts: ContextEntity[];
  private tags: string[];

  constructor(props: {
    term: string;
    translation: string;
    contexts: ContextEntity[];
    tags: string[];
  }) {
    if (!props.term || props.term.trim().length == 0) {
      throw new VocabularyError('term', 'The term is required');
    }

    if (props.contexts.length == 0) {
      throw new VocabularyError('context', 'The context is required');
    }

    this.contexts = props.contexts;
    this.term = props.term;
    this.translation = props.translation;
    this.tags = props.tags || [];
  }

  public addContexts(sentence: string, translation: string) {
    if (!sentence || !translation) {
      throw new VocabularyError('translation', 'The translation is required');
    }
    this.contexts.push({ sentence, translation });
  }
}
