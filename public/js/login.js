/* eslint-disable */
// const login = async (email, password) => {
//       try {
//         const res = await axios({
//           method: 'POST',
//           url: 'http://127.0.0.1:3003/api/v1/users/login',
//           withCredentials: 'same-origin',
//           data: {
//             email,
//             password
//           }
//         });
//         console.log(res);
//       } catch (err) {
//         console.log(err.response.data);
//       }

const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      //withCredentials: 'same-origin',
      data: {
        email,
        password
      }
    });
    console.log(res);
  } catch (err) {
    console.log(err.response.data);
  }

}

document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});


