// get props and history. If props is empty, redirect to main page /
export const redirectToMain = (obj, history) => {
  if(JSON.stringify(obj) === '{}') {
      history.push('/');
  }
}