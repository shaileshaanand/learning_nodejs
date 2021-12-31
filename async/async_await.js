const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data");
    }, 1500);
  });
};

const getDetails = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ details: data });
    }, 1500);
  });
};

// .then() syntax
getData()
  .then((data) => {
    console.log(data);
    return getDetails(data);
  })
  .then((details) => {
    console.log(details);
  });

// async/await syntax
const main = async () => {
  const data = await getData();
  console.log(data);
  const details = await getDetails(data);
  console.log(details);
};

main();

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done!");
//   }, 1500);
// }).then((text) => {
//   console.log(text);
// });
