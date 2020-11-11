export const getSyllabusDetailsForTimestamp = (sessionTimestamp) => {
  const dateToCheck = new Date(sessionTimestamp);
  const relevantWeek = syllabus.find(
    ({ weekStart, weekEnd }) =>
      weekStart <= dateToCheck && dateToCheck <= weekEnd
  );
  return relevantWeek;
};

const createSyllabusWithDates = (startDate, syllabus) => {
  const MILLISECONDS_IN_ONE_WEEK = 7 * 24 * 3600 * 1000;
  return syllabus.map((weekObject, i) => {
    const weekStart = new Date(
      new Date(startDate).getTime() + i * MILLISECONDS_IN_ONE_WEEK
    );
    return {
      ...weekObject,
      weekStart,
      weekEnd: new Date(
        new Date(weekStart).getTime() + MILLISECONDS_IN_ONE_WEEK
      ),
      topics: [...weekObject.topics],
      suggestions: [...weekObject.suggestions],
    };
  });
};

const syllabusWithoutDates = [
  {
    week: 1,
    topics: ["Introduction to JavaScript"],
    suggestions: [
      "Declaring variables in JavaScript",
      "Declaring and calling functions in JavaScript",
      "Interacting with the DOM",
    ],
  },
  {
    week: 2,
    topics: ["Advanced JavaScript"],
    suggestions: [
      "Creating complex data types (objects, arrays)",
      "Using the Fetch API to make requests to servers",
    ],
  },
  {
    week: 3,
    topics: ["Node.js and Express.js"],
    suggestions: [
      "Differences between JS in the browser JS outside of the browser",
      "Writing a basic server/back end using Express.js",
    ],
  },
  {
    week: 4,
    topics: ["Database and APIs"],
    suggestions: [
      "Connecting to a PostgreSQL database",
      "Writing basic SQL queries",
      "Creating a basic RESTful API",
    ],
  },
  {
    week: 5,
    topics: ["React basics"],
    suggestions: [
      "Writing function components in React",
      "Using React hooks (e.g. useState, useEffect)",
    ],
  },
  {
    week: 6,
    topics: ["Advanced React"],
    suggestions: [
      "Understanding React beneath its hood and its inner workings",
      "Using other React hooks like useReducer",
    ],
  },
  {
    week: 7,
    topics: ["Authentication"],
    suggestions: [
      "Including credentials (API key/token) when making a request to a server",
      "Understanding Basic authentication flow",
      "Understanding OAuth and OAuth 2.0 authentication flow",
    ],
  },
  {
    week: 8,
    topics: ["Project week"],
    suggestions: [
      "How to break problems down into smaller problems",
      "General project management tips",
      "Tips for working in a team",
    ],
  },
  {
    week: 9,
    topics: ["Retrospective week"],
    suggestions: [
      "Any topics covered so far that are difficult?",
      "Revising previous questions and exercises",
    ],
  },
  {
    week: 10,
    topics: ["React Recap"],
    suggestions: [
      "Core concepts of React",
      "Different Reacts",
      "Handling common use cases e.g. fetching and displaying",
    ],
  },
  {
    week: 11,
    topics: ["Web security", "Agile"],
    suggestions: [
      "Common web exploits e.g. XSS, CSRF",
      "The purposes of agile e.g. short feedback loop",
    ],
  },
  {
    week: 12,
    topics: ["QA", "AWS", "NPM"],
    suggestions: [
      "Useful tips for QA",
      'General guidance or tips about AWS, cloud computing and "serverless"',
      "Tips for Node package manager",
    ],
  },
  ...[13, 14, 15, 16].map((week) => {
    return {
      week,
      topics: ["Project week"],
      suggestions: [
        "How to break problems down into smaller problems",
        "General project management tips",
        "Tips for working in a team",
      ],
    };
  }),
];

const syllabus = createSyllabusWithDates(
  new Date(2020, 8, 21),
  syllabusWithoutDates
);
