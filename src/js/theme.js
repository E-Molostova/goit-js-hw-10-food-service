import localStorage from './localStorage';

const checkboxRef = document.querySelector('#theme-switch-toggle');
checkboxRef.addEventListener('change', handleChangeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.body.classList.add(Theme.LIGHT);
function handleChangeTheme(e) {
  const isChecked = e.target.checked;
  document.body.classList.toggle(Theme.DARK);
  localStorage.save('CurrentCheckOut', isChecked);
}

const isCheckBoxChecked = () => {
  const isChecked = localStorage.load('CurrentCheckOut');
  console.log(isChecked);
  if (isChecked) {
    document.body.classList.add(Theme.DARK);
    checkboxRef.checked = isChecked;
  }
};
isCheckBoxChecked();
