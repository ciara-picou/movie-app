import React from "react";

const Search = (props) => {
  return (
    <div>
      <strong>Search Movies:</strong>
      <label>
        <input
          type="text"
          onChange={(e) => props.handleSearch(e.target.value)}
        />
      </label>
      <br />
      <br />

      <label>
        <strong>GenreFilter:</strong>
        <select onChange={(e) => props.updateFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Mystery">Mystery</option>
          <option value="Crime">Crime</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Adventure">Adventure</option>
          <option value="Biography">Biography</option>
          <option value="War">War</option>
          <option value="History">History</option>
          <option value="Thriller">Thriller</option>
          <option value="Music">Music</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
          <option value="Animation">Animation</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Sport">Sport</option>
          <option value="Musical">Musical</option>
          <option value="Western">Western</option>
          <option value="Family">Family</option>
          <option value="Film-Noir">Film-Noir</option>
        </select>
      </label>

      <label>
        <strong>Mood Filter:</strong>
        <select onChange={(e) => props.updateMoodFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="🎭">🎭</option>
          <option value="🚔">🚔</option>
          <option value="🤠">🤠</option>
          <option value="😂">😂</option>
          <option value="🧐">🧐</option>
          <option value="🦄">🦄</option>
          <option value="😱">😱</option>
          <option value="💓">💓</option>
          <option value="⚾️">⚾️</option>
          <option value="🦸‍♂️">🦸‍♂️</option>
          <option value="👩‍🔬">👩‍🔬</option>
        </select>
      </label>
    </div>
  );
};

export default Search;
