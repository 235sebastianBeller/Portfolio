import { BookText, CodeSquare, HomeIcon, Linkedin,Instagram,Github,Mail} from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/SebastianBeller",
    },
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/235sebastianBeller",
    },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/sebassbeller/",
    },
    {
        id: 4,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:sebastianbeller76@gmail.com",
    },
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Projects",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/projects",
    }

];




export const dataPortfolio = [
    {
        id: 1,
        title: "Pruebas Automatizadas",
        image: "/gmo.png",

        urlGithub: "https://github.com/235sebastianBeller/GreenMountainOutpostAutomationTesting.git",
        urlDemo: "https://drive.google.com/file/d/1c-CWPPV8PAZmjYow6QDWA0LTOqM3jM14/view?usp=sharing",
    },
    {
        id: 2,
        title: "Sistema Academico",
        image: "/sistema-academico.png",

        urlGithub: "https://github.com/235sebastianBeller/FrontEndSistemaAcademico.git",
        urlDemo: "https://frontendsistemaacademico.onrender.com/",
    },
    {
        id: 3,
        title: "Reconocimiento de rostros",
        image: "/image-5.jpg",
        
        urlGithub: "https://github.com/235sebastianBeller/frontendFaceRecognition.git",
        urlDemo: "https://www.canva.com/design/DAGZyDR9bUI/7optBScFDMw_I7DvfPEfpw/edit?utm_content=DAGZyDR9bUI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
        id: 4,
        title: "Puzzle 8",
        image: "/puzzle-8.png",

        urlGithub: "https://github.com/235sebastianBeller/Puzzle-8-AI.git",
        urlDemo: "https://drive.google.com/file/d/1h4WZngskE1VDgoQ9vLo6aT4HeSWESSOF/view?usp=sharing",
    },
    {
        id: 5,
        title: "Proyecto del titanic",
        image: "/titanic.png",
        urlGithub: "https://github.com/235sebastianBeller/Titanic-Survival-Prediction.git",
        urlDemo: "https://github.com/235sebastianBeller/Titanic-Survival-Prediction/blob/main/EDA_%26_prediction/data_analysis_and_prediction_fin.ipynb",
    },
    {
        id: 6,
        title: "Juego de Simon",
        image: "/juego-simon.png",

        urlGithub: "https://github.com/235sebastianBeller/Simon-Game.git",
        urlDemo: "https://235sebastianbeller.github.io/Simon-Game/",
    }
];