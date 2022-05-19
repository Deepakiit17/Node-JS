const fs = require("fs");

// fs.mkdirSync("DK");

// fs.writeFileSync("DK/bio.txt", "my name is dk");

// const data = fs.readFileSync("DK/bio.txt", "utf8");
// console.log(data);

fs.renameSync("DK/bio.txt", "DK/myBio.txt");
