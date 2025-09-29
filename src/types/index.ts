export interface User {
  id: string;
  email: string;
  name: string;
  ieee_membership_id: string;
  role: 'member' | 'office_bearer' | 'admin';
  society?: string;
  created_at: string;
  avatar_url?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  society: string;
  created_by: string;
  created_at: string;
  image_url?: string;
  gallery_images?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  society: string;
  bio: string;
  image_url: string;
  email: string;
  linkedin?: string;
  order: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image_url?: string;
  society?: string;
}

export interface Publication {
  id: string;
  title: string;
  description: string;
  type: 'newsletter' | 'research' | 'magazine';
  pdf_url: string;
  cover_image?: string;
  published_date: string;
  society?: string;
}

export interface Society {
  id: string;
  name: string;
  description: string;
  activities: string[];
  image_url: string;
  color: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'event' | 'announcement' | 'achievement';
  created_at: string;
  read: boolean;
}