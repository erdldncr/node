console.log(process.argv);

const grab = (flag) => {
  return process.argv[process.argv.indexOf(flag) + 1];
};
let company = grab('--company');
console.log(company);
