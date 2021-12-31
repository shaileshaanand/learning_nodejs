const async = require("async");

const get1 = (callback) => {
  setTimeout(() => {
    console.log(1);
    callback(null, 1);
  }, 1000);
};
const get2 = (callback) => {
  setTimeout(() => {
    console.log(2);
    callback(null, 2);
  }, 1000);
};
const get3 = (callback) => {
  setTimeout(() => {
    console.log(3);
    callback(null, 3);
  }, 1000);
};

const get4 = (callback) => {
  setTimeout(() => {
    console.log(4);
    callback(null, 4);
  }, 1000);
};

const get5 = (callback) => {
  setTimeout(() => {
    console.log(5);
    callback(null, 5);
  }, 1000);
};

async.series([get1, get2, get3, get4, get5], (err, data) => {
  console.log("done series", data);
});

async.parallel([get1, get2, get3, get4, get5], (err, data) => {
  console.log("done parallel", data);
});
