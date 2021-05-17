const inputUrl = document.getElementById('inputUrl');
const submit = document.getElementById('submit');
const shortUrl = document.getElementById('shortUrl');
const url = location.href; // includes '/' at the end
let prevUrl = '';

// Click to copy
shortUrl.onclick = (event) => {
  const el = document.createElement('input');
  el.value = shortUrl.innerHTML;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

// Submit
submit.onclick = async (event) => {
  if (inputUrl.value === '') return alert('Please enter a URL');

  if (
    !(
      inputUrl.value.startsWith('http://') ||
      inputUrl.value.startsWith('https://')
    )
  )
    return alert("Please include 'http://' or 'https://' in the URL");

  if (prevUrl !== '' && prevUrl === inputUrl.value)
    return alert('Current URL has been shortened already');

  try {
    const response = await fetch(`${url}new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: inputUrl.value }),
    });

    const { code } = await response.json();

    shortUrl.innerHTML = `${url}${code}`;

    prevUrl = inputUrl.value;
  } catch (err) {
    alert('Something failed');
  }
};
