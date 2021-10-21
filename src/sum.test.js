const sum = require('./index');

describe('Sum', () => {
  it('should return sum of two integers', () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
    expect(result).not.toBe(9);
  });
});
