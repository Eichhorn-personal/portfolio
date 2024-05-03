import './assets/css/app.css';

import ProjectsInGithub from './data/ProjectsInGithub';

import Header from './components/Header';
import GithubProjectCard from './components/GithubProjectCard';
import Footer from './components/Footer';

function App() {
    return (
      
        <div>
 
            <Header />

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
