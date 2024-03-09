const penjumlahan = (val1, val2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof val1 !== "number" || typeof val2 !== "number") {
        return reject("parameter harus number");
      }
      const result = val1 + val2;
      resolve(result);
    }, 2000);
  });
};

// menggunakan  then catch

// penjumlahan(10, 'helo')
// .then((res)=>{
//   console.log('state fullfied sehingga then di eksekusi');
//   console.log(res);
// })
// .catch((err)=>{
//   console.log('state nya rejected sehingga catch di eksekusi');
//   console.log(err);
// })

// menggunakan async await

const startApp = async () => {
  try {
    console.log("perintah 1");
    const hasil1 = await penjumlahan(3, 7);
    const hasil2 = await penjumlahan(5, 5);
    const total = hasil1 * hasil2

    console.log(total);
    console.log("perintah 3");
  } catch (error) {
    console.log(error);
  } finally{
    console.log('startApp selesai diproses');
  }
};

startApp();
