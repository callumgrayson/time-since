import React from "react"
import ALTemplateCard from "./ALTemplateCard"
import Main from "./Main"

import { ReactComponent as TemplateVideo } from "./svg/template_video.svg"
import { ReactComponent as TemplateSocialMedia } from "./svg/template_social_media.svg"
import { ReactComponent as TemplateWebsite } from "./svg/template_website.svg"
import { ReactComponent as TemplateSpotDifference } from "./svg/template_spot_difference.svg"
import { ReactComponent as TemplateMulti } from "./svg/template_multi.svg"
import { ReactComponent as TemplateDnD } from "./svg/template_dnd.svg"
import { ReactComponent as TemplateBubbleBurst } from "./svg/template_bubble_burst.svg"
import { ReactComponent as TemplateDropdown } from "./svg/template_dropdown.svg"
import { ReactComponent as TemplateVoice } from "./svg/template_voice.svg"
import { ReactComponent as TemplateSlidingScale } from "./svg/template_sliding_scale.svg"
import { ReactComponent as TemplateEmail } from "./svg/template_email.svg"
import { ReactComponent as TemplateWheel } from "./svg/template_wheel.svg"

const templates = [
  { id: 1, title: "Video", name: "video", icon: TemplateVideo },
  {
    id: 2,
    title: "Social Media",
    name: "social_media",
    icon: TemplateSocialMedia,
  },
  { id: 3, title: "Website", name: "website", icon: TemplateWebsite },
  {
    id: 4,
    title: "Spot Difference",
    name: "spot_difference",
    icon: TemplateSpotDifference,
  },
  { id: 5, title: "Multi", name: "multi", icon: TemplateMulti },
  { id: 6, title: "Drag & Drop", name: "drag_n_drop", icon: TemplateDnD },
  {
    id: 7,
    title: "Bubble Burst",
    name: "bubble_burst",
    icon: TemplateBubbleBurst,
  },
  {
    id: 8,
    title: "Dropdown",
    name: "dropdown",
    icon: TemplateDropdown,
  },
  {
    id: 9,
    title: "Voice",
    name: "voice",
    icon: TemplateVoice,
  },
  {
    id: 10,
    title: "Sliding Scale",
    name: "sliding_scale",
    icon: TemplateSlidingScale,
  },
  {
    id: 11,
    title: "Email",
    name: "email",
    icon: TemplateEmail,
  },
  {
    id: 12,
    title: "Wheel",
    name: "wheel",
    icon: TemplateWheel,
  },
]

const ALTemplateCardDisplay = () => {
  const clickHandler = (e) => {
    console.log("template clicked")
  }
  return (
    <Main style={{ paddingTop: "60px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "space-evenly",
        }}
      >
        {templates.map((temp) => (
          <ALTemplateCard
            key={temp.id}
            id={temp.id}
            name={temp.name}
            title={temp.title}
            Icon={temp.icon}
            clickHandler={() => clickHandler(temp.name)}
          />
        ))}
      </div>
    </Main>
  )
}

export default ALTemplateCardDisplay
