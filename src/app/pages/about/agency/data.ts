import { SafeHtml } from '@angular/platform-browser'
import {
  businessCopywriting,
  communication,
  emailMarketing,
  marketShares,
  marketingBranding,
  strategDevelopment,
} from '@components/icons'

export type StepType = {
  stepNumber: string
  stepTitle: string
  stepDescription: string
}
export type ServiceType = {
  description: string
  title: string
  icon: any
  sanitizedIcon?: SafeHtml
}
export type WebStudioFaqType = {
  title: string
  content: string
  imageId: string
}
export type PortfolioType = {
  id: number
  image: string
  description: string
  category: string
  title: string
}

export const portfolioList: PortfolioType[] = [
  {
    id: 1,
    image: 'https://saily.com/_next/image/?url=https%3A%2F%2Fsb.nordcdn.com%2Fm%2F4d4368196ceb08e7%2Foriginal%2Fplane-sky-phone-app.png&w=750&q=75',
    category: '',
    title: 'What is Saily?',
    description:
      'Saily is a global eSIM service for travelers who want to stay connected on their trips. It offers hundreds of flexible travel data plans in over 150 countries, quick setup and 24/7 chat support. Get your travel data sorted with Saily — and enjoy smooth, safe, and reliable internet access while you’re away.',
  },
  {
    id: 2,
    image: 'https://saily.com/_next/image/?url=https%3A%2F%2Fsb.nordcdn.com%2Fm%2F309592bd7302bf30%2Foriginal%2Fpeople-team-nord-security.png&w=750&q=75',
    category: ' ',
    title: 'Created by Nord Security',
    description:
      'Saily was created by Nord Security, the company behind one of the world’s most popular digital privacy tools, NordVPN. Believe it or not, eSIMs aren’t that different from VPNs. Both are designed to give people a reliable connection, especially away from home. So, while a VPN protects your privacy on different networks, an eSIM gives you a secure and reliable internet connection when you travel.' },
  
]

export const webStudioFaqs: WebStudioFaqType[] = [
  {
    title: 'Finance and insurance',
    content:
      'Sit purus platea nunc semper auctor integer semper et ac odio eget a lacus eu duis ante sed molestie varius tempus gravida libero pretium sit etiam morbi orci et vestibulum velit.',
    imageId: 'finance-img',
  },
  {
    title: 'Startup and technology',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere finibus dui, eget scelerisque ipsum suscipit nec. Praesent nec quam in ipsum ultricies ultricies et sagittis dui.',
    imageId: 'tech-img',
  },
  {
    title: 'Medicine and beauty',
    content:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris tincidunt imperdiet hendrerit. Fusce tortor turpis, facilisis ac efficitur eget.',
    imageId: 'medicine-img',
  },
  {
    title: 'E-commerce',
    content:
      'Curabitur dictum sodales aliquam. Etiam tortor augue, ultrices in efficitur sit amet, luctus dapibus magna. Vivamus eu lacus elementum, ultrices massa vitae, elementum lorem.',
    imageId: 'ecommerce-img',
  },
]

export type TeamType = {
  name: string
  role: string
  image: string
  socialMedia: string[]
}

export type ProfessionalMissionType = {
  title: string
  content: string
  icon: any
  sanitizedIcon?: SafeHtml
}

export type LocationType = {
  imageSrc: string
  maxWidth: string
  alt: string
}

export type SwiperType = {
  bindedTo: string
  content: string
}

export type TestimonialSwiperType = {
  id: string
  imageSrc: string
  name: string
  role: string
}

export const stepsToSuccess: StepType[] = [
  {
    stepNumber: '01',
    stepTitle: 'Formulation of the problem',
    stepDescription:
      'Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat nulla pariatur am luctus.',
  },
  {
    stepNumber: '02',
    stepTitle: 'Assessment of the current state',
    stepDescription:
      'Risus quam quis at euismod vitae dui elementu eu in diam malesuada mattis ut urna integer erat nisi nibh.',
  },
  {
    stepNumber: '03',
    stepTitle: 'Business plan creation',
    stepDescription:
      'A sagittis morbi massa venenatis, egestas viverra ac elit nibh tellus nisi in nec tellus mauris feugiat gravida.',
  },
  {
    stepNumber: '04',
    stepTitle: 'Strategy implementation',
    stepDescription:
      'Elementum purus, nisl ipsum sit. Amet sit praesent proin sit cras. Leo sed praesent nunc vel nec risus.',
  },
]

export const teamData: TeamType[] = [
  {
    name: 'Jane Cooper',
    role: 'Head of PR department',
    image: 'assets/img/landing/corporate/team/03.jpg',
    socialMedia: ['instagram', 'facebook', 'linkedin'],
  },
  {
    name: 'Guy Hawkins',
    role: 'Head of marketing',
    image: 'assets/img/landing/corporate/team/01.jpg',
    socialMedia: ['facebook', 'x', 'linkedin'],
  },
  {
    name: 'Martha Winter',
    role: 'Data analyst',
    image: 'assets/img/landing/corporate/team/02.jpg',
    socialMedia: ['instagram', 'facebook', 'linkedin'],
  },
  {
    name: 'Robert Fox',
    role: 'CTO',
    image: 'assets/img/landing/corporate/team/05.jpg',
    socialMedia: ['facebook', 'x', 'stack-overflow'],
  },
  {
    name: 'Michelle Yang',
    role: 'CEO, Founder',
    image: 'assets/img/landing/corporate/team/06.jpg',
    socialMedia: ['instagram', 'facebook', 'linkedin'],
  },
  {
    name: 'Albert Flores',
    role: 'Art director',
    image: 'assets/img/landing/corporate/team/04.jpg',
    socialMedia: ['facebook', 'behance', 'dribbble'],
  },
]

export const testimonialSwiperData: SwiperType[] = [
  {
    content:
      '“Around provides us with the detailed and accurate data we need to make strategic decisions. All tools are constantly being improved and contain a lot of useful and interesting information. Thanks to Around, we can constantly analyze our big data quickly and efficiently.”',
    bindedTo: '#author1',
  },
  {
    content:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac pretium dui. Aliquam rutrum justo lorem, in efficitur odio efficitur vel. Integer mattis, neque malesuada sagittis porttitor, enim tortor ullamcorper diam, id eleifend sem mauris at turpis. Curabitur sed nisi nec ligula dictum maximus eu ut ante.”',
    bindedTo: '#author2',
  },
  {
    content:
      '“Quisque rutrum sit amet magna sit amet tristique. Vivamus rhoncus ac purus vitae convallis. Aliquam erat volutpat. Proin egestas, mauris ut semper semper, ipsum felis mattis ligula, et porttitor ante arcu nec ante. Aliquam congue est eu turpis sollicitudin, et ullamcorper tortor aliquam.”',
    bindedTo: '#author3',
  },
  {
    content:
      '“Vestibulum faucibus lectus eget augue pharetra, quis semper lectus gravida. Vestibulum pretium in elit sed iaculis. Curabitur elementum turpis at ipsum molestie, id maximus odio tincidunt. Praesent id lacinia orci. Phasellus at varius arcu. Ut nec lobortis velit. Mauris vel risus quis lacus placerat fringilla.”',
    bindedTo: '#author4',
  },
]

export const servicesData: ServiceType[] = [
  {
    title: 'Market shares analysis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie massa. Donec egestas ex et velit egestas dignissim. Sed fringilla velit turpis.',
    icon: marketShares,
  },
  {
    title: 'Marketing and branding',
    description:
      'Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor do amet sint velit officia.',
    icon: marketingBranding,
  },
  {
    title: 'Strategy development',
    description:
      'More erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor non aute irure dolor in reprehenderit in.',
    icon: strategDevelopment,
  },
  {
    title: 'Email marketing',
    description:
      'Adipiscing posuere dui, amet, augue nisl dictum justo enier sed neque congue non quam ultrices interdum vitae vestibulumaute irure dolor in reprehenderit in.',
    icon: emailMarketing,
  },
  {
    title: 'Working on communication',
    description:
      'Ut eu amet ac blandit nisl malesuada lectus viverra arcu in rhoncus egestas lorem consequat sollicitudin risus, in pellentesque tellus tincidunt purus viverra dignissim.',
    icon: communication,
  },
  {
    title: 'Business copywriting',
    description:
      'Massa morbi duis et ornare urna dictum vestibulum pulvinar nunc facilisis ornare id at at ut arcu integer tristique placerat non turpis nibh turpis ullamcorper est porttitor.',
    icon: businessCopywriting,
  },
]

export const professionalMissionData: ProfessionalMissionType[] = [
  {
    title: 'Individual approach',
    content:
      'Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua dolor.',
    icon: businessCopywriting,
  },
  {
    title: 'Integrated analytics',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie massa. Donec egestas nulla pariatur.',
    icon: marketShares,
  },
  {
    title: 'Step by step work',
    content:
      'More erat leo proin odio est sed sit felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor.',
    icon: strategDevelopment,
  },
]

export const locationData: LocationType[] = [
  {
    imageSrc: 'assets/img/about/agency/gallery/01.jpg',
    maxWidth: '416px',
    alt: 'Gallery image #1',
  },
  {
    imageSrc: 'assets/img/about/agency/gallery/02.jpg',
    maxWidth: '526px',
    alt: 'Gallery image #2',
  },
  {
    imageSrc: 'assets/img/about/agency/gallery/03.jpg',
    maxWidth: '306px',
    alt: 'Gallery image #3',
  },
  {
    imageSrc: 'assets/img/about/agency/gallery/04.jpg',
    maxWidth: '367px',
    alt: 'Gallery image #4',
  },
  {
    imageSrc: 'assets/img/about/agency/gallery/05.jpg',
    maxWidth: '526px',
    alt: 'Gallery image #5',
  },
  {
    imageSrc: 'assets/img/about/agency/gallery/06.jpg',
    maxWidth: '416px',
    alt: 'Gallery image #6',
  },
]

export const testimonialSwiper: TestimonialSwiperType[] = [
  {
    id: 'author1',
    imageSrc: 'assets/img/avatar/21.jpg',
    name: 'Lilianna Bocouse',
    role: 'Head of Marketing',
  },
  {
    id: 'author2',
    imageSrc: 'assets/img/avatar/33.jpg',
    name: 'Darell Steward',
    role: 'Project Manager',
  },
  {
    id: 'author3',
    imageSrc: 'assets/img/avatar/34.jpg',
    name: 'Annette Black',
    role: 'Lead Designer',
  },
  {
    id: 'author4',
    imageSrc: 'assets/img/avatar/35.jpg',
    name: 'Ralph Edwards',
    role: 'CEO, Co-Founder',
  },
]
