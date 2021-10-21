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
      'This is a game about sunbathing',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: sunbathingIcon,
    videoUrl: "https://vimeo.com/637362033",
    details: [
      "test",
      "test",
      ],
  },
  {
    name: 'Color Mixer',
    short_description: 'Mix the colors to reach the destination',
    description:
      'Color mixer desc.',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    appIcon: colorMixerIcon,
    videoUrl: "https://vimeo.com/615724233",
    details: [
      "test",
      "test",
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
