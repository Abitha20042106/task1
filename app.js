import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [userActivity, setUserActivity] = useState([]);

  const trackUserActivity = (action) => {
    setUserActivity((prevActivity) => [...prevActivity, action]);
  };

  const handleNavigationClick = (place) => {
    trackUserActivity(`Navigated to ${place}`);
  };

  useEffect(() => {
    console.log('User Activity:', userActivity);
  }, [userActivity]);

  return (
    <div className="App">
      <header>
        <h1>Tourism Website</h1>
        <nav>
          <ul>
            <li><a href="#place1" onClick={() => handleNavigationClick('Place 1')}>Place 1</a></li>
            <li><a href="#place2" onClick={() => handleNavigationClick('Place 2')}>Place 2</a></li>
            <li><a href="#place3" onClick={() => handleNavigationClick('Place 3')}>Place 3</a></li>
            <li><a href="#place4" onClick={() => handleNavigationClick('Place 4')}>Place 4</a></li>
            <li><a href="#place5" onClick={() => handleNavigationClick('Place 5')}>Place 5</a></li>
            <li><a href="#place6" onClick={() => handleNavigationClick('Place 6')}>Place 6</a></li>
            <li><a href="#place7" onClick={() => handleNavigationClick('Place 7')}>Place 7</a></li>
            <li><a href="#place8" onClick={() => handleNavigationClick('Place 8')}>Place 8</a></li>
            <li><a href="#place9" onClick={() => handleNavigationClick('Place 9')}>Place 9</a></li>
            <li><a href="#place10" onClick={() => handleNavigationClick('Place 10')}>Place 10</a></li>
            <li><a href="#place11" onClick={() => handleNavigationClick('Place 11')}>Place 11</a></li>
            <li><a href="#place12" onClick={() => handleNavigationClick('Place 12')}>Place 12</a></li>
            <li><a href="#place13" onClick={() => handleNavigationClick('Place 13')}>Place 13</a></li>
            <li><a href="#place14" onClick={() => handleNavigationClick('Place 14')}>Place 14</a></li>
            <li><a href="#place15" onClick={() => handleNavigationClick('Place 15')}>Place 15</a></li>
            <li><a href="#place16" onClick={() => handleNavigationClick('Place 16')}>Place 16</a></li>
            <li><a href="#place17" onClick={() => handleNavigationClick('Place 17')}>Place 17</a></li>
            <li><a href="#place18" onClick={() => handleNavigationClick('Place 18')}>Place 18</a></li>
            <li><a href="#place19" onClick={() => handleNavigationClick('Place 19')}>Place 19</a></li>
            <li><a href="#place20" onClick={() => handleNavigationClick('Place 20')}>Place 20</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="place1">
          <h2>Place 1</h2>
          <p>Description of Place 1</p>
        </section>
        <section id="place2">
          <h2>Place 2</h2>
          <p>Description of Place 2</p>
        </section>
        <section id="place3">
          <h2>Place 3</h2>
          <p>Description of Place 3</p>
        </section>
        <section id="place4">
          <h2>Place 4</h2>
          <p>Description of Place 4</p>
        </section>
        <section id="place5">
          <h2>Place 5</h2>
          <p>Description of Place 5</p>
        </section>
        <section id="place6">
          <h2>Place 6</h2>
          <p>Description of Place 6</p>
        </section>
        <section id="place7">
          <h2>Place 7</h2>
          <p>Description of Place 7</p>
        </section>
        <section id="place8">
          <h2>Place 8</h2>
          <p>Description of Place 8</p>
        </section>
        <section id="place9">
          <h2>Place 9</h2>
          <p>Description of Place 9</p>
        </section>
        <section id="place10">
          <h2>Place 10</h2>
          <p>Description of Place 10</p>
        </section>
        <section id="place11">
          <h2>Place 11</h2>
          <p>Description of Place 11</p>
        </section>
        <section id="place12">
          <h2>Place 12</h2>
          <p>Description of Place 12</p>
        </section>
        <section id="place13">
          <h2>Place 13</h2>
          <p>Description of Place 13</p>
        </section>
        <section id="place14">
          <h2>Place 14</h2>
          <p>Description of Place 14</p>
        </section>
        <section id="place15">
          <h2>Place 15</h2>
          <p>Description of Place 15</p>
        </section>
        <section id="place16">
          <h2>Place 16</h2>
          <p>Description of Place 16</p>
        </section>
        <section id="place17">
          <h2>Place 17</h2>
          <p>Description of Place 17</p>
        </section>
        <section id="place18">
          <h2>Place 18</h2>
          <p>Description of Place 18</p>
        </section>
        <section id="place19">
          <h2>Place 19</h2>
          <p>Description of Place 19</p>
        </section>
        <section id="place20">
          <h2>Place 20</h2>
          <p>Description of Place 20</p>
        </section>
      </main>
    </div>
  );
};

export default App;
