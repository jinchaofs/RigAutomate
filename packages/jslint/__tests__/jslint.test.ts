import JsLint from '../src/index';

describe('JsLint should be ok', () => {
  it('JsLint demo should be ok', () => {
    const jslint = new JsLint();
    expect(jslint.now()).toBe('Now');
  });
});
