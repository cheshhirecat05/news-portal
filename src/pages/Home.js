import React from "react";

function Home() {
  const sampleNews = [
    { title: "Tech Innovation 2025", desc: "New AI models changing the world." },
    { title: "Sports Update", desc: "Team A defeats Team B in thrilling match." },
    { title: "Global Politics", desc: "Leaders meet to discuss climate action." },
  ];

  return (
    <div>
      <h1>Latest News</h1>
      {sampleNews.map((news, i) => (
        <div key={i} style={styles.card}>
          <h3>{news.title}</h3>
          <p>{news.desc}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px"
  }
};

export default Home;
