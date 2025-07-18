import { useRef, useState } from "react";



import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { useInView } from "framer-motion";

// import { FaPalette } from "react-icons/fa";
// import { FaMagic } from "react-icons/fa";
import milletImg from "./assets/milletconnect.png"; // adjust if file is in another folder
import letterGenImg from "./assets/image.png"; 
import secureshareImg from "./assets/secureshare.png"; 
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
    github: "https://github.com/Meghana-108/millet-connect.git",
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
    github: "https://github.com/Meghana-108/letter-generator.git",
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
    github: "https://github.com/Meghana-108/secure-share.git",
    points: [
      "Built a secure web app to share text messages using a unique 6-digit passkey system.",
      "Implemented sender/receiver flows to store and retrieve messages through REST APIs.",
      "Used MongoDB for backend data storage and ‘localStorage’ for frontend session management.",
      "Designed a clean and responsive UI using React and custom CSS."
    ]
  
  }
  //   ,{
  //   title: "Portfolio Website",
  //   tech: ["React.js", "Tailwind CSS", "Framer Motion"],
  //   date: "July 2025",
  //   img: "https://via.placeholder.com/300x200?text=Portfolio",
  //   github: "https://github.com/yourusername/portfolio",
  //   points: [
  //     "Designed and developed a personal portfolio website with animations using Framer Motion.",
  //     "Showcases education, projects, contact form, and technical skills with themed UI.",
  //     "Implemented responsive layouts and custom interactive project cards."
  //   ]
  // },
  // {
  //   title: "Community Idea Box",
  //   tech: ["Next.js", "Supabase", "Tailwind CSS"],
  //   date: "June 2025",
  //   img: "https://via.placeholder.com/300x200?text=Idea+Box",
  //   github: "https://github.com/yourusername/community-idea-box",
  //   points: [
  //     "Built a public idea submission platform with authentication and admin approval system.",
  //     "Users can post, upvote, and browse ideas by category with role-based access.",
  //     "Used Supabase for authentication and real-time database management."
  //   ]
  // },
  // {
  //   title: "Price Comparison App",
  //   tech: ["React", "Rapid API", "Tailwind CSS"],
  //   date: "July 2025",
  //   img: "https://via.placeholder.com/300x200?text=Price+Compare",
  //   github: "https://github.com/yourusername/price-compare",
  //   points: [
  //     "Developed a tool to compare product prices across multiple e-commerce platforms.",
  //     "Implemented barcode/image-based product search using third-party APIs.",
  //     "Designed clean UI and integrated dynamic result rendering with filtering options."
  //   ]
  // }
]);



export default function App() {
  const [visibleCount, setVisibleCount] = useState(3);
  const allProjects = getAllProjects();
  const showAll = visibleCount >= allProjects.length;
  const formRef = useRef();
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");


const [isSent, setIsSent] = useState(false);
  const ref = useRef(null);
const isInView = useInView(ref, { once: false, amount: 0.5 });
const sendEmail = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setIsSent(true);
      alert("✅ Email sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("❌ Failed to send email.");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Something went wrong.");
  }
};

{allProjects.slice(0, visibleCount).map((proj, i) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6, once: true }); // triggers when 60% visible

  return (
    <motion.div
      key={i}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      className={`
        flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}
        items-center gap-8 bg-white/5 backdrop-blur-md rounded-xl p-6 min-h-[380px]
        transition-shadow duration-500 ease-in-out
        ${isInView ? 'shadow-[0px_20px_30px_rgba(97,0,148,0.45)]' : ''}
        hover:shadow-[0px_20px_30px_rgba(97,0,148,0.45)]
      `}
    >
      {/* Card content remains same */}
    </motion.div>
  );
})}



  return (
 <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
  {/* 🔮 Glowing Animated Background Blobs */}
  <div className="absolute top-[80px] left-[-30px] w-[400px] h-[400px] bg-purple-electric opacity-15 blur-[120px] rounded-full pointer-events-none z-0 animate-float-slow" />
  <div className="absolute top-[560px] left-[720px] w-[200px] h-[200px] bg-purple-electric opacity-25 blur-[120px] rounded-full pointer-events-none z-0 animate-float-slow" />
  <div className="absolute top-[150px] right-[-40px] w-[300px] h-[300px] bg-purple-electric opacity-25 blur-[120px] rounded-full pointer-events-none z-0 animate-float-slow" />
  <div className="absolute bottom-[-100px] right-[5%] w-[320px] h-[320px] bg-purple-royal opacity-15 blur-[150px] rounded-full pointer-events-none z-0 animate-float-slow" />

  {/* 🔗 Navbar */}
  <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md flex justify-between items-center px-10 py-3">
    <div className="text-2xl font-semibold tracking-wide">🐘</div>
  </header>

  {/* 👋 Hero Section */}
  <main className="pt-32 flex flex-col md:flex-row items-center justify-center px-6 py-28 max-w-6xl mx-auto gap-16 min-h-[110vh] relative z-10">
    {/* 📝 Left Text Content */}
    <div className="md:w-1/2 text-center md:text-left">
      <SplitText
        text="Hey, it's Meghana "
        className="text-3xl md:text-5xl font-bold mb-6"
        splitType="words"
        delay={60}
      />
      <p className="text-gray-300 text-lg md:text-xl mb-10">
        A Computer Science graduate with a keen interest in thoughtful design and problem solving.
      </p>

      {/* ✅ Desktop Button Only */}
      <a
        href="/Meghana_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-block px-8 py-4 border border-purple-electric text-white rounded-md hover:bg-purple-electric/10 hover:shadow-[0_0_12px_#610094] transition text-m"
        style={{ width: "fit-content" }}
      >
        <span className="leading-none">Resume</span>
        <FiDownload className="text-sm inline-block ml-2" />
      </a>
    </div>

    {/* 🎞️ Right Lottie Image */}
    <div className="md:w-1/2 flex flex-col items-center">
      <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
        <Lottie animationData={heroAnim} loop={true} className="w-full h-full" />
      </div>

      {/* ✅ Mobile Button Only */}
      <a
        href="/Meghana_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden mt-6 px-8 py-4 border border-purple-electric text-white rounded-md hover:bg-purple-electric/10 hover:shadow-[0_0_12px_#610094] transition text-m"
      >
        <span className="leading-none">Resume</span>
        <FiDownload className="text-sm inline-block ml-2" />
      </a>
    </div>
  </main>

{/* 🎓 Education Section */}
<section className="px-4 py-16 sm:px-6 max-w-5xl mx-auto relative z-10">
  <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Education</h2>

  <div className="space-y-10 sm:space-y-12">
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
        className="border-l-4 border-purple-electric pl-6 pr-4 py-5 bg-white/5 backdrop-blur-sm rounded-lg"
      >
        <h3 className="text-lg sm:text-xl font-semibold">{edu.title}</h3>
        <p className="text-sm sm:text-base text-gray-400 mb-1">{edu.location}</p>
        <p className="text-base sm:text-lg text-white">{edu.degree}</p>
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
  {/* Glowing Backgrounds */}
  <div className="absolute top-[8%] left-[74%] w-[150px] h-[150px] bg-purple-electric opacity-25 blur-[120px] rounded-full animate-pulse pointer-events-none z-0" />
  <div className="absolute top-[10%] right-[15%] w-[300px] h-[300px] bg-purple-royal opacity-20 blur-[110px] rounded-full animate-ping pointer-events-none z-0" />
  <div className="absolute bottom-[55%] left-[10%] w-[220px] h-[220px] bg-purple-electric opacity-30 blur-[100px] rounded-full animate-float pointer-events-none z-0" />
  <div className="absolute top-[65%] left-[74%] w-[150px] h-[150px] bg-purple-electric opacity-25 blur-[120px] rounded-full animate-pulse pointer-events-none z-0" />
  
  <h2 className="text-4xl font-bold mb-16 text-center relative z-10 text-white">Projects</h2>

  <div className="space-y-24 relative z-10">
    {allProjects.slice(0, visibleCount).map((proj, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40, scale: 0.95 }} // 👈 Zoom in setup
        whileInView={{ opacity: 1, y: 0, scale: 1 }} // 👈 Zoom target
        viewport={{ once: false, amount: 0.4 }} // 👈 triggers on scroll
        transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
       className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-8 bg-white/5 backdrop-blur-md rounded-xl p-6 min-h-[380px] shadow-[0px_20px_30px_rgba(97,0,148,0.45)] md:shadow-none md:hover:shadow-[0px_20px_30px_rgba(97,0,148,0.45)] transition-shadow duration-500`}
      >
        <img
          src={proj.img}
          alt={proj.title}
          className="w-full md:w-[380px] h-[230px] object-cover rounded-lg shadow-md"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-white">{proj.title}</h3>
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
          <div className="flex flex-wrap gap-x-4 gap-y-3">
            {proj.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-5 py-[6px] rounded-md border-2 border-purple-electric text-sm text-white hover:bg-purple-electric hover:text-white transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
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
  {/* Email */}
  <div className="flex flex-col items-center">
    <a href="meeraganesh108@gmail.com" className="bg-white/10 p-3 rounded-lg mb-1 text-xl hover:text-purple-electric transition">
      <FaEnvelope />
    </a>
    <p className="font-semibold">Email</p>
     </div>

  {/* GitHub */}
  <div className="flex flex-col items-center">
    <a href="https://github.com/Meghana-108" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-lg mb-1 text-xl hover:text-purple-electric transition">
      <FaGithub />
    </a>
    <p className="font-semibold">GitHub</p>
      </div>

  {/* LinkedIn */}
  <div className="flex flex-col items-center">
    <a href="https://www.linkedin.com/in/meghana-417301262/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-lg mb-1 text-xl hover:text-purple-electric transition">
      <FaLinkedin />
    </a>
    <p className="font-semibold">LinkedIn</p>
    
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
  value={email}
  onChange={(e) => setEmail(e.target.value)}
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
  value={name}
  onChange={(e) => setName(e.target.value)}
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
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full bg-transparent border border-purple-electric rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-electric"
/>

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
