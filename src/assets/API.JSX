// ACCESS TOKEN
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODg1YzQ5YTA0MmQ5Mzc2YWU0M2UwMTE2YzZkYTU4ZiIsIm5iZiI6MTcxOTY1MjUwNy4xOTkwMTIsInN1YiI6IjY0MjdiYjI5YzA0NDI5MDFmMDAyMDQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9H_XNMR13KyTCjLhFGlAYDj0g-lRHPrR917UdFYq_pg

// API KEY AUTH
// 1885c49a042d9376ae43e0116c6da58f
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODg1YzQ5YTA0MmQ5Mzc2YWU0M2UwMTE2YzZkYTU4ZiIsIm5iZiI6MTcxOTY1MjUwNy4xOTkwMTIsInN1YiI6IjY0MjdiYjI5YzA0NDI5MDFmMDAyMDQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9H_XNMR13KyTCjLhFGlAYDj0g-lRHPrR917UdFYq_pg'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));