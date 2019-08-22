const uuid = require('uuid')
const findOperativePairs = (command) => {
  // '1d2+3d6*1d6'
  const operators = ['*', '+', '/', '-']
  let dice = {}
  let temp = ''
  let builtString = ''
  let currentUuid = uuid.v4()
  command.split('').forEach(i => {
    if (!operators.includes(i)) {
      temp += i
    } else { // if continas the operator
      dice[currentUuid] = temp
      builtString += currentUuid
      builtString += i
      temp = ''
      currentUuid = uuid.v4()
    }
  })
  builtString += currentUuid
  dice[currentUuid] = temp
  return { dice, builtString }
}

const rollDice = (dice, rand) => {
  const [roll, sides] = dice.split('d')
  let tempResult = 0
  for (let index = 0; index < roll; index++) {
    tempResult += Math.floor((parseInt(sides.replace('d', ''))) * rand()) + 1
  }
  return tempResult
}

const diceRoller = (command, rand = Math.random) => {
  let {builtString, dice} = findOperativePairs(command)
  Object.keys(dice).forEach((key) => {
    const value = rollDice(dice[key], rand)
    builtString = builtString.replace(key, value)
  })

  return eval(builtString)
}

module.exports = diceRoller
