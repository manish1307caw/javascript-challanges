const checkbox = document.querySelectorAll('input[type="checkbox"]');
let currentState = "None";
let currentStateRef = null;
const episodes = [
  {
    'id': 1,
    'name': 'James Q Quick\'s Origin Story'
  },
  {
    'id': 2,
    'name': 'Amy Dutton\'s Origin Story'
  },
  {
    'id': 3,
    'name': 'The Tech Behind Compressed.fm'
  },
  {
    'id': 4,
    'name': 'Starting a New Development Project'
  },
  {
    'id': 5,
    'name': 'How Do you Start a New Design Project?'
  },
  {
    'id': 6,
    'name': 'Freelancing (Part 1)'
  },
  {
    'id': 7,
    'name': 'Freelancing (Part 2)'
  },
  {
    'id': 8,
    'name': 'The Tech Behind jamesqquick.com'
  },
  {
    'id': 9,
    'name': 'Teh Tech Behind SelfTeach.me'
  },
  {
    'id': 10,
    'name': 'Design Fundamentals (Part 1)',
  },
  {
    'id': 11,
    'name': 'Design Fundamentals (Part 2)',
  },
  {
    'id': 12,
    'name': 'Productivity: Tools, Tips, and Workflows'
  },
  {
    'id': 13,
    'name': 'The Future of Code with No Code'
  },
  {
    'id': 14,
    'name': 'Building the Perfect Desk Setup'
  },
  {
    'id': 15,
    'name': 'Everything You Need to Know to Get Started in SvelteKit'
  },
  {
    'id': 16,
    'name': 'Live Streaming for Beginners'
  },
  {
    'id': 17,
    'name': 'All Things Automated'
  },
  {
    'id': 18,
    'name': 'Amy Gives James a Design Consult'
  },
  {
    'id': 19,
    'name': 'Figma for Everyone'
  },
  {
    'id': 20,
    'name': 'Learning and Building in Public'
  },
  {
    'id': 21,
    'name': 'Getting Your First Dev Job'
  },
  {
    'id': 22,
    'name': 'Hiring a Designer or Getting Your First UI / UX Job'
  },
  {
    'id': 23,
    'name': 'IRL Freelance Proposal'
  },
  {
    'id': 24,
    'name': 'Getting Started on YouTube'
  },
  {
    'id': 25,
    'name': 'Starting your own Podcast'
  },
  {
    'id': 26,
    'name': 'How Blogging Can Change Your Career'
  },
  {
    'id': 27,
    'name': 'Talking to Some of Our Favorite Content Creators'
  },
  {
    'id': 28,
    'name': 'Our Favorite Things: A Crossover Episode with Web Dev Weekly'
  },
  {
    'id': 29,
    'name': 'Freelancing IRL: Unveiling a Site Redesign'
  },
  {
    'id': 30,
    'name': 'Wordpress in 2021'
  },
  {
    'id': 31,
    'name': 'Struggle Bus'
  },
  {
    'id': 32,
    'name': 'Getting Started with TypeScript'
  },
  {
    'id': 33,
    'name': 'Small Design Tweaks that Make All the Difference'
  },
  {
    'id': 34,
    'name': 'Getting git'
  },
  {
    'id': 35,
    'name': 'Crossover Episode with Purrfect Dev'
  },
  {
    'id': 36,
    'name': 'SVGs FTW'
  },
  {
    'id': 37,
    'name': 'Building a Course'
  }
];
let loopThrough = (startPos, endPos) => {
  for(let i = startPos; i < endPos-1; i++) {
    checkbox[i].checked = checkbox[startPos-1].checked;
  }
}
let changeStatesOfKey = (event) => {
  let endPos = parseInt(currentStateRef.target.name.slice(8));
  let startPos = parseInt(event.target.name.slice(8));
  if(endPos < startPos) {
    let temp = endPos;
    endPos = startPos;
    startPos = temp;
  }
  console.log("hi", startPos, endPos);
  loopThrough(startPos, endPos);
}
let changeWithoutShift = (event) => {
  // tbi
  currentStateRef = event;
  if(event.target.checked) {
    currentState = "checked";
  } else{
    currentState = "unchecked";
  }
  console.log("without shift Key", currentStateRef.target, currentState);
}
let changeSettingsTillEnd = (event) => {
  let startPos = parseInt(event.target.name.slice(8));
  for(let i = startPos; i < 10; i++) {
    checkbox[i].checked = checkbox[startPos-1].checked;
  }
}
let changeWithShift = (event) => {
  if(currentState === "checked" && event.target.checked || (currentState === "unchecked" && !(event.target.checked))) {
    changeStatesOfKey(event);
    console.log("within the range")
  } else {
    changeSettingsTillEnd(event);
    console.log("out of range");
  }
  console.log(currentState, event.target.checked);
}
let changeSettings = (event, element) => {
  if(event.shiftKey) {
    changeWithShift(event);
  } else {
    changeWithoutShift(event);
  }
  console.log(event);
}
checkbox.forEach((element) => {
  element.addEventListener('click', (event) => {
    changeSettings(event, element);
  });
});