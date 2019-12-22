const fetchPerson = async () => {
  const response = await fetch('https://randomuser.me/api');
  const json = await response.json();
  const result = json.results[0];

  return result;
};

// setup function, reuse when fetching from API
const wrapPromise = promise => {
  let status = 'pending';
  let result = '';
  let suspender = promise.then(
    res => {
      status = 'success';
      result = res;
    },
    err => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      }

      return result;
    }
  };
};

export const randomNumber = () => {
  return new Promise(res => setTimeout(() => res(Math.random()), 2000));
};

export const createResource = () => {
  return {
    person: wrapPromise(fetchPerson()),
    num: wrapPromise(randomNumber())
  };
};
