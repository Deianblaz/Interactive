import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { LuDownload, LuGamepad2, LuFileCode, LuZap, LuArrowBigDownDash } from "react-icons/lu";
import { AiFillGithub } from "react-icons/ai";
import { Button, Link, Chip, Image } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Logo from '../Assets/icon.png'
import sinFirmar from '../Assets/sinFirmar.png'

export function InteractiveLandingPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navbarBg, setNavbarBg] = useState('transparent');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const instalacionRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg('rgba(0, 0, 0, 0.6)');
      } else {
        setNavbarBg('transparent');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const menuItems = [
    "Instalación",
    "New Version",
    "Mini-Games",
  ];

  const handleScrollToInstallation = () => {
    if (instalacionRef.current) {
      instalacionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error("instalacionRef es null");
    }
  };


  return (
    <div className="min-h-screen text-white">
      {/* Barra de progreso */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#6aa84f] origin-[0%] z-50"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <Navbar
        className="fixed top-0 left-0 right-0 z-40"
        style={{ backgroundColor: navbarBg, transition: 'background-color 0.3s ease' }}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <a href="/" className="text-4xl font-bold text-[#6aa84f]">Interactive</a>
            <Chip className="ml-[8px] mt-[8px]" color="default" variant="faded">v1.1.6</Chip>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" className="hover:text-[#6aa84f] transition-colors" href="#instalacion">Instalación</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="hover:text-[#6aa84f] transition-colors" href="#new-version">New Version</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="hover:text-[#6aa84f] transition-colors" href="#mini-games">Mini-Games</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="success" auto className="flex items-center text-[#ffffff] text-[16px]" onClick={() => window.open('https://github.com/Deianblaz/InteractiveApp/releases/download/v1.1.6/interactive-1.1.6-setup.exe', '_blank')}>
              <LuDownload size={20} />
              Descargar
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Menu responsive */}
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                className="w-full"
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                size="lg"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

      </Navbar>

      <main className="pt-4">
        <section className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mx-auto mb-[10px]">
            <Image
              width={200}
              alt="Interactive Logo"
              src={Logo}
            />
            </div>
            <h1 className="text-5xl font-bold mb-6">Bienvenido a Interactive</h1>
            <p className="text-xl mb-8">Experiencia interactiva para Streamers</p>
            <Button color="success" auto className="flex items-center justify-center mx-auto text-[#ffffff] text-[16px]" onClick={handleScrollToInstallation}>
              <LuArrowBigDownDash size={22} />
              Comenzar
            </Button>
          </motion.div>
        </section>

        <motion.section
          id="instalacion"
          ref={instalacionRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 0.2 ? 1 : 0 }}
          className="min-h-screen flex items-center justify-center pt-24"
        >
          <div className="text-center">
            <LuFileCode size={64} className="mx-auto mb-6 text-[#6aa84f]" />
            <h2 className="text-3xl font-bold mb-8">Facil Instalación</h2>

            <div className="flex justify-center">
              <div className="border-l-4 border-green-500 bg-green-50 p-4 mb-4 min-w-[760px] max-w-[800px]">
                <p className="text-[#6a6a6a] text-start">Esta aplicación no está firmada digitalmente debido al alto costo de los certificados.</p>
                <p className="text-[#6a6a6a] text-start">Planeamos adquirir uno en el futuro, pero te aseguramos que la aplicación es completamente segura.</p>
              </div>
            </div>
            
            <div className="relative flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto p-6">
              <div className="relative w-full max-w-lg mb-8 md:mb-0">
                <AiFillGithub className="absolute opacity-10 text-gray-600 text-[35vw] -z-10 inset-0 m-auto" />
                <p className="text-base mb-4 text-start">
                  La descarga se realiza desde el repositorio de GitHub de la aplicación.
                </p>
                <p className="text-base text-start">
                  Durante la instalación, es normal que Windows muestre un mensaje advirtiendo que la aplicación es desconocida. Esto ocurre porque no está certificada digitalmente, lo que es similar a instalar un APK fuera de Google Play.
                  <span className="block mt-2">Para continuar, simplemente haz clic en "Más información" y luego en el botón "Ejecutar de todas formas".</span>
                </p>
              </div>

              <Image
                width={600}
                alt="App sin firmar"
                src={sinFirmar}
                className="transform rotate-6 translate-x-[10px] w-full max-w-md"
              />
            </div>


            
          </div>
        </motion.section>

        <motion.section
          id="new-version"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 0.5 ? 1 : 0 }}
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <LuZap size={64} className="mx-auto mb-6 text-[#6aa84f]" />
            <h2 className="text-3xl font-bold mb-4">New Version Available</h2>
            <p className="text-xl">Discover the latest features and improvements</p>
          </div>
        </motion.section>

        <motion.section
          id="mini-games"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 0.8 ? 1 : 0 }}
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <LuGamepad2 size={64} className="mx-auto mb-6 text-[#6aa84f]" />
            <h2 className="text-3xl font-bold mb-4">Exciting Mini Games</h2>
            <p className="text-xl">Take a break and enjoy our collection of fun mini games</p>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Interactive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
