import { CurrencyDescriptorPipe } from './currency-descriptor.pipe';

describe('CurrencyDescriptorPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyDescriptorPipe();
    expect(pipe).toBeTruthy();
  });
});
