import words from './arrayOfEnglishWords.json' with { type: "json" };
import { generatedSentences } from './englishTemplates.js';
import codeExercises from './arrayOfCodeblocks.js';


const createRandomCombinations = function (level, ...keys) {
  const lowerLevel = level?.toLowerCase();
  const wordLength = (lowerLevel === "novice") ? 2 : (lowerLevel === "beginner") ? 3 : (lowerLevel === "intermediate") ? 4 : 5;
  let wordString = "";
  const flatKeys = keys.flat();
  while (wordString.length < (wordLength + 1) * 40) {
    let word = "";
    while (word.length < wordLength) {
      word += flatKeys[Math.floor(Math.random() * flatKeys.length)];
    }
    wordString += word + " ";
  }
  return wordString.trim();
}

async function getRandomWords(level) {
  const lowerLevel = level?.toLowerCase();
  const wordLength = (lowerLevel === "intermediate") ? 4 : 5;
  let wordlist = words.filter(word => (wordLength == 4) ? word.length === wordLength : word.length >= wordLength);
  let arr = new Array;
  while (arr.length < 40) {
    let randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    if (randomWord && !arr.includes(randomWord)) arr.push(randomWord);
  }
  return arr.join(" ");
}

async function getRandomSentences() {
  return generatedSentences;
}


async function getRandomCode(level) {
  const filtered = codeExercises.filter(
    exercise =>
      exercise.level === level
  );

  if (filtered.length === 0) {
    return null;
  }

  return filtered[
    Math.floor(Math.random() * filtered.length)
  ].code;
}



const TrainingData = {
  modules: [
    {
      id: "m1",
      title: "middlerow",
      description: "Middle row training — individual left and right hand keys.",
      level: "novice",
      lessons: [
        {
          id: "lesson-1",
          title: "ASDF",
          type: "keys",
          targetKeys: ["a", "s", "d", "f"],
          exercises: ""
        },
        {
          id: "lesson-2",
          title: "JKL;",
          type: "keys",
          targetKeys: ["j", "k", "l", ";"],
          exercises: ""
        },
        {
          id: "lesson-3",
          title: "GH",
          type: "keys",
          targetKeys: ["g", "h"],
          exercises: ""
        }
      ]
    },

    {
      id: "m2",
      title: "middlerow",
      description: "Middle row training — combine both hands.",
      level: "beginner",
      lessons: [
        {
          id: "lesson-1",
          title: "ASDF JKL;",
          type: "keys",
          targetKeys: [
            "a", "s", "d", "f",
            "j", "k", "l", ";"
          ],
          exercises: ""
        },
        {
          id: "lesson-2",
          title: "GH",
          type: "keys",
          targetKeys: [
            "a", "s", "d", "f",
            "j", "k", "l", ";",
            "g", "h"
          ],
          exercises: ""
        }
      ]
    },

    {
      id: "m3",
      title: "middlerow",
      description: "Middle row mastery.",
      level: "intermediate",
      lessons: [
        {
          id: "lesson-1",
          title: "Full Middle Row",
          type: "keys",
          targetKeys: [
            "a", "s", "d", "f",
            "g", "h",
            "j", "k", "l", ";"
          ],
          exercises: ""
        }
      ]
    },

    {
      id: "m4",
      title: "toprow",
      description: "Learn the QWERTY top row.",
      level: "novice",
      lessons: [
        {
          id: "lesson-1",
          title: "QWER",
          type: "keys",
          targetKeys: ["q", "w", "e", "r"],
          exercises: ""
        },
        {
          id: "lesson-2",
          title: "TY",
          type: "keys",
          targetKeys: ["t", "y"],
          exercises: ""
        },
        {
          id: "lesson-3",
          title: "UIOP",
          type: "keys",
          targetKeys: ["u", "i", "o", "p"],
          exercises: ""
        }
      ]
    },

    {
      id: "m5",
      title: "toprow",
      description: "Combine the complete top row.",
      level: "beginner",
      lessons: [
        {
          id: "lesson-1",
          title: "QWERTY",
          type: "keys",
          targetKeys: [
            "q", "w", "e", "r",
            "t", "y"
          ],
          exercises: ""
        },
        {
          id: "lesson-2",
          title: "YUIOP",
          type: "keys",
          targetKeys: [
            "y", "u", "i", "o", "p"
          ],
          exercises: ""
        },
        {
          id: "lesson-3",
          title: "Full Top Row",
          type: "keys",
          targetKeys: [
            "q", "w", "e", "r", "t",
            "y", "u", "i", "o", "p"
          ],
          exercises: ""
        }
      ]
    },

    {
      id: "m6",
      title: "bottomrow",
      description: "Learn the QWERTY bottom row.",
      level: "novice",
      lessons: [
        {
          id: "lesson-1",
          title: "ZXCV",
          type: "keys",
          targetKeys: ["z", "x", "c", "v"],
          exercises: ""
        },
        {
          id: "lesson-2",
          title: "BNM",
          type: "keys",
          targetKeys: ["b", "n", "m"],
          exercises: ""
        },
        {
          id: "lesson-3",
          title: "Punctuation",
          type: "keys",
          targetKeys: [",", ".", "/"],
          exercises: ""
        }
      ]
    },

    {
      id: "m7",
      title: "bottomrow",
      description: "Combine the complete bottom row.",
      level: "beginner",
      lessons: [
        {
          id: "lesson-1",
          title: "ZXCVBNM",
          type: "keys",
          targetKeys: [
            "z", "x", "c", "v",
            "b", "n", "m"
          ],
          exercises: ""
        },
        {
          id: "lesson-2",
          title: "Full Bottom Row",
          type: "keys",
          targetKeys: [
            "z", "x", "c", "v",
            "b", "n", "m",
            ",", ".", "/"
          ],
          exercises: ""
        }
      ]
    },

    {
      id: "m8",
      title: "allrows",
      description: "Combine top, middle and bottom rows.",
      level: "intermediate",
      lessons: [
        {
          id: "lesson-1",
          title: "combination1",
          type: "keys",
          targetKeys: [
            "q", "w", "e", "r", "t",
            "h", "j", "k", "l", ";"
          ],
          exercises: ""
        },
        {
          id: "lesson-2",
          title: "combination2",
          type: "keys",
          targetKeys: [
            "a", "s", "d", "f", "g",
            "y", "u", "i", "o", "p"
          ],
          exercises: ""
        },
        {
          id: "lesson-3",
          title: "combination3",
          type: "keys",
          targetKeys: [
            "q", "w", "e", "r", "t",
            "n", "m", ",", ".", "/"
          ],
          exercises: ""
        },
        {
          id: "lesson-4",
          title: "combination4",
          type: "keys",
          targetKeys: [
            "z", "x", "c", "v", "b",
            "y", "u", "i", "o", "p"
          ],
          exercises: ""
        },
        {
          id: "lesson-5",
          title: "combination5",
          type: "keys",
          targetKeys: [
            "a", "s", "d", "f", "g",
            "n", "m", ",", ".", "/"
          ],
          exercises: ""
        },
        {
          id: "lesson-6",
          title: "combination6",
          type: "keys",
          targetKeys: [
            "z", "x", "c", "v", "b",
            "h", "j", "k", "l", ";"
          ],
          exercises: ""
        },
        {
          id: "lesson-7",
          title: "finalCombination",
          type: "keys",
          targetKeys: [
            "q", "w", "e", "r", "t",
            "a", "s", "d", "f", "g",
            "z", "x", "c", "v", "b",
            "y", "u", "i", "o", "p",
            "h", "j", "k", "l", ";",
            "n", "m", ",", ".", "/"
          ],
          exercises: ""
        }
      ]
    },

    {
      id: "m9",
      title: "combinations of rows",
      description: "Combine top, middle and bottom rows.",
      level: "advanced",
      lessons: [
        {
          id: "lesson-1",
          title: "combination1",
          type: "keys",
          targetKeys: [
            "q", "w", "e", "r", "t",
            "h", "j", "k", "l", ";"
          ],
          exercises: ""
        },
        {
          id: "lesson-2",
          title: "combination2",
          type: "keys",
          targetKeys: [
            "a", "s", "d", "f", "g",
            "y", "u", "i", "o", "p"
          ],
          exercises: ""
        },
        {
          id: "lesson-3",
          title: "combination3",
          type: "keys",
          targetKeys: [
            "q", "w", "e", "r", "t",
            "n", "m", ",", ".", "/"
          ],
          exercises: ""
        },
        {
          id: "lesson-4",
          title: "combination4",
          type: "keys",
          targetKeys: [
            "z", "x", "c", "v", "b",
            "y", "u", "i", "o", "p"
          ],
          exercises: ""
        },
        {
          id: "lesson-5",
          title: "combination5",
          type: "keys",
          targetKeys: [
            "a", "s", "d", "f", "g",
            "n", "m", ",", ".", "/"
          ],
          exercises: ""
        },
        {
          id: "lesson-6",
          title: "combination6",
          type: "keys",
          targetKeys: [
            "z", "x", "c", "v", "b",
            "h", "j", "k", "l", ";"
          ],
          exercises: ""
        },
        {
          id: "lesson-7",
          title: "finalCombination",
          type: "keys",
          targetKeys: [
            "q", "w", "e", "r", "t",
            "a", "s", "d", "f", "g",
            "z", "x", "c", "v", "b",
            "y", "u", "i", "o", "p",
            "h", "j", "k", "l", ";",
            "n", "m", ",", ".", "/"
          ],
          exercises: ""
        }
      ]
    },

    {
      id: "m10",
      title: "words",
      description: "Build typing speed and accuracy with sentences.",
      level: "intermediate",
      lessons: [
        {
          id: "lesson-1",
          title: "Short Sentences",
          type: "text",
          exercises: ""
        }
      ]
    },
    {
      id: "m11",
      title: "words",
      description: "Build typing speed and accuracy with longer words",
      level: "advanced",
      lessons: [
        {
          id: "lesson-1",
          title: "Short ",
          type: "text",
          exercises: ""
        }
      ]
    },
    {
      id: "m12",
      title: "random sentences",
      description: "Build typing speed and accuracy with random sentences.",
      level: "advanced",
      lessons: [
        {
          id: "lesson-1",
          title: "Short Random Sentences",
          type: "text",
          exercises: ""
        }
      ]
    },
    {
      id: "m13",
      title: "Computer coding",
      description: "Introduction to typing programming syntax and code.",
      level: "intermediate",
      lessons: [
        {
          id: "lesson-1",
          title: "Short Code blocks",
          type: "text",
          exercises: ""
        }
      ]
    },

    {
      id: "m14",
      title: "Computer coding",
      description: "For Programmers.",
      level: "advanced",
      lessons: [
        {
          id: "lesson-2",
          title: "Long Code blocks",
          type: "text",
          exercises: ""
        }
      ]
    }
  ]
};


async function getTrainingContent() {
  const modulesWithPromises = TrainingData.modules.map(async (module) => {
    const updatedLessons = await Promise.all(
      module.lessons.map(async (lesson) => {
        let exercises;
        if (module.id === "m10") {
          exercises = await getRandomWords(module.level);
        } else if (module.id === "m11") {
          exercises = await getRandomWords(module.level);
        } else if (module.id === "m12") {
          exercises = await getRandomSentences(module.level);
        } else if (module.id === "m13") {
          exercises = await getRandomCode(module.level);
        } else if (module.id === "m14") {
          exercises = await getRandomCode(module.level);
        } else {
          exercises = createRandomCombinations(module.level, lesson.targetKeys);
        }
        return {
          ...lesson,
          exercises: exercises
        };
      })
    );

    return {
      ...module,
      lessons: updatedLessons
    };
  });
  const resolvedModules = await Promise.all(modulesWithPromises);

  const TrainingContent = {
    modules: resolvedModules
  };

  return TrainingContent;
}

let TrainingContent = await getTrainingContent();


export default TrainingContent;