const axios = {
  get: ({ params } = {}) => {
    let timer;
    let second = 0;
    return new Promise((resolve) => {
      timer = setInterval(() => {
        if (second >= 5) {
          clearInterval(timer);
          return;
        }
        second += 1;
        console.log({ second });
      }, 1000);
      setTimeout(() => {
        const chars = new Array(params.perPage)
          .fill(null)
          .map((_, i) => {
            const startIndex = (params.page - 1) * params.perPage;
            return String.fromCharCode(65 + startIndex + i)
          })
        resolve({ data: chars })
      }, 5000);
    })
  }
}; 

export default axios