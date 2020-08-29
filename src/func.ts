import { config } from 'dotenv'
config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

class Functions {
  sum(n1: number, n2: number) {
    return n1 + n2
  }

  mutiply(n1: number, n2: number) {
    return n1 * n2
  }
}

const funcs = new Functions()
const env = process.env.FUNCTION === 'sum' ? process.env.FUNCTION : false
const choosenFunc: 'sum' | 'mutiply' = env || 'mutiply'
const funcToTest = funcs[choosenFunc]

function Execute() {
  const res = funcToTest(1, 2)
  console.log(choosenFunc, 'resulted', res)
}

Execute()

export { funcToTest } 
