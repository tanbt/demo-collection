const jsonData = `
{
    "hamlet": {"name": "Hamlet", "type": "tragedy"},
    "as-like": {"name": "As You Like It", "type": "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
}`;

const getPlaysData = () => {
    return JSON.parse(jsonData);
};
export default getPlaysData;
