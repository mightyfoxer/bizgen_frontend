export interface DetailInCalendar {
  dateTime: number;
  title: string;
  labelType: number;
  isMeeting?: boolean;
}

export interface LabelColors {
  textColor: string;
  borderColor: string;
  bgColor: string;
}

export interface User {
  id?: string;
  name: string;
  pfp: string;
  joinedAt?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

export interface FacebookContent {
  conceptId: number;
  date: Date;
  content: string;
  user?: User;
  images?: string[];
  rating?: number;
}
