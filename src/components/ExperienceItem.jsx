// frontend icons
import AstroIcon from "../icons/frontend-stack/Astro";
import CssIcon from "../icons/frontend-stack/Css";
import HtmlIcon from "../icons/frontend-stack/Html";
import NextJSIcon from "../icons/frontend-stack/NextJS";
import ReactIcon from "../icons/frontend-stack/React";
import ReduxIcon from "../icons/frontend-stack/Redux";
import TailwindIcon from "../icons/frontend-stack/Tailwind";
import ReactNativeIcon from "../icons/frontend-stack/ReactNative";
import AndroidIcon from "../icons/frontend-stack/Android";
import TypeScriptIcon from "../icons/frontend-stack/TypeScript";

// backend icons
import DotNetIcon from "../icons/backend-stack/DotNet";
import GitBashIcon from "../icons/backend-stack/GitBash";
import GraphQLIcon from "../icons/backend-stack/GraphQL";
import MongoDBIcon from "../icons/backend-stack/MongoDB";
import JestIcon from "../icons/backend-stack/Jest";
import JavaScriptIcon from "../icons/backend-stack/JavaScript";
import MySqlIcon from "../icons/backend-stack/MySql";
import NodeJSIcon from "../icons/backend-stack/NodeJS";
import SqlIcon from "../icons/backend-stack/Sql";
import AzureDevOpsIcon from "../icons/backend-stack/AzureDevOps";
import ApolloGraphQLIcon from "../icons/backend-stack/ApolloGraphQL";
import LinuxIcon from "../icons/backend-stack/Linux";

const ExperienceItem = (props) => {

  const IconMap = {
    apollo: <ApolloGraphQLIcon size="size-6" />,
    azure: <AzureDevOpsIcon size="size-6" />,
    dotnet: <DotNetIcon size="size-6" />,
    git: <GitBashIcon size="size-6" />,
    graphql: <GraphQLIcon size="size-6" />,
    js: <JavaScriptIcon size="size-6" />,
    jest: <JestIcon size="size-6" />,
    linux: <LinuxIcon size="size-6" />,
    mongo: <MongoDBIcon size="size-6" />,
    mysql: <MySqlIcon size="size-6" />,
    node: <NodeJSIcon size="size-6" />,
    sql: <SqlIcon size="size-6" />,

    android: <AndroidIcon size="size-6" />,
    astro: <AstroIcon size="size-6" />,
    css: <CssIcon size="size-6" />,
    html: <HtmlIcon size="size-6" />,
    nextjs: <NextJSIcon size="size-6" />,
    react: <ReactIcon size="size-6" />,
    rn: <ReactNativeIcon size="size-6" />,
    redux: <ReduxIcon size="size-6" />,
    tailwind: <TailwindIcon size="size-6" />,
    ts: <TypeScriptIcon size="size-6" />,
  };

  return (<>
    <li className="mb-10 ms-4">
      <div
        className="absolute size-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
      >
      </div>
      <h3 className="text-lg font-semibold text-blue-300 dark:text-white">
        {props?.title}
      </h3>
      <h4 className="text-lg font-semibold text-gray-300 dark:text-white">
        {props?.company}
      </h4>
      <time
        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
      >{props?.date}</time>
      <p
        className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-pretty"
      >
        {props?.description}
      </p>
      <div className="flex flex-row flex-wrap gap-6">
        {props.project.map((stack) => {
          const IconComponent = IconMap[stack];
          return IconComponent;
        })}
      </div>
    </li>
  </>
  )
}

export default ExperienceItem
