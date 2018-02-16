document.querySelector('.add').addEventListener('click', (e) => {
  e.preventDefault();
  console.log(document.querySelector('.InputFile').value);
  let pathArr = document.querySelector('.InputFile').value.split('\\');

    // must be state
  let fName = pathArr[pathArr.length-1];

  let data = new FormData();

  data.append('file', document.querySelector('.InputFile').files[0]);

  console.log(data);
  return false;
});
