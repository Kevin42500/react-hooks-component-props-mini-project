import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
function App() {
  const blogName = "Your Blog Name";
  const logoImage = "https://via.placeholder.com/215";
  const aboutText = "About your blog...";

  const articles = [
    {
      id: 1,
      title: "Article 1",
      date: "August 17, 2023",
      preview: "Preview of Article 1...",
    },
    
  ];
  return (
    <div className="App">
      <Header blogName={blogName} />
      <About logoImage={logoImage} aboutText={aboutText} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
