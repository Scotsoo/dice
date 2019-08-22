const diceRoller = require('../src')

describe('The dice roller', () => {
  describe('Simple Rolls', () => {
    it('should complete simple rolls', () => {
      const fakeRandom = () => 0.5
      expect(diceRoller('1d6', fakeRandom)).toEqual(4)
    })

    it('should complete 2 simple rolls', () => {
      const fakeRandom = () => 0.5
      expect(diceRoller('2d6', fakeRandom)).toEqual(8)
    })

    it('should complete 2 simple rolls with 9 sides', () => {
      const fakeRandom = () => 0.5
      expect(diceRoller('2d9', fakeRandom)).toEqual(10)
    })

    it('should complete simple rolls and consider the random change', () => {
      const fakeRandom = () => 0.25
      expect(diceRoller('1d6', fakeRandom)).toEqual(2)
    })

    it('should complete simple rolls and consider the random change', () => {
      const fakeRandom = () => 0.25
      expect(diceRoller('3d6', fakeRandom)).toEqual(6)
    })

    it('should complete simple rolls and consider the random change', () => {
      const fakeRandom = () => 0.25
      expect(diceRoller('1d2', fakeRandom)).toEqual(1)
    })

    it('should complete more complex rolls and consider the random change', () => {
      const fakeRandom = () => 0.25
      expect(diceRoller('1d2*3d6', fakeRandom)).toEqual(6)
    })

    it('should complete even more complex rolls and consider the random change', () => {
      const fakeRandom = () => 0.25
      expect(diceRoller('2d2*3d6', fakeRandom)).toEqual(12)
    })

    it('should complete even more complex rolls and consider the random change', () => {
      const fakeRandom = () => 0.25
      expect(diceRoller('1d2+3d6', fakeRandom)).toEqual(7)
    })

    it('should complete a rolls with a multiplication & addition', () => {
      const fakeRandom = () => 0.25
      expect(diceRoller('1d2+3d6*1d6', fakeRandom)).toEqual(13)
    })

    it('should complete a roll with division', () => {
      const fakeRandom = () => 0.25
      expect(diceRoller('3d6/3d6', fakeRandom)).toEqual(1)
    })

    it('should complete a roll with subtraction', () => {
      const fakeRandom = () => 0.25
      expect(diceRoller('3d6-3d6', fakeRandom)).toEqual(0)
    })
  })
})

