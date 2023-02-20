import { signIn } from './auth';
import renderInnerPage from './pages/innerPage';

// this file will have all the event listeners used in the app

// this technique is called event delegation or event bubbling
document.querySelector('#root').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.closest('#loginButton')) {
    console.log('login button clicked');
    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;
    console.log(email, password);
    signIn(email, password).then((user) => {
      if (user) {
        console.log('user is logged in', user);
        renderInnerPage();
      }
    });
  }
});
