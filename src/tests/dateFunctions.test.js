const dayjs = require('dayjs');

describe('Date Functions', () => {
  describe('YYYY-MM-DD to unix', () => {
    it('should return the correctly converted unix value', () => {
      // Arrange
      const timeStamp = '2023-08-02';

      // Act
      const unixValue = dayjs(timeStamp).unix();

      // Assert
      expect(unixValue).toBe(1690905600);
    });
  });
});
