export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
  date: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'James Anderson',
    position: 'Fleet Manager',
    company: 'Atlantic Shipping Co.',
    testimonial: 'Engin Gemi delivered an exceptional vessel design that exceeded our expectations. Their attention to detail and innovative approach has significantly improved our operational efficiency and reduced our environmental footprint.',
    rating: 5,
    date: 'March 2023',
    avatarUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Elena Rodriguez',
    position: 'Technical Director',
    company: 'Global Marine Solutions',
    testimonial: 'Working with Engin Gemi on our hybrid propulsion project was a game-changer. Their expertise in marine engineering and commitment to sustainability resulted in a system that has reduced our fuel costs by 25%.',
    rating: 5,
    date: 'January 2023',
    avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Michael Chen',
    position: 'CEO',
    company: 'Pacific Yacht Builders',
    testimonial: 'The naval architecture work Engin Gemi provided for our luxury yacht line was outstanding. Their designs combine aesthetics with performance in a way that has significantly elevated our brand in the market.',
    rating: 4,
    date: 'November 2022',
    avatarUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    position: 'Operations Manager',
    company: 'NorthSea Energy',
    testimonial: 'Engin Gemi\'s work on our offshore platform stability analysis was thorough and professional. Their recommendations have improved our safety protocols and given us confidence in operating under extreme weather conditions.',
    rating: 5,
    date: 'August 2022',
    avatarUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];