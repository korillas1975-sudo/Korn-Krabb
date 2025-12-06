export interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}