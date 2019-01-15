var shell = require('shelljs');


if (!shell.which('npm')) {
    shell.echo('Sorry, this script requires npm');
    shell.exit(1);
  }

  if (shell.exec('npm install').code !== 0) {
    shell.echo('Error: npm command failed');
    shell.exit(1);
  }
  else{
    shell.echo('Successfully updated node_modules');
    shell.exec('nodemon server.js');
  }