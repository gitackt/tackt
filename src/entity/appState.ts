import { Service } from "../interfaces/Service"

export const appState = {
  contents: [
    {
      title: "Product",
      backgroundColor: "#D5A6DD",
      services: [
        {
          title: "potato sand",
          discription: "オセロゲームです。",
          url: "https://potato-sand.web.app/",
          term: "2020/4 ~",
        },
      ] as Array<Service>,
    },
  ],
}
