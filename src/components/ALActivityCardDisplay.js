import React, { useState } from "react"
import Main from "./Main"
// import ALSlider from "./ALSlider"
import ALActivityCard from "./ALActivityCard"
import { ReactComponent as IconHook } from "./svg/activity_hook.svg"
import { ReactComponent as IconNetwork } from "./svg/activity_network.svg"
import { ReactComponent as IconWifi } from "./svg/activity_wifi.svg"
import { ReactComponent as IconClipboard } from "./svg/activity_clipboard.svg"
import { ReactComponent as IconXPage } from "./svg/activity_x_page.svg"
import { ReactComponent as IconCursorPage } from "./svg/activity_cursor_page.svg"
import { ReactComponent as IconKey } from "./svg/activity_key.svg"
import { ReactComponent as IconLaptop } from "./svg/activity_laptop.svg"
import { ReactComponent as IconMobile } from "./svg/activity_mobile.svg"
import { ReactComponent as IconShield } from "./svg/activity_shield.svg"

const activityContentMap = {
  phishing_email: {
    text: "Phishing Email",
    Icon: IconHook,
  },
  network_security: {
    text: "Network Security",
    Icon: IconNetwork,
  },
  public_security: {
    text: "Public Security",
    Icon: IconWifi,
  },
  malicious_web_pages: {
    text: "Malicious Web Pages",
    Icon: IconXPage,
  },
  compliance: {
    text: "Compliance",
    Icon: IconClipboard,
  },
  social_media: {
    text: "Social Media",
    Icon: IconMobile,
  },
  phishing_social_engineering: {
    text: "Phishing & Social Engineering",
    Icon: IconCursorPage,
  },
  device_security_updates: {
    text: "Device Security & Software Updates",
    Icon: IconLaptop,
  },
  physical_security: {
    text: "Physical Security",
    Icon: IconShield,
  },
  passwords: {
    text: "Passwords",
    Icon: IconKey,
  },
}

const activitiesList = [
  "phishing_email",
  "network_security",
  "malicious_web_pages",
  "public_security",
  "compliance",
  "social_media",
  "phishing_social_engineering",
  "device_security_updates",
  "physical_security",
  "passwords",
]

const ALSliderDisplay = () => {
  const displayList = activitiesList.map((item) => ({
    Icon: activityContentMap[item].Icon,
    text: activityContentMap[item].text,
  }))

  return (
    <Main>
      <div>
        <h1>ALActivityCardDisplay</h1>
        <div style={{ display: "flex", flexWrap: "wrap", width: "375px" }}>
          {displayList.map((item) => (
            <div style={{ margin: "10px" }}>
              <ALActivityCard Icon={item.Icon} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </Main>
  )
}

export default ALSliderDisplay
