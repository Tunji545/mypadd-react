import BgEvent1 from "../images/sm-bg-11.svg";
import BgEvent2 from "../images/sm-bg-12.svg";
import BgEvent3 from "../images/sm-bg-13.svg";
import { ReactComponent as Calender } from "../images/calendar.svg";
import { ReactComponent as Time } from "../images/time.svg";
import { ReactComponent as Location } from "../images/location.svg";
import Female1 from "../images/female1.svg";
import Male2 from "../images/male2.svg";
import Male3 from "../images/male3.svg";
import Male4 from "../images/male4.svg";
import Female5 from "../images/female5.svg";
import Female6 from "../images/female6.svg";
import People from "../images/people.svg";
import People1 from "../images/people1.svg";
import People2 from "../images/people2.svg";
import upEvent1 from "../images/up-event-image1.svg";
import upEvent2 from "../images/up-event-image2.svg";
import upEvent3 from "../images/up-event-image3.svg";
import upEvent4 from "../images/up-event-image4.svg";
import { Box, Typography } from "@material-ui/core";
import pastEvent1 from "../images/pastEvt1.svg";
import pastEvent2 from "../images/pastEvt2.svg";
import pastEvent3 from "../images/pastEvt3.svg";
import Celeb1 from "../images/celeb1.svg";
import Celeb2 from "../images/celeb2.svg";
import Celeb3 from "../images/celeb3.svg";
import Celeb4 from "../images/celeb4.svg";
import Celeb5 from "../images/celeb5.svg";

const num = {
  fontFamily: "Montserrat",
  fontSize: 18,
  fontWeight: 700,
  lineHeight: "22px",
  letterSpacing: "0em",
  paddingRight: 13.5,
  color: "white"  
};
const column = {
  fontFamily: "Montserrat",
  fontSize: 18,
  fontWeight: 700,
  lineHeight: "22px",
  letterSpacing: "0em",
  paddingLeft: 13.5,
  color: "white"
};
const text = {
  fontFamily: "Montserrat",
  fontSize: 11,
  fontWeight: 400,
  lineHeight: "13px",
  letterSpacing: "0em",
  color: "white",
  paddingRight: 23
};
const subHead = {
  fontFamily: "Montserrat",
  fontSize: 20,
  fontWeight: 600,
  lineHeight: "30px",
  letterSpacing: "0em",
  color: "#926D00"
};
const subHead2 = {
  fontFamily: "Montserrat",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "24px"
};
const subHead3 = {
  fontFamily: "Montserrat",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "21px"
};

export const eventCards = [
  {id: 1, img: BgEvent1, heading: "Recognition Week 2020", icon1: Calender, text1: "6th Sept - 8th Sept", icon2: Time, text2: "2:00 pm", icon3: Location, text3: "Online" },
  {id: 2, img: BgEvent2, heading: "Recognition Week 2020", icon1: Calender, text1: "6th Sept - 8th Sept", icon2: Time, text2: "2:00 pm", icon3: Location, text3: "7b, Omo Igodalo street, Ogudu, Lagos" },
  {id: 3, img: BgEvent3, heading: "Recognition Week 2020", icon1: Calender, text1: "6th Sept - 8th Sept", icon2: Time, text2: "2:00 pm", icon3: Location, text3: "Online" }
]

export const pastEventCards = [
  {id: 1, img: pastEvent1, heading: "Recognition Week 2020", icon1: Calender, text1: "6th Sept - 8th Sept", icon2: Time, text2: "2:00 pm", icon3: Location, text3: "Online" },
  {id: 2, img: pastEvent2, heading: "Recognition Week 2020", icon1: Calender, text1: "6th Sept - 8th Sept", icon2: Time, text2: "2:00 pm", icon3: Location, text3: "7b, Omo Igodalo street, Ogudu, Lagos" },
  {id: 3, img: pastEvent3, heading: "Recognition Week 2020", icon1: Calender, text1: "6th Sept - 8th Sept", icon2: Time, text2: "2:00 pm", icon3: Location, text3: "Online" }
]

export const people = [
  {
    id: 1,
    img: Female1,
    height: 328,
  },
  {
    id: 2,
    img: Male2,
    height: 227,
  },
  {
    id: 3,
    img: Male4,
    height: 315,
  },
  {
    id: 4,
    img: Female5,
    height: 214,
  },
  {
    id: 5,
    img: Female6,
    height: 315,
  },
  {
    id: 6,
    img: Male3,
    height: 227,
  },
]

export const Crowds = [
  {id: 1, img: People, heading: "Music Industry in the UN Year of Creative Economy", text: "14th Aug, 2021"},
  {id: 2, img: People1, heading: "Actions Taken, United Nations", text: "14th Aug, 2021"},
  {id: 3, img: People2, heading: "Durban Announced as the New Host of Infra-African Trade...", text: "14th Aug, 2021"}
];

const time = (
  <Box>
    <Box  style={num} component="span">25 <Box component="span" style={column}>:</Box></Box>
    <Box  style={num} component="span">16 <Box component="span" style={column}>:</Box></Box>
    <Box  style={num} component="span">47 <Box component="span" style={column}>:</Box></Box>
    <Box  style={num} component="span">38</Box>
  </Box>
)

const subTitle = (
  <Box>
    <Box  style={text} component="span">DAYS </Box>
    <Box  style={text} component="span">HOURS </Box>
    <Box  style={text} component="span">MINS </Box>
    <Box  style={text} component="span">SECS</Box>
  </Box>
);

const imageText = <Box style={subHead}>Recognition Week 2020</Box>

const  imageText1 = <Typography style={subHead2}>online</Typography>
const  imageText2 = <Typography style={subHead2}>
                      7b, Omo Igodalo street, Ogudu, Lagos
                    </Typography>
const  imageText3 = <Typography style={subHead2}>online</Typography>
const  imageText4 = <Typography style={subHead2}>online</Typography>


export const upEvents = [
  {
    img: upEvent1,
    title: time,
    subTitle: subTitle,
    id: 1,
    imageText: imageText,
    imageText1: imageText1,
    img1: Location 
  },
  {
    img: upEvent2,
    title: time,
    subTitle: subTitle,
    id: 2,
    imageText: imageText,
    imageText1: imageText2,
    img1: Location 

  },
  {
    img: upEvent3,
    title: time,
    subTitle: subTitle,
    id: 3,
    imageText: imageText,
    imageText1: imageText3,
    img1: Location
  },
  {
    img: upEvent4,
    title: time,
    subTitle: subTitle,
    id: 4,
    imageText: imageText,
    imageText1: imageText4,
    img1: Location
  }
];

export const HonoreesTexts = [
  {
    id: 1,
    par: "Red Hat OpenShift is the industry’s leading enterprise Kubernetes platform to build, run, scale and manage containerized applications. Red Hat OpenShift automates the provisioning and management of cloud-native applications and augments Kubernetes capabilities with additional features and a rapidly growing ecosystem of open source-based services and operators."
  },
  {
    id: 2,
    par: "Red Hat OpenShift has become the platform of choice for thousands of companies and IT organizations around the world for its capabilities, extensibility and constant innovation gained from open-source projects such as Tekton, Knative, CRI-O, Istio, and Grafana, to mention just a few. Red Hat OpenShift is the industry’s leading enterprise Kubernetes platform to build, run, scale and manage containerized applications. Red Hat OpenShift automates the provisioning and management of cloud-native applications and augments Kubernetes capabilities with additional features and a rapidly growing ecosystem of open source-based services and operators."
  },
  {
    id: 3,
    par: "Red Hat OpenShift has become the platform of choice for thousands of companies and IT organizations around the world for its capabilities, extensibility and constant innovation gained from open-source projects such as Tekton, Knative, CRI-O, Istio, and Grafana, to mention just a few."
  },
  {
    id: 4,
    par: "Red Hat OpenShift is the industry’s leading enterprise Kubernetes platform to build, run, scale and manage containerized applications. Red Hat OpenShift automates the provisioning and management of cloud-native applications and augments Kubernetes capabilities with additional features and a rapidly growing ecosystem of open source-based services and operators."
  },
  {
    id: 5,
    par5: "Red Hat OpenShift has become the platform of choice for thousands of companies and IT organizations around the world for its capabilities, extensibility and constant innovation gained from open-source projects such as Tekton, Knative, CRI-O, Istio, and Grafana, to mention just a few."
  }
];

const imageText5 = <Typography style={subHead}>Victor Adekule</Typography>;

const  imageText6 = <Typography style={subHead3}>Product designer, Prunedge</Typography>;

export const celebrities = [
  {
    id: 1,
    img: Celeb1,
  },
  {
    id: 2,
    img: Celeb2,
  },
  {
    id: 3,
    img: Celeb3,
  },
  {
    id: 4,
    img: Celeb4,
  },
  {
    id: 5,
    img: Celeb5,
  },
];

export const loopText2 = [
  {
    id: 1,
    imageText: imageText5,
    imageText1: imageText6,
  },
  {
    id: 2,
    imageText: imageText5,
    imageText1: imageText6,
  },
  {
    id: 3,
    imageText: imageText5,
    imageText1: imageText6,
  },
  {
    id: 4,
    imageText: imageText5,
    imageText1: imageText6,
  },
  {
    id: 6,
    imageText: imageText5,
    imageText1: imageText6,
  }
]