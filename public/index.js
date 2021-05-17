const inputUrl = document.getElementById('inputUrl');
const submit = document.getElementById('submit');
const shortUrl = document.getElementById('shortUrl');
const url = location.href; // includes '/' at the end

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

  try {
    const response = await fetch(`${url}new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: inputUrl.value }),
    });

    const { code } = await response.json();

    shortUrl.innerHTML = `${url}${code}`;
  } catch (err) {
    alert('Something failed');
  }
};
