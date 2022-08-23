import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routerLink: "dashboard",
    icon: "fa fa-home",
    label: "Dashboard"
  },
  {
    routerLink: "articles",
    icon: "fa-solid fa-newspaper",
    label: "Articles",
    items: [
      {
        routerLink: "articles/medium",
        label: "Medium"
      },
      {
        routerLink: "articles/dev-community",
        label: "Dev Community"
      }
    ]
  },
  {
    routerLink: "projects",
    icon: "fa-solid fa-diagram-project",
    label: "Projects",
    items: [
      {
        routerLink: "projects/js",
        label: "JS",
        items: [
          {
            routerLink: "projects/js-first",
            label: "One"
          },
          {
            routerLink: "projects/js-second",
            label: "Second"
          }
        ]
      },
      {
        routerLink: "projects/angular",
        label: "Angular",
        items: [
          {
            routerLink: "projects/angular-one",
            label: "One"
          },
          {
            routerLink: "projects/angular-second",
            label: "Second"
          }
        ]
      }
    ]
  }
];
