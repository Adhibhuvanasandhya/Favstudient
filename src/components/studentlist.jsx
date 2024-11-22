import React from "react";

function StudentList({ students, favorites, addToFavorites }) {
  return (
    <div className="my-5 text-white items-center text-lg space-y-4 px-4 sm:px-8">
      {students.map((student, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row justify-around items-center text-center  rounded-md  sm:space-y-0 gap-2"
        >
          {/* Student Image and Name */}
          <div className="flex items-center gap-3">
            <img
              src={student.photo}
              alt={student.name}
              className="w-16 h-16 sm:w-16 sm:h-16 rounded-full"
            />
            <p className="text-xl font-medium">
              {student.name}
            </p>
          </div>

          {/* Add to Favorites Button */}
          <button
            onClick={() => addToFavorites(student)}
            disabled={favorites.includes(student)}
            className={`border rounded-md px-4 py-2 text-sm ${
              favorites.includes(student)
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-black"
            }`}
          >
            {favorites.includes(student) ? "Added" : "Add to Favorite"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
