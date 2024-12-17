import logo from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "Destinations",
    href: "/destinations",
    subNavItems: [
      { id: 1, name: "Destinations", href: "/destinations" },
      { id: 2, name: "Destinations Detail", href: "/destinations-details" },
    ],
  },
  {
    id: 3,
    name: "Tours",
    href: "/tours",
    subNavItems: [
      { id: 1, name: "Tours", href: "/tours" },
      { id: 2, name: "Tours List", href: "/tours-list" },
      { id: 3, name: "Tours Details", href: "/tour-details" },
    ],
  },
  {
    id: 4,
    name: "Pages",
    href: "",
    subNavItems: [{ id: 1, name: "About", href: "/about" }],
  },
  {
    id: 5,
    name: "News",
    href: "/news",
    subNavItems: [
      { id: 1, name: "News", href: "/news" },
      { id: 2, name: "News Details", href: "/news-details" },
    ],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  // github
  { icon: "fa-github", link: "https://github.com/srj101" },

  // linkedin
  { icon: "fa-linkedin", link: "https://www.linkedin.com/in/sr-joy/" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+88016 1634 6835",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "salimreza6835@gmail.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
