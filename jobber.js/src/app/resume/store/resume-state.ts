import { FluencyLevel } from "../sections/contact-information/fluency-level.enum";
import { Language } from "../sections/contact-information/language.enum";
import { OnlineNetwork } from "../sections/contact-information/online-network.enum";
import { SkillLevel } from "../sections/skills/skill-level.enum";
import { StudyType } from "../sections/education/study-type.enum";
import { getResume, Resume } from "../resume.interface";

export interface ResumeState {
  resume: Resume;
  isEditingName: boolean;
  isEditingLabel: boolean;
  isEditingPicture: boolean;
  isEditingEmail: boolean;
  isEditingPhone: boolean;
  isEditingWebsite: boolean;
  isEditingSummary: boolean;
  isEditingLocation: boolean;
  isEditingProfiles: boolean;
  isEditingLanguages: boolean;
  isEditingWork: boolean;
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
        company: "Apple",
        position: "President",
        website: "https://apple.com",
        startDate: "2013-01-01",
        endDate: "2014-01-01",
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        highlights: ["Started the company"],
      },
      {
        id: 2,
        resume: 1,
        company: "Microsoft",
        position: "CEO/President",
        website: "https://microsoft.com",
        startDate: "2015-02-05",
        endDate: "2018-07-10",
        summary: `Microsoft is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.`,
        highlights: [
          "Build an algorithm for artist to detect if their music was violating copy right infringement laws",
          "Successfully won Techcrunch Disrupt",
          "Optimized an algorithm that holds the current world record for Weisman Scores",
        ],
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
        fluency: FluencyLevel.ELEMENTARY,
      },
      {
        id: 2,
        resume: 1,
        language: Language.SPANISH,
        fluency: FluencyLevel.FULL_PROFESSIONAL_WORKING,
      },
      {
        id: 3,
        resume: 1,
        language: Language.MANDARIN,
        fluency: FluencyLevel.NATIVE,
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
  isEditingName: false,
  isEditingLabel: false,
  isEditingPicture: false,
  isEditingEmail: false,
  isEditingPhone: false,
  isEditingWebsite: false,
  isEditingSummary: false,
  isEditingLocation: false,
  isEditingProfiles: false,
  isEditingLanguages: false,
  isEditingWork: false,
  isLoading: false,
};
