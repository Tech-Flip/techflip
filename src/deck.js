function shuffle(array) {
  const arrayCopy = [...array];
  for (let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[randomIndex];
    arrayCopy[randomIndex] = temp;
  }

  return arrayCopy;
}

export default function initializeDeck() {
  let id = 0;
  const cards = [
    "react",
    "css",
    "redux",
    "postman",
    "sql",
    "javascript",
    "node",
    "fullstack",
  ].reduce((acc, type) => {
    acc.push({ id: id++, type });
    acc.push({ id: id++, type });
    return acc;
  }, []);
  return shuffle(cards);
}
