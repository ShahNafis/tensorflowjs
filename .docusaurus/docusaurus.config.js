export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Learning Tensorflow.js",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/lockup.svg"
      },
      "links": [
        {
          "to": "docs/index",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/ShahNafis/tensorflowjs",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/ShahNafis/tensorflowjs"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Learning Tensorflow.js. Built with Docusaurus."
    }
  },
  "title": "Learning Tensorflow.js",
  "tagline": "My doc site for learning Tensorflow.js",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "facebook",
  "projectName": "docusaurus",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\skool\\Documents\\GitHub\\tensorflowjs\\sidebars.js",
          "editUrl": "https://github.com/ShahNafis/tensorflowjs/edit/master"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/ShahNafis/tensorflowjs/edit/master"
        },
        "theme": {
          "customCss": "C:\\Users\\skool\\Documents\\GitHub\\tensorflowjs\\src\\css\\custom.css"
        }
      }
    ]
  ]
};