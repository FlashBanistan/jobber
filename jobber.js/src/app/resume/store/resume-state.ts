import { FluencyLevel } from "../enums/fluency-level.enum";
import { Language } from "../enums/language.enum";
import { OnlineNetwork } from "../enums/online-network.enum";
import { SkillLevel } from "../enums/skill-level.enum";
import { StudyType } from "../enums/study-type.enum";
import { getResume, Resume } from "../interfaces/resume.interface";

export interface ResumeState {
  resume: Resume;
  isEditingSummary: boolean;
  isLoading: boolean;
}

export const initialResumeState: ResumeState = {
  resume: {
    ...getResume(),
    basics: {
      id: 1,
      resume: 1,
      name: "John Doe",
      label: "Programmer",
      picture: "",
      email: "john@gmail.com",
      phone: "(912) 555-4321",
      website: "http://johndoe.com",
      summary: "A summary of John Doe...",
      location: {
        address: "2712 Broadway St",
        postalCode: "CA 94115",
        city: "San Francisco",
        countryCode: "US",
        region: "California",
      },
      profiles: [
        {
          id: 1,
          resume: 1,
          network: OnlineNetwork.TWITTER,
          username: "john",
          url: "http://twitter.com/john",
        },
      ],
    },
    work: [
      {
        id: 1,
        resume: 1,
        company: "Company",
        position: "President",
        website: "http://company.com",
        startDate: "2013-01-01",
        endDate: "2014-01-01",
        summary: "Description...",
        highlights: ["Started the company"],
      },
    ],
    volunteer: [
      {
        id: 1,
        resume: 1,
        organization: "Organization",
        position: "Volunteer",
        website: "http://organization.com/",
        startDate: "2012-01-01",
        endDate: "2013-01-01",
        summary: "Description...",
        highlights: ["Awarded 'Volunteer of the Month'"],
      },
    ],
    education: [
      {
        id: 1,
        resume: 1,
        institution: "University",
        area: "Software Development",
        studyType: StudyType.BACHELOR,
        startDate: "2011-01-01",
        endDate: "2013-01-01",
        gpa: "4.0",
        courses: ["DB1101 - Basic SQL"],
      },
    ],
    awards: [
      {
        id: 1,
        resume: 1,
        title: "Award",
        date: "2014-11-01",
        awarder: "Company",
        summary: "There is no spoon.",
      },
    ],
    publications: [
      {
        id: 1,
        resume: 1,
        name: "Publication",
        publisher: "Company",
        releaseDate: "2014-10-01",
        website: "http://publication.com",
        summary: "Description...",
      },
    ],
    skills: [
      {
        id: 1,
        resume: 1,
        name: "Web Development",
        level: SkillLevel.EXPERT,
        keywords: ["HTML", "CSS", "Javascript"],
      },
    ],
    languages: [
      {
        id: 1,
        resume: 1,
        language: Language.ENGLISH,
        fluency: FluencyLevel.SUPERIOR,
      },
    ],
    interests: [
      {
        name: "Wildlife",
        keywords: ["Ferrets", "Unicorns"],
      },
    ],
    references: [
      {
        name: "Jane Doe",
        reference: "Reference...",
      },
    ],
  },
  isEditingSummary: false,
  isLoading: false,
};
