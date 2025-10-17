// Typy dla danych kontaktowych
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}

// Typy dla przedmiotów korepetycji
export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  levels: string[];
  priceFrom: number;
  link: string;
}

// Typy dla nauczycieli
export interface Teacher {
  id: string;
  name: string;
  photo: string;
  subjects: string[];
  experience: number;
  education: string;
  description: string;
}

// Typy dla opinii
export interface Review {
  id: string;
  name: string;
  photo?: string;
  rating: number;
  comment: string;
  subject: string;
  date: string;
}

// Typy dla formularzy
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: "email" | "phone";
}

export interface BookingForm {
  studentName: string;
  parentName?: string;
  email: string;
  phone: string;
  subject: string;
  level: string;
  preferredTime: string;
  notes?: string;
}

// Typy dla FAQ
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// Typy dla cen
export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  popular?: boolean;
}

// Typy dla sekcji strony
export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  backgroundImage?: string;
}

// Typy nawigacji
export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}
