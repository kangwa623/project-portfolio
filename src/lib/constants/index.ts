import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import XIcon from '@/components/ui/icons/x.astro'
import GithubIcon from '@/components/ui/icons/github.astro'

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "News",
    href: "/articles",
  },
  {
    label: "Projects",
    href: "/projects",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Github',
    icon: GithubIcon,
    url: "https://github.com/kangwa623",
  },
  {
    name: 'Linkedin',
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/kmukuka",
  },
  {
    name: 'X',
    icon: XIcon,
    url: "https://x.com/kangwamukuka623",
  },
];