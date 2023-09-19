const fs = require("fs");
// const require = require("request");

const comandos = {
  pwd: function () {
    const pwd = process.argv;
    process.stdout.write(`Directorio actual: ${pwd}`);
  },
  date: function () {
    const date = Date();
    process.stdout.write(`Fecha actual: ${date}`);
  },
  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },
  echo: function (args) {
    let str = "";
    for (let i = 0; i < args.length; i++) {
      str += args[i] + " ";
    }
    process.stdout.write(str);
    process.stdout.write("\nprompt > ");
  },
  cat: function (arg) {
    fs.readFile(`./${arg}`, function (err, data) {
      if (!data) throw err;
      process.stdout.write(data + "\n");
      process.stdout.write("prompt > ");
    });
  },
};

module.exports = comandos;
