const apiKey = '50706028-1c89dce29f588a1d4e8ec62d3';

export const loadImages = async search => {
  const url = new URL('https://pixabay.com/api/');
  url.searchParams.set('key', apiKey);
  url.searchParams.set('q', search);
  url.searchParams.set('image_type', 'photo');
  url.searchParams.set('orientation', 'horizontal');
  url.searchParams.set('safesearch', true);

  try {
    const res = await fetch(url);

    return res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
