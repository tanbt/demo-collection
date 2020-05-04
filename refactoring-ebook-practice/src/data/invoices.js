const jsonData = `
[
    {
      "customer": "BigCo",
      "performances": [
        {
          "playID": "hamlet",
          "audience": 55
        },
        {
          "playID": "as-like",
          "audience": 35
        },
        {
          "playID": "othello",
          "audience": 40
        }
      ]
    }
  ]
`;

const getInvoicesData = () => {
    return JSON.parse(jsonData);
};

export default getInvoicesData;