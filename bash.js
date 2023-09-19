const commands = require("./commands");

// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim(); // Remueve la nueva línea
  if (cmd === "pwd") {
    commands.pwd();
  } else if (cmd === "date") {
    commands.date();
  } else if (cmd === "ls") {
    commands.ls();
  } else if (cmd.startsWith("echo ")) {
    const noEcho = cmd.split(" ");
    noEcho.shift();
    commands.echo(noEcho);
  } else if (cmd.split(" ")[0] === "cat") {
    const noCat = cmd.split(" ");
    noCat.shift();
    commands.cat(noCat);
  } else {
    process.stdout.write("You typed: " + cmd);
  }
});

// console.log(Object.keys(process));
