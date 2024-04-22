
import ExperienceItem from './ExperienceItem';

const experienceData = [
  {
    title: "Software Engineer II - Koerber Supply Chain",
    company: "Jalasoft",
    date: "September 2020 - January 2024",
    description:
      `I've been involved in the development and maintenance of an inventory management web application, utilizing C#,
      TypeScript, and Xbase++. This included adding new features and addressing bug fixes.
      Backend: Developed with C# and OData to efficiently manage inventory data.
      Frontend: Utilized TypeScript, Kendo UI, and Knockout.js to create a user-friendly interface for inventory
      management tasks.
      Additionally, I implemented new transaction features using Xbase++ for picking and packing inventory, enhancing
      the application's functionality, and I ensured robustness through extensive testing and optimization.
      `,
    project: ["azure", "dotnet", "git", "js", "sql", "css", "html", "ts"]
  },
  {
    title: "Software Engineer II - Actio",
    company: "Jalasoft",
    date: "June 2020 - September 2020",
    description:
      `I've contributed to the development of a web application for event management, facilitating knowledge sharing and
      more. My responsibilities included integrating social network login via microservices and creating new forms using
      Formik, as well as addressing bug fixes.
      Backend: Developed with C# and GraphQL, ensuring efficient data handling.
      Frontend: Utilized TypeScript, React, Redux, Material UI, and Apollo Client to create a seamless user experience.
      I've also implemented a comprehensive testing suite, covering integration, unit, and end-to-end tests to ensure the
      application's reliability and performance.`,
    project: ["apollo", "git", "js", "jest", "mongo", "node", "css", "html", "react", "redux", "ts"]
  },
  {
    title: "Software Engineer I - Science Logic",
    company: "Jalasoft",
    date: "August 2019 - May 2020",
    description:
      `I assisted in migrating the web app to capture data from devices like routers and computers. Additionally, I worked
      in adding advanced search features with pill-based data filtering and implemented new queries and mutations in
      the backend to enhance database interactions
      Backend: Developed using JavaScript with Node.js, Express, and GraphQL. We've also integrated integration tests
      and snapshots for robustness.
      Frontend: Developed using React with TypeScript and Redux. and I added unit tests and end-to-end tests to ensure
      reliability and performance.`,
    project: ["git", "graphql", "js", "jest", "linux", "mysql", "node", "css", "html", "react", "redux", "ts"]
  },
  {
    title: "Software Engineer I - Highjump",
    company: "Jalasoft",
    date: "April 2019 - August 2019",
    description:
      `Worked on providing maintenance support for bug fixes and minor enhancements in the project.
      Backend: Developed in C# with OData.
      Frontend: Developed in TypeScript with Kendo UI and Knockout.js.
      Our team ensures prompt resolution of issues and implements small enhancements to optimize the application's
      performance and user experience
      `,
    project: ["dotnet", "git", "js", "sql", "css", "html", "ts"]
  },
  {
    title: "Full Stack Mobile Developer I",
    company: "EPJ",
    date: "June 2020 - January 2022",
    description:
      `I've led the development of a mobile app connecting professionals with job opportunities, featuring real-time push
      notifications. Users could rate performance, manage contacts, and enjoy seamless data updates.
      Frontend: Developed with React Native, Redux, Native Base, and Apollo Client. Backend: Utilized Node.js and
      GraphQL.
      Under my guidance, our testing suite included integration, snapshot, unit, and end-to-end testing to ensure
      reliability and performance throughout the app.`,
    project: ["apollo", "git", "js", "jest", "mongo", "node", "android", "css", "html", "rn", "redux"]
  },
  {
    title: "Full Stack Developer I",
    company: "Fundacion Jala",
    date: "April 2018 - March 2019",
    description:
      `Built a web application for tracking and monitoring teams. I was responsible for developing the frontend integration
      with Slack, creating endpoints, and conducting unit tests and end-to-end (e2e) tests.
      The frontend was developed using React, JavaScript, and Material-UI, with Jest and end-to-end testing ensuring
      robustness.
      The backend was developed usingNode.js and MongoDB, implementing thorough unit testing and test integration
      in JavaScript. This ensures reliability and scalability throughout the development process.`,
    project: ["git", "js", "jest", "linux", "mongo", "node", "css", "html", "react"]
  }
];


const Experience = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-2">
      {
        experienceData.map((experience, index) => (
          <ExperienceItem key={index + experience.title} {...experience} />
        ))
      }
    </ol>
  )
}

export default Experience
