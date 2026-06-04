export const directoryData = [
  {
    id: 'home',
    title: 'Home',
    initial: 'H',
    color: '#39DFF2',
    description: 'Home Messages',
    messages: [
      'Buy groceries after class.',
      'Clean the study desk before sleeping.',
      'Prepare lunch for tomorrow.',
      'Pay electricity bill this week.'
    ]
  },
  {
    id: 'family',
    title: 'Family',
    initial: 'F',
    color: '#8B4DFF',
    description: 'Family Messages',
    messages: [
      "Mom's birthday dinner this Saturday at 7 PM.",
      "Don't forget to call grandma this evening.",
      'Family trip to Manali planned for next month.',
      "Pick up the cake for dad's anniversary.",
      'Send photos from the weekend get-together.',
      "Reminder: Cousin's engagement on Sunday."
    ]
  },
  {
    id: 'friends',
    title: 'Friends',
    initial: 'FR',
    color: '#FF4EB8',
    description: 'Friends Messages',
    messages: [
      'Movie night this weekend?',
      'Let’s meet for coffee after class.',
      'Good luck with your assignment.',
      'Don’t forget the group project discussion.'
    ]
  },
  {
    id: 'love',
    title: 'Love',
    initial: 'L',
    color: '#2F82B7',
    description: 'Love Messages',
    messages: [
      'You are appreciated more than you know.',
      'Sending love and positive energy today.',
      'Thank you for always being supportive.',
      'Have a beautiful and peaceful day.'
    ]
  },
  {
    id: 'university',
    title: 'University',
    initial: 'U',
    color: '#14D8E6',
    description: 'University Messages',
    messages: [
      'Submit the university assignment before Friday.',
      'Check the course portal for updated lecture notes.',
      'Prepare the presentation for your group project.',
      'Upload the final report and source code to GitHub.'
    ]
  },
  {
    id: 'you',
    title: 'You',
    initial: 'Y',
    color: '#FF5A1F',
    description: 'Goals I Achieved',
    isAchievement: true,
    messages: [
      {
        title: 'Completed 30 Days Fitness Challenge',
        subtitle: 'Stayed consistent with workouts for 30 days.'
      },
      {
        title: 'Learned a New Skill',
        subtitle: 'Completed an online course on UI/UX Design.'
      },
      {
        title: 'Traveled Solo',
        subtitle: 'Completed my first solo trip to the hills.'
      },
      {
        title: 'Eat Healthy Food',
        subtitle: 'Followed a healthy diet and made better food choices.'
      }
    ]
  }
];

export const getDirectoryById = (id) =>
  directoryData.find((item) => item.id === id);