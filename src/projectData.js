//PROJECT DATA STRUCTURE


export const projectData = {
	themeReDesign: {
    title: 'Theme Redesign',
    subHeading: 'Overhauling the Themes Listing page',
    description: [
      [
        'This was one of my first big projects with Zola. We wanted to overhaul our themes listing page to be more dynamic and feature rich. As we expanded the number of themes we had to offer, we needed an easier way to display those to users that wasn\'t so visually overwhelming and was less taxing on page load. Using an infinite scroll technique, the more you scroll, the more requests you make as you fetch the next batch of themes. We wanted to limit those requests while still giving the user full range of our themes'
      ],
      [
        'We also wanted to be able to expand our theme count easily. Prior, each theme was seen as it\'s own solitary data unit. Which meant developing new themes was a start-from-scratch process. Design would give us a sketch file and we would run the necessary database migrations and develop the theme\'s design using Less. Development took typically two weeks with time for QA included.'
      ],
      [
        'The solutions were to add the ability to filter themes by specified parameters. This way, users could sort the themes they were interested in seeing by colors. Currently, by color is the only filter however this project can easily support filtering by matching invitation, style, or mood.'
      ],
      [
        'We also completely overhauled Themes data structure. Instead of individual 1 to 1 data units, a theme now belongs to a "Theme Group". A Theme Group may have only one theme or it may have 10 themes. Using swatch buttons, a user can thumb through these options to see multiple variations of a given theme. This allowed us to ramp up development time. Instead of starting from scratch, I could simply create the new database migration for this variation, create it\'s Less file where it inherits all styles from it\'s parent, and then overwrite with a new background color or new assets. Now it became possible to crunch out 7 themes in a week instead of 1 in two.'
      ]
    ],
    technology: 'React, Node, Less, Postgresql'
  },
  themes: {
    title: 'Wedding Websites',
    subHeading: 'To infinity and beyond!',
    description: [
      [
        'Themes have been my baby almost from the start. When I was hired at Zola, the Wedding Planning platform had only been launched a few months prior. They had started with about 38 themes and it was theme work where I learned my way around the Zola codebase. Thanks in large part to the Theme Listing overhaul, we now have over 150 available themes.'
      ],
    ],
    technology: 'React Less, Postgresql'
  },
  unification: {
    title: 'Unification',
    subHeading: 'Two platforms, two code stacks, two looks, too much',
    description: [
      [
        'Themes have been my baby almost from the start. When I was hired at Zola, the Wedding Planning platform had only been launched a few months prior. They had started with about 38 themes and it was theme work where I learned my way around the Zola codebase. Thanks in large part to the Theme Listing overhaul, we now have over 150 available themes.'
      ],
    ],
    technology: 'React Less, Postgresql'
	}
}