import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 
function Dashboard() {
  const [activeSection, setActiveSection] = useState("addNews");
  const [newsList, setNewsList] = useState([]);
  const [categories, setCategories] = useState(["Technology", "Sports"]);
  
  const [messages] = useState([
    { name: "John Doe", email: "john@example.com", message: "Great site!" },
    { name: "Emma Rai", email: "emma@example.com", message: "Please post more sports updates!" },
  ]);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/login");
    }
  };

  return (
    <div style={styles.dashboard}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>📰 Admin Panel</h2>
        <ul style={styles.menu}>
          <li
            style={activeSection === "addNews" ? styles.activeItem : styles.menuItem}
            onClick={() => setActiveSection("addNews")}
          >
            Add News
          </li>
          <li
            style={activeSection === "categories" ? styles.activeItem : styles.menuItem}
            onClick={() => setActiveSection("categories")}
          >
            Categories
          </li>
          <li
            style={activeSection === "editNews" ? styles.activeItem : styles.menuItem}
            onClick={() => setActiveSection("editNews")}
          >
            Edit News
          </li>
          <li
            style={activeSection === "messages" ? styles.activeItem : styles.menuItem}
            onClick={() => setActiveSection("messages")}
          >
            Messages
          </li>
          <li style={styles.logoutItem} onClick={handleLogout}>
            Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {activeSection === "addNews" && (
          <AddNews newsList={newsList} setNewsList={setNewsList} />
        )}
        {activeSection === "categories" && (
          <Categories categories={categories} setCategories={setCategories} />
        )}
        {activeSection === "editNews" && (
          <EditNews newsList={newsList} setNewsList={setNewsList} />
        )}
        {activeSection === "messages" && <Messages messages={messages} />}
      </div>
    </div>
  );
}

/* -------------------- ADD NEWS SECTION -------------------- */
function AddNews({ newsList, setNewsList }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const handleAddNews = (e) => {
    e.preventDefault();
    if (!title || !desc || !image) {
      alert("Please fill all fields!");
      return;
    }
    const newNews = { id: Date.now(), title, desc, image: URL.createObjectURL(image) };
    setNewsList([...newsList, newNews]);
    setTitle("");
    setDesc("");
    setImage(null);
    alert("News added successfully!");
  };

  return (
    <div>
      <h2>Add News</h2>
      <form onSubmit={handleAddNews} style={styles.form}>
        <input
          type="text"
          placeholder="News Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={styles.textarea}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add News</button>
      </form>

      {/* Show Added News */}
      <h3>All News</h3>
      <div style={styles.newsList}>
        {newsList.map((news) => (
          <div key={news.id} style={styles.card}>
            <img src={news.image} alt={news.title} style={styles.image} />
            <h4>{news.title}</h4>
            <p>{news.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------- CATEGORIES SECTION -------------------- */
function Categories({ categories, setCategories }) {
  const [newCat, setNewCat] = useState("");

  const addCategory = (e) => {
    e.preventDefault();
    if (newCat.trim() === "") return;
    if (categories.includes(newCat)) {
      alert("Category already exists!");
      return;
    }
    setCategories([...categories, newCat]);
    setNewCat("");
  };

  return (
    <div>
      <h2>Manage Categories</h2>
      <form onSubmit={addCategory} style={styles.form}>
        <input
          type="text"
          placeholder="Enter category name"
          value={newCat}
          onChange={(e) => setNewCat(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add Category</button>
      </form>

      <h3>All Categories</h3>
      <ul>
        {categories.map((cat, i) => (
          <li key={i}>🏷️ {cat}</li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------- EDIT NEWS SECTION -------------------- */
function EditNews({ newsList, setNewsList }) {
  const [selected, setSelected] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editImage, setEditImage] = useState(null);

  const handleEdit = (news) => {
    setSelected(news.id);
    setEditTitle(news.title);
    setEditDesc(news.desc);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setNewsList(
      newsList.map((news) =>
        news.id === selected
          ? {
              ...news,
              title: editTitle,
              desc: editDesc,
              image: editImage ? URL.createObjectURL(editImage) : news.image,
            }
          : news
      )
    );
    alert("News updated successfully!");
    setSelected(null);
    setEditTitle("");
    setEditDesc("");
    setEditImage(null);
  };

  return (
    <div>
      <h2>Edit News</h2>
      {newsList.length === 0 ? (
        <p>No news added yet.</p>
      ) : (
        newsList.map((news) => (
          <div key={news.id} style={styles.card}>
            <img src={news.image} alt={news.title} style={styles.imageSmall} />
            <h4>{news.title}</h4>
            <button onClick={() => handleEdit(news)} style={styles.buttonSmall}>
              Edit
            </button>
          </div>
        ))
      )}

      {selected && (
        <form onSubmit={handleSave} style={styles.form}>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            style={styles.input}
          />
          <textarea
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
            style={styles.textarea}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setEditImage(e.target.files[0])}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Save Changes</button>
        </form>
      )}
    </div>
  );
}

/* -------------------- MESSAGES SECTION -------------------- */
function Messages({ messages }) {
  return (
    <div>
      <h2>User Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        messages.map((msg, i) => (
          <div key={i} style={styles.card}>
            <p><strong>SN:</strong> {i + 1}</p>
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Message:</strong> {msg.message}</p>
          </div>
        ))
      )}
    </div>
  );
}

/* -------------------- STYLES -------------------- */
const styles = {
  dashboard: {
    display: "flex",
    minHeight: "100vh",
    background: "#f8f8f8",
  },
  sidebar: {
    width: "220px",
    background: "#1a1a1a",
    color: "#fff",
    padding: "20px",
  },
  logo: { marginBottom: "20px" },
  menu: { listStyle: "none", padding: 0 },
  menuItem: {
    padding: "10px",
    cursor: "pointer",
  },
  activeItem: {
    padding: "10px",
    background: "#333",
    cursor: "pointer",
  },
  logoutItem: {
    padding: "10px",
    cursor: "pointer",
    marginTop: "20px",
    background: "#b22222",
  },
  content: {
    flex: 1,
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
  input: {
    padding: "8px",
  },
  textarea: {
    padding: "8px",
    height: "80px",
  },
  button: {
    padding: "10px",
    background: "#1a1a1a",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  newsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "6px",
    background: "#fff",
    width: "250px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  imageSmall: {
    width: "100%",
    height: "100px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  buttonSmall: {
    marginTop: "5px",
    padding: "5px",
    background: "#333",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Dashboard;
