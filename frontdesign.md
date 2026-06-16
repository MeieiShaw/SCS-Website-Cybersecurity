<!DOCTYPE html><html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Sydney Chinese School | Learning Chinese, Connecting Cultures</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com" rel="preconnect">
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect">
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600&amp;family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-tertiary-fixed-variant": "#474744",
                        "surface-container-low": "#fbf2ed",
                        "surface-dim": "#e1d8d4",
                        "on-error-container": "#93000a",
                        "tertiary-fixed-dim": "#c8c6c2",
                        "on-primary": "#ffffff",
                        "tertiary": "#3e3e3b",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-container": "#745c00",
                        "surface-bright": "#fff8f5",
                        "on-tertiary": "#ffffff",
                        "outline-variant": "#e1bebe",
                        "tertiary-container": "#555551",
                        "primary": "#81001c",
                        "secondary": "#735c00",
                        "on-secondary-fixed": "#241a00",
                        "on-primary-fixed": "#400009",
                        "primary-fixed-dim": "#ffb3b3",
                        "error-container": "#ffdad6",
                        "surface-container-highest": "#e9e1dc",
                        "surface-tint": "#b42537",
                        "on-secondary": "#ffffff",
                        "on-primary-fixed-variant": "#920322",
                        "tertiary-fixed": "#e4e2dd",
                        "primary-container": "#a6192e",
                        "inverse-primary": "#ffb3b3",
                        "on-surface-variant": "#594040",
                        "on-primary-container": "#ffb7b7",
                        "on-surface": "#1e1b18",
                        "surface": "#fff8f5",
                        "secondary-container": "#fed65b",
                        "on-tertiary-container": "#cbcac5",
                        "error": "#ba1a1a",
                        "on-secondary-fixed-variant": "#574500",
                        "on-background": "#1e1b18",
                        "primary-fixed": "#ffdad9",
                        "surface-variant": "#e9e1dc",
                        "on-tertiary-fixed": "#1b1c19",
                        "outline": "#8d7070",
                        "inverse-surface": "#34302c",
                        "surface-container": "#f5ece7",
                        "secondary-fixed-dim": "#e9c349",
                        "inverse-on-surface": "#f8efea",
                        "on-error": "#ffffff",
                        "surface-container-high": "#efe6e2",
                        "background": "#fff8f5",
                        "secondary-fixed": "#ffe088"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px",
                        "card": "16px"
                    },
                    "spacing": {
                        "margin-desktop": "40px",
                        "stack-lg": "48px",
                        "stack-xl": "64px",
                        "container-max": "1280px",
                        "stack-sm": "8px",
                        "unit": "8px",
                        "gutter": "24px",
                        "margin-mobile": "16px",
                        "stack-md": "24px"
                    },
                    "fontFamily": {
                        "headline-md": ["\"Source Serif 4\""],
                        "headline-sm": ["\"Source Serif 4\""],
                        "headline-lg": ["\"Source Serif 4\""],
                        "body-lg": ["Hanken Grotesk"],
                        "body-md": ["Hanken Grotesk"],
                        "headline-xl-mobile": ["\"Source Serif 4\""],
                        "headline-lg-mobile": ["\"Source Serif 4\""],
                        "headline-xl": ["\"Source Serif 4\""],
                        "label-md": ["Hanken Grotesk"]
                    },
                    "fontSize": {
                        "headline-md": ["28px", { "lineHeight": "1.3", "fontWeight": "600" }],
                        "headline-sm": ["22px", { "lineHeight": "1.4", "fontWeight": "600" }],
                        "headline-lg": ["36px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "headline-xl-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
                        "headline-lg-mobile": ["28px", { "lineHeight": "1.2", "fontWeight": "600" }],
                        "headline-xl": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "label-md": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }]
                    },
                    boxShadow: {
                        'ambient': '0 4px 40px rgba(129, 0, 28, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                        'ambient-hover': '0 12px 50px rgba(129, 0, 28, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)'
                    }
                }
            }
        }
    </script>
<style>
        body {
            background-color: theme('colors.background');
            color: theme('colors.on-background');
        }
        
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        
        .material-symbols-outlined.fill {
            font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }

        /* Subtle scroll animations */
        .fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body class="antialiased overflow-x-hidden selection:bg-primary selection:text-on-primary">
<!-- Navigation Header -->
<header class="bg-surface/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm transition-all duration-300 ease-in-out">
<div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
<!-- Brand Logo -->
<a class="font-headline-sm text-headline-sm font-bold text-primary flex items-center gap-2" href="#">
<span class="material-symbols-outlined fill text-3xl">school</span>
<span class="">Sydney Chinese School</span>
</a>
<!-- Desktop Navigation -->
<nav class="hidden lg:flex items-center gap-6">
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md tracking-wider" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md tracking-wider" href="#">About Us</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md tracking-wider" href="#">Enrollment</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md tracking-wider" href="#">News &amp; Events</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md tracking-wider" href="#">Student Forms</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md tracking-wider" href="#">Recruitment</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md tracking-wider" href="#">FAQs</a>
<a class="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-md text-label-md tracking-wider" href="#">Login</a>
</nav>
<!-- Trailing Action -->
<div class="hidden md:flex items-center gap-4">
<button class="font-label-md text-label-md tracking-wider text-primary hover:text-primary-container transition-colors duration-200">
                    中文
                </button>
</div>
<!-- Mobile Menu Toggle -->
<button class="lg:hidden text-primary p-2">
<span class="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</header>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
<!-- Background Image -->
<div class="absolute inset-0 z-0">
<img alt="Students participating in a vibrant cultural dragon dance during a school festival. The scene is brightly lit with warm sunlight, capturing dynamic movement and expressions of joy. High-quality educational environment emphasizing multicultural integration and traditional heritage in a modern setting." class="w-full h-full object-cover object-center" data-alt="Students participating in a vibrant cultural dragon dance during a school festival. The scene is brightly lit with warm sunlight, capturing dynamic movement and expressions of joy. High-quality educational environment emphasizing multicultural integration and traditional heritage in a modern setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2z1xiB4ceTCJJT_-N-y4-y4lFFRv6VuK7A_6K3sIjZbwItZyk1RY02OnVV69C89_jdII-OFckDeW4nYwZI8r2gvTGubRnxFXntTNtdslcw9vn84lmBgqqfyN55PHsjwJhNqRJOaNapcpUx2Bvt1yK3btdl6iQi0wVT_BdBkU10OgB8TrtAw8YWk0Pv_wsyIWENEBVDz8WpSn1ms_VucRW0T__0mCFFvMGlZUhtEmJtWUObrWIC-TevWZcUsfVmldaciRq0yQ40q_a">
<div class="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-transparent"></div>
</div>
<div class="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl flex flex-col items-start text-left">
<span class="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-full mb-6 uppercase tracking-widest shadow-sm">
                    Est. 1974
                </span>
<h1 class="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-surface max-w-3xl mb-6">
                    Learning Chinese,<br>Connecting Cultures
                </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
                    Sydney Chinese School has been serving the community since 1974, providing high-caliber bilingual education in a nurturing, professional environment.
                </p>
<div class="flex flex-col sm:flex-row gap-4">
<a class="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-md text-label-md rounded-full hover:bg-primary-container transition-colors duration-300 shadow-sm hover:shadow-md" href="#">
                        Enroll Now
                        <span class="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
</a>
<a class="inline-flex items-center justify-center px-8 py-4 border-2 border-outline-variant text-primary font-label-md text-label-md rounded-full hover:bg-surface-variant transition-colors duration-300" href="#">
                        Learn More
                    </a>
</div>
</div>
</section>
<!-- Quick Info Cards -->
<section class="py-stack-xl bg-surface-container-low relative -mt-10 z-20 rounded-t-[32px]">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter fade-in-up visible">
<!-- Card 1 -->
<div class="bg-surface rounded-card p-6 shadow-ambient hover:shadow-ambient-hover transition-all duration-300 flex flex-col items-center text-center group border-t-4 border-transparent hover:border-secondary-container">
<div class="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
<span class="material-symbols-outlined text-3xl text-primary">history_edu</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Established 1974</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Decades of excellence in heritage language education.</p>
</div>
<!-- Card 2 -->
<div class="bg-surface rounded-card p-6 shadow-ambient hover:shadow-ambient-hover transition-all duration-300 flex flex-col items-center text-center group border-t-4 border-transparent hover:border-secondary-container">
<div class="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
<span class="material-symbols-outlined text-3xl text-primary">forum</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Community Language</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Fostering deep connections through bilingual communication.</p>
</div>
<!-- Card 3 -->
<div class="bg-surface rounded-card p-6 shadow-ambient hover:shadow-ambient-hover transition-all duration-300 flex flex-col items-center text-center group border-t-4 border-transparent hover:border-secondary-container">
<div class="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
<span class="material-symbols-outlined text-3xl text-primary">school</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Experienced Teachers</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Dedicated professionals committed to student success.</p>
</div>
<!-- Card 4 -->
<div class="bg-surface rounded-card p-6 shadow-ambient hover:shadow-ambient-hover transition-all duration-300 flex flex-col items-center text-center group border-t-4 border-transparent hover:border-secondary-container">
<div class="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
<span class="material-symbols-outlined text-3xl text-primary">location_city</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Multiple Campuses</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Convenient locations serving the broader Sydney area.</p>
</div>
</div>
</div>
</section>
<!-- News & Events Section -->
<section class="py-stack-xl bg-surface">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div class="flex justify-between items-end mb-10 fade-in-up visible">
<div>
<h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-2">News &amp; Events</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">Stay updated with the latest from Sydney Chinese School.</p>
</div>
<a class="hidden md:inline-flex items-center text-primary font-label-md text-label-md uppercase tracking-wider hover:text-primary-container transition-colors" href="#">
                    View All News <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter fade-in-up visible">
<!-- Event Card 1 -->
<div class="bg-surface-container-lowest rounded-card overflow-hidden shadow-ambient hover:shadow-ambient-hover transition-all duration-300 flex flex-col group border border-outline-variant/30">
<div class="p-6 flex flex-col h-full">
<div class="text-primary-fixed-dim font-label-md text-label-md mb-2 flex items-center gap-2">
<span class="material-symbols-outlined text-sm">event</span>
<span class="">Nov 15, 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">Annual AGM</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Join us for our Annual General Meeting to discuss the future direction of the school and elect the new committee.</p>
<a class="inline-flex items-center text-primary font-label-md text-label-md uppercase tracking-wider hover:text-primary-container transition-colors mt-auto" href="#">
                        Read More <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>
</div>
<!-- Event Card 2 -->
<div class="bg-surface-container-lowest rounded-card overflow-hidden shadow-ambient hover:shadow-ambient-hover transition-all duration-300 flex flex-col group border border-outline-variant/30">
<div class="p-6 flex flex-col h-full">
<div class="text-primary-fixed-dim font-label-md text-label-md mb-2 flex items-center gap-2">
<span class="material-symbols-outlined text-sm">campaign</span>
<span class="">Oct 28, 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">School Announcements</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Important updates regarding the upcoming semester schedule and new curriculum adjustments.</p>
<a class="inline-flex items-center text-primary font-label-md text-label-md uppercase tracking-wider hover:text-primary-container transition-colors mt-auto" href="#">
                        Read More <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>
</div>
<!-- Event Card 3 -->
<div class="bg-surface-container-lowest rounded-card overflow-hidden shadow-ambient hover:shadow-ambient-hover transition-all duration-300 flex flex-col group border border-outline-variant/30">
<div class="p-6 flex flex-col h-full">
<div class="text-primary-fixed-dim font-label-md text-label-md mb-2 flex items-center gap-2">
<span class="material-symbols-outlined text-sm">festival</span>
<span class="">Sep 10, 2024</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">Cultural Events</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">A vibrant celebration of the Mid-Autumn Festival featuring student performances and traditional crafts.</p>
<a class="inline-flex items-center text-primary font-label-md text-label-md uppercase tracking-wider hover:text-primary-container transition-colors mt-auto" href="#">
                        Read More <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
<a class="md:hidden mt-6 w-full inline-flex items-center justify-center text-primary font-label-md text-label-md uppercase tracking-wider border border-primary/30 py-3 rounded-full hover:bg-primary/5 transition-colors" href="#">
                View All News <span class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>
</section>
<!-- Why Choose Us -->
<section class="py-stack-xl bg-surface-container-low">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center fade-in-up visible">
<h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-12">Why Choose Us</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
<!-- Item 1 -->
<div class="flex flex-col items-center">
<div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
<span class="material-symbols-outlined text-4xl text-primary">auto_stories</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-4">Quality Teaching</h3>
<p class="font-body-md text-body-md text-on-surface-variant">We provide a rigorous and engaging curriculum delivered by highly qualified educators dedicated to language mastery.</p>
</div>
<!-- Item 2 -->
<div class="flex flex-col items-center">
<div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
<span class="material-symbols-outlined text-4xl text-primary">diversity_3</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-4">Strong Community</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Join a supportive network of families and learners who value cultural connection and lifelong friendships.</p>
</div>
<!-- Item 3 -->
<div class="flex flex-col items-center">
<div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
<span class="material-symbols-outlined text-4xl text-primary">account_balance</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-4">Cultural Heritage</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Deepen your understanding of traditional arts, festivals, and history alongside language instruction.</p>
</div>
</div>
</div>
</section>
<!-- Programs Bento Grid -->

<!-- School Life Gallery -->
<section class="py-stack-xl bg-surface-container-low">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop fade-in-up visible">
<h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-10 text-center">School Life</h2>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<div class="col-span-2 row-span-2 rounded-card overflow-hidden h-64 md:h-auto">
<img alt="Classroom Activities" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyGQyubUdiDiofpIOgWTIL7S6M1CickSMILsRj73kHav4D4VgLNDGPEABzvPBOwE99p7QcNnLUhwR5IwB2G7vh2VIyj9huWB4-sZZP725-qaWoKsIi181yQWJPTXYpvi1cG8LpI7oKt-JE1pSUwwVyvUBXAQ7PMGtHzcwaazyktTCVRFG1dM492Kl30kg2RRpb8BIK5yqqBtWoCb5vcEcjqbda8TfIy9oQ_FFLoJ1-_is80ydHCX_Z74mpL3OMwWGL2o1yDE6So9Hh">
</div>
<div class="rounded-card overflow-hidden h-48">
<img alt="CNY Celebrations" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFHBCG5Otqlv2UGsyEIstQBCu9j4ptCth5yH8XsUA6dlHuAXVcpZ_OBza0qFNRjechLmjdjJezxOGWKP7qpWFCFBSuVTl4OZLNHuLesMuknVs7yehf6Jufl7TqeD7KW7xGTJRjuVbvx4gHL8RJQfpCQSLsjXf9lzrqms6bwous4X1hoO2n3ID9Fg4c4-yvzy__bYjCsQLfRY-XuLsN8ZV8ZX5Fe6dumDfb_0cWoVQTUQvkEh5yZrmEZO60wtylq7IP0ssOKt3ilSIG">
</div>
<div class="rounded-card overflow-hidden h-48">
<img alt="Performances" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOlk8JWeKFk5c4FM9QXWNGpYXRpEFsvSh1ZD9pKSGGPSkNkinVYlR9Tpv4_NdBh0ZKXCX4rz4csuXDT525cOP8l_QtSL6ow8K5p-UvcARlGCIpJvFUXPbRzK78t4xSppnk3YZKUsyK7JMCTiXFzqlMXh_IerCUtW4akDuEjq5wL3hyC7-DMBDLupYgdH25flMnpRFlmDERxhzH9Img_LFgZZzoATaTfOJzfRW8fisaOVZHjzjgYshMJED2I7LnKdOd8c6hw_v00dsd">
</div>
<div class="col-span-2 md:col-span-2 rounded-card overflow-hidden h-48">
<img alt="Cultural Activities" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8F1rT249qeLEQQb0v6ECjnxricrrJNatyXP-BXhx3kCoCH5zKcSWcn3qdjCo0TX4iMlOKJVrbX_iN_lAMzC9qn1SSZdqmYU34FVkY2neC7qS7miCfM_uQ88funx0KH6JkQXh4kPVDuFBchUHSVd_B6Nq5fMXFeFJCvLrOd67_DeTJmyJaFcOI_uTTl6j-QlWDSnvTLcVu_9sGKGT6CBPZl4ZmGhoXMgp0PjlqF2z4e343zxj882b9acuzu_22V8X0RyI-bBPTMeeR">
</div>
</div>
</div>
</section>
<!-- Testimonials -->
<section class="py-stack-xl bg-surface">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop fade-in-up visible">
<h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-10 text-center">Parent &amp; Student Voices</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="bg-surface-container-highest p-8 rounded-card shadow-ambient relative">
<span class="material-symbols-outlined text-4xl text-primary/20 absolute top-4 left-4">format_quote</span>
<p class="font-body-md text-body-md text-on-surface-variant italic mb-6 relative z-10 mt-4">"The dedication of the teachers here is unmatched. My children have not only learned the language but truly embraced their cultural roots."</p>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-outline-variant flex items-center justify-center font-bold text-primary">M</div>
<div>
<h4 class="font-headline-sm text-sm text-on-surface">Mrs. Chen</h4>
<p class="font-label-md text-xs text-on-surface-variant">Parent</p>
</div>
</div>
</div>
<div class="bg-surface-container-highest p-8 rounded-card shadow-ambient relative">
<span class="material-symbols-outlined text-4xl text-primary/20 absolute top-4 left-4">format_quote</span>
<p class="font-body-md text-body-md text-on-surface-variant italic mb-6 relative z-10 mt-4">"Studying for my HSC here gave me the confidence and skills I needed to excel. The supportive environment made all the difference."</p>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-outline-variant flex items-center justify-center font-bold text-primary">J</div>
<div>
<h4 class="font-headline-sm text-sm text-on-surface">Jason W.</h4>
<p class="font-label-md text-xs text-on-surface-variant">HSC Student</p>
</div>
</div>
</div>
<div class="bg-surface-container-highest p-8 rounded-card shadow-ambient relative">
<span class="material-symbols-outlined text-4xl text-primary/20 absolute top-4 left-4">format_quote</span>
<p class="font-body-md text-body-md text-on-surface-variant italic mb-6 relative z-10 mt-4">"The adult classes are perfectly paced for working professionals. I've been able to apply what I learn directly in my business meetings."</p>
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-full bg-outline-variant flex items-center justify-center font-bold text-primary">S</div>
<div>
<h4 class="font-headline-sm text-sm text-on-surface">Sarah T.</h4>
<p class="font-label-md text-xs text-on-surface-variant">Adult Learner</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Enrollment Banner CTA -->
<section class="py-stack-xl px-margin-mobile md:px-margin-desktop fade-in-up visible">
<div class="max-w-container-max mx-auto rounded-[32px] bg-primary relative overflow-hidden shadow-ambient">
<!-- Background Image -->
<img alt="Students collaborating" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHDUs3fNEPbFhafnLDfluJpgWDx_F-NeVoUBZyUvifdiVRT44N_PVnxEV1c0LJ-9mNWvDFLM0EuO9jXsbxw7Kr8Qedxd9aD6bAftxrtFrDj7dR-2absAjHa7eqIN3HsaZXtLGDwr8ltschzRTnCWXMIA2AeCyD3ZYU7pv3zP17nJ6MGgHjXZF-LiqN5GIcK7rkZtc-k8mXCOdudm_wX2bQRr1jHpE3bzzV7WEkVW7aGRWovr4mPyVUNEW3396wkFfMUxtoAMGv33Mm">
<!-- Abstract Pattern Overlay -->
<div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<div class="relative z-10 px-6 py-16 md:py-24 text-center max-w-3xl mx-auto flex flex-col items-center">
<span class="material-symbols-outlined text-5xl text-secondary-container mb-6">how_to_reg</span>
<h2 class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-primary mb-4">
                        Join Our Community
                    </h2>
<p class="font-body-lg text-body-lg text-primary-fixed-dim mb-10">
                        Enrollment for the upcoming academic year is now open. Secure your place in Sydney's premier Chinese language program.
                    </p>
<a class="inline-flex items-center justify-center px-10 py-4 bg-on-primary text-primary font-label-md text-label-md rounded-full hover:bg-surface-variant transition-colors duration-300 shadow-md" href="#">
                        Start Enrollment
                    </a>
</div>
</div>
</section>
</main>
<!-- Footer Component -->
<footer class="w-full mt-stack-lg bg-surface-container-highest border-t border-outline-variant/20">
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto">
<!-- Brand Column -->
<div class="col-span-1 md:col-span-1 flex flex-col gap-4">
<div class="font-headline-md text-headline-md font-semibold text-primary flex items-center gap-2">
<span class="material-symbols-outlined fill text-2xl">school</span>
<span class="">SCS</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">
                    Learning Chinese,<br>Connecting Cultures.
                </p>
<p class="font-body-md text-body-md text-on-surface-variant mt-2 text-sm">
                    123 Education Lane,<br>Sydney, NSW 2000, Australia
                </p>
<div class="flex gap-4 mt-2">
<a aria-label="Facebook" class="text-on-surface-variant hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">facebook</span>
</a>
<a aria-label="Instagram" class="text-on-surface-variant hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">photo_camera</span>
</a>
<a aria-label="Twitter" class="text-on-surface-variant hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">forum</span>
</a>
</div>
</div>
<!-- Links -->
<div class="col-span-1 md:col-span-2 flex flex-wrap gap-x-8 gap-y-4 pt-2">
<a class="text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 opacity-90 hover:opacity-100 transition-all duration-200 font-body-md text-body-md" href="#">Contact Us</a>
<a class="text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 opacity-90 hover:opacity-100 transition-all duration-200 font-body-md text-body-md" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 opacity-90 hover:opacity-100 transition-all duration-200 font-body-md text-body-md" href="#">Terms of Service</a>
<a class="text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 opacity-90 hover:opacity-100 transition-all duration-200 font-body-md text-body-md" href="#">Campus Locations</a>
<a class="text-on-surface-variant hover:text-primary hover:underline decoration-primary underline-offset-4 opacity-90 hover:opacity-100 transition-all duration-200 font-body-md text-body-md" href="#">Social Media</a>
</div>
<!-- Copyright -->
<div class="col-span-1 md:col-span-1 flex items-end justify-start md:justify-end mt-8 md:mt-0">
<p class="font-body-md text-body-md text-on-surface-variant text-sm">
                    © 2024 Sydney Chinese School. All rights reserved.
                </p>
</div>
</div>
</footer>
<script>
        // Simple Intersection Observer for scroll animations
        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-up').forEach((el) => {
                observer.observe(el);
            });
        });
    </script>


</body></html>