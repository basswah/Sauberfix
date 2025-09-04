export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface WhatWeDoCardProps {
  title: string;
  icon: string;
  description: string;
}

export interface ServiceCard {
  id: string;
  img: string;
  title: string;
  description: string;
  button: string;
  url: string;
}
