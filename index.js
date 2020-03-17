const readline = require('readline') // readline es una función interna de node
const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
})

const q = [
  'Cuál es tu primer nombre? ',
  'Cuál es tu primer apellido? ',
  'Cuál es tu edad? '
]

const askQuestion = (rl, question)=>{
  return new Promise((resolve, reject) =>{
    rl.question(question, answer =>{
      resolve(answer)
    })
  })
}

const ask = function(questions){
  return new Promise(async resolve => {
    let results = []
    for (let i = 0; i< questions.length; i++){
      const result = await askQuestion(rl, questions[i])
      results.push(result)
    }
    rl.close()
    resolve(results)
  })
}

ask(q)
.then(q=>{
  console.log(`Hola ${q[0]} ${q[1]}. Tú edad en años es ${q[2]}`)
})
