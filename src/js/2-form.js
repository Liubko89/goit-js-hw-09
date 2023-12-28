const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.email.value;

  console.dir(email);

  //   const feedbackFormState = {
  //     email: email,
  //     message: message,
  //   };

  //   localStorage.setItem(
  //     'feedback-form-state',
  //     JSON.stringify(feedbackFormState)
  //   );
  //   form.reset();
}
