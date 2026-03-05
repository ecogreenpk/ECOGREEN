export const services = [
    {
        id: 'quote',
        title: 'Request a Quote',
        icon: 'request_quote',
        description: 'Get a customized, transparent pricing model tailored precisely to your facility\'s volume and requirements.',
        details: [
            'Rapid response from our commercial team',
            'Volume-based scalable pricing',
            'Full regulatory compliance guidance'
        ],
        link: '/get-quote',
        linkText: 'Get a Quote →',
        leaf: true
    },
    {
        id: 'hazardous',
        title: 'Hazardous Waste Handling',
        icon: 'dangerous',
        description: 'Secure, compliant, and tracked disposal of sensitive and hazardous industrial materials.',
        details: [
            'ADR-licensed transport fleet',
            'End-to-end audit trails & certificates',
            'On-site risk assessment & staff training'
        ],
        link: '/hazardous-waste',
        linkText: 'Explore →',
        leaf: true
    },
    {
        id: 'nonhaz',
        title: 'Non-Hazardous Waste',
        icon: 'recycling',
        description: 'Collection, transportation, storage and handling/disposal from various Companies.',
        details: [
            'Disposal based on the 3R system (Reduce, Reuse, Recycle)',
            'Conversion of food waste to compost',
            'Returning nutrients back into the environment'
        ],
        link: '/non-hazardous-waste',
        linkText: 'Explore →',
        leaf: true
    }
];

export const galleryImages = [
    { src: '/images/pictures/facility/machine cu.png', category: 'Machinery', alt: 'Chemical Treatment Unit', width: 800, height: 450 },
    { src: '/images/pictures/facility/shredders.png', category: 'Machinery', alt: 'Industrial Shredders', width: 800, height: 450 },
    { src: '/images/pictures/facility/machinery.png', category: 'Machinery', alt: 'Heavy Duty Machinery', width: 800, height: 450 },
    { src: '/images/pictures/facility/sh.png', category: 'Machinery', alt: 'System Controls', width: 800, height: 450 },

    { src: '/images/pictures/Hazarduous/Incinetration plant.webp', category: 'Hazardous', alt: 'Incineration Plant', width: 800, height: 450 },
    { src: '/images/pictures/Hazarduous/abestos.jfif', category: 'Hazardous', alt: 'Asbestos Handling', width: 800, height: 450 },
    { src: '/images/pictures/Hazarduous/electronic waste.jfif', category: 'Hazardous', alt: 'Electronic Waste', width: 800, height: 450 },
    { src: '/images/pictures/Hazarduous/incinetrating.jfif', category: 'Hazardous', alt: 'Incinerating Station', width: 800, height: 450 },
    { src: '/images/pictures/Hazarduous/medical waste.jfif', category: 'Hazardous', alt: 'Medical Waste Disposal', width: 800, height: 450 },
    { src: '/images/pictures/Hazarduous/oil waste.jfif', category: 'Hazardous', alt: 'Oil Waste Management', width: 800, height: 450 },
    { src: '/images/pictures/Hazarduous/stp.jfif', category: 'Hazardous', alt: 'Sewage Treatment Plant', width: 800, height: 450 },

    { src: '/images/pictures/facility/dump.png', category: 'Logistics', alt: 'Material Storage', width: 800, height: 450 },
    { src: '/images/pictures/facility/dumping.png', category: 'Logistics', alt: 'Sorting Floor', width: 800, height: 450 },
    { src: '/images/pictures/NON hazarduous/godown.png', category: 'Logistics', alt: 'Recycling Warehouse', width: 800, height: 450 },
    { src: '/images/pictures/NON hazarduous/godown2.png', category: 'Logistics', alt: 'Inventory Management', width: 800, height: 450 },
    { src: '/images/pictures/NON hazarduous/godown3.png', category: 'Logistics', alt: 'Logistics Hub', width: 800, height: 450 },

    { src: '/images/pictures/NON hazarduous/cardb.png', category: 'Materials', alt: 'Cardboard Processing', width: 800, height: 450 },
    { src: '/images/pictures/NON hazarduous/scrap tin.png', category: 'Materials', alt: 'Scrap Metal Recovery', width: 800, height: 450 },
    { src: '/images/pictures/NON hazarduous/scrapA.png', category: 'Materials', alt: 'Industrial Scrap', width: 800, height: 450 },
    { src: '/images/pictures/NON hazarduous/shreded.png', category: 'Materials', alt: 'Shredded Recyclables', width: 800, height: 450 },

    { src: '/images/pictures/safety/safety1.png', category: 'Safety', alt: 'Safety Protocol', width: 800, height: 450 },
    { src: '/images/pictures/safety/safety2.png', category: 'Safety', alt: 'Protective Equipment', width: 800, height: 450 },
    { src: '/images/pictures/safety/safety3.png', category: 'Safety', alt: 'Staff Monitoring', width: 800, height: 450 },
    { src: '/images/pictures/facility/monitoring.png', category: 'Safety', alt: 'Operational Safety', width: 800, height: 450 }
];

export const infoLinks = [
    { to: '/about', title: 'About Us', description: 'Learn about EcoGreen\'s mission and commitment to excellence' },
    { to: '/mission-vision', title: 'Mission & Vision', description: 'Discover our ESG commitments and zero-waste goals' },
    { to: '/facilities', title: 'Our Facilities', description: 'State-of-the-art infrastructure for waste management' },
    { to: '/certificates', title: 'Certificates & Docs', description: 'View our certifications and documentation' },
    { to: '/ceo', title: 'CEO\'s Perspective', description: 'Visionary leadership and strategic direction' },
    { to: '/blog', title: 'Blog', description: 'Latest updates and insights from EcoGreen' }
];
