import React from "react";

export default function Suggestions({ suggestion }) {
  if (!suggestion) {
    return null;
  }

  return (
    <div className="SuggestionsContainer">
      <div className="ThingsCovered__preface">
        Based on the time and the syllabus, this might be getting covered:
      </div>
      <ul className="ThingsCovered">
        {suggestion.topics.map((topic, i) => (
          <li key={i}>{topic}</li>
        ))}
      </ul>
      <div className="Suggestions__preface">
        and here's what might be useful to discuss:
      </div>
      <div className="Suggestions">
        <ul>
          {suggestion.suggestions.map((suggestion, i) => (
            <li className="Suggestion" key={i}>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
