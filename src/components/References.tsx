import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MapPin, ArrowUpRight, X, Check, Building2, ChevronLeft, ChevronRight, Maximize2, Loader2 } from 'lucide-react';

// Helper for image optimization
const getOptimizedImage = (url: string, width: number) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  // Replace /upload/ or /upload/EXISTING_TRANSFORMS/v with /upload/f_auto,q_auto,w_WIDTH/v
  return url.replace(/\/upload\/(?:[^/]+\/)?v/, `/upload/f_auto,q_auto,w_${width}/v`);
};

// Data structure remains same
const projects = [
  {
    id: 5,
    title: "Bytové inštalácie",
    category: "Domové Inštalácie",
    type: "elektro",
    location: "Slovensko",
    year: "2025",
    image: "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406058/IMG_6552_f6ilnq.jpg",
    description: "Komplexné elektroinštalačné práce pre rodinné domy a byty. Dôraz na detail, čistotu prevedenia a bezpečnosť podľa najnovších noriem.",
    tags: ["Rekonštrukcia", "Novostavba", "Silnoprúd"],
    details: {
      about: "Realizácia kompletných elektroinštalačných prác pre rodinné domy a byty. Projekty zahŕňali hrubú inštaláciu, drážkovanie, kompletáž vypínačov a zásuviek, ako aj výmenu a modernizáciu bytových rozvádzačov. Dôraz bol kladený na bezpečnosť, estetiku a prípravu pre moderné spotrebiče.",
      scope: [
        "Hrubá inštalácia a drážkovanie",
        "Kompletáž vypínačov a zásuviek",
        "Výmena a modernizácia bytových rozvádzačov",
        "Príprava pre indukčné dosky a spotrebiče",
        "Odborná prehliadka"
      ],
      gallery: [
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406058/IMG_6552_f6ilnq.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406057/IMG_6553_rav0xy.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406056/IMG_6453_ouvfns.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/v1770571741/IMG_8410_fciexs.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/v1770571740/IMG_8403_byco8i.jpg"
      ]
    }
  },
  {
    id: 6,
    title: "Hotelový Komplex",
    category: "Elektroinštalácie",
    type: "elektro",
    location: "Nemecko",
    year: "2025",
    image: "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406551/IMG_4174_znsklv.jpg",
    description: "Rozsiahla elektroinštalácia pre moderný hotelový komplex v Nemecku. Realizácia silnoprúdových rozvodov, osvetlenia a technického zázemia.",
    tags: ["Hotel", "Zahraničie", "Silnoprúd"],
    details: {
      about: "Rozsiahla elektroinštalácia pre moderný hotelový komplex v Nemecku. Práce zahŕňali kompletné silnoprúdové inštalácie izieb, montáž hlavných rozvádzačov, inštaláciu núdzového a prevádzkového osvetlenia a kabeláž pre hotelové systémy v súlade s nemeckými normami.",
      scope: [
        "Kompletné silnoprúdové inštalácie izieb",
        "Montáž a zapojenie hlavných rozvádzačov",
        "Inštalácia núdzového a prevádzkového osvetlenia",
        "Kabeláž pre hotelové systémy",
        "Inštalácia dátových zásuviek a rozvádzačov"
      ],
      gallery: [
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406550/IMG_7922_ahu4iv.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406550/IMG_7923_huakuc.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406549/IMG_1560_whceao.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770406549/IMG_1559_gsbppi.jpg"
      ]
    }
  },
  {
    id: 7,
    title: "Domov dôchodcov",
    category: "Elektroinštalácie",
    type: "elektro",
    location: "Nemecko",
    year: "2024",
    image: "https://res.cloudinary.com/duvaxlkw3/image/upload/v1770568891/20230725_074555_unjj8s.jpg",
    description: "Kompletné elektroinštalačné práce pre novostavbu pobytového zariadenia. Inštalácia silnoprúdových rozvodov, osvetlenia a dorozumievacích systémov.",
    tags: ["Zahraničie", "Zdravotníctvo", "Silnoprúd"],
    details: {
      about: "Komplexná realizácia elektroinštalácií pre novostavbu zariadenia sociálnych služieb. Projekt zahŕňal inštaláciu bezhalogénovej kabeláže v únikových trasách, systém privolania personálu, núdzové a zálohované osvetlenie a dátovú infraštruktúru pre administratívnu časť objektu.",
      scope: [
        "Kompletná kabeláž pre hosťovské izby",
        "Systém privolania sestry",
        "Montáž a zapojenie podružných rozvádzačov",
        "Inštalácia LED osvetlenia s riadením DALI",
        "Dátové rozvody pre administratívu"
      ],
      gallery: [
        "https://res.cloudinary.com/duvaxlkw3/image/upload/v1770568890/20230708_090651_mlgsop.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/v1770568891/20230724_083640_odguwb.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/v1770568891/20230530_080728_aqhahe.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/v1770568890/20230731_152539_xbuedt.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/v1770568891/20230621_133212_y6wrev.jpg"
      ]
    }
  },
  {
    id: 8,
    title: "Výroba trafostaníc",
    category: "Priemyselné Inštalácie",
    type: "elektro",
    location: "Nemecko",
    year: "2023",
    image: "https://res.cloudinary.com/duvaxlkw3/image/upload/v1770569039/IMG_6836_nglhot.jpg",
    description: "Montáž a kompletizácia distribučných trafostaníc pre nemeckú energetickú sieť. Inštalácia VN/NN technológií.",
    tags: ["VN/NN", "Energetika", "Priemysel"],
    details: {
      about: "Montáž a kompletizácia distribučných trafostaníc pre energetickú sieť. Projekt zahŕňal osadenie transformátorov, prepojenie VN a NN rozvádzačov, inštaláciu meracích obvodov a kompletné uzemnenie technológií v kompaktných betónových skeletoch.",
      scope: [
        "Montáž VN rozvádzačov",
        "Inštalácia NN rozvádzačov",
        "Kabeláž a pripojenie transformátorov",
        "Uzemnenie a bezpečnostné prvky"
      ],
      gallery: [
        "https://res.cloudinary.com/duvaxlkw3/image/upload/v1770569041/IMG_6840_slv127.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/v1770569040/IMG_6796_m1uhvy.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/v1770569040/IMG_0630_segmd4.jpg"
      ]
    }
  },
  {
    id: 9,
    title: "Obchodné centrum",
    category: "Komerčné priestory",
    type: "elektro",
    location: "Rakúsko",
    year: "2024",
    image: "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770571500/IMG_6392_ozxcpy.jpg",
    description: "Elektroinštalácie pre obchodné priestory v Rakúsku. Realizácia osvetlenia, silnoprúdových rozvodov a dátovej infraštruktúry.",
    tags: ["Retail", "Zahraničie", "Osvetlenie"],
    details: {
      about: "Elektroinštalácie pre obchodné priestory s dôrazom na estetiku inštalácií. Realizovali sme montáž káblových trás pomocou plošín, inštaláciu dizajnového a technického osvetlenia, zapojenie rozvádzačov pre obchodné jednotky a prípravu pre slaboprúdové systémy.",
      scope: [
        "Montáž káblových žľabov a roštov",
        "Kabeláž pre osvetlenie a zásuvkové obvody",
        "Zapojenie rozvádzačov pre obchodné jednotky",
        "Inštalácia núdzového osvetlenia",
        "Príprava pre slaboprúdové systémy"
      ],
      gallery: [
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770571498/IMG_6170_abuoaw.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770571499/IMG_6241_hxuylr.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770571500/IMG_6380_ccyqjt.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770571499/IMG_6240_mnvgd4.jpg"
      ]
    }
  },
  {
    id: 10,
    title: "Kancelárske priestory",
    category: "Komerčné priestory",
    type: "elektro",
    location: "Rakúsko",
    year: "2023",
    image: "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572084/IMG_3335_bb1eul.jpg",
    description: "Inštalácia silnoprúdových a slaboprúdových rozvodov pre moderné administratívne priestory. Dôraz na funkčnosť a flexibilitu pracovných miest.",
    tags: ["Office", "Zahraničie", "Dáta"],
    details: {
      about: "Inštalácia silnoprúdových a slaboprúdových rozvodov v administratívnej budove. Riešenie zahŕňalo komplexnú kabeláž v podlahových kanáloch, montáž zásuviek, dátové rozvody Cat.7, osvetlenie kancelárií a montáž požiarnych hlásičov.",
      scope: [
        "Montáž zásuviek",
        "Dátové rozvody Cat.7",
        "Úpravy a doplnenie rozvádzačov",
        "Osvetlenie chodieb a kancelárií",
        "Montáž požiarnych hlásičov"
      ],
      gallery: [
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572088/IMG_1559_p5g0c4.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572086/IMG_3333_q0ogfm.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572087/IMG_2279_vdnphh.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572085/IMG_1560_ojpnyj.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572086/IMG_1567_ympu1o.jpg"
      ]
    }
  },
  {
    id: 11,
    title: "Výrobný závod Volvo",
    category: "Priemyselné Inštalácie",
    type: "elektro",
    location: "Valaliky",
    year: "2025",
    image: "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572338/IMG_9385_mocqif.jpg",
    description: "Elektroinštalačné práce na výstavbe nového strategického závodu pre elektromobily na východnom Slovensku.",
    tags: ["Automotive", "Priemysel", "Novostavba"],
    details: {
      about: "Elektroinštalačné práce na výstavbe strategického závodu. Realizácia zahŕňala montáž káblových žľabov, silnoprúdové rozvody pre technológie, priemyselné osvetlenie a zapojenie rozvádzačov v prostredí prebiehajúcej výstavby.",
      scope: [
        "Montáž káblových žľabov a roštov",
        "Silnoprúdové rozvody pre technológie",
        "Inštalácia priemyselného osvetlenia",
        "Zapojenie rozvádzačov NN"
      ],
      gallery: [
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770572338/IMG_9385_mocqif.jpg"
      ]
    }
  },
  {
    id: 13,
    title: "SD-WAN infraštruktúra",
    category: "Dátové siete",
    type: "data",
    location: "Slovensko",
    year: "2025",
    image: "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580086/IMG_5854_gr5jxa.jpg",
    description: "Modernizácia sieťovej infraštruktúry pre sieť zdravotníckych prevádzok. Implementácia SD-WAN technológie pre bezpečné prepojenie.",
    tags: ["SD-WAN", "Zdravotníctvo", "Security"],
    details: {
      about: "Modernizácia sieťovej infraštruktúry pre sieť zdravotníckych prevádzok s cieľom zabezpečiť stabilné a bezpečné prepojenie. Implementácia zahŕňala kompletnú výmenu dátových rozvádzačov, nasadenie SD-WAN routerov, aktívnych prvkov a organizáciu kabeláže.",
      scope: [
        "Výmena a organizácia RACK skríň",
        "Inštalácia SD-WAN routerov a switchov",
        "Cable management (usporiadanie kabeláže)",
        "Záložné napájanie (UPS)"
      ],
      gallery: [
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580086/IMG_5854_gr5jxa.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580088/IMG_5527_sgcgmb.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580083/IMG_6531_fmoetf.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770573475/IMG_6317_twywwh.jpg"
      ]
    }
  },
  {
    id: 14,
    title: "Štrukturovaná kabeláž kancelárií",
    category: "Dátové siete",
    type: "data",
    location: "Slovensko",
    year: "2025",
    image: "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580081/IMG_0070_hmu9nw.jpg",
    description: "Komplexná realizácia štruktúrovanej kabeláže pre kancelárske priestory. Zabezpečenie rýchlej a stabilnej konektivity pre pracovné stanice.",
    tags: ["Kancelárie", "Cat.6A", "Dáta"],
    details: {
      about: "Realizácia modernej dátovej infraštruktúry pre kancelárske priestory. Projekt zahŕňal ťahanie a vyväzovanie kabeláže v zdvojených podlahách a stropoch. Dôraz bol kladený na prehľadnosť a budúcu rozšíriteľnosť siete.",
      scope: [
        "Montáž káblových žľabov",
        "Ťahanie a vyväzovanie kabeláže",
        "Organizácia káblov v zdvojených podlahách",
        "Príprava trás pre slaboprúd"
      ],
      gallery: [
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580081/IMG_0070_hmu9nw.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580075/IMG_0056_b9naiz.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580075/IMG_0047_tblgtz.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580074/IMG_0041_t1bhef.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770580080/IMG_0069_qn690h.jpg"
      ]
    }
  },
  {
    id: 15,
    title: "Realizácie zabezpečovacích a smart riešení",
    category: "Smart & Zabezpečenie",
    type: "smart",
    location: "Slovensko",
    year: "2024",
    image: "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770673419/IMG_2720_etgrzo.jpg",
    description: "Inštalácie moderných kamerových systémov a inteligentnej elektroinštalácie pre zvýšenie bezpečnosti a komfortu.",
    tags: ["Smart Home", "Kamery", "Zabezpečenie"],
    details: {
      about: "Realizácia komplexných zabezpečovacích a smart systémov pre rodinné domy a firmy. Zameranie na integráciu kamerových systémov s vysokým rozlíšením, videovrátnikov a inteligentného riadenia domácnosti pre maximálny komfort a bezpečnosť užívateľov.",
      scope: [
        "Montáž kamerových systémov",
        "Inštalácia zabezpečovacích systémov",
        "Smart Home integrácia",
        "Videovrátniky a prístupové systémy",
        "Nastavenie vzdialeného prístupu"
      ],
      gallery: [
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770673419/IMG_2720_etgrzo.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770673417/IMG_2719_g8yzmu.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770673416/IMG_2718_hittku.jpg",
        "https://res.cloudinary.com/duvaxlkw3/image/upload/f_auto,q_auto/v1770673415/IMG_84C3B901-B8B1-42DD-AB69-A7584BDF5BFF_rf1vwb.jpg"
      ]
    }
  }
];

export const References: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  // Custom Drag Scroll Refs & State
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Lightbox state
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Responsive state for gallery preview
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filters = [
    { id: 'all', label: 'Všetky' },
    { id: 'elektro', label: 'Elektroinštalácie' },
    { id: 'data', label: 'Dátové siete' },
    { id: 'smart', label: 'Smart & Zabezpečenie' }
  ];

  // Sort projects: Newest year first, then highest ID
  const sortedProjects = [...projects].sort((a, b) => {
    const yearDiff = Number(b.year) - Number(a.year);
    if (yearDiff !== 0) return yearDiff;
    return b.id - a.id;
  });

  const filteredProjects = activeFilter === 'all' 
    ? sortedProjects 
    : sortedProjects.filter(project => project.type === activeFilter);

  // --- DRAG SCROLL LOGIC START ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Check scroll position for arrows visibility
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll(); // Check initial state
      // Reset scroll when filter changes
      el.scrollLeft = 0;
    }
    return () => el?.removeEventListener('scroll', checkScroll);
  }, [activeFilter]);

  const scrollBy = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };
  // --- DRAG SCROLL LOGIC END ---


  // Gallery Logic
  const galleryImages = selectedProject 
    ? Array.from(new Set([selectedProject.image, ...selectedProject.details.gallery]))
    : [];

  const handleOpenGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsImageLoading(true);
    setIsGalleryOpen(true);
  };

  const handleNextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsImageLoading(true);
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const handlePrevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsImageLoading(true);
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  const handleCloseGallery = () => setIsGalleryOpen(false);

  // Preloading logic
  useEffect(() => {
    if (!isGalleryOpen || galleryImages.length === 0) return;

    // Preload next/prev images in background without affecting UI state directly
    const preloadImage = (index: number) => {
        const img = new Image();
        img.src = getOptimizedImage(galleryImages[index], 1600);
    };

    // Preload Next
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    preloadImage(nextIndex);

    // Preload Prev
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    preloadImage(prevIndex);

  }, [currentImageIndex, isGalleryOpen, galleryImages]);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isGalleryOpen) {
        if (e.key === 'Escape') handleCloseGallery();
        if (e.key === 'ArrowRight') handleNextImage();
        if (e.key === 'ArrowLeft') handlePrevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, handleNextImage, handlePrevImage]);

  useEffect(() => {
    if (selectedProject || isGalleryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject, isGalleryOpen]);

  return (
    <section id="projekty" className="py-12 md:py-24 lg:py-32 bg-[#05070B] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#0A0E17] to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-nexel-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto relative z-10 px-4 md:px-8">
        
        {/* --- Header Section (Redesigned) --- */}
        <div className="flex flex-col gap-6 md:gap-8 mb-8 md:mb-12">
            
            {/* Top Row: Title + Arrows */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                   <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                       Projekty, ktoré hovoria <br className="hidden md:block"/> za nás
                   </h2>
                </div>

                {/* Arrows */}
                <div className="hidden md:flex gap-3">
                    <button 
                        onClick={() => scrollBy(-350)}
                        disabled={!canScrollLeft}
                        className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${canScrollLeft ? 'bg-white/5 text-white hover:bg-white/10 hover:border-nexel-primary hover:text-nexel-primary cursor-pointer' : 'bg-transparent text-gray-700 border-white/5 cursor-not-allowed opacity-50'}`}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={() => scrollBy(350)}
                        disabled={!canScrollRight}
                        className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${canScrollRight ? 'bg-white/5 text-white hover:bg-white/10 hover:border-nexel-primary hover:text-nexel-primary cursor-pointer' : 'bg-transparent text-gray-700 border-white/5 cursor-not-allowed opacity-50'}`}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Bottom Row: Filters - Horizontal Scroll on Mobile */}
            <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 gap-2 md:gap-3 scrollbar-hide">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        onClick={() => setActiveFilter(filter.id)}
                        className={`
                            px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap
                            ${activeFilter === filter.id 
                                ? 'bg-nexel-primary text-white border-nexel-primary' 
                                : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                            }
                        `}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
        </div>

        {/* --- CINEMATIC SCROLL CONTAINER (2 ROWS) --- */}
        <div className="relative group/container">
            
            {/* The Track */}
            <div 
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className={`
                    grid grid-rows-2 grid-flow-col gap-4 md:gap-5 lg:gap-6 overflow-x-auto pb-8 md:pb-12 pt-4 px-4 -mx-4 md:mx-0 md:px-0
                    auto-cols-[280px] md:auto-cols-[300px] lg:auto-cols-[340px]
                    scrollbar-hide snap-x snap-mandatory md:snap-none
                    ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}
                `}
                style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
            >
                {filteredProjects.map((project) => (
                    <div 
                        key={project.id}
                        onClick={() => {
                            if (!isDragging) setSelectedProject(project);
                        }}
                        className="
                            relative w-full h-full
                            rounded-xl md:rounded-2xl overflow-hidden 
                            bg-[#0A0E17] border border-white/5
                            transition-all duration-300
                            group hover:border-nexel-primary/30 hover:shadow-lg hover:shadow-cyan-900/5
                            flex flex-col snap-center
                        "
                    >
                        {/* Image Top */}
                        <div className="relative h-44 md:h-48 lg:h-52 w-full flex-shrink-0 overflow-hidden">
                            <img 
                                src={getOptimizedImage(project.image, 500)} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />
                            {/* Overlay tag */}
                            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded">
                                <span className="text-[10px] text-nexel-accent font-bold tracking-wider uppercase">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Content Bottom */}
                        <div className="p-4 md:p-5 flex flex-col flex-grow bg-[#0A0E17]">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-nexel-primary transition-colors">
                                {project.title}
                            </h4>

                            <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-gray-500 mb-3">
                                <div className="flex items-center gap-1 min-w-0">
                                    <MapPin size={10} />
                                    <span className="truncate max-w-[80px] md:max-w-none">{project.location}</span>
                                </div>
                            </div>

                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                                {project.description}
                            </p>

                            <div className="pt-3 md:pt-4 border-t border-white/5 mt-auto flex items-center justify-between text-sm">
                                <span className="text-gray-500 font-medium text-xs md:text-sm">Viac info</span>
                                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-nexel-primary group-hover:text-white transition-colors">
                                    <ArrowUpRight size={14} className="md:w-4 md:h-4" />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredProjects.length === 0 && (
                     <div className="w-full h-[300px] md:h-[400px] flex items-center justify-center text-gray-500 col-span-full row-span-2">
                        Pre tento výber nemáme projekty.
                     </div>
                )}
                
                {/* Spacer at the end for smooth scrolling */}
                <div className="w-2 md:w-12 row-span-2 flex-shrink-0"></div>
            </div>

            {/* Custom Progress Line */}
            <div className="hidden md:block w-full h-[1px] bg-white/5 mt-8 relative max-w-[1600px] mx-auto">
                 <div 
                    className="absolute top-0 left-0 h-full bg-nexel-primary transition-all duration-300"
                    style={{ 
                        width: scrollRef.current 
                        ? `${(scrollLeft / (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)) * 100}%` 
                        : '0%' 
                    }}
                 ></div>
            </div>
        </div>
      </div>
      {/* --- PREMIUM MODAL (Tablet Optimized) --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-6">
          <div 
            className="absolute inset-0 bg-[#000000]/95 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* MOBILE CLOSE BUTTON - Fixed position independent of modal scroll */}
          <button 
            onClick={() => setSelectedProject(null)}
            className="md:hidden fixed top-24 right-5 z-[110] p-3 bg-black/50 text-white hover:bg-white/10 rounded-full backdrop-blur-md border border-white/10 transition-colors shadow-2xl animate-fade-in"
            aria-label="Zatvoriť"
          >
            <X size={26} />
          </button>

          <div className="relative bg-[#0A0E17] w-full h-[100dvh] md:h-[80vh] lg:h-[85vh] md:max-w-[90%] lg:max-w-6xl md:rounded-3xl shadow-2xl animate-fade-in flex flex-col lg:flex-row border-t md:border border-white/10 overflow-hidden">
            
            {/* DESKTOP CLOSE BUTTON - Absolute inside modal */}
            <button 
                onClick={() => setSelectedProject(null)}
                className="hidden md:block absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-white/10 text-white rounded-full transition-colors backdrop-blur-md border border-white/10 md:border-white/5"
            >
                <X size={24} />
            </button>

            {/* LEFT: Image Area (Mobile: Top 35%, Tablet: Top 40%, Desktop: 45% side) */}
            <div className="w-full h-[35vh] md:h-[40vh] lg:w-[45%] lg:h-auto relative flex-shrink-0">
                <img 
                    src={getOptimizedImage(selectedProject.image, 1000)} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0A0E17] via-transparent to-transparent opacity-90 lg:opacity-80"></div>
                
                {/* Mobile/Tablet Title Overlay */}
                <div className="absolute bottom-0 left-0 p-5 lg:hidden w-full">
                    <span className="text-nexel-primary text-xs font-bold uppercase tracking-wider mb-2 block">{selectedProject.category}</span>
                    <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight pr-8">{selectedProject.title}</h2>
                </div>
            </div>

            {/* RIGHT: Content Area (Scrollable on Desktop, Auto on Mobile) */}
            <div className="w-full lg:w-[55%] flex flex-col h-[65dvh] md:h-[40vh] lg:h-full bg-[#0A0E17] lg:border-l border-white/5 relative">
                <div className="flex-grow overflow-y-auto custom-scrollbar p-5 md:p-8 lg:p-12 pr-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    
                    {/* Desktop Title */}
                    <div className="hidden lg:block mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-gray-400 uppercase tracking-wider">
                                {selectedProject.category}
                            </span>
                            <span className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-gray-400 flex items-center gap-2">
                                <MapPin size={12} /> {selectedProject.location}
                            </span>
                        </div>
                        <h2 className="text-5xl font-bold text-white leading-tight mb-6">{selectedProject.title}</h2>
                        <p className="text-xl text-gray-300 leading-relaxed font-light">
                            {selectedProject.details.about}
                        </p>
                    </div>

                    {/* Mobile/Tablet About Text */}
                    <div className="lg:hidden mb-6">
                         <div className="flex items-center gap-2 mb-3 text-xs md:text-sm text-gray-500">
                             <span className="flex items-center gap-1"><MapPin size={12}/> {selectedProject.location}</span>
                         </div>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            {selectedProject.details.about}
                        </p>
                    </div>

                    <div className="h-[1px] w-full bg-white/5 my-6 lg:my-8"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-4">
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                                <Building2 size={16} className="text-nexel-primary" /> Rozsah prác
                            </h3>
                            <ul className="space-y-2 lg:space-y-3">
                                {selectedProject.details.scope.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-gray-400">
                                        <Check size={14} className="text-nexel-primary flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Mini Gallery Preview - Responsive limit */}
                        <div>
                             <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">Galéria</h3>
                             <div className="grid grid-cols-2 gap-2">
                                {galleryImages.slice(0, isMobile ? 2 : 4).map((img, idx) => {
                                    const limit = isMobile ? 2 : 4;
                                    const isLastAndOverflow = idx === limit - 1 && galleryImages.length > limit;
                                    const remainingCount = galleryImages.length - limit;

                                    return (
                                        <div 
                                            key={idx} 
                                            onClick={() => handleOpenGallery(idx)}
                                            className="aspect-square rounded-lg overflow-hidden border border-white/10 cursor-pointer group relative"
                                        >
                                            <img 
                                                src={getOptimizedImage(img, 400)} 
                                                className={`w-full h-full object-cover transition-transform duration-500 ${!isLastAndOverflow ? 'group-hover:scale-110' : ''}`}
                                                alt="" 
                                            />
                                            
                                            {/* Normal Hover State */}
                                            {!isLastAndOverflow && (
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <Maximize2 className="text-white" size={20} />
                                                </div>
                                            )}

                                            {/* Overflow Overlay (+X) */}
                                            {isLastAndOverflow && (
                                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[1px] group-hover:bg-black/70 transition-colors">
                                                    <span className="text-white text-xl md:text-2xl font-bold">+{remainingCount}</span>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                             </div>
                        </div>
                    </div>
                    
                    {/* Padding for mobile scrolling to not cut off content */}
                    <div className="h-8"></div>
                </div>
            </div>

          </div>
        </div>
      )}

      {/* FULL SCREEN LIGHTBOX */}
      {isGalleryOpen && galleryImages.length > 0 && (
         <div className="fixed inset-0 z-[9000] bg-black/90 backdrop-blur-sm flex items-center justify-center animate-fade-in">
             
             {/* Main Image Container */}
             <div className="w-full h-full p-4 md:p-12 lg:p-20 flex items-center justify-center relative z-[9010]" onClick={(e) => e.stopPropagation()}>
                 
                 {/* Loading Spinner */}
                 {isImageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="w-12 h-12 text-nexel-primary animate-spin" />
                    </div>
                 )}

                 <img 
                    key={galleryImages[currentImageIndex]}
                    src={getOptimizedImage(galleryImages[currentImageIndex], 1600)} 
                    alt="" 
                    className={`max-w-full max-h-full object-contain shadow-2xl transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsImageLoading(false)}
                    onError={() => setIsImageLoading(false)}
                 />
             </div>
             
             {/* Arrows */}
             {galleryImages.length > 1 && (<button onClick={handlePrevImage} className="absolute left-4 md:left-8 p-4 text-white hover:text-nexel-primary transition-colors z-[10000] hidden md:block"><ChevronLeft size={48} /></button>)}
             {galleryImages.length > 1 && (<button onClick={handleNextImage} className="absolute right-4 md:right-8 p-4 text-white hover:text-nexel-primary transition-colors z-[10000] hidden md:block"><ChevronRight size={48} /></button>)}

             {/* Close Button - Fixed to viewport */}
             <button 
                onClick={handleCloseGallery} 
                className="fixed top-24 right-6 md:top-32 md:right-10 z-[10000] p-3 bg-black/50 hover:bg-white/20 text-white hover:text-red-400 rounded-full transition-all backdrop-blur-md border border-white/10 cursor-pointer shadow-lg"
             >
                <X size={32} />
             </button>
             
             {/* Mobile Navigation Indicators */}
             <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 md:hidden z-[9050]">
                 {galleryImages.map((_, idx) => (
                     <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/30'}`}></div>
                 ))}
             </div>
             
             {/* Simple Mobile Tap Zones */}
             <div className="absolute inset-y-0 left-0 w-1/4 z-[9050] md:hidden" onClick={handlePrevImage}></div>
             <div className="absolute inset-y-0 right-0 w-1/4 z-[9050] md:hidden" onClick={handleNextImage}></div>
         </div>
      )}

    </section>
  );
};