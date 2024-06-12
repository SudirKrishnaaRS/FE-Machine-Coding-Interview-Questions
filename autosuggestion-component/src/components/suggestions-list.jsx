/* eslint-disable react/prop-types */
import "./styles.css";

const SuggestionsList = ({
  suggestions = [],
  highlight,
  dataKey,
  onSuggestionClick,
}) => {
  const getHighightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi")); // Here `g` means global and `i` means case-insensitive
    return (
      <span>
        {parts.map((part, index) => {
          return part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          );
        })}
      </span>
    );
  };

  return (
    <>
      {suggestions.map((suggestion, index) => {
        const currSuggestion = dataKey ? suggestion[dataKey] : suggestion;
        return (
          <li
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="suggestion-item"
          >
            {getHighightedText(currSuggestion, highlight)}
          </li>
        );
      })}
    </>
  );
};

export default SuggestionsList;
