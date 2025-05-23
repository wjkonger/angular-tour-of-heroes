import { CustomPostalcodePipe } from './custom-postalcode.pipe';

describe('CustomPostalcodePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPostalcodePipe();
    expect(pipe).toBeTruthy();
  });
});
