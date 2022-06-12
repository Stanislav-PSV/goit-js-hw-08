import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name=email]');
const textAreaEl = document.querySelector('textarea[name=message]');
const FEEDBACK = 'feedback-form-state';
const saveData = localStorage.getItem(FEEDBACK);
const parsedData = JSON.parse(saveData);

formEl.addEventListener('input', throttle(dataInlocalStorage, 500));
formEl.addEventListener('submit', onSubmitClick);

if (parsedData) {
  inputEl.value = parsedData.email;
  textAreaEl.value = parsedData.message;
}

function dataInlocalStorage(e) {
  const email = inputEl.value;
  const message = textAreaEl.value;
  localStorage.setItem(FEEDBACK, JSON.stringify({ email, message }));
}

function onSubmitClick(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;

  if (!email || !message) {
    return alert('Пожалуйста, заполните все поля!');
  }

  const objectData = { email, message };
  console.log(objectData);

  localStorage.removeItem(FEEDBACK);
  formEl.reset();
}
