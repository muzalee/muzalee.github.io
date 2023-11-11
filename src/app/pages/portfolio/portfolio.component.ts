import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  public projects = [
    {
      name: 'LabLab.ai Stable LM 3B Hackathon',
      desc: 'ProgAssist is a web application developed using NextJS and Shadcn-ui. ProgAssist aspires to redefine the landscape of programming skills by introducing a dynamic and transformative approach to evaluation and enhancement.',
      image: 'assets/images/portfolio/prog-assist.png',
      source: 'https://github.com/ainnaziha/prog-assist',
    },
    {
      name: 'LabLab.ai Legal AI Hackathon',
      desc: 'LawMinds is a mobile application developed using Flutter for the Legai AI Challenge, offering workers easy access to legal consultation. It features a user-friendly chatbot powered by GPT-3.5 and AI12 Labs for natural language understanding, making legal advice accessible on the go.',
      image: 'assets/images/portfolio/legal-ai.webp',
      source: 'https://github.com/muzalee/lawminds',
    },
    {
      name: 'Kedai e-Commerce Website',
      desc: 'Designed with Angular for the frontend and .NET Core for the backend, this eCommerce website incorporates JWT bearer token authentication for securing the backend API and utilizes the Stripe Payment API for a seamless and secure checkout process.',
      image: 'assets/images/portfolio/kedai.png',
      source: 'https://github.com/muzalee/kedai',
    },
    {
      name: 'myEasyProg e-Learning Website',
      desc: 'Created an e-learning website using Laravel, React, and Mantine. It features integration with GPT-3.5 to analyze student compatibility with subjects, providing personalized insights and recommendations.',
      image: 'assets/images/portfolio/myeasyprog.gif',
      source: 'https://myeasyprog.uniten.edu.my',
    }
  ]
}
