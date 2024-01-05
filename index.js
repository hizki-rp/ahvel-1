const TOGGLE = document.querySelector('button')

const HANDLE_TOGGLE = () => {
  TOGGLE.setAttribute('aria-pressed', TOGGLE.matches('[aria-pressed=true]') ? false : true)
}

TOGGLE.addEventListener('click', HANDLE_TOGGLE)