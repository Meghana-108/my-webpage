import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// import { FaPalette } from "react-icons/fa";
// import { FaMagic } from "react-icons/fa";
import milletImg from "./assets/milletconnect.png"; // adjust if file is in another folder
import letterGenImg from "./assets/image.png"; 
import secureshareImg from "./assets/secureshare.png"; 
import portfImg from "./assets/portfolio-img.png";
import ideaBox from "./assets/idea-box.png"; 
import priceImg from "./assets/price-comp.png"; 
import flashImg from "./assets/FlashGenius.png"; 
import { FiChevronDown, FiChevronUp } from "react-icons/fi";


import SplitText from "./components/SplitText";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnim from "./lottie/heroAnimation.json";


const getAllProjects = () => ([
  {
    title: "Millet Connect",
    tech: ["React.js", "Node.js", "tailwindcss", "SQL"],
    date: "Aug 2024",
    img: milletImg,
    github: "https://github.com/yourusername/millet-connect",
    points: [
      "Developed a millet awareness platform with detection, health tracking, and recipe recommendations.",
      "Integrated millet identification using camera input, image upload, and text-based search.",
      "Designed a responsive web interface with React and Tailwind CSS for smooth user experience.",
      "Built RESTful APIs with Node.js and MySQL to manage user data and personalized suggestions."
    ]
  },
  {
    title: "Letter Generator App",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "SQL"],
    date: "Dec 2024",
    img: letterGenImg,
    github: "https://github.com/yourusername/letter-generator",
    points: [
      "Built a web app to generate personalized letters like invitations, leave requests, and birthday wishes.",
      "Implemented secure user authentication and session handling for personalized letter management.",
      "Developed RESTful APIs using Node.js and Express, with MySQL for storing user and letter data.",
      "Designed a clean and responsive UI using HTML and CSS for seamless letter creation and download."
    ]
  },
  {
    title: "Secure Text Sharing",
    tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    date: "May 2025",
    img: secureshareImg,
    github: "https://github.com/yourusername/secure-text-sharing",
    points: [
      "Built a secure web app to share text messages using a unique 6-digit passkey system.",
      "Implemented sender/receiver flows to store and retrieve messages through REST APIs.",
      "Used MongoDB for backend data storage and ‘localStorage’ for frontend session management.",
      "Designed a clean and responsive UI using React and custom CSS."
    ]
  
  }
    ,{
    title: "Portfolio Website",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    date: "July 2025",
    img: portfImg,
    github: "https://github.com/Meghana-108/my-webpage.git",
    points: [
      "Designed and developed a personal portfolio website with animations using Framer Motion.",
      "Showcases education, projects, contact form, and technical skills with themed UI.",
      "Implemented responsive layouts and custom interactive project cards."
    ]
  },
  {
    title: "Community Idea Box",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    date: "June 2025",
    img: ideaBox,
    github: "https://github.com/Meghana-108/community-idea-box.git",
    points: [
      "Built a public idea submission platform with authentication and admin approval system.",
      "Users can post, upvote, and browse ideas by category with role-based access.",
      "Used Supabase for authentication and real-time database management."
    ]
  },
  {
  title: "FlashGenius",
  tech: ["Next.js", "TypeScript", "Google Gemini API", "Tailwind CSS"],
  date: "December 2025",
  img: flashImg,
  github: "https://github.com/Meghana-108/FlashGenius.git",
  points: [
    "Developed an AI-powered educational platform using Next.js that generates custom flashcards based on user-searched topics via Gemini API.",
    "Engineered robust TypeScript interfaces to ensure type-safe handling of structured JSON data returned from LLM prompts.",
    "Integrated Tailwind CSS for a responsive, interactive UI including 'flip-card' animations and dynamic result rendering.",
    "Optimized the user experience by implementing AI-driven prompt engineering to deliver high-accuracy study materials instantly."
  ]
},
  {
    title: "Price Comparison App",
    tech: ["React", "Rapid API", "Tailwind CSS"],
    date: "July 2025",
    img: priceImg,
    github: "https://github.com/SameekshaMenda/SmartPrice.git",
    points: [
      "Developed a tool to compare product prices across multiple e-commerce platforms.",
      "Implemented barcode/image-based product search using third-party APIs.",
      "Designed clean UI and integrated dynamic result rendering with filtering options."
    ]
  }
]);



export default function App() {
  const [visibleCount, setVisibleCount] = useState(3);
  const allProjects = getAllProjects();
  const showAll = visibleCount >= allProjects.length;
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    const data = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      message: formRef.current.message.value
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setIsSent(true);
        formRef.current.reset();
        setTimeout(() => setIsSent(false), 5000);
      } else {
        try {
          const error = await res.json();
          alert("Failed to send email: " + error.message);
        } catch (jsonError) {
          // If the response is not JSON, display the raw text
          const errorText = await res.text();
          alert("Failed to send email: " + errorText);
        }
      }
    } catch (err) {
      alert("Something went wrong!");
    }
  };





  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* 🔮 Smoky Animated Background Blobs */}
{/* 🔮 Smoky Purple Background Blobs */}
<div className="absolute top-[80px] left-[-30px] w-[400px] h-[400px] bg-purple-electric opacity-15 blur-[120px] rounded-full pointer-events-none z-0 animate-float-slow" />
<div className="absolute top-[560px] left-[720px] w-[200px] h-[200px] bg-purple-electric opacity-25 blur-[120px] rounded-full pointer-events-none z-0 animate-float-slow" />
<div className="absolute top-[150px] right-[-40px] w-[300px] h-[300px] bg-purple-electric opacity-25 blur-[120px] rounded-full pointer-events-none z-0 animate-float-slow" />
<div className="absolute bottom-[-100px] right-[5%] w-[320px] h-[320px] bg-purple-royal opacity-15 blur-[150px] rounded-full pointer-events-none z-0 animate-ping" />

      {/* 🔗 Navbar */}
          {/* 🔮 Smoky Animated Background Blobs */}
{/* 🔮 Smoky Purple Background Blobs */}
{/* <div className="absolute top-[520px] left-[-70px] w-[400px] h-[400px] bg-purple-electric opacity-15 blur-[120px] rounded-full pointer-events-none z-0 animate-float-slow" /> */}
{/* <div className="absolute top-[50px] left-[20px] w-[200px] h-[200px] bg-purple-electric opacity-15 blur-[120px] rounded-full pointer-events-none z-0 animate-float-slow" /> */}
{/* <div className="absolute top-[150px] right-[40px] w-[300px] h-[300px] bg-purple-electric opacity-15 blur-[120px] rounded-full pointer-events-none z-0 animate-float-slow" /> */}
{/* <div className="absolute bottom-[-90px] right-[5%] w-[320px] h-[320px] bg-purple-royal opacity-15 blur-[150px] rounded-full pointer-events-none z-0 animate-ping" /> */}

      {/* 🔗 Navbar */}
     <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md flex justify-between items-center px-10 py-3">
  <div className="text-2xl font-semibold tracking-wide">🐘</div>
  {/* <div className="flex gap-6 text-2xl">
    <FaMagic className="hover:text-orange-soft" />
    <FaPalette className="hover:text-orange-soft" />
  </div> */}
</header>

      {/* 👋 Hero Section */}
      <main className="pt-32 flex flex-col-reverse md:flex-row items-center justify-center px-6 py-28 max-w-6xl mx-auto gap-16 min-h-[110vh] relative z-10">
        <div className="md:w-1/2 text-center md:text-left">
          <SplitText
            text="Hey, it's Meghana 🙏🏻"
            className="text-3xl md:text-5xl font-bold mb-6"
            splitType="words"
            delay={60}
          />
          <p className="text-gray-300 text-lg md:text-xl mb-10">
            I love crafting smooth digital experiences with clean code & creative UI.
          </p>
       <a 
  href="/Meghana_Resume.pdf" 
  download="Meghana_Resume.pdf"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border-2 border-purple-electric text-white hover:bg-purple-electric/10 hover:shadow-[0_0_15px_#610094] transition text-sm md:text-base"
>
  <span>Resume</span>
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
  </svg>
</a>
        </div>

        {/* Right Photo Placeholder */}
        <div className="md:w-1/2 flex justify-center">
       <div className="md:w-1/2 flex justify-center">
  <Lottie animationData={heroAnim} loop={true} className="w-[300px] h-[300px]" />
</div>
        </div>
      </main>

      {/* 🎓 Education Section */}
      <section className="px-6 py-24 max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-14 text-center">Education</h2>

        <div className="space-y-12">
          {[
            {
              title: "Sahyadri College of Engineering and Management",
              location: "Mangaluru, Karnataka",
              degree: "B.E. in Computer Science and Engineering",
              grade: "CGPA: 9.48",
              year: "2022 – Present",
            },
            {
              title: "Dandathirtha Pre-University College",
              location: "Kapu, Udupi, Karnataka",
              degree: "12th Board - Science, PCMB",
              grade: "Percentage: 96%",
              year: "2020 – 2022",
            },
            {
              title: "Dandathirtha English Medium School",
              location: "Kapu, Udupi, Karnataka",
              degree: "10th Grade",
              grade: "Percentage: 95.33%",
              year: "2010 – 2020",
            },
          ].map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="border-l-4 border-purple-electric pl-8 py-6 bg-white/5 backdrop-blur-sm rounded-lg"
            >
              <h3 className="text-xl md:text-2xl font-semibold">{edu.title}</h3>
              <p className="text-sm md:text-base text-gray-400 mb-1">{edu.location}</p>
              <p className="text-base md:text-lg text-white">{edu.degree}</p>
              <p className="text-sm text-gray-300">{edu.grade}</p>
              <p className="text-xs text-gray-500 mt-1">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚡️ Tech Stack */}
      <section className="px-6 py-20 max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center text-sm">
          {[
  { name: "C++", img: "https://img.icons8.com/color/48/c-plus-plus-logo.png" },
  { name: "Python", img: "https://img.icons8.com/color/48/python.png" },
  { name: "JavaScript", img: "https://img.icons8.com/color/48/javascript.png" },
  { name: "HTML", img: "https://img.icons8.com/color/48/html-5.png" },
  { name: "CSS", img: "https://img.icons8.com/color/48/css3.png" },
  { name: "React", img: "https://img.icons8.com/officel/48/react.png" },
  { name: "Node.js", img: "https://img.icons8.com/color/48/nodejs.png" },
  // { name: "Express.js", img: "https://img.icons8.com/ios-filled/50/ffffff/express-js.png" },
  { name: "Flask", img: "https://img.icons8.com/ios-filled/50/ffffff/flask.png" },
  { name: "Tailwind", img: "https://img.icons8.com/color/48/tailwind_css.png" },
  { name: "Bootstrap", img: "https://img.icons8.com/color/48/bootstrap.png" },
  { name: "MongoDB", img: "https://img.icons8.com/color/48/mongodb.png" },
  { name: "MySQL", img: "https://img.icons8.com/fluency/48/mysql-logo.png" },
].map((tech, i) => (
  <motion.div
    key={i}
    whileHover={{ scale: 1.08 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex flex-col items-center justify-center w-24 h-24 p-2 border border-purple-electric rounded-md bg-white/5 backdrop-blur-sm hover:shadow-[0_0_15px_#610094] transition duration-300 ease-out"
  >
    <img src={tech.img} alt={tech.name} className="w-8 h-8 mb-1" />
    <span className="text-xs text-center">{tech.name}</span>
  </motion.div>
))}

        </div>
      </section>
  <section className="px-6 py-28 max-w-6xl mx-auto relative z-10 overflow-hidden">
        <div className="absolute top-[12%] left-[8%] w-[250px] h-[250px] bg-purple-electric opacity-25 blur-[120px] rounded-full animate-pulse pointer-events-none z-0" />
        <div className="absolute top-[30%] right-[15%] w-[300px] h-[300px] bg-purple-royal opacity-20 blur-[110px] rounded-full animate-ping pointer-events-none z-0" />
        <div className="absolute bottom-[20%] left-[30%] w-[220px] h-[220px] bg-purple-electric opacity-30 blur-[100px] rounded-full animate-float pointer-events-none z-0" />

        <h2 className="text-4xl font-bold mb-16 text-center relative z-10">Projects</h2>
        <div className="space-y-24 relative z-10">
          {allProjects.slice(0, visibleCount).map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`group flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16 mb-12 bg-white/5 p-10 rounded-lg transition duration-500 hover:bg-purple-electric/10 hover:shadow-[0_0_20px_#610094]`}
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full md:w-[380px] h-[230px] object-cover rounded-lg shadow-md"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">{proj.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">{proj.date}</span>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-purple-electric hover:text-purple-royal text-lg" />
                    </a>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm mb-6">
                  {proj.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {proj.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1 rounded-md border-2 border-purple-electric text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Show More */}
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount(showAll ? 3 : allProjects.length)}
              className="text-white font-semibold hover:text-purple-electric transition text-xl"
            >
              {showAll ? "Show Less" : "View More Projects"}
              <div className="flex justify-center mt-2">
                {showAll ? (
                  <FiChevronUp className="text-4xl text-purple-electric animate-bounce" />
                ) : (
                  <FiChevronDown className="text-4xl text-purple-electric animate-bounce" />
                )}
              </div>
            </button>
          </div>
        </div>
      </section>

  
 <section className="px-6 py-28 max-w-5xl mx-auto relative z-10 overflow-hidden text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-md border border-purple-electric rounded-xl px-8 py-12"
      >
        <h2 className="text-4xl font-bold text-center mb-4">Hey there!</h2>
        <p className="text-center text-gray-300 mb-10">
          Got a project in mind? Want to collaborate? Or just want to say hi?
          <br />
          Drop me a message and I'll get back to you as soon as possible!
        </p>

        {/* 🔗 Contact Links */}
        <div className="flex justify-center gap-12 text-sm mb-12">
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-3 rounded-lg mb-1 text-xl">
              <FaEnvelope />
            </div>
            <p className="font-semibold">Email</p>
            <p className="text-gray-400">me@example.com</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-3 rounded-lg mb-1 text-xl">
              <FaGithub />
            </div>
            <p className="font-semibold">GitHub</p>
            <p className="text-gray-400">@your-github</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-3 rounded-lg mb-1 text-xl">
              <FaLinkedin />
            </div>
            <p className="font-semibold">LinkedIn</p>
            <p className="text-gray-400">your-linkedin</p>
          </div>
        </div>

        {/* 📬 Contact Form */}
       <form ref={formRef} onSubmit={sendEmail} className="flex flex-col items-center">
  <div className="w-full md:w-4/5">
    <div className="flex flex-col md:flex-row gap-6 mb-6">
      <div className="w-full">
        <label className="block text-sm mb-1 text-center md:text-left">Email</label>
        <input
          type="email"
          name="email"
          placeholder="developer@domain.com"
          required
          className="w-full bg-transparent border border-purple-electric rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-electric"
        />
      </div>
      <div className="w-full">
        <label className="block text-sm mb-1 text-center md:text-left">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Developer X"
          required
          className="w-full bg-transparent border border-purple-electric rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-electric"
        />
      </div>
    </div>
    <div className="mb-6">
      <label className="block text-sm mb-1 text-center md:text-left">Message</label>
      <div className="flex flex-col md:flex-row gap-6">
        <textarea
          name="message"
          rows="4"
          placeholder="What's up?"
          required
          className="w-full bg-transparent border border-purple-electric rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-electric"
        ></textarea>
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-2 rounded-md border-2 border-purple-electric text-white transition hover:bg-purple-electric/10"
        >
          Send
        </button>
      </div>
    </div>
    {isSent && (
      <p className="text-green-400 text-center font-medium mt-2">✅ Message sent successfully!</p>
    )}
  </div>
</form>


      </motion.div>
    </section>
    </div>
  );
}