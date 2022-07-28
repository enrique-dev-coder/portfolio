import React from 'react';

const skills = [
  {
    id: 1,
    dark: '/img/skills/react_dark.svg',
    title: 'react',
  },
  {
    id: 2,
    dark: '/img/skills/next_dark.svg',
    title: 'nextjs',
  },
  {
    id: 3,
    dark: '/img/skills/js_dark.svg',
    title: 'javascript',
  },
  {
    id: 4,
    dark: '/img/skills/nodejs_dark.svg',
    title: 'nodejs',
  },
  {
    id: 5,
    dark: '/img/skills/firebase_dark.svg',
    title: 'firebase',
  },
  {
    id: 6,
    dark: '/img/skills/wordpress_dark.svg',
    title: 'wordpress',
  },
];

const Skills = () => {
  return (
    <div className="flex justify-between">
      {skills.map((s) => (
        <div className="mt-4">
          <img
            src={s.dark}
            key={s.id}
            alt="skills"
            className="w-[80px] cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
