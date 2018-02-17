document.querySelector('.add').addEventListener('click', (e) => {
  console.log(document.querySelector('.InputFile').value);
  let pathArr = document.querySelector('.InputFile').value.split('\\');

    // must be state
  let fName = pathArr[pathArr.length-1];

  let data = new FormData();

  data.append('upload', document.querySelector('.InputFile').files[0]);

  console.log(data);
  const config = {
    headers: { 'content-type': 'multipart/form-data' }
}

  axios.post('upl.php', data, config)
  .then(function (res) {
    /*output.className = 'container';
    output.innerHTML = res.data;*/
    console.log(res);
  })
});
