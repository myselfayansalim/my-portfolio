import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@myselfayansalim",
    icon: Icons.gitHub,
    link: "https://github.com/myselfayansalim",
  },
  {
    name: "LinkedIn",
    username: "Ayan Shaikh",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ayan-shaikh-a222b7261",
  },
  {
    name: "Instagram",
    username: "@ayan_salim_1605",
    icon: Icons.instagram,
    link: "https://www.instagram.com/ayan_salim_1605/",
  },
  {
    name: "Gmail",
    username: "ayansalim1605",
    icon: Icons.gmail,
    link: "mailto:ayansalim1605@gmail.com",
  },
];
