const fruitBasket = {
  apple: 27,
  orange: 16,
  pear: 4,
}

const getNumFruit = fruit => {
  return sleep(1000).then(result => fruitBasket[fruit])
}

const sleep = t => {
  return new Promise(resolve => { setTimeout(() => { resolve() }, t) })
}

const control = async _ => {
  console.log('start')

  const appleNum = await getNumFruit('apple')
  console.log(appleNum)

  const orangeNum = await getNumFruit('orange')
  console.log(orangeNum)

  const pearNum = await getNumFruit('pear')
  console.log(pearNum)

  console.log('end')
}

// control()

const fruitsToGet = ['apple', 'orange', 'pear']
const forLoop = async _ => {
  console.log('start')
  // fruitsToGet.forEach(async item => {
  //   const n = await getNumFruit(item)
  //   console.log(n)
  // })
  for (let i = 0; i < fruitsToGet.length; i++) {
    const n = await getNumFruit(fruitsToGet[i])
    console.log(n)
  }
  console.log('end')
}
forLoop()
