import './Credits.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Credits = () => {
    return <div id="credits">
        <p>
            By
            <a id='github-account' href='https://github.com/MarkelCA'>  
                <FontAwesomeIcon icon={faGithub} /> Markel Cuesta
            </a>

        </p>

        </div>
}

export default Credits

