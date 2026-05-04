export interface Section {
  heading: string;
  body: string;
  images?: string[];
  callout?: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  logo?: string;
  oneliner: string;
  pills: string[];
  challenge: string;
  whatIDid: string;
  timeline: string;
  role: string;
  team: string;
  methods: string;
  sections: Section[];
  nextSlug: string;
  nextCompany: string;
  nextOneliner: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ubisoft",
    company: "Ubisoft",
    logo: "/images/UbiLogo.svg",
    oneliner: "Helping Ubisoft players show off their game identity",
    pills: ["UX / UI Design", "Product Design", "User Research"],
    challenge:
      "Ubisoft Connect had a social layer with no identity behind it. Users could add friends, but had no way to signal who they were or find people with similar tastes in games. Research confirmed what players were asking for: a profile that let them express their gaming identity and connect with others on their terms.",
    whatIDid:
      "I led the research and design process from discovery through post-launch iteration. We ran expert interviews, a global survey, card sorting, and co-design workshops before moving into wireframing, prototyping, and usability testing.",
    timeline: "November 2018 – June 2023",
    role: "UX Designer, initiative lead",
    team: "User Researcher — growing to include a Junior Designer, 4 Developers, Scrum Master, and Product Owner",
    methods: "Interviews · Survey · Card sorting · Co-design workshop · Prototyping · Usability testing · Analytics",
    sections: [
      {
        heading: "Expert users and a global survey told us what players wanted from a profile",
        body: "We reached out to expert users first, streamers and community forum moderators, with the help of our community manager. We then ran a survey with users globally to see how important the different features were to a broader audience, and used those results to prioritize what to focus on next.",
        images: ["/images/UbiHeatmap.jpg"],
      },
      {
        heading: "Card sorting turned a long feature list into three clear priorities",
        body: "With a set of prioritized features, we ran a card sorting exercise where we asked users to organize and rank the features that mattered most to them. Three things rose to the top: a space to showcase in-game accomplishments and stats, tools for connecting and playing with friends, and control over their privacy. These became the core of the design.",
        images: ["/images/UbiCardSort.jpg"],
      },
      {
        heading: "Co-designing with users shaped what the profile would feel like",
        body: "Rather than presenting options, we ran co-design workshops with different groups of users. Using printed paper templates, post-its, and pens, we asked them to design their ideal profile together. Three themes came through consistently: expressing their identity as a player, showing their achievements, and having ways to connect with friends. This fed directly into our first wireframes.",
        images: ["/images/UbiSketches.jpg"],
        callout:
          "The co-design work convinced management to fund a full development team and expand scope to PlayStation, Xbox, and mobile, turning what started as a PC feature into a cross-platform product.",
      },
      {
        heading: "A dedicated privacy test answered a question we could not resolve internally",
        body: "As we were wireframing, we found a specific design challenge around privacy that needed more user input. We ran a focused usability test on the privacy design alone. It was received well, and while we got some minor feedback, we felt confident to move forward.",
        images: ["/images/UbiPrivacy.jpg"],
      },
      {
        heading: "A pre-launch usability test gave us confidence to ship",
        body: "As the design was reaching the finish line, we ran a usability test to validate that it achieved what we had set out to do. We tested both the first release and a concept with future additions. Both were appreciated, and with only small fixes needed, we felt ready to go.",
      },
      {
        heading: "The profile quickly became one of Ubisoft Connect's most appreciated features",
        body: "We released first on the PC and console overlay and started gathering analytics and running follow-up interviews. It quickly became one of the most appreciated features on the platform. We later released on the PC desktop client and mobile as well.",
        images: ["/images/UbiScreens.jpg", "/images/UbiConMo.jpg"],
      },
    ],
    nextSlug: "ikea",
    nextCompany: "IKEA",
    nextOneliner:
      "Prototyping AI-assisted tools inside one of the world's most complex retail operations",
  },
  {
    slug: "ikea",
    company: "IKEA",
    logo: "/images/IkeaLogo.svg",
    oneliner:
      "Prototyping AI-assisted tools inside one of the world's most complex retail operations",
    pills: ["UX / UI Design", "Product Design", "User Research", "Service Design"],
    challenge:
      "Inter IKEA needed help with two separate internal challenges. Product development teams had no reliable way to decide which components should become spare parts, and there was no visibility into whether different countries were following centrally recommended guarantee standards.",
    whatIDid:
      "I led the discovery and prototyping across both challenges, running 30 stakeholder interviews, facilitating workshops to define requirements, and building iterative prototypes that were tested and validated. I worked on the spare parts problem from start to finish and stepped in to lead the prototyping for guarantees once the problem was clearly defined.",
    timeline: "April 2025 – April 2026",
    role: "UX Designer",
    team: "Joined over time by a Product Owner, Business Analyst, Solution Architect, Data Scientist, and Data Engineer",
    methods: "Interviews · Stakeholder mapping · User journey mapping · Workshops · Prototyping · A/B testing · Usability testing",
    sections: [
      {
        heading: "Thirty interviews and a journey map showed us where the real friction was",
        body: "I interviewed 30 people across Inter IKEA and related companies, from product developers to customer-facing employees. Being new to the internal organisation, these conversations helped me understand both the pain points and how different departments connected. I mapped the findings into a user journey to visualise the flow of spare parts and data and identify exactly where things broke down.",
        images: ["/images/IkeaJourney.jpg"],
      },
      {
        heading: "Narrowing scope to one upstream decision changed the whole approach",
        body: "The journey map showed the problem was too broad for our small team to address at once. We decided to focus on the moment that mattered most: when engineers decide which components become spare parts. Our hypothesis was that solving this upstream would naturally improve everything that came after.",
        callout:
          "This was also when we decided to explore AI as the core of the solution, using historical performance data to inform recommendations rather than relying on individual judgment.",
      },
      {
        heading: "An A/B test between chat and form gave us a clear answer on adoption",
        body: "I used Figma AI to build a prototype of the decision-making tool. I was unsure about the best way for engineers to input information, so I designed a test comparing two approaches: a conversational chat interface and a traditional structured form. Results were mixed on which users preferred, but they were consistent on one thing: the form would get broader buy-in from colleagues. We moved forward with the form.",
        images: ["/images/IkeaSpareparts.jpg"],
      },
      {
        heading: "For guarantees, iterative rounds of testing resolved the visibility problem",
        body: "While my teammates worked on the guarantees problem, I stepped in to lead the prototyping once they had their requirements. I facilitated workshops to gather what we needed, then built a prototype using IKEA's Skapa design system. We tested and refined through multiple rounds with stakeholders and users, and the final feedback was unanimous: the design addressed the core visibility issues we set out to solve.",
        images: ["/images/IkeaGuarantees.jpg"],
      },
      {
        heading: "Both prototypes are now the foundation for what gets built next",
        body: "My time with IKEA ended before the full rollout, but both workstreams are continuing. A data scientist is building the spare parts recommendation model based on the experience I designed. The guarantees prototype was taken over by other Inter IKEA teams whose platforms align with the scope, and they are using it as the blueprint for the final product.",
      },
    ],
    nextSlug: "arjo",
    nextCompany: "Arjo",
    nextOneliner:
      "Helping Arjo's service technicians understand the problem before they arrive on site",
  },
  {
    slug: "arjo",
    company: "Arjo",
    logo: "/images/ArjoLogo.svg",
    oneliner:
      "Helping Arjo's service technicians understand the problem before they arrive on site",
    pills: ["UX / UI Design", "Product Design", "User Research"],
    challenge:
      "Arjo wanted to find out if they could pull data from their physical products into an online dashboard, giving service technicians better visibility before going out into the field. The question was both technical and practical: would this actually fit how technicians work, across countries with very different setups?",
    whatIDid:
      "I led the design of the dashboard from discovery through testing, working with a developer and architect to build and validate a working prototype. We interviewed technicians across multiple countries and iterated the design based on what we learned.",
    timeline: "February 2024 – June 2024",
    role: "Product Designer",
    team: "Architect, Full-stack developer",
    methods: "Interviews · Prototyping · Usability testing",
    sections: [
      {
        heading: "Talking to technicians across countries showed us similar workflows but very different tools",
        body: "We interviewed 6 service technicians from different countries to map out how they work and what data they need. Their workflows turned out to be similar across the board. The most important thing for everyone was getting as much information as possible about a product before servicing it. Error codes and error history were especially valuable for troubleshooting.\n\nThe bigger finding was around systems. Almost every country used different internal tools for tracking products and service history, with different capabilities. Some technicians wanted the dashboard to replace their current system, others wanted it to integrate with it. On top of that, the software used to extract data from Arjo products was inconsistent across products and often hard to read, so technicians mostly skipped it.",
        images: ["/images/ArjoBedLift.jpg", "/images/ArjoJourney.jpg"],
        callout:
          "The fragmented systems landscape meant the dashboard would need to account for very different needs depending on country, something that would need to be central to any future product decisions.",
      },
      {
        heading: "Testing a coded prototype with the same technicians gave us concrete feedback",
        body: "We designed the dashboard with a focus on how to display content and make it functional quickly. While we worked on the design, the developer built it in parallel using dummy data, giving us something real to put in front of technicians.\n\nWe tested with 5 of the technicians we had spoken to earlier. They clicked through it and reacted to whether the content matched what they actually wanted to see. The feedback was positive on the data itself, they wanted some things prioritized differently and more product history visible. The conversation kept coming back to how the dashboard would fit with the systems they already use. We iterated on the feedback, and when we checked back in they were happy with the changes.",
        images: ["/images/ArjoScreen1.jpg", "/images/ArjoScreen2.jpg"],
      },
      {
        heading: "A working proof of concept gave Arjo the insights to plan their next steps",
        body: "Throughout the project we ran regular demos with Arjo stakeholders to share progress and findings as we went. By the end we had a proof of concept that displayed product data in the dashboard and updated it with real data from a ceiling lift, using a Raspberry Pi prototype built by a partner company.\n\nAlongside the technical proof, we delivered research insights about what technicians need and what problems Arjo will have to solve if they take this to a real product. That gave Arjo a clearer picture of what capabilities the future product would need to meet their users' needs.",
      },
    ],
    nextSlug: "sappi",
    nextCompany: "Sappi",
    nextOneliner:
      "Helping Sappi align on if, and how, to digitise their production planning",
  },
  {
    slug: "sappi",
    company: "Sappi",
    logo: "/images/SappiLogo.svg",
    oneliner:
      "Helping Sappi align on if, and how, to digitise their production planning",
    pills: ["Service Design", "UX / UI Design", "User Research"],
    challenge:
      "Sappi's production planning process was manual and outdated, relying on scattered data that took too much time to work through. They had started building an internal database but needed help aligning stakeholders and users on what a scenario and planning tool should actually do.",
    whatIDid:
      "I facilitated a Google Design Sprint over one week, guiding Sappi through exercises to define their goals, explore solutions, and test a prototype with real users. The aim was to give them a clear direction and concrete insights to take into the next phase.",
    timeline: "January 2026",
    role: "Design Sprint Facilitator",
    team: "Product Designer, Architect",
    methods: "Design Sprint · Expert interviews · Lightning demos · Sketching · Prototyping · Usability testing",
    sections: [
      {
        heading: "Day one grounded us in goals, risks, and the reality of expert users",
        body: "We started by defining the goals, success metrics, and risks of the project. We then interviewed Sappi's expert users to understand their current process and what they actually needed from a tool. Based on that, we mapped out what the big picture experience could look like.",
        images: ["/images/SappiDiscussion.jpg"],
      },
      {
        heading: "Two days of sketching and voting gave us a prototype direction to commit to",
        body: "Tuesday started with lightning demos of relevant solutions from the world. We then ran through a series of sketching exercises, building up to final solution sketches by end of day. On Wednesday we discussed and voted on which direction to take, landing on a merge of two sketches. That became the storyboard we used to plan the prototype.",
        images: ["/images/SappiSketching.jpg", "/images/SappiFlow.jpg"],
      },
      {
        heading: "Testing showed users were aligned on needing the tool, but not yet on what it should do",
        body: "On Friday we tested the prototype with users. The feedback made clear that even though we were heading in the right direction, users had quite different ideas about what they actually wanted once they could see something concrete. Sappi decided they still needed the tool, but that they first needed to align internally on what the core requirements should be.",
        images: ["/images/SappiScreen.png"],
      },
      {
        heading: "The sprint gave Sappi a clear roadmap and the user insights to move forward with confidence",
        body: "Throughout the week Sappi got a more concrete understanding of their internal needs. The sprint did not produce a final solution, but it gave them the direction, the open questions, and the user insights needed to make informed decisions about what to build next.",
      },
    ],
    nextSlug: "ubisoft",
    nextCompany: "Ubisoft",
    nextOneliner: "Helping Ubisoft players show off their game identity",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
