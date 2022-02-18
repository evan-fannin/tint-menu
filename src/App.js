import Menu from "./components/Menu";
import './App.css';
import MainContent from "./components/MainContent";
import { 
  faObjectGroup, 
  faBriefcase, 
  faDiagramProject, 
  faHandshake, 
  faSignal, 
  faWrench, 
  faCode, 
  faSitemap,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons'

export default function App() {

  const links = [
    {
        label: 'Dashboard',
        icon: faSignal,
    },
    {
        label: 'Policies',
        icon: faHandshake,
    },
    {
        label: 'Claims',
        icon: faBriefcase,
    },
    {
        label: 'Insurance Settings',
        icon: faWrench,
        children: [
            {
                label: 'Model Design',
                icon: faDiagramProject,
            },
            {
                label: 'Insurance Product',
                icon: faObjectGroup,
            },
        ],
    },
    {
        label: 'Developer Settings',
        icon: faCode,
        children: [
          {
              label: 'Stack Architecture',
              icon: faSitemap,
          },
          {
              label: 'Codebase',
              icon: faCodeBranch,
          },
      ],
    },
]

  return (
    <div className='background'>
      <div className='display'>
        <Menu links={links}/>
        <MainContent><h1 className='content-div'>Good Content Stuff</h1></MainContent>
      </div>
    </div>
  );
}
