import { funcToTest } from '../../src/func'

test('should sum 1 and 2 resulting 3', () => {
  expect(funcToTest(1, 2)).toBe(3)
})
