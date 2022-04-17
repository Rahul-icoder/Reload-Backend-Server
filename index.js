const inquirer = require("inquirer");
const { exec } = require("child_process");
const ipList = ["Coventry-3.7.26.63", "Demo-15.206.122.121", "SL-52.66.41.76"];
const keyList = ["aqua.pem", "aqua_demo.pem"];
inquirer
  .prompt([
    {
      type: "list",
      name: "labelIp",
      message: "select the ip of server",
      choices: ipList,
    },
    {
      type: "list",
      name: "key",
      message: "select the key for authentication",
      choices: keyList,
    },
  ])
  .then((answer) => {
    const { labelIp, key } = answer;
    const ip = labelIp.split("-")[1];
    exec(`sh restart_node.sh ${ip} ${key}`, (error, stdout) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`${stdout}`);
    });
  });
