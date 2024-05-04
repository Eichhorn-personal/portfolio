import './assets/css/app.css';

import ProjectsInGithub from './data/ProjectsInGithub';

import Header from './components/Header';
import GithubProjectCard from './components/GithubProjectCard';
import Footer from './components/Footer';

function App() {
    return (
      
        <div>
 
            <Header />

            <div>
            
            <p className='section-title'>
                Projects
            </p>

            <p className='section-body'>
                Projects that I have published to my personal Github account while learning front-end web development,
                as well as automated testing, code snippets, and my resume. Most of the projects are very simple, 
                except for this portfolio site.
                <br /><br />
                Major points/features of this site/app

                <ul>
                    <li>Built with React 18.3.1</li>
                    <li>React-Bootstrap only for base card creation and svg icons</li>
                    <li>Cards dynamically built via JSON data file for content</li>
                    <li>Card layout is responsive</li>
                    <li>Buttons on bottom of cards dynamically build based on data</li>
                    <li>90% styling done in separate css files</li>
                    <li>10% styling done via inline overrides</li>
                </ul>



            </p>

            </div>

            <div className="card-container">

                {ProjectsInGithub.map((project, index) => 
                    <GithubProjectCard key={index} project={project} />
                )}

            </div>

            <Footer />

        </div>
    );
}

export default App;
