const allModules = require("module").builtinModules;
// console.log(allModules);
const os = require("os");

// console.log(os);

// for (let [key, value] of Object.entries(os)) {
//   console.log(`${key} `);
// }

console.log(process.env);
const systemInfo = {
  "Home Directory": os.homedir(),
  "Operating System": os.type(),
  "Last Reboot": os.uptime(),
};

// console.log(os.machine());
