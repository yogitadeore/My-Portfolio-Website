import pro1 from "../assets/Project1.jpg"
import pro2 from "../assets/Project2.avif"
import pro3 from "../assets/Project3.webp"


const ProjectCardData=
[
    {
        imgsrc: pro1,
        title: "My Portfolio",
        text:"A sleek, responsive portfolio built with React.js to showcase my skills, projects, and resume. Designed with a modern UI/UX and smooth navigation. Features include project previews, contact form, and dynamic routing using React Router",
        view:"http://localhost:3000/project"


    },

    {
        imgsrc: pro2 ,
        title: "QuickCart- E-commerce Website",
        text:"A full-stack e-commerce platform developed using the MERN stack. It includes user authentication, product listings, shopping cart, and secure checkout. Admin panel allows product and order management with real-time updates.",
        view:"http://localhost:3000/project"


    },

    {
        imgsrc: pro3 ,
        title: "LinkUp-Chat App",
        text:"A real-time chat application built with the MERN stack and Socket.io. Supports one-on-one and group messaging with instant message delivery. Features include user authentication, online status, and chat history. You can try it.                           ",
        view:"http://localhost:3000/project"


    }
]

export  default  ProjectCardData; 