import { Service } from "../interfaces/Service"

export const appState = {
  contents: [
    {
      title: "Product",
      skills: [],
      services: [
        {
          title: "potato sand",
          discription: "オセロゲームです。",
          url: "https://potato-sand.web.app/",
          term: "2020/4 ~",
        },
      ] as Array<Service>,
      experiences: [],
      writings: [],
    },
  ],
}
