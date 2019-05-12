const db = {
  users: [
    {
      id: 'user-1',
      name: 'Rich Eldridge',
      address: '1600 Pennsylvania Ave',
      city: 'Washington',
      state: 'DC',
      zip: 20001,
      email: 'richard.eldridge@recodes.io',
      password: '123456',
      date: Date.now()
    },
    {
      id: 'user-2',
      name: 'April Eldridge',
      address: '1600 Pennsylvania Ave',
      city: 'Washington',
      state: 'DC',
      zip: 20001,
      email: 'eldridge.april@gmail.com',
      password: '123456',
      date: Date.now()
    },
    {
      id: 'user-3',
      name: 'Harrison Eldridge',
      address: '1600 Pennsylvania Ave',
      city: 'Washington',
      state: 'DC',
      zip: 20001,
      email: 'harrison@eldridge.com ',
      password: '123456',
      date: Date.now()
    },
    {
      id: 'user-4',
      name: 'Gwen Eldridge',
      address: '1600 Pennsylvania Ave',
      city: 'Washington',
      state: 'DC',
      zip: 20001,
      email: 'gwen@eldridge.com',
      password: '123456',
      date: Date.now()
    }
  ],
  posts: [
    {
      id: 1,
      user: 'user-1',
      name: 'Rich Eldridge',
      text: 'This is a post. It says stuff and things.',
      categories: [
        'Childcare',
        'Pet Care',
        'Household',
        'Transportation',
        'Questions',
        'Other'
      ],
      rank: 'Member',
      date: Date.now(),
      likes: ['user-2', 'user-3', 'user-4'],
      comments: [
        {
          user: 'user-2',
          name: 'April Eldridge',
          text: 'This is a comment. It says stuff, too.',
          date: Date.now()
        },
        {
          user: 'user-1',
          name: 'Rich Eldridge',
          text: 'This is replying to the first comment. It says stuff, too.',
          date: Date.now()
        }
      ]
    },
    {
      id: 2,
      user: 'user-2',
      name: 'April Eldridge',
      text: 'This is a post. It says stuff and things.',
      categories: ['Childcare', 'Pet Care', 'Transportation'],
      rank: 'Rockstar',
      date: Date.now(),
      likes: ['user-3', 'user-4'],
      comments: [
        {
          user: 'user-2',
          name: 'April Eldridge',
          text: 'This is a comment. It says stuff, too.',
          date: Date.now()
        },
        {
          user: 'user-1',
          name: 'Rich Eldridge',
          text: 'This is another comment. It says stuff, too.',
          date: Date.now()
        }
      ]
    },
    {
      id: 3,
      user: 'user-3',
      name: 'Harrison Eldridge',
      text: 'This is a post. It says stuff and things.',
      categories: ['Questions', 'Other'],
      rank: 'Youngster',
      date: Date.now(),
      likes: ['user-1', 'user-2', 'user-3'],
      comments: [
        {
          user: 'user-2',
          name: 'April Eldridge',
          text: 'Go to bed!',
          date: Date.now()
        },
        {
          user: 'user-1',
          name: 'Rich Eldridge',
          text: 'You heard your mother!',
          date: Date.now()
        }
      ]
    },
    {
      id: 4,
      user: 'user-4',
      name: 'Gwen Eldridge',
      text: 'This is a post. It says stuff and things.',
      categories: ['Pet Care', 'Questions', 'Other'],
      rank: 'Youngster',
      date: Date.now(),
      likes: ['user-1', 'user-2', 'user-3'],
      comments: [
        {
          user: 'user-2',
          name: 'April Elridge',
          text: 'Go to bed!',
          date: Date.now()
        },
        {
          user: 'user-1',
          name: 'Rich Eldridge',
          text: 'You heard your mother!',
          date: Date.now()
        }
      ]
    }
  ]
};

export default db;
