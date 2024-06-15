const { error, log } = require('console')
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname,"templates"),err => {
//   if(err) throw new Error()
//     console.log("Folder was create success");
// }) 
// fs.mkdir(path.join(__dirname,"notes"),error => {
//   if(error) throw new Error()
//     console.log('Folder create suceessfulu');
// })
fs.writeFile(path.join(__dirname, "notes", "june.text"), "create new file Node JS", (error) => {
  if (error) throw new Error()

  console.log('File was create success');

  fs.appendFile(path.join(__dirname, "notes", "june.text"), "and service project", (error) => {
    if (error) throw new Error()
    console.log('File was changed success');
    fs.readFile(path.join(__dirname, "notes", "june.text"), "utf-8", (error, data) => {
      if (error) throw new Error()
      console.log(data);
    })
  })
})
