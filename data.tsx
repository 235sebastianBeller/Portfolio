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
        image: "/image-1.jpg",
        urlGithub: "https://github.com/235sebastianBeller/GreenMountainOutpostAutomationTesting.git",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Sistema Academico",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/SebasBeller/SistemaAcademicoFront.git",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Reconocimiento de rostros",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/235sebastianBeller/frontendFaceRecognition.git",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Puzzle 8",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Proyecto del titanic",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Juego de Simon",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];