import { CharacterRemoverPipe } from './character-remover.pipe';

describe('CharacterRemoverPipe', () => {
  it('create an instance', () => {
    const pipe = new CharacterRemoverPipe();
    expect(pipe).toBeTruthy();
  });
});
