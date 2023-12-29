const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

feedbackForm.addEventListener('input', handleForm);
feedbackForm.addEventListener('submit', handleSubmit);
populateForm();

function handleForm() {
  const feedbackStorage = {};

  feedbackStorage.email = `${input.value.trim()}`;
  feedbackStorage.message = `${textarea.value.trim()}`;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackStorage));
}

function populateForm() {
  const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedInfo) {
    input.value = savedInfo.email;
    textarea.value = savedInfo.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const submitInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (submitInfo) {
    console.log(submitInfo);
  }
  localStorage.removeItem(STORAGE_KEY);
  feedbackForm.reset();
}
