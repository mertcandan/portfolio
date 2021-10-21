import sunbathingIcon from './media/appIcons/sunbathingIcon.png';
import colorMixerIcon from './media/appIcons/colorMixerIcon.jpg';
import dunkIcon from './media/appIcons/dunkIcon.png';
import islandIcon from './media/appIcons/islandIcon.png';
import popcornIcon from './media/appIcons/popcornIcon.png';
import candyCubeIcon from './media/appIcons/candyCubeIcon.png';
import siegeHeroIcon from './media/appIcons/siegeHeroIcon.png';
import snapIcon from './media/appIcons/snapIcon.png';
import saveHerIcon from './media/appIcons/saveHerIcon.png';
import torchMasterIcon from './media/appIcons/torchMasterIcon.jpg';

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mertcandan.github.io',
  title: 'Omer Mert Candan',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Omer Mert Candan',
  role: 'Game Developer',
  description:
  [
    'High School - Robert College \'11',
    'B.S. in CS - Sabanci University \'15',
    'M.S. in CS - Sabanci University \'17',
  ],
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/%C3%B6mer-mert-candan-80555b90/',
    github: 'https://github.com/mertcandan',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Sunbathing',
    short_description: 'Get the perfect tan',
    description:
      'A summer themed game where you try to get as much sunlight as possible. ' +
      'Each level begins with a sunscreen phase, you have to rub the sunscreen fast to move on.' +
      'Then the tanning phases begin, you have to avoid the shadows to tan the character properly' +
      'In addition, some random objects may come into play and try to block your sun' +
      'At the end how much sun tan you got is calculated and a success ratio is determined.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: sunbathingIcon,
    videoUrl: "https://vimeo.com/637362033",
    details: [
      "Development platform: Unity",
      "Development time: ~3 weeks",
      "relied heavily on Inverse Kinematics",
      "contributed heavily to the custom shader created by the Technical Artist",
      "custom tanning made possible by manipulating vertex color of the mesh",
      "tan % calculated by finding out the ratio of tanned vertices",
      ],
  },
  {
    name: 'Color Mixer',
    short_description: 'Mix the colors to reach the destination',
    description:
      'Each level has a target color as a destination' +
      'The purpose is to draw a line passing through correct colors to reach the target' +
      'While passing through each color, the color of the line gradually mixex towards the combination of all colors touched so far' +
      'If any of the obstacles laying around is touched, you have to start over',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: colorMixerIcon,
    videoUrl: "https://vimeo.com/615724233",
    details: [
      "Development platform: Unity",
      "Development time: ~1 week",
      "relied on custom shader for showing the drawn line with brush strokes",
      "color mixing is attempted to represent how water colors actually mix in real life",
      ],
  },
  {
    name: 'Candy Cube',
    short_description: 'Match and destroy the cubes',
    description:
      'Color mixer desc.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: candyCubeIcon,
    videoUrl: "https://vimeo.com/615724190",
    details: [
      "test",
      "test",
      ],
  },
  {
    name: 'Torch Master',
    short_description: 'Light up as many cakes as you can',
    description:
      'Color mixer desc.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: torchMasterIcon,
    videoUrl: "https://vimeo.com/615725255",
    details: [
      "test",
      "test",
      ],
  },
  {
    name: 'Siege Hero',
    short_description: 'Destroy the enemy army',
    description:
      'Color mixer desc.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: siegeHeroIcon,
    videoUrl: "https://vimeo.com/615725042",
    details: [
      "test",
      "test",
      ],
  },
  {
    name: 'Save Her',
    short_description: 'Save the girl from the zombies',
    description:
      'Color mixer desc.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: saveHerIcon,
    videoUrl: "https://vimeo.com/615724585",
    details: [
      "test",
      "test",
      ],
  },
  {
    name: 'Dribble Dunk',
    short_description: 'Defeat your opponent with your dunks',
    description:
      'Color mixer desc.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: dunkIcon,
    videoUrl: "https://vimeo.com/637362738",
    details: [
      "test",
      "test",
      ],
  },
  {
    name: 'Island Clash',
    short_description: 'Merge the islands and defeat the boss',
    description:
      'Color mixer desc.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: islandIcon,
    videoUrl: "https://vimeo.com/615724306",
    details: [
      "test",
      "test",
      ],
  },
  {
    name: 'Snap It All',
    short_description: 'Get rid of annoying flies',
    description:
      'Color mixer desc.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: snapIcon,
    videoUrl: "https://vimeo.com/615725220",
    details: [
      "test",
      "test",
      ],
  },
  {
    name: 'Pop My Corn',
    short_description: 'Pop the corns and save the boy stuck inside',
    description:
      'Color mixer desc.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: popcornIcon,
    videoUrl: "https://vimeo.com/615724463",
    details: [
      "test",
      "test",
      ],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C#',
  'Python',
  'Unity',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'React-Native',
  'Git',
  'Java',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'omercandan7@gmail.com',
}

export { header, about, projects, skills, contact }
