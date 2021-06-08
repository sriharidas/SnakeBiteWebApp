import Home from "./components/pages/Home";
import Test from "./components/pages/Test";
import Chatbot from "./components/pages/Chatbot";
import Location from "./components/pages/Location";
import About from "./components/pages/About";
import React from "react";

export const items = [
  {
    title: "Home",
    comp: <Home />,
    path: "/",
  },
  {
    title: "Test",
    comp: <Test />,
    path: "/test",
  },
  // {
  //     title: "Chatbot",
  //     comp: <Chatbot/>,
  //     path: '/chatbot'
  // },
  {
    title: "Loaction",
    comp: <Location />,
    path: "/location",
  },
  {
    title: "About us",
    comp: <About />,
    path: "/about",
  },
];
export const symptoms = [
  {
    title: "1. swelling and pain around the bite",
    name: "swelling",
    desc:
      "Swelling may become apparent within 15 minutes and becomes massive in 2-3 days. It may persist for up to 3 weeks. The swelling spreads rapidly from the site of the bite and may involve the whole limb and adjacent trunk.",
  },
  {
    title: "2. Redness and bruising",
    name: "Redness",
    desc:
      "Symptoms of a venomous snake bite can include swelling, pain, redness, and bruising around the bite area. Usually, people know right away if a snake has bitten them. ",
  },
  {
    title: "3. Elevated heart rate",
    name: "HeartRate",
    desc:
      "Positioning of the extremity below or at the level of the heart should be individualized—for snakebites with severe and potentially fatal systemic toxicity, systemic toxicity might be delayed by positioning the extremity below the heart, while for snakebites with severe local tissue damage and less systemic toxicity",
  },
  {
    title: "4. breathing difficulty",
    name: "BreathingDifficulty",
    desc:
      "Some poisonous snakebite symptoms can cause vision problems, speaking and breathing trouble, and numbness close to or distant to the bite site. There may be muscle death, which can lead to kidney failure. Some poisonous snakebites lead can paralyze the breathing muscles and lead to death.",
  },
  {
    title: "5. blurred vision",
    name: "BlurredVision",
    desc:
      "The blurred vision that occurred in the patient on the second day was probably due to the development of acute anterior uveitis due to the toxicity of snake venom, and the severe diminution of vision that occurred over the next four days",
  },
  {
    title: "6. nausea or vomiting",
    name: "Nausea",
    desc:
      "Even a bite from a harmless snake can be serious, leading to an allergic reaction or an infection. Venomous snake bites can produce an array of symptoms, including localized pain and swelling, convulsions, nausea, and even paralysis.",
  },
  {
    title: "7. weakness",
    name: "weakness",
    desc:
      "Acute neuromuscular weakness with respiratory involvement is the most clinically important neurotoxic effect. Data is limited on the many other acute neurotoxic manifestations, and especially delayed neurotoxicity.",
  },
  {
    title: "8. bleeding",
    name: "Bleeding",
    desc:
      "Bleeding at the site of the bite is due to the local action of the venom as a vasculotoxin. Systemic bleeding occurs with severe poisoning and appears to be mainly dependent on platelet deficiency and the co-existing defibrination syndrome appears to play a minor role in the initiation of bleeding.",
  },
  {
    title: " 9. itching near the bite area",
    name: "Itching",
    desc:
      "Symptoms may include rash, itching, hives, joint or muscle aching, and fever. These are often mild. They can be treated with antihistamines and other medicines. Snake venom can affect how your blood clots.",
  },
];

// const items = () => (
//     [
//         {
//             title: "Home",
//             comp: <Home/>,
//             path : "/"
//         },
//         {
//             title: "Test",
//             comp: <Test/>,
//             path: '/test'
//         },
//         {
//             title: "Chatbot",
//             comp: <Chatbot/>,
//             path: '/chatbot'
//         },
//         {
//             title: "Loaction",
//             comp: <Location/>,
//             path: '/location'
//         },
//         {
//             title: "ABout us",
//             comp: <About/>,
//             path: '/about'
//         }
//       ]
// )

//   export default items;

export const SnakeBiteSymptoms = [
  " A pair of puncture marks at the wound",
  " Redness and swelling around the bite",
  "Severe pain at the site of the bite",
  "Nausea and vomiting",
  " Labored breathing (in extreme cases, breathing may stop altogether)",
  "Disturbed vision",
  "Increased salivation and sweating",
  " Numbness or tingling around the face and/or limbs",
];

export const SnakeBiteRemedies = [
  "Immediately move away from the area where the bite occurred",
  "Remove anything tight from around the bitten part of the body to avoid harm if swelling occurs",
  "Reassure the victim, as most venomous snake bites do not cause immediate death",
  "Immobilize the person completely and transport the person to a health facility as soon as possible",
  "Applying pressure at the bite site with a pressure pad may be suitable in some cases",
  "Avoid traditional first aid methods or herbal medicines",
  "Paracetamol may be given for local pain (which can be severe)",
  "Vomiting may occur, so place the person on their left side in the recovery position",
  "Closely monitor airway and breathing and be ready to resuscitate if necessary",
];

export const venomousSnake = [
  {
    Img:
      "https://www.techexplorist.com/wp-content/uploads/2020/01/Indian-Cobra-768x512.jpg",
    Desc:
      "The Indian cobra also known in India as ‘naja naja’ is an extremely venomous snake and a member of the ‘big four’ species that inflict the most snake bites on humans in India.",
  },
];
