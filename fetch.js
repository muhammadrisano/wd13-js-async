fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
  return res.json()
})
.then((res)=>{
    // console.log(res[3].name);
    const post = res;
    
})
.catch((err)=>{
  console.log(err);
})