import { AboutArea, AboutAreas, AboutContainer, AboutContainerText, AreaIcon, AreaTitle } from './style/styledComponents';
import { MdLightbulbOutline, MdOutlineBugReport, MdLibraryAdd, MdOutlineTimer } from 'react-icons/md';
import { IoMdGitPullRequest } from 'react-icons/io';

import reactIcon from '../../assets/react.svg';

const About = () => {
    return (
        <AboutContainer>
            <h1>Welcome to Admin Console</h1>
            <h2>Technical Interview Project</h2>

            <AboutContainerText>
                This project is designed to help us understand your coding strengths and weaknesses a little bit better.  
                The main areas we will be concentrating on during your technical interview will be:
            </AboutContainerText>

            <AboutAreas>
                <AboutArea>
                    <AreaIcon>
                        <img src={reactIcon} alt="React Icon" />
                    </AreaIcon>
                    <AreaTitle>
                        React <br/> 
                        Proficiency
                    </AreaTitle>
                </AboutArea>
                <AboutArea>
                    <AreaIcon>
                        <MdLightbulbOutline />
                    </AreaIcon>
                    <AreaTitle>
                        Independent <br/> 
                        Thinking
                    </AreaTitle>
                </AboutArea>
                <AboutArea>
                    <AreaIcon>
                        <MdOutlineBugReport />
                    </AreaIcon>
                    <AreaTitle>
                        Resolving <br/> 
                        Bugs
                    </AreaTitle>
                </AboutArea>
                <AboutArea>
                    <AreaIcon>
                        <MdLibraryAdd />
                    </AreaIcon>
                    <AreaTitle>
                        Adding New <br/> 
                        Features
                    </AreaTitle>
                </AboutArea>
                <AboutArea>
                    <AreaIcon>
                        <IoMdGitPullRequest />
                    </AreaIcon>
                    <AreaTitle>
                        Git <br/> 
                        Proficiency
                    </AreaTitle>
                </AboutArea>
                <AboutArea>
                    <AreaIcon>
                        <MdOutlineTimer />
                    </AreaIcon>
                    <AreaTitle>
                        Time <br/> 
                        Management
                    </AreaTitle>
                </AboutArea>
            </AboutAreas>

        </AboutContainer>
    )
}

export default About;