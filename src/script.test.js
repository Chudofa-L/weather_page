import { foo } from './script';

describe('plug', () => {
  it('return ""', () => {
    expect(foo()).toBe('');
  });
});
