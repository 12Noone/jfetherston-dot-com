
import aboutMe from '../src/images/about-me.jpg';

export const viewerOptionsData = {
  about: {
    key: 'about',
    header: 'What else is there?',
    subHeading: 'Coding, Knitting, Reading, and Running',
    bodyCopy: 'Currently an engineer with Zola, the best the tech industry has to offer in the way of wedding registries and planning tools. When I\'m not working to make wedding plan suck less (a task that Sisyphus would sympathize with) you can find me knitting or perhaps cross stitching, plugged into an audio book and tuning out the world. Occasionally I guilt myself into exercise with a half marathon or two.',
    image: aboutMe,
  },
  contact: {
    key: 'contact',
    header: 'Say hi',
    subHeading: '',
    bodyCopy: 'probably a contact form. oh god this doesnt mean redux-forms does it',
    image: false
  },
  findMe: {
    key: 'find me',
    header: 'Other places I may be',
    image: false
  }
};

export const projectData = {
  themeDesign: {
    key: 'themeDesign',
    header: 'Theme Design',
    subHeading: 'To infinity and beyond!',
    bodyCopy: ['Themes have been my baby from the moment I started at Zola. When I first joined the team, we had about 35 themes. Over the course of the year the number of themes have grown by leaps and bounds as I first coded new themes and later variations. Now, I oversee theme development as we continue to create more gorgeous sites for couples to pick from.'],
    tech: ['Less', 'Postgresql']
  },
  themeRedesign: {
    key: 'themeRedesign',
    header: 'Themes Listing Redesign',
    subHeading: 'First serious project at Zola - Overhaul the Themes Listing Page',
    bodyCopy: [
      ['This project was a huge undertaking spanning two large initiatives.'],
      ['First: Implement the ability to filter themes by color or by matching invitation'],
      ['Second: Restructure themes to allow us to implement \'variations\'. This meant a change to how themes were stored in the database going from a single layer object of theme data to a notion of Theme Groups which have themes assigned to them - a parent and a child. Swatch toggle buttons allowed a user to thumb through these variations and ultimately make a selection.']
    ],
    tech: ['React', 'Redux', 'Node', 'Less']
  },
  guestNotInGuestList: {
    key: 'guestNotInGuestList',
    header: 'Guest NOT in Guest List',
    subHeading: 'What do you do if you go to RSVP to a wedding only to realize ... you aren\'t on the list?',
    bodyCopy: [
      ['This was a really fun project and was a great learning experience. The premise of the project was to solve a problem that happens quite a bit - A guest tries to RSVP to a couples\' wedding only to realize they aren\'t on the guest list.'],
      ['Previously, the only solution for guests in this predicament was copy telling them to call Zola customer service. This resulted in a lot of really weird mediation between Zola Customer Care, the couple, and the guests, as we all come together to figure out what the issue is. More often than not, its a misspelling on the couples\'s part. As someone who misspelled my father in law\'s name I can lend some anecdotal evidence on the issue. Much to my chagrin.']
    ],
    solve: [
      ['We implented a new link urging the guest to reach out to the couple via this handy dandy request form. Guests would fill this out triggering an email sent to the couple that the website belongs to. Couples would receive the email with a button taking them to view the request in the web where they could either accept or deny the request. Accepting would then add that guest to their wedding guest list which would allow the guest to then search for themselves and RSVP.'],
      ['This was a cool project because it introduced a new feature to Zola that hadn\'t previously been there (at least as far as the web is concerned): Notifications! Coding the badges was ridiculously satisfying.'],
  ],
    tech: ['React', 'Redux', 'Redux Forms', 'Less', 'Node'],
  },
  unification: {
    key: 'unification',
    header: 'Unification',
    subHeading: 'Two platforms, two stacks, two looks, too much',
    bodyCopy: [
      ['When Zola first launched, our sole business was Registries - bringing the best assortment of products and experiences to couples everywhere. In 2017, we launched Zola Weddings which was a suite of online planning tools - Checklist, Guest List, and Websites specifically. Over time the two diverged in terms of style. They were written years apart, which is as good as a decade in tech, so in some parts of the site you might see a square button and others a rounded button. This button topic is contentious at Zola, its best not to bring it up. Other problems included little irritations like being unable to navigate between the two platforms easily on mobile as well as inconsistencies in styles, colors, or even fonts.'],
    ],
    solve: [
      ['Enter Unification. A singular navigation menu would straddle the two platforms. Both platforms received upgrades bringing them to more current web design as well as, well, making them match. My part in this was the secondary nav which changes dynamically with nav items based on the url. I also overhauled the checklist, guest list, and manage pages to allow for the new navigation']
    ],
    tech: ['React', 'Less']
  },
  preauthPages: {
    key: 'preauthPages',
    header: 'Preauth Pages',
    subHeading: 'Opening the gates of Zola up to the unregistered masses',
    bodyCopy: [
      ['Previously, the only way to really interact with Zola\'s planning tools was to create an account. This is a lot of friction to overcome for a user who\'s on the fence between Wedding Wire, The Knot, or the dozens of other competeing wedding tech sites (bet you didn\'t realize Wedding Tech was a thing till just now)']
    ],
    solve: [
      ['The solution here was to overhaul how routing works to allow not-users to view these pages as well. We created a suite of guest-user landing pages shouting Zola from every image, page, and paragraph. Now users can visit the themes listing page to peruse designs, or read up on how checklist or guest lists work without the barrier of creating an account.']
    ],
    tech: ['React', 'Redux', 'React Router', 'Less']
  },
  mobileSnapShot: {
    key: 'mobileSnapShot',
    header: 'Mobile Snap Shot',
    subHeading: 'Fun little query param project',
    bodyCopy: [
      ['Our iOS engineer came up to me the other day with an interesting problem. The way they display the current state of a user\'s wedding website is to make a request to create a snap shot of the user\'s actual wedding website. This works well except because our websites have the ability to hide pages and the showing and hiding of pages is handled server side they were unable to create snap shots of pages that were hidden. As well, they wanted the ability to disable tracking since when these routes are hit no one is actually viewing the pages. Another param (badum tish) was to be able to hide the red banner alerting guests their website was unpublished because they were handling that messaging elsewhere in the App already as well as the navigation.']
    ],
    solve: [
      ['Using query parameters, mobile can pass true values through to the request for a given page even if it\'s hidden, hide or show the navigation, disable banners, and disable tracking. ']
    ],
    tech: ['React', 'Redux', 'React Router']
  },
  flightpathRedesign: {
    key: 'flightpathRedesign',
    header: 'Flightpath Redesign',
    subHeading: 'Baby\'s First Project',
    bodyCopy: [
      ['One of my favorite projects from my time at Flighpath was working on the company\'s site redesign. I was lucky enough to work with some incredibly talented engineers. I was responsible for the Work page as well as all of the individual client pages. It was so much fun and I learned so much doing it.']
    ],
    tech: ['CSS', '.Net']
  }
}

/* 
what other things do we do at zola ?



*/

