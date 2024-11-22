import React from "react";

function FavList({ favorites, removeFromFavorites }) {
  return (
    <div className="my-14 text-white items-center text-lg space-y-5 px-4 sm:px-8">
      {favorites.length > 0 ? (
        favorites.map((favorite, index) => (
          <div
            key={index}
          className="flex flex-col sm:flex-row justify-around items-center text-center  rounded-md  sm:space-y-0 gap-2"
        
          >
            {/* Student Image and Name */}
            <div className="flex items-center gap-3">
              <img
                src={favorite.photo}
                alt={favorite.name}
                className="w-16 h-16 sm:w-16 sm:h-16 rounded-full"
              />
              <p className="text-xl font-medium">
                 {favorite.name}
              </p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromFavorites(favorite)}
              className="border rounded-md px-4 py-2 text-sm bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-center">No students added to favorites yet.</p>
      )}
    </div>
  );
}

export default FavList;
