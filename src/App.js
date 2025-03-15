import { useState } from "react";
import "./styles.css";

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  const emojiDict = {
    "😀": "Grinning Face",
    "😃": "Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": "Grinning Squinting Face",
    "😅": "Grinning Face with Sweat",
    "🤣": "Rolling on the Floor Laughing",
    "😂": "Face with Tears of Joy",
    "🙂": "Slightly Smiling Face",
    "🙃": "Upside-Down Face",
    "😉": "Winking Face",
    "😊": "Smiling Face with Smiling Eyes",
    "😇": "Smiling Face with Halo",
    "🥰": "Smiling Face with Hearts",
    "😍": "Smiling Face with Heart-Eyes",
    "🤩": "Star-Struck",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face",
    "😚": "Kissing Face with Closed Eyes"
  };

  const emojiKeys = Object.keys(emojiDict);

  function handleInputChange(e) {
    setEmojiMeaning("");
    if (e.target.value && emojiDict[e.target.value]) {
      setEmojiMeaning(emojiDict[e.target.value]);
    }

    if (e.target.value && !emojiDict[e.target.value]) {
      setEmojiMeaning("We could not found this emoji on our database");
    }
  }

  function clickHandler(emoji) {
    document.getElementById("filter-emoji").value = emoji;
    setEmojiMeaning(emojiDict[emoji]);
  }
  return (
    <div className="App">
      <h1>Emoji Dictionary!</h1>
      <input
        type="search"
        name="search"
        id="filter-emoji"
        onChange={handleInputChange}
      />
      <p>{emojiMeaning}</p>

      <p>
        {emojiKeys.map((emoji) => (
          <span key={emoji} onClick={() => clickHandler(emoji)}>
            {emoji}
          </span>
        ))}
      </p>
    </div>
  );
}
