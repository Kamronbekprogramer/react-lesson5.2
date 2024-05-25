import React from 'react';
import './App.css';
import Header from './components/header/Header';
import MainSection from './components/mainsection/MainSections';
import PostsSection from './components/postsection/PostSection';
import WorksSection from './components/worksection/WorksSection';
import Footer from './components/footer/Footer';
import work_img1 from './assets/Rectangle30.png';
import work_img2 from './assets/Rectangle32.png';
import work_img3 from './assets/Rectangle34.png';

const works = [
  {
    id: 1,
    title: "Designing Dashboards",
    year: 2020,
    category: "Dashboard",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: work_img1
  },
  {
    id: 2,
    title: "Vibrant Portraits of 2020",
    year: 2018,
    category: "Illustration",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: work_img2
  },
  {
    id: 3,
    title: "36 Days of Malayalam type",
    year: 2018,
    category: "Typography",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: work_img3
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <PostsSection />
      <WorksSection works={works} />
      <Footer />
    </div>
  );
}

export default App;
