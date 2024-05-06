import './assets/css/app.css';

import ProjectsInGithub from './data/ProjectsInGithub';

import Header from './components/Header';
import GithubProjectCard from './components/GithubProjectCard';
import PortfolioSiteCard from './components/ReactSiteCard';
import Footer from './components/Footer';

function App() {
    return (
      
        <div>
        
            
            <div>
    
                <Header />

                <div className='section-title'>

                    <PortfolioSiteCard />

                </div>

                <div>
                
                    <p className='section-title'>
                
                        Projects
                
                    </p>

                    <p className='section-body'>
                
                        Projects that I have published to my personal Github account while learning front-end web development,
                        as well as automated testing, code snippets, and my resume. Most of the projects are very simple, 
                        except for this portfolio site.

                    <br />
                    
                    </p>

                </div>
            
                <div className="card-container">

                    {ProjectsInGithub.map((project, index) => 
                        <GithubProjectCard key={index} project={project} />
                    )}

                </div>

                <br /><br />
                
                <Footer />

            </div>

        </div>
    );
}

export default App;
