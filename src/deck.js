function shuffle(array) {
  let level = "hard";
  let easyCards = [...array].slice(0, 18);
  let mediumCards = [...array].slice(0, 24);
  let hardCards = [...array];

  if (level === "easy") {
    for (let i = 0; i < easyCards.length - 1; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = easyCards[i];
      easyCards[i] = easyCards[randomIndex];
      easyCards[randomIndex] = temp;
    }
    return easyCards;
  } else if (level === "medium") {
    for (let i = 0; i < mediumCards.length - 1; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = mediumCards[i];
      mediumCards[i] = mediumCards[randomIndex];
      mediumCards[randomIndex] = temp;
    }
    return mediumCards;
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = hardCards[i];
      hardCards[i] = hardCards[randomIndex];
      hardCards[randomIndex] = temp;
    }
    return hardCards;
  }
}

export default function initializeDeck() {
  let id = 0;
  const cards = [
    "react",
    "css",
    "redux",
    "postman",
    "sql",
    "js",
    "node",
    "fullstack",
    "firebase",
    "java",
    "jquery",
    "mongodb",
    "postgres",
    "redis",
    "requirejs",
    "swift",
    "webpack",
    "github",
  ].reduce((acc, type) => {
    acc.push({ id: id++, type });
    acc.push({ id: id++, type });
    return acc;
  }, []);
  return shuffle(cards);
}
