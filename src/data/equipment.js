// Equipment and Technology Data
export const equipment = [
    {
        id: 'soprano-ice',
        name: 'Soprano ICE Platinum',
        category: 'Laser Hair Reduction',
        image: '/images/equipment/soprano-ice.jpg',
        shortDescription: 'FDA-approved triple wavelength diode laser for permanent hair reduction.',
        description: 'The Soprano ICE Platinum represents the gold standard in laser hair removal technology. Combining three laser wavelengths (Alexandrite, Diode, and Nd:YAG) with breakthrough ICE™ cooling technology, it delivers virtually painless treatment on all skin types year-round.',
        advantages: [
            'Triple wavelength technology for all skin types',
            'ICE™ cooling for pain-free treatment',
            'Fast treatment times with large spot size',
            'Effective on fine and coarse hair',
            'Safe for tanned skin'
        ],
        specifications: {
            wavelengths: '755nm, 810nm, 1064nm',
            spotSize: 'Up to 4cm²',
            repetitionRate: 'Up to 20 Hz',
            cooling: 'Continuous contact cooling'
        },
        suitableFor: ['Laser Hair Reduction', 'All Skin Types', 'Face & Body']
    },
    {
        id: 'rf-skin-tightening',
        name: 'Venus Legacy RF System',
        category: 'Skin Tightening',
        image: '/images/equipment/venus-legacy.jpg',
        shortDescription: 'Multi-polar radiofrequency for skin tightening and body contouring.',
        description: 'Venus Legacy combines Multi-Polar Radio Frequency and Pulsed Electro Magnetic Fields to deliver safe and effective treatments for skin tightening, wrinkle reduction, and body contouring without surgery or downtime.',
        advantages: [
            'Non-invasive skin tightening',
            'Reduces wrinkles and fine lines',
            'Body contouring and cellulite reduction',
            'Comfortable warm massage sensation',
            'No downtime'
        ],
        specifications: {
            technology: 'Multi-Polar RF + PEMF',
            depth: 'Up to 25mm',
            frequency: '1MHz',
            treatment: 'Face, neck, body'
        },
        suitableFor: ['Anti-Aging', 'Skin Tightening', 'Body Contouring', 'Cellulite']
    },
    {
        id: 'hydrafacial-md',
        name: 'HydraFacial MD Tower',
        category: 'Medical Facial',
        image: '/images/equipment/hydrafacial.jpg',
        shortDescription: 'The ultimate facial device for cleansing, exfoliation, extraction, and hydration.',
        description: 'HydraFacial MD is the only hydradermabrasion procedure that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection simultaneously. Using patented Vortex-Fusion technology, it delivers superior results without discomfort.',
        advantages: [
            'Patented vortex technology',
            'Customizable with boosters',
            'Immediate visible results',
            'No downtime or irritation',
            'Suitable for all skin types'
        ],
        specifications: {
            technology: 'Vortex-Fusion',
            steps: '4-step process',
            boosters: 'Available for specific concerns',
            treatment: 'Face, neck, décolletage'
        },
        suitableFor: ['All Skin Types', 'Acne', 'Anti-Aging', 'Pigmentation', 'Hydration']
    },
    {
        id: 'fractional-laser',
        name: 'Fractional CO2 Laser',
        category: 'Laser Rejuvenation',
        image: '/images/equipment/fractional-laser.jpg',
        shortDescription: 'Advanced fractional laser for skin resurfacing and scar treatment.',
        description: 'Our Fractional CO2 Laser delivers precise micro-injuries to the skin, triggering the bodys natural healing process and collagen production. It effectively treats acne scars, wrinkles, sun damage, and uneven skin texture.',
        advantages: [
            'Dramatic skin rejuvenation',
            'Treats deep acne scars',
            'Stimulates collagen production',
            'Customizable treatment depth',
            'Long-lasting results'
        ],
        specifications: {
            wavelength: '10,600nm',
            pattern: 'Fractional micro-columns',
            depth: 'Adjustable 0.1-4mm',
            cooling: 'Integrated cooling system'
        },
        suitableFor: ['Acne Scars', 'Wrinkles', 'Skin Resurfacing', 'Sun Damage', 'Stretch Marks']
    }
];

// Get equipment by ID
export const getEquipmentById = (id) => {
    return equipment.find(eq => eq.id === id);
};

// Get equipment by category
export const getEquipmentByCategory = (category) => {
    return equipment.filter(eq => eq.category === category);
};
