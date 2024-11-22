import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import One from "./assests/images/magic.png";
import StudentList from "./components/studentlist";
import FavList from "./components/favlist";
import two from "./assests/images/gilbert.jpg"
import three from "./assests/images/elliot.jpg"
import four from "./assests/images/emma.jpg"
import five from "./assests/images/josh.jpg"
import six from "./assests/images/victoria.jpg"
import seven from "./assests/images/bigrita.jpg"

function App() {
  const [students] = useState([
    {
      name:"Gilbert",
      photo: two
    },
    {
      name:"Elliot",
      photo: three
    },
    {
      name:"Emma",
      photo: four
    },
    {
      name:"Josh",
      photo: five
    },
    {
      name:"Victoria",
      photo: six
    },
    {
      name:"Brigita",
      photo: seven
    }
  ]);
  const [favorites, setFavorites] = useState([]);

  // Add to favorites
  const addToFavorites = (student) => {
    if (!favorites.includes(student)) {
      setFavorites([...favorites, student]);
    }
  };

  // Remove from favorites
  const removeFromFavorites = (student) => {
    setFavorites(favorites.filter((fav) => fav !== student));
  };

  return (
    <Router>
      <div className="bg-green-900 p-10 mx-16 my-3 sm:m-1">
        <h1 className="text-6xl text-[#D19B40] font-bold  text-center italic" style={{fontFamily:"Harry Potter, sans-serif"}}>Magic School</h1>

        <div
          className="bg-cover h-screen sm:bg-cover"
          style={{ backgroundImage: `url(${One})`, height: "650px" }}>


          {/* Navigation Links */}
          <div className="flex justify-around bg-transparent p-5 text-[#FF9F00] text-5xl underline font-bold sm:text-3xl">
            <Link to="/" className="cursor-pointer hover:text-white">
              List of Students
            </Link>
            <Link to="/favorites" className="cursor-pointer hover:text-white">
              Favourite Students
            </Link>
          </div>

          {/* Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <StudentList
                  students={students}
                  favorites={favorites}
                  addToFavorites={addToFavorites}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <FavList
                  favorites={favorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;