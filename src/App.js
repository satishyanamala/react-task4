import { useState } from "react";
import './App.css';
import Header from "./Components/Header";
import ProjectItem from "./Components/ProjectItem"; 
import { v4 as uuidv4 } from 'uuid';
import TabItem from "./Components/TabItem";

const tabsList = [
  { tabId: 'STATIC', displayText: 'Static' },
  { tabId: 'RESPONSIVE', displayText: 'Responsive' }, 
  { tabId: 'DYNAMIC', displayText: 'Dynamic' } 
];

const projectsList = [
  {
    projectId: uuidv4(),
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: uuidv4(),
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: uuidv4(),
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: uuidv4(),
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: uuidv4(),
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: uuidv4(),
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },
  {
    projectId: uuidv4(),
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: uuidv4(),
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: uuidv4(),
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
];

function App() {
  const [activeTabId, setActiveTabId] = useState(tabsList[0].tabId); 
  const [projects, setProjects] = useState(projectsList);

  const onChangeTab = (tabId) => { 
    setActiveTabId(tabId);
  };

  const filteredProjects = projects.filter((project) => activeTabId === project.category); 
  console.log(projects);

  return (
    <div>
      <Header />
      <div className="mt-5 text-center">
        <h1 className="text-primary">Projects</h1>
        <p className="text-warning">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>
        <ul className="list mb-5">
          {tabsList.map((tab) => (
            <TabItem
              tab={tab}
              key={tab.tabId}
              onChangeTab={onChangeTab}
              activeTabId={activeTabId}
            />
          ))}
        </ul>
        <ul className="list">
          {filteredProjects.map((project) => (
            <ProjectItem
              project={project}
              key={project.projectId}
              activeTabId={activeTabId}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
