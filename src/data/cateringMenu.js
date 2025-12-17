// CATEGORY images only
import birriaTacosImg from '../assets/images/birria-tacos.jpg'
import tacosImg from '../assets/images/tacos.jpg'
import quesadillasImg from '../assets/images/quesadillas.jpg'
import burritosImg from '../assets/images/burritos.jpg'
import wingsImg from '../assets/images/wings.jpg'
import chickenTraysImg from '../assets/images/chicken-trays.jpg'
import chickenTendersImg from '../assets/images/chicken-tenders.jpg'
import familyMealsChickenImg from '../assets/images/family-meals-chicken.jpg'
import familyTenderMealsImg from '../assets/images/family-tender-meals.jpg'

export const cateringMenu = [
  {
    id: 'birria-tacos-10',
    title: 'Birria Tacos (10 Pieces)',
    image: birriaTacosImg,
    items: [
      { name: 'Birria', price: '$34.99' },
      { name: 'Chicken', price: '$34.99' },
      { name: 'Shrimp', price: '$39.99' },
      { name: 'Asada', price: '$34.99' },
    ],
  },
  {
    id: 'tacos-10',
    title: 'Tacos (10 Pieces)',
    image: tacosImg,
    items: [
      { name: 'Ground beef', price: '$29.99' },
      { name: 'Chicken', price: '$29.99' },
      { name: 'Shrimp', price: '$34.99' },
      { name: 'Asada', price: '$34.99' },
    ],
  },
  {
    id: 'quesadillas-10',
    title: 'Quesadillas (10 pcs)',
    image: quesadillasImg,
    items: [
      { name: 'Beef (Asada)', price: '$99.99' },
      { name: 'Chicken (Pollo)', price: '$89.99' },
      { name: 'Shrimp (Camarón)', price: '$99.99' },
      { name: 'Birria', price: '$99.99' },
    ],
  },
  {
    id: 'burritos-10',
    title: 'Burritos (10 pcs)',
    image: burritosImg,
    items: [
      { name: 'Chicken', price: '$89.99' },
      { name: 'Asada / Ground Beef', price: '$109.99' },
      { name: 'Shrimp', price: '$109.99' },
      { name: 'Birria', price: '$119.99' },
    ],
  },
  {
    id: 'wings',
    title: 'Wings',
    image: wingsImg,
    items: [
      { name: '10pc', price: '$14.99' },
      { name: '20pc', price: '$35.99' },
      { name: '30pc', price: '$46.99' },
      { name: '50pc', price: '$65.99' },
    ],
  },
  {
    id: 'chicken-trays',
    title: 'Chicken Trays (Leg, Thigh & Wing)',
    image: chickenTraysImg,
    items: [
      { name: '15 pc', price: '$35.99' },
      { name: '30 pc', price: '$69.99' },
      { name: '50 pc', price: '$119.99' },
    ],
  },
  {
    id: 'chicken-tenders',
    title: 'Chicken Tenders',
    image: chickenTendersImg,
    items: [
      { name: '15 pc', price: '$33.99' },
      { name: '30 pc', price: '$64.99' },
      { name: '50 pc', price: '$95.99' },
    ],
  },
  {
    id: 'family-meals-chicken',
    title: 'Family Meals (Chicken)',
    image: familyMealsChickenImg,
    items: [
      { name: '15 pc chicken + 6 biscuits + Family Wedges', price: '$43.99' },
      { name: '30 pc chicken + 6 biscuits + Family Wedges', price: '$71.99' },
      { name: '50 pc chicken + 6 biscuits + Family Wedges', price: '$108.99' },
    ],
  },
  {
    id: 'family-tender-meals',
    title: 'Family Tender Meals',
    image: familyTenderMealsImg,
    items: [
      { name: '15 pc tenders + 6 biscuits + Family Wedges', price: '$41.99' },
      { name: '30 pc tenders + 6 biscuits + Family Wedges', price: '$.99' },
      { name: '50 pc tenders + 6 biscuits + Family Wedges', price: '$108.99' },
    ],
  },
]
