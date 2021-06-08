import { ReactComponent as SVGWallet } from "./svg/wallet.svg"
import { ReactComponent as SVGFile } from "./svg/file.svg"
import { ReactComponent as SVGiPhone } from "./svg/iPhone.svg"
import { ReactComponent as SVGKey } from "./svg/key.svg"
import { ReactComponent as SVGUrl } from "./svg/url.svg"
import { ReactComponent as SVGWifi } from "./svg/wifi.svg"
import { ReactComponent as SVGDesktop } from "./svg/desktop.svg"
import { ReactComponent as SVGNetwork } from "./svg/network.svg"
import { ReactComponent as SVGWait } from "./svg/wait.svg"

export const SVGTemp = SVGWait
export const categoriesMap = {
  internet_security: { text: "Internet Security", IconComp: SVGWait },
  workplace_security: { text: "Workplace Security", IconComp: SVGWait },
  social_engineering: { text: "Social Engineering", IconComp: SVGWait },
  physical_security: { text: "Physical Security", IconComp: SVGWait },
  passwords: { text: "Passwords", IconComp: SVGKey },
  system_security: { text: "System Security", IconComp: SVGWait },
  regulations: { text: "Regulations", IconComp: SVGWait },
  social_media: { text: "Social Media", IconComp: SVGiPhone },
  url: { text: "URL", IconComp: SVGUrl },
  wifi: { text: "Wifi", IconComp: SVGWifi },
  network: { text: "Network", IconComp: SVGNetwork },
  files: { text: "Files", IconComp: SVGFile },
  ransomware: { text: "Ransomware", IconComp: SVGWallet },
  desk: { text: "Desk", IconComp: SVGDesktop },
}

export default categoriesMap
