import { SafeHtml } from '@angular/platform-browser'
import {
  pricingLession,
  pricingSubscription,
  pricingValid,
} from '@components/icons'

export type mobileFaqsType = {
  question: string
  answer: string
}

export type FeatureSwiperType = {
  id: string
  text: string
  title: string
  content: string
}
export const mobileShowCaseFaq: mobileFaqsType[] = [
  {
    question: 'Is there a free trial?',
    answer:
      'Adipiscing sagittis neque egestas id platea accumsan. Morbi inpa platea urna curabitur habitant pulvinar lacinia neque. Netus gravida amet, aliquam quam turpis aliquet cras. Find aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu nulla pariatur. Sit amet, adipiscing elit.',
  },
  {
    question: 'How do refunds work?',
    answer:
      'Quisque rutrum sit amet magna sit amet tristique. Vivamus rhoncus ac purus vitae convallis. Aliquam erat volutpat. Proin egestas, mauris ut semper semper, ipsum felis mattis ligula, et porttitor ante arcu nec ante. Aliquam congue est eu turpis sollicitudin, et ullamcorper tortor aliquam.',
  },
  {
    question: 'Do you offer student discounts?',
    answer:
      'Proin ac quam eget velit luctus tincidunt vel in nunc. Maecenas cursus erat lacus, id interdum elit accumsan in. Mauris placerat dapibus sem, condimentum interdum nulla varius ac. Mauris quam mauris, rhoncus et tortor vel, tempus dignissim libero. Curabitur sed odio in odio elementum cursus.',
  },
  {
    question: 'What happens if I run out of credit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac pretium dui. Aliquam rutrum justo lorem, in efficitur odio efficitur vel. Integer mattis, neque malesuada sagittis porttitor, enim tortor ullamcorper diam, id eleifend sem mauris at turpis. Curabitur sed nisi nec ligula dictum.',
  },
  {
    question: 'Do you have monthly and yearly billing options?',
    answer:
      'Vestibulum faucibus lectus eget augue pharetra, quis semper lectus gravida. Vestibulum pretium in elit sed iaculis. Curabitur elementum turpis at ipsum molestie, id maximus odio tincidunt. Praesent id lacinia orci. Phasellus at varius arcu. Ut nec lobortis velit.',
  },
  {
    question: 'What happens when I change plans?',
    answer:
      'Nunc non placerat mi, sit amet hendrerit lacus. Quisque cursus lorem vitae placerat ultrices. Morbi ut orci sit amet quam vulputate lobortis. Donec vulputate mi nec nisi tincidunt commodo. Nullam efficitur tincidunt tellus accumsan pellentesque. Suspendisse elementum blandit orci.',
  },
  {
    question: 'How do I cancel my paid plan?',
    answer:
      'Morbi a consequat diam. Fusce sit amet faucibus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id est dictum, suscipit neque id, ornare nibh. Cras lacinia, est non ultrices porttitor, arcu orci rhoncus leo, egestas condimentum lorem.',
  },
]

export const featureSwiper: FeatureSwiperType[] = [
  {
    id: '#image1',
    text: '01',
    title: 'Choose a data plan for your trip',
    content:
      'Select your destination and pick your data plan.',
  },
  {
    id: '#image2',
    text: '02',
    title: 'Download the app and set up your eSIM',
    content:
      'Follow the steps in the app to set up the eSIM on your device.',
  },
  {
    id: '#image3',
    text: '03',
    title: 'Activate your plan before the trip',
    content:
      'Remember to do this before you take off — you’ll need an internet connection.',
  },
]



export type PricingYogaType = {
  icon: any
  text: string
  sanitizedIcon?: SafeHtml
}
export type YogaPricingType = {
  title: string
  description: string
  price: string
  price_per_class: string
}
export const yogaPricing: YogaPricingType[] = [
  {
    title: '4 lessons',
    description: 'Valid for all types of classes',
    price: '40',
    price_per_class: '10 per class',
  },
  {
    title: '8 lessons',
    description: 'Valid for all types of classes',
    price: '72',
    price_per_class: '9 per class',
  },
  {
    title: '16 lessons',
    description: 'Valid for all types of classes',
    price: '120',
    price_per_class: '7 per class',
  },
  {
    title: 'Yoga for pregnant',
    description: 'Valid for all types of classes',
    price: '12',
    price_per_class: 'per class',
  },
]
export const pricingYoga: PricingYogaType[] = [
  {
    icon: pricingLession,
    text: 'lesson duration 90 minutes',
  },
  {
    icon: pricingSubscription,
    text: 'subscription valid for 30 days',
  },
  {
    icon: pricingValid,
    text: 'valid for all types of classes',
  },
]
