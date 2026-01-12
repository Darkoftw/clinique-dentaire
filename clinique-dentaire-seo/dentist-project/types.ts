
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  stars: number;
  initials: string;
}
