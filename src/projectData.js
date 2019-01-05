export const projectData = [
  {
    key: 'themeDesign',
    header: 'Theme Design',
    subHeading: 'To infinity and beyond!',
    description: ['Themes have been my baby from the moment I started at Zola. When I first joined the team, we had about 35 themes. Over the course of the year the number of themes have grown by leaps and bounds as I first coded new themes and later variations. Now, I oversee theme development as we continue to create more gorgeous sites for couples to pick from. At the time of writing this, we had 157 in production.'],
    tech: ['Less', 'Postgresql', 'React'],
    color: 'purple'
  },
  {
    key: 'themeRedesign',
    header: 'Themes Listing Redesign',
    subHeading: 'First serious project at Zola - Overhaul the Themes Listing Page',
    description: [
      ['This project was a huge undertaking spanning two large initiatives. '],
      ['First: Implement the ability to filter themes by color or by matching invitation. '],
      ['Second: Restructure themes to allow us to implement \'variations\'. This meant a change to how themes were stored in the database going from a single layer object of theme data to a notion of Theme Groups which have themes assigned to them - a parent and a child. Swatch toggle buttons allowed a user to thumb through these variations and ultimately make a selection.']
    ],
    tech: ['React', 'Redux', 'Node', 'Less'],
    color: 'pink',
  },
  {
    key: 'guestNotInGuestList',
    header: 'Guest NOT in Guest List',
    subHeading: 'What do you do if you go to RSVP to a wedding only to realize ... you aren\'t on the list?',
    description: [
      ['This was a really fun project and was a great learning experience. The premise of the project was to solve a problem that happens quite a bit - A guest tries to RSVP to a couples\' wedding only to realize they aren\'t on the guest list. '],
      ['Previously, the only solution for guests in this predicament was copy telling them to call Zola customer service. This resulted in a lot of really weird mediation between Zola Customer Care, the couple, and the guests, as we all come together to figure out what the issue is. More often than not, its a misspelling on the couples\'s part. As someone who misspelled my father in law\'s name I can lend some anecdotal evidence on the issue. Much to my chagrin.'],
    ],
    tech: ['React', 'Redux', 'Redux Forms', 'Less', 'Node'],
    color: 'yellow'
  },
  {
    key: 'unification',
    header: 'Unification',
    subHeading: 'Two platforms, two stacks, two looks, too much',
    description: [
      ['When Zola first launched, our sole business was Registries - bringing the best assortment of products and experiences to couples everywhere. In 2017, we launched Zola Weddings which was a suite of online planning tools - Checklist, Guest List, and Websites specifically. Over time the two diverged in terms of style. They were written years apart, which is as good as a decade in tech, so in some parts of the site you might see a square button and others a rounded button. This button topic is contentious at Zola, its best not to bring it up. Other problems included little irritations like being unable to navigate between the two platforms easily on mobile as well as inconsistencies in styles, colors, or even fonts.'],
    ],
    tech: ['React', 'Less'],
    color: 'green'
  },
  {
    key: 'preauthPages',
    header: 'Preauth Pages',
    subHeading: 'Opening the gates of Zola up to the unregistered masses',
    description: [
      ['Previously, the only way to really interact with Zola\'s planning tools was to create an account. This is a lot of friction to overcome for a user who\'s on the fence between Wedding Wire, The Knot, or the dozens of other competeing wedding tech sites (bet you didn\'t realize Wedding Tech was a thing till just now)']
    ],
    tech: ['React', 'Redux', 'React Router', 'Less'],
    color: 'purple'
  },
  {
    key: 'mobileSnapShot',
    header: 'Mobile Snap Shot',
    subHeading: 'Fun little query param project',
    description: [
      ['Our iOS engineer came up to me the other day with an interesting problem. The way they display the current state of a user\'s wedding website is to make a request to create a snap shot of the user\'s actual wedding website. This works well except because our websites have the ability to hide pages and the showing and hiding of pages is handled server side they were unable to create snap shots of pages that were hidden. As well, they wanted the ability to disable tracking since when these routes are hit no one is actually viewing the pages. Another param (badum tish) was to be able to hide the red banner alerting guests their website was unpublished because they were handling that messaging elsewhere in the App already as well as the navigation.']
    ],
    tech: ['React', 'Redux', 'React Router', 'Node'],
    color: 'blue'
  },
  {
    key: 'flightpathRedesign',
    header: 'Flightpath Redesign',
    subHeading: 'Baby\'s First Project',
    description: [
      ['One of my favorite projects from my time at Flighpath was working on the company\'s site redesign. I was lucky enough to work with some incredibly talented engineers. I was responsible for the Work page as well as all of the individual client pages. It was so much fun and I learned so much doing it.']
    ],
    tech: ['CSS'],
    color: 'green'
  },
  {
    key: 'cfd',
    header: 'Custom Furniture Design',
    subHeading: 'Was it Uber that said everybody needed a side hustle?',
    description: [
      ['Custom Furniture Design is a stuido out in San Francisco and I routinely touch up their photos to mimick studio lighting.']
    ],
    tech: ['Photoshop'],
    color: 'pink'
  },
  {
    key: 'cms',
    header: 'CMS Navigation',
    subHeading: 'Linear Flow and a Win for Mobile',
    description: [
      ['We wanted to see if a different flow for editing pages would lead to more published wedding websites. I created a new navigation flow utilizing a more linear step by step flow then set up an Optimizely test to track the differences. Optimizely aside, this was a huge coupe for the Weddings platform in mobile.']
    ],
    tech: ['React', 'Redux', 'React Router', 'Less', 'Optimizely'],
    color: 'yellow'
  },
  {
    key: 'react16',
    header: 'Over React-ing',
    subHeading: 'Upgraded web wedding\'s platform to React 16 from React 15',
    description: [
      ['The biggest struggle here was dealing with aspects of React that had become more asynchronous than it\'s previous itereation. Certain life cycles, ahem, ComponentWillReceiveProps, had to be refactored. This was definitely a quest to slay dragons']
    ],
    tech: ['React'],
    color: 'blue'
  }
]