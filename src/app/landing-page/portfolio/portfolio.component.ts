import { Component, Input, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { Project } from '../../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../shared/services/translate-service/translate.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  translateService = inject(TranslateService);
  projects: Project[] = [
    // {
    //   name: 'DABubble',
    //   technologies: 'Angular | Firebase | SCSS | TypeScript',
    //   img_path: 'screenshot_dabubble.png',
    //   description:
    //     'Ein funktionsreicher Messenger, inspiriert von Slack, der durch die Leistungsfähigkeit von Firebase unterstützt wird, um eine sichere Nutzeranmeldung und eine zuverlässige Echtzeit-Datenbank zu gewährleisten.',
    //   description_english:
    //     'A feature-rich messenger inspired by Slack, powered by Firebase to ensure secure user authentication and a reliable real-time database.',
    //   github: 'https://',
    //   project: 'https://',
    // },

    {
      name: 'Join',
      technologies: 'Javascript | HTML | CSS ',
      description:
        'Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      description_english:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign useres and categories.',
      img_path: 'portfolio-join.png',
      github: 'https://github.com/MarcusLoo23/myJoin',
      project: 'https://marcus-loosen.de/join/',
    },
    {
      name: 'El pollo loco',
      technologies: 'Javascript | HTML | CSS',
      description:
        'Ein einfaches Jump-and-Run-Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Salsaflaschen zu finden, um gegen den großen Endboss zu kämpfen.',
      description_english:
        'A simple jump and run game based on an object-oriented approach. Help pepe to find coins and salsa bottles to fight against the big endboss.',
      img_path: 'portfolio-pollo-loco.png',
      github: 'https://github.com/MarcusLoo23/el-pollo-loco',
      project: 'https://marcus-loosen.de/el-pollo-loco/',
    },
  ];
}
