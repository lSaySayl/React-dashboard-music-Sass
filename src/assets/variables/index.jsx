import {
  RiAddBoxFill,
  RiAlertFill,
  RiFolderAddFill,
  RiHome7Fill,
  RiHomeGearFill,
  RiLayoutGridFill,
  RiMusic2Fill,
  RiNumbersFill,
  RiTeamFill,
} from "react-icons/ri";

export const menu = [
  {
    name: "home",
    icon: <RiHome7Fill />,
  },
  {
    name: "short",
    icon: <RiNumbersFill />,
  },
  {
    name: "Library",
    icon: <RiFolderAddFill />,
  },
  {
    name: "Categorie",
    icon: <RiLayoutGridFill />,
  },
  {
    name: "Subscriptions",
    icon: <RiTeamFill />,
  },
];

export const playlist = [
  {
    name: "creat new",
    icon: <RiAddBoxFill />,
  },
  {
    name: "relax",
    icon: <RiMusic2Fill />,
  },
  {
    name: "motivation",
    icon: <RiMusic2Fill />,
  },
];

export const settings = [
  {
    name: "help center",
    icon: <RiAlertFill />,
  },
  {
    name: "setting",
    icon: <RiHomeGearFill/>,
  },
];
