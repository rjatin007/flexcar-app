export const getCarsData = () =>
  fetch(`http://localhost:3000`, {
    headers: { "Access-Control-Allow-Origin": "http://127.0.0.1:3000" },
  })
    .then((res) => res.json())
    .then((res) => res);
