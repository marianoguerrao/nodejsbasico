const cp = require('child_process')

function execCommand(command){
  cp.exec(command, (err, stdout, stderr) =>{
    if (err) {
      console.log(`Error: ${err} `)
      return
    }
    if(stdout) console.log(`Standard out: ${stdout}` )
    if(stderr) console.log(`Standard out: ${stderr}` )
  })
}

//execCommand('dir')
execCommand('node ./src/script --base=5')