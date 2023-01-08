// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Sree Hari Karri',
  domain: 'template.karngyan.com', // add without https:// , used in meta tags and share urls
  image: '/images/bigheadkarngyan.png',
  email: 'sreehari98@gmail.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: false,
    domain: 'template.karngyan.com',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'sr33hari',
    linkedin: 'sreeharik5',
    instagram: 'highharii',
    codestats: 'highhari' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: false,
    url: 'https://www.buymeacoffee.com/karngyan'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: true,
  },
  resume: {
    enabled: true,
    pdfUrl: '/HariResume.pdf' // add files in static folder
  },
  uses: {
    enabled: true,
    meta: [
      {title: 'OS', value: 'macOS Monterey'},
      {title: 'Memory', value: '16 GB 6400 MHz LPDDR5'},
      {title: 'Keyboard', value: 'Logitech K120'},
      {title: 'Mouse', value: 'Logitech M590'},
      {title: 'Monitor', value: 'AOC 2770Vh1 (1920 x 1080) 27 Inch LCD Display'},
      {title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (14-inch, 2022) • 2.0 GHz Apple M1 Pro GPU (16-core) • Apple M1 Pro GPU (16-core)'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: false,
    meta: [
      { name: 'SendPost', src: '/images/sendpost.png', url: 'https://sendpost.io' },
      { name: 'Amazon', src: '/images/amazon.png', url: 'https://amazon.in' },
      { name: 'InterviewReady', src: '/images/interviewready-io.png', url: 'https://get.interviewready.io' },
      { name: 'CrioDo', src: '/images/crio.png', url: 'https://crio.do' },
    ]
  },
  recommendations: {
    enabled: false,
    meta: [
      { name: 'Varun Jain', designation: 'Founder, SendX & SendPost', image: '/images/varun.jpeg', linkedin: 'https://www.linkedin.com/in/varun-jain-582b0215/', content: 'Gyan interned with SendX and SendPost for around 6 months. He is a very strong full-stack engineer who can create pixel perfect frontend while being able to work on backend pieces sending millions of emails per day. He is a quick learner, a great team player and, has a very strong work ethic. You can rely on him that things will be done with utmost quality. He also has pretty good product instincts and can think from the user\'s perspective.' },
      { name: 'Gaurav Sen', designation: 'Founder, InterviewReady', image: '/images/gaurav.jpeg', linkedin: 'https://www.linkedin.com/in/gkcs/', content: 'Karn is an extraordinarily talented, diligent and foresighted individual. He is gifted at building products from paper to code, and has a knack of finding efficient solutions to complex problems. In my experience, I have rarely seen such a mixture of talent and passion put together. At InterviewReady, Karn exceeded our expectations. If you are considering working with him: congratulations, you are going to have a great time!' },
    ]
  },
  loadingIndicator: {
    name: 'wandering-cubes'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  laguageSwitcher: {
    enabled: true,
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog lifehacks',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description: 'I am a software developer and an adrenaline junkie. I love building projects and working on new tech. I will be blogging soon about everything I\'ve learnt that makes life better.',
        words: ['developer', 'designer', 'engineer', 'programmer', 'athlete'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'this is my first attempt at blogging, hope y\'all learn something interesting.'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'there\'s so much to learn everyday'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net metrics'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of the projects i\'ve worked on'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors say'
      }
    }
  }
}
