export const coursesData = [
  {
    id: '1',
    category: 'web',
    title: 'Frontend Developer',
    description: 'HTML5, CSS3, JavaScript ES6+, and modern development workflow.',
    fullDescription: 'Master modern frontend development. Learn how to build interactive, responsive web applications using clean JavaScript and modern tools.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80',
    options: {
      duration: [
        { name: '3 Months', priceAdd: 0 },
        { name: '6 Months', priceAdd: 150 }
      ],
      format: [
        { name: 'Online Self-paced', priceAdd: 0 },
        { name: 'With Personal Mentor', priceAdd: 100 }
      ]
    }
  },
  {
    id: '2',
    category: 'qa',
    title: 'QA Engineer',
    description: 'Manual and automated software testing fundamentals and tools.',
    fullDescription: 'Become a certified QA Engineer. Learn software testing strategies, bug reporting, test automation, and API testing.',
    price: 380,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80',
    options: {
      duration: [
        { name: '2 Months', priceAdd: 0 },
        { name: '4 Months', priceAdd: 100 }
      ],
      format: [
        { name: 'Basic Track', priceAdd: 0 },
        { name: 'Intensive + Internship', priceAdd: 120 }
      ]
    }
  },
  {
    id: '3',
    category: 'ds',
    title: 'Python Data Analyst',
    description: 'Data analysis, visualization, Pandas, NumPy, and SQL basics.',
    fullDescription: 'Dive deep into data science. Learn data wrangling, visualization, statistical analysis, and database querying.',
    price: 500,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
    options: {
      duration: [
        { name: '4 Months', priceAdd: 0 },
        { name: '6 Months', priceAdd: 200 }
      ],
      format: [
        { name: 'Standard Track', priceAdd: 0 },
        { name: 'Advanced Machine Learning', priceAdd: 150 }
      ]
    }
  }
];