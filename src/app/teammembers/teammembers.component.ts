import { Component } from '@angular/core';

@Component({
  selector: 'app-teammembers',
  templateUrl: './teammembers.component.html',
  styleUrls: ['./teammembers.component.scss']
})
export class TeammembersComponent {
  teamMembers = [
  {
    id: 1,
    name: 'Shikhali Vyas',
    role: 'Master of Cyber security',
    description: 'Expert in Agile methodologies and team coordination, ensuring smooth sprint execution and timely delivery of project milestones.',
    imageUrl: 'assets/images/team/shikhali.png',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 2,
    name: 'Jaydeep Bhalodiya',
    role: 'Master of Cyber Security',
    description: 'Specialist in securing digital infrastructures with a focus on penetration testing, network defense, and data protection strategies.',
    imageUrl: 'assets/images/team/jaydeepimgpng.png',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'Manpreet Kaur',
    role: 'Master of IT',
    description: 'Proficient in software development and IT systems integration, ensuring scalable and reliable tech solutions across platforms.',
    imageUrl: 'assets/images/team/manpreetimg.png',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 4,
    name: 'Seshivardhan Goud',
    role: 'Master of Cyber Security',
    description: 'Focused on ethical hacking, risk assessment, and creating robust defense mechanisms against modern cybersecurity threats.',
    imageUrl: 'assets/images/team/seshiverdhanimg.png',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 5,
    name: 'Anmol Aslaliya',
    role: 'Master of Cyber Security',
    description: 'Dedicated to developing secure systems and analyzing vulnerabilities to fortify applications and infrastructure against breaches.',
    imageUrl: 'assets/images/team/Anmolimg.png',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 6,
    name: 'Balasowjanya Bhogadhi',
    role: 'Master of Cyber Security',
    description: 'Cybersecurity analyst with a strong grasp on cryptographic systems, malware analysis, and compliance management.',
    imageUrl: 'assets/images/team/balasoniyaimg.png',
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

}
