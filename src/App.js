
import { React } from "react";
import './styles.css';
import Layout from "./Layout";
import emojipedia from "./emojipedia";


function createEmoji(emoji) {
  return (
    <Layout
      key={createEmoji.id}
      emojiImg={emoji.emojiImg}
      name={emoji.name}
      meaning={emoji.meaning}
    />

  );
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(createEmoji)}

      </dl>
    </div>
  );
}



export default App;


