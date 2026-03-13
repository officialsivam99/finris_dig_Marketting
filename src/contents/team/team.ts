
//Team two
import teamImg1 from '../../assets/images/team/team-1-1.png';
// import teamImg2 from '../../assets/images/team/team-1-2.png';
import teamImg3 from '../../assets/images/team/team-1-3.png';
import teamImg4 from '../../assets/images/team/team-1-4.png';
import type { TeamMember } from './teamType';
import teamPageImg1 from "../../assets/images/team/team-page-1-1.jpg";
import teamPageImg2 from "../../assets/images/team/team-page-1-2.jpg";
import teamPageImg3 from "../../assets/images/team/team-page-1-3.jpg";
import teamPageImg4 from "../../assets/images/team/team-page-1-4.jpg";
import teamPageImg5 from "../../assets/images/team/team-page-1-5.jpg";
import teamPageImg6 from "../../assets/images/team/team-page-1-6.jpg";
import teamPageImg7 from "../../assets/images/team/team-page-1-7.jpg";
import teamPageImg8 from "../../assets/images/team/team-page-1-8.jpg";
import teamPageImg9 from "../../assets/images/team/team-page-1-9.jpg";
import teamPageImg10 from "../../assets/images/team/team-page-1-10.jpg";
import teamPageImg11 from "../../assets/images/team/team-page-1-11.jpg";
import teamPageImg12 from "../../assets/images/team/team-page-1-12.jpg";
export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Jessica Miller',
        position: 'Chief Marketing Officer',
        image: teamImg1,
        link: '/team-details',
    },
    // {
    //     id: 2,
    //     name: 'David Thompson',
    //     position: 'Senior Software Engineer',
    //     image: teamImg2,
    //     link: '/team-details',
    // },
    {
        id: 3,
        name: 'Emily Carter',
        position: 'Chief Marketing Officer',
        image: teamImg3,
        link: '/team-details',
    },
    {
        id: 4,
        name: 'Michael Johnson',
        position: 'Sr. Financial Analyst',
        image: teamImg4,
        link: '/team-details',
    },
];

//Team Page



export const teamMembersTeamPage: TeamMember[] = [
  { id: 1, name: "Sarah Mitchell", position: "Marketing Director", image: teamPageImg1, link: "/team-details" },
  { id: 2, name: "James Anderson", position: "Product Manager", image: teamPageImg2, link: "/team-details" },
  { id: 3, name: "Emily Roberts", position: "Sr. Software Engineer", image: teamPageImg3, link: "/team-details" },
  { id: 4, name: "Arif Hossain", position: "Support Specialist", image: teamPageImg4, link: "/team-details" },
  { id: 5, name: "Michael Johnson", position: "Chief Financial Officer", image: teamPageImg5, link: "/team-details" },
  { id: 6, name: "David Warner", position: "HR Manager", image: teamPageImg6, link: "/team-details" },
  { id: 7, name: "Amanda White", position: "Content Creator", image: teamPageImg7, link: "/team-details" },
  { id: 8, name: "Robert Brown", position: "IT Administrator", image: teamPageImg8, link: "/team-details" },
  { id: 9, name: "Toma Olivia", position: "Sales Executive", image: teamPageImg9, link: "/team-details" },
  { id: 10, name: "Daniel Martinez", position: "Data Analyst", image: teamPageImg10, link: "/team-details" },
  { id: 11, name: "Sophia Wilson", position: "Creative Director", image: teamPageImg11, link: "/team-details" },
  { id: 12, name: "David Smith", position: "Lead UX Designer", image: teamPageImg12, link: "/team-details" },
];
