// Skin Treatments Data - From Paavai Hospital
export const skinTreatments = [
    {
        id: 'photo-facial',
        title: 'Photo Facial (IPL Therapy)',
        shortDescription: 'Non-invasive light therapy targeting pigmentation, redness, and signs of aging.',
        description: 'A non-invasive treatment using high-intensity pulses of light to target pigmentation, redness, and visible signs of aging by stimulating collagen production for clearer, more youthful skin.',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        duration: '30-45 mins',
        sessions: '4-6 sessions',
        recovery: 'Minimal',
        benefits: [
            'Reduces pigmentation and sun spots',
            'Improves skin texture and tone',
            'Stimulates collagen production',
            'Reduces redness and rosacea',
            'Non-invasive with no downtime'
        ],
        procedure: [
            { step: 1, title: 'Consultation', description: 'Skin assessment and treatment planning' },
            { step: 2, title: 'Preparation', description: 'Cleansing and application of cooling gel' },
            { step: 3, title: 'IPL Treatment', description: 'Targeted light pulses applied to treatment areas' },
            { step: 4, title: 'Soothing', description: 'Cooling and calming serums applied' },
            { step: 5, title: 'Protection', description: 'SPF application and aftercare guidance' }
        ],
        technology: 'Intense Pulsed Light (IPL), Cooling Technology',
        faqs: [
            { question: 'How many sessions do I need?', answer: 'Typically 4-6 sessions are recommended, spaced 3-4 weeks apart.' },
            { question: 'Is IPL painful?', answer: 'Most patients experience a slight warming sensation. Cooling technology ensures comfort.' },
            { question: 'When will I see results?', answer: 'Initial results visible within 1-2 weeks, with continued improvement over sessions.' }
        ]
    },
    {
        id: 'skin-rejuvenation',
        title: 'Skin Rejuvenation',
        shortDescription: 'Restore youthful vitality by addressing sun damage, dullness, and uneven texture.',
        description: 'Restoration of youthful vitality by addressing sun damage, dullness, and uneven texture through various procedures like lasers, microneedling, and chemical peels for radiant, refreshed skin.',
        image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&q=80',
        duration: '45-60 mins',
        sessions: '4-8 sessions',
        recovery: '24-48 hours',
        benefits: [
            'Restores youthful skin appearance',
            'Addresses sun damage effectively',
            'Improves skin texture and tone',
            'Reduces fine lines and wrinkles',
            'Stimulates natural collagen production'
        ],
        procedure: [
            { step: 1, title: 'Assessment', description: 'Comprehensive skin analysis and treatment selection' },
            { step: 2, title: 'Preparation', description: 'Skin cleansing and numbing if required' },
            { step: 3, title: 'Treatment', description: 'Customized rejuvenation procedure' },
            { step: 4, title: 'Recovery', description: 'Post-treatment care and soothing' },
            { step: 5, title: 'Follow-up', description: 'Progress monitoring and maintenance planning' }
        ],
        technology: 'Laser Therapy, Microneedling, Chemical Peels',
        faqs: [
            { question: 'Which treatment is right for me?', answer: 'Our dermatologist will assess your skin and recommend the most suitable option.' },
            { question: 'How long is the recovery?', answer: 'Recovery varies from minimal to 3-5 days depending on the treatment intensity.' },
            { question: 'Are results permanent?', answer: 'Results are long-lasting with proper skincare and maintenance sessions.' }
        ]
    },
    {
        id: 'laser-hair-removal',
        title: 'Laser Hair Removal',
        shortDescription: 'Safe, long-term solution for reducing unwanted hair using concentrated light energy.',
        description: 'A safe, long-term solution for reducing unwanted hair using concentrated light energy to disable hair follicles, providing smooth, hair-free skin with minimal discomfort.',
        image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
        duration: '15-60 mins',
        sessions: '6-8 sessions',
        recovery: 'None',
        benefits: [
            'Permanent hair reduction',
            'Safe for all skin types',
            'Fast treatment sessions',
            'Minimal discomfort with cooling',
            'No ingrown hairs or razor bumps'
        ],
        procedure: [
            { step: 1, title: 'Consultation', description: 'Skin and hair type analysis, patch test' },
            { step: 2, title: 'Preparation', description: 'Treatment area shaving and cooling gel' },
            { step: 3, title: 'Laser Application', description: 'Precise laser targeting of hair follicles' },
            { step: 4, title: 'Soothing', description: 'Cooling lotion application' },
            { step: 5, title: 'Aftercare', description: 'Sun protection and care instructions' }
        ],
        technology: 'Diode Laser, Nd:YAG Laser, Cooling Technology',
        faqs: [
            { question: 'How many sessions for permanent results?', answer: '6-8 sessions spaced 4-6 weeks apart provide 80-90% permanent reduction.' },
            { question: 'Is it painful?', answer: 'Our cooling technology makes treatment comfortable with minimal sensation.' },
            { question: 'Can all areas be treated?', answer: 'Yes, we treat face, underarms, arms, legs, bikini, and full body.' }
        ]
    },
    {
        id: 'pigmentation-treatment',
        title: 'Pigmentation Treatment',
        shortDescription: 'Advanced therapies to lighten dark spots, melasma, and uneven skin tone.',
        description: 'Advanced therapies including creams, peels, and lasers designed to lighten dark spots, melasma, and uneven skin tone caused by excess melanin for clear, even-toned skin.',
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80',
        duration: '30-45 mins',
        sessions: '4-6 sessions',
        recovery: 'Minimal',
        benefits: [
            'Reduces dark spots and patches',
            'Treats melasma effectively',
            'Evens overall skin tone',
            'Brightens dull complexion',
            'Prevents future pigmentation'
        ],
        procedure: [
            { step: 1, title: 'Diagnosis', description: 'Pigment type and depth assessment' },
            { step: 2, title: 'Treatment Plan', description: 'Customized treatment protocol creation' },
            { step: 3, title: 'Treatment', description: 'Laser, peel, or combination therapy' },
            { step: 4, title: 'Brightening', description: 'Depigmenting agents application' },
            { step: 5, title: 'Sun Protection', description: 'SPF guidance and lifestyle advice' }
        ],
        technology: 'Q-Switched Laser, Chemical Peels, Medical-Grade Creams',
        faqs: [
            { question: 'Can melasma be completely cured?', answer: 'Melasma can be significantly improved and controlled with ongoing care.' },
            { question: 'Is treatment safe for dark skin?', answer: 'Yes, we customize treatments for all Indian skin types.' },
            { question: 'How to prevent recurrence?', answer: 'Strict sun protection and maintenance treatments help prevent recurrence.' }
        ]
    },
    {
        id: 'tattoo-removal',
        title: 'Tattoo Removal',
        shortDescription: 'Medical-grade laser procedure to break down and eliminate unwanted tattoo ink.',
        description: 'Medical-grade laser procedure that breaks down and eliminates unwanted tattoo ink using advanced Q-switched and Picosecond lasers for effective, safe tattoo removal.',
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80',
        duration: '15-30 mins',
        sessions: '6-12 sessions',
        recovery: '5-7 days',
        benefits: [
            'Effective removal of all ink colors',
            'Safe for all skin types',
            'Minimal scarring risk',
            'Treats professional and amateur tattoos',
            'Progressive fading over sessions'
        ],
        procedure: [
            { step: 1, title: 'Assessment', description: 'Tattoo size, color, and depth evaluation' },
            { step: 2, title: 'Numbing', description: 'Local anesthesia for comfort' },
            { step: 3, title: 'Laser Treatment', description: 'Targeted laser pulses break down ink' },
            { step: 4, title: 'Wound Care', description: 'Bandaging and healing instructions' },
            { step: 5, title: 'Follow-up', description: 'Healing monitoring and next session planning' }
        ],
        technology: 'Q-Switched Laser, Picosecond Laser',
        faqs: [
            { question: 'How many sessions for complete removal?', answer: '6-12 sessions depending on tattoo size, color, and age.' },
            { question: 'Does it hurt?', answer: 'There\'s some discomfort, but numbing cream makes it manageable.' },
            { question: 'Will there be scarring?', answer: 'With proper care, scarring is minimal to none.' }
        ]
    },
    {
        id: 'chemical-peel',
        title: 'Chemical Peel Treatment',
        shortDescription: 'Skin-resurfacing procedure revealing brighter, smoother skin beneath.',
        description: 'A skin-resurfacing procedure using specialized solutions to exfoliate dead skin cells and reveal brighter, smoother skin beneath, treating various skin concerns effectively.',
        image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80',
        duration: '30-45 mins',
        sessions: '3-6 sessions',
        recovery: '3-7 days',
        benefits: [
            'Removes dead skin layers',
            'Reduces acne and acne scars',
            'Improves pigmentation',
            'Minimizes fine lines',
            'Enhances skin radiance'
        ],
        procedure: [
            { step: 1, title: 'Skin Prep', description: 'Pre-peel preparation routine' },
            { step: 2, title: 'Cleansing', description: 'Thorough cleansing and degreasing' },
            { step: 3, title: 'Peel Application', description: 'Controlled chemical solution application' },
            { step: 4, title: 'Neutralization', description: 'Neutralizing and soothing the skin' },
            { step: 5, title: 'Protection', description: 'Post-peel care and sun protection' }
        ],
        technology: 'Glycolic Acid, TCA, Salicylic Acid, Jessner\'s Peel',
        faqs: [
            { question: 'Which peel is right for me?', answer: 'Our dermatologist selects based on your skin type and concerns.' },
            { question: 'How much peeling occurs?', answer: 'From mild flaking to visible peeling depending on peel strength.' },
            { question: 'Can I do peels regularly?', answer: 'Yes, with appropriate intervals for skin recovery.' }
        ]
    },
    {
        id: 'intralesional-therapy',
        title: 'Intralesional Therapy',
        shortDescription: 'Precision treatment with medication injections directly into skin lesions.',
        description: 'Precision treatment involving medication injections directly into skin lesions like keloids, alopecia patches, and cysts for targeted, faster results with minimal side effects.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
        duration: '15-30 mins',
        sessions: '3-6 sessions',
        recovery: 'Minimal',
        benefits: [
            'Direct targeted treatment',
            'Faster results than topical therapy',
            'Effective for keloids and scars',
            'Treats alopecia patches',
            'Minimal systemic side effects'
        ],
        procedure: [
            { step: 1, title: 'Assessment', description: 'Lesion evaluation and treatment planning' },
            { step: 2, title: 'Preparation', description: 'Area cleaning and marking' },
            { step: 3, title: 'Injection', description: 'Precise medication delivery into lesion' },
            { step: 4, title: 'Observation', description: 'Monitoring for immediate reactions' },
            { step: 5, title: 'Follow-up', description: 'Progress tracking and repeat sessions' }
        ],
        technology: 'Corticosteroid Injections, Platelet-Rich Plasma',
        faqs: [
            { question: 'What conditions can it treat?', answer: 'Keloids, hypertrophic scars, alopecia areata, cysts, and acne nodules.' },
            { question: 'Is it painful?', answer: 'There\'s mild discomfort, but injections are quick.' },
            { question: 'How many sessions needed?', answer: 'Usually 3-6 sessions at 4-6 week intervals.' }
        ]
    },
    {
        id: 'cryotherapy',
        title: 'Cryotherapy',
        shortDescription: 'Quick procedure using liquid nitrogen to freeze and remove skin growths.',
        description: 'A quick procedure using liquid nitrogen to freeze and remove unwanted skin growths like warts, skin tags, and benign age spots safely and effectively.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
        duration: '10-20 mins',
        sessions: '1-3 sessions',
        recovery: '1-2 weeks',
        benefits: [
            'Quick and effective treatment',
            'Removes warts and skin tags',
            'Treats benign lesions safely',
            'Minimal scarring',
            'No anesthesia required'
        ],
        procedure: [
            { step: 1, title: 'Examination', description: 'Lesion identification and assessment' },
            { step: 2, title: 'Preparation', description: 'Area cleaning' },
            { step: 3, title: 'Freezing', description: 'Liquid nitrogen application' },
            { step: 4, title: 'Thawing', description: 'Controlled thaw cycle' },
            { step: 5, title: 'Aftercare', description: 'Wound care instructions' }
        ],
        technology: 'Liquid Nitrogen Cryotherapy',
        faqs: [
            { question: 'What can cryotherapy remove?', answer: 'Warts, skin tags, age spots, seborrheic keratoses, and some precancerous lesions.' },
            { question: 'Does it hurt?', answer: 'Brief stinging sensation during freezing.' },
            { question: 'How long until it falls off?', answer: 'The frozen lesion typically falls off within 1-2 weeks.' }
        ]
    },
    {
        id: 'microneedling-rf',
        title: 'Microneedling RF',
        shortDescription: 'Minimally invasive treatment combining microneedling with radiofrequency energy.',
        description: 'A minimally invasive rejuvenation treatment combining microneedling with radiofrequency energy to tighten skin, improve texture, and effectively treat scars and fine lines.',
        image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
        duration: '45-60 mins',
        sessions: '3-4 sessions',
        recovery: '2-3 days',
        benefits: [
            'Skin tightening and lifting',
            'Reduces wrinkles and fine lines',
            'Improves acne scars',
            'Minimizes pore size',
            'Stimulates collagen production'
        ],
        procedure: [
            { step: 1, title: 'Consultation', description: 'Skin assessment and treatment planning' },
            { step: 2, title: 'Numbing', description: 'Topical anesthesia application' },
            { step: 3, title: 'Treatment', description: 'Microneedling RF device application' },
            { step: 4, title: 'Soothing', description: 'Cooling mask and serum application' },
            { step: 5, title: 'Recovery', description: 'Post-treatment care instructions' }
        ],
        technology: 'Fractional RF Microneedling, Gold-Plated Needles',
        faqs: [
            { question: 'How is it different from regular microneedling?', answer: 'RF energy adds skin tightening benefits for more dramatic results.' },
            { question: 'When will I see results?', answer: 'Initial improvement in 1-2 weeks; peak results after 3 months.' },
            { question: 'Is there downtime?', answer: 'Mild redness for 2-3 days; makeup can be applied after 24 hours.' }
        ]
    },
    {
        id: 'acne-scar-surgery',
        title: 'Acne Scar Surgery',
        shortDescription: 'Specialized surgical techniques to treat deep, structural skin damage from acne.',
        description: 'Specialized surgical techniques like subcision or punch excision to treat deep, structural skin damage and scars left by severe acne for smoother, clearer skin.',
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
        duration: '30-60 mins',
        sessions: '1-3 sessions',
        recovery: '5-7 days',
        benefits: [
            'Treats deep boxcar and ice pick scars',
            'Permanent improvement',
            'Releases bound-down scars',
            'Can be combined with other treatments',
            'Significant texture improvement'
        ],
        procedure: [
            { step: 1, title: 'Assessment', description: 'Detailed scar mapping and grading' },
            { step: 2, title: 'Anesthesia', description: 'Local anesthesia administration' },
            { step: 3, title: 'Surgery', description: 'Subcision or punch technique' },
            { step: 4, title: 'Wound Care', description: 'Dressing application' },
            { step: 5, title: 'Healing', description: 'Recovery monitoring and follow-up' }
        ],
        technology: 'Subcision, Punch Excision, TCA Cross',
        faqs: [
            { question: 'Which scars need surgery?', answer: 'Deep ice pick, boxcar, and tethered rolling scars respond best.' },
            { question: 'Is it painful?', answer: 'Local anesthesia ensures comfort during the procedure.' },
            { question: 'Can it be combined with lasers?', answer: 'Yes, combination treatment often gives best results.' }
        ]
    },
    {
        id: 'nail-surgery',
        title: 'Nail Surgery',
        shortDescription: 'Surgical solutions for functional and aesthetic nail disorders.',
        description: 'Surgical solutions for functional and aesthetic nail disorders, including ingrown toenails, chronic infections, and nail deformities for pain relief and restored appearance.',
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
        duration: '30-45 mins',
        sessions: '1 session',
        recovery: '2-4 weeks',
        benefits: [
            'Permanent cure for ingrown nails',
            'Relief from chronic pain',
            'Treats nail infections',
            'Corrects nail deformities',
            'Quick recovery'
        ],
        procedure: [
            { step: 1, title: 'Examination', description: 'Nail and surrounding tissue assessment' },
            { step: 2, title: 'Anesthesia', description: 'Nerve block for pain-free surgery' },
            { step: 3, title: 'Surgery', description: 'Nail plate removal or correction' },
            { step: 4, title: 'Matricectomy', description: 'Matrix destruction if needed for permanent cure' },
            { step: 5, title: 'Dressing', description: 'Sterile dressing and care instructions' }
        ],
        technology: 'Partial Nail Avulsion, Chemical Matricectomy',
        faqs: [
            { question: 'Is the procedure permanent?', answer: 'With matricectomy, recurrence is rare (under 5%).' },
            { question: 'When can I walk normally?', answer: 'Most patients walk immediately with proper footwear.' },
            { question: 'Will my nail look normal?', answer: 'The remaining nail grows back normally and looks natural.' }
        ]
    },
    {
        id: 'earlobe-repair',
        title: 'Earlobe Repair',
        shortDescription: 'Precise surgical procedure to correct torn, stretched, or split earlobes.',
        description: 'A precise surgical procedure to correct torn, stretched, or split earlobes, restoring their natural shape and symmetry for wearing earrings again.',
        image: 'https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?w=800&q=80',
        duration: '30-45 mins',
        sessions: '1 session',
        recovery: '1-2 weeks',
        benefits: [
            'Restores natural earlobe shape',
            'Minimal scarring',
            'Can re-pierce after healing',
            'Quick procedure',
            'Local anesthesia only'
        ],
        procedure: [
            { step: 1, title: 'Consultation', description: 'Assessment of tear type and repair plan' },
            { step: 2, title: 'Anesthesia', description: 'Local anesthetic injection' },
            { step: 3, title: 'Repair', description: 'Fresh edges created and sutured' },
            { step: 4, title: 'Closure', description: 'Precise suturing for minimal scarring' },
            { step: 5, title: 'Aftercare', description: 'Wound care and follow-up for suture removal' }
        ],
        technology: 'Microsurgical Repair Techniques',
        faqs: [
            { question: 'When can I wear earrings again?', answer: 'After 6-8 weeks, you can get re-pierced.' },
            { question: 'Will there be a visible scar?', answer: 'Scars typically heal to be barely noticeable.' },
            { question: 'Can both ears be done together?', answer: 'Yes, both earlobes can be repaired in one session.' }
        ]
    },
    {
        id: 'keloid-surgery',
        title: 'Keloid Surgery',
        shortDescription: 'Specialized removal of thick, raised scar tissue with recurrence prevention.',
        description: 'Specialized removal of thick, raised scar tissue (keloids) followed by tailored plans including injections and pressure therapy to minimize the risk of recurrence.',
        image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80',
        duration: '45-90 mins',
        sessions: '1 surgery + follow-up injections',
        recovery: '2-4 weeks',
        benefits: [
            'Removes bulky keloid tissue',
            'Reduces recurrence risk',
            'Improves appearance significantly',
            'Combined multimodal approach',
            'Long-term results'
        ],
        procedure: [
            { step: 1, title: 'Assessment', description: 'Keloid size and location evaluation' },
            { step: 2, title: 'Surgery', description: 'Careful excision of keloid tissue' },
            { step: 3, title: 'Injection', description: 'Intraoperative steroid injection' },
            { step: 4, title: 'Closure', description: 'Tension-free wound closure' },
            { step: 5, title: 'Prevention', description: 'Pressure therapy and follow-up injections' }
        ],
        technology: 'Core Excision, Intralesional Steroids, Silicone Therapy',
        faqs: [
            { question: 'Will the keloid come back?', answer: 'With multimodal treatment, recurrence rate is significantly reduced.' },
            { question: 'Why combine surgery with injections?', answer: 'Combination therapy prevents regrowth more effectively than surgery alone.' },
            { question: 'How long is follow-up needed?', answer: 'Monthly injections for 3-6 months post-surgery are typical.' }
        ]
    },
    {
        id: 'botox-treatment',
        title: 'Botox Treatment',
        shortDescription: 'Non-surgical treatment that relaxes facial muscles to soften wrinkles.',
        description: 'A non-surgical cosmetic treatment that relaxes facial muscles to soften fine lines and dynamic wrinkles for a youthful, refreshed look without surgery.',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
        duration: '15-30 mins',
        sessions: 'Every 4-6 months',
        recovery: 'None',
        benefits: [
            'Reduces forehead lines',
            'Softens crow\'s feet',
            'Lifts drooping brows',
            'Non-surgical and quick',
            'Natural-looking results'
        ],
        procedure: [
            { step: 1, title: 'Consultation', description: 'Facial analysis and treatment goals discussion' },
            { step: 2, title: 'Marking', description: 'Injection points identified' },
            { step: 3, title: 'Injection', description: 'Precise Botox administration' },
            { step: 4, title: 'Observation', description: 'Immediate post-treatment check' },
            { step: 5, title: 'Follow-up', description: 'Results review at 2 weeks' }
        ],
        technology: 'Botulinum Toxin Type A (Botox, Dysport)',
        faqs: [
            { question: 'When do results appear?', answer: 'Results begin showing in 3-5 days, peak at 2 weeks.' },
            { question: 'How long does Botox last?', answer: 'Effects typically last 4-6 months.' },
            { question: 'Will I look frozen?', answer: 'Skilled injection gives natural expression while reducing wrinkles.' }
        ]
    },
    {
        id: 'hydrafacial-treatment',
        title: 'HydraFacial Treatment',
        shortDescription: 'Multi-step procedure that cleanses, exfoliates, and hydrates using patented technology.',
        description: 'A multi-step procedure that cleanses, exfoliates, extracts, and hydrates the skin using patented vortex technology and nourishing serums for instantly glowing skin.',
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
        duration: '45-60 mins',
        sessions: 'Monthly maintenance',
        recovery: 'None',
        benefits: [
            'Deep cleansing and extraction',
            'Intense hydration',
            'Immediate visible glow',
            'Reduces fine lines',
            'No downtime at all'
        ],
        procedure: [
            { step: 1, title: 'Cleanse + Peel', description: 'Gentle resurfacing to exfoliate' },
            { step: 2, title: 'Extract', description: 'Painless vortex suction extraction' },
            { step: 3, title: 'Hydrate', description: 'Antioxidant and hyaluronic acid infusion' },
            { step: 4, title: 'Protect', description: 'LED light therapy if desired' },
            { step: 5, title: 'Glow', description: 'Immediate radiant results' }
        ],
        technology: 'HydraFacial MD, Vortex Technology, LED Therapy',
        faqs: [
            { question: 'Can I wear makeup after?', answer: 'Yes, you can apply makeup immediately after treatment.' },
            { question: 'How often should I get HydraFacial?', answer: 'Monthly treatments are ideal for maintaining results.' },
            { question: 'Is it suitable for acne-prone skin?', answer: 'Yes, with specific serums for acne and oily skin.' }
        ]
    }
];

// Hair Treatments Data - From Paavai Hospital
export const hairTreatments = [
    {
        id: 'hair-fall-control',
        title: 'Hair Fall Control',
        shortDescription: 'Comprehensive solutions to stop hair fall and strengthen hair follicles.',
        description: 'Our hair fall control program addresses the root causes of hair loss through advanced diagnostics, medical treatments, and regenerative therapies for thicker, stronger hair.',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
        duration: '45-60 mins',
        sessions: '6-12 sessions',
        recovery: 'None',
        benefits: [
            'Reduces hair fall significantly',
            'Strengthens hair follicles',
            'Improves scalp health',
            'Promotes thicker hair',
            'Addresses underlying causes'
        ],
        procedure: [
            { step: 1, title: 'Diagnosis', description: 'Comprehensive scalp analysis and blood tests' },
            { step: 2, title: 'Treatment Plan', description: 'Customized treatment protocol' },
            { step: 3, title: 'Therapy', description: 'Mesotherapy, LED, or medical treatments' },
            { step: 4, title: 'Home Care', description: 'Prescribed medications and products' },
            { step: 5, title: 'Follow-up', description: 'Regular monitoring and adjustments' }
        ],
        technology: 'Mesotherapy, Low-Level Laser Therapy (LLLT), Medical Management',
        faqs: [
            { question: 'What causes hair fall?', answer: 'Causes include stress, hormones, nutrition, genetics, and scalp conditions.' },
            { question: 'How soon will I see results?', answer: 'Reduction in hair fall within 4-6 weeks; new growth in 3-4 months.' },
            { question: 'Is treatment lifelong?', answer: 'Maintenance may be needed depending on the cause of hair fall.' }
        ]
    },
    {
        id: 'prp-hair-treatment',
        title: 'PRP Hair Treatment',
        shortDescription: 'Regenerate hair growth naturally with your own platelet-rich plasma.',
        description: 'PRP therapy uses your body\'s natural growth factors to stimulate hair follicles, promote new growth, and strengthen existing hair for natural-looking results.',
        image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80',
        duration: '60-90 mins',
        sessions: '4-6 sessions',
        recovery: 'Minimal',
        benefits: [
            'Natural hair regrowth',
            'No allergic reactions',
            'Thickens existing hair',
            'Improves hair quality',
            'Minimal downtime'
        ],
        procedure: [
            { step: 1, title: 'Blood Draw', description: 'Small blood sample collection' },
            { step: 2, title: 'Processing', description: 'Centrifugation to extract PRP' },
            { step: 3, title: 'Numbing', description: 'Scalp numbing for comfort' },
            { step: 4, title: 'Injection', description: 'PRP injections into scalp' },
            { step: 5, title: 'Recovery', description: 'Gentle scalp care instructions' }
        ],
        technology: 'Advanced PRP Systems, Growth Factor Enrichment',
        faqs: [
            { question: 'Is PRP safe?', answer: 'Yes, it uses your own blood components with no risk of allergic reactions.' },
            { question: 'How long do results last?', answer: 'Results can last 12-18 months with maintenance sessions.' },
            { question: 'When will I see new hair?', answer: 'New growth typically appears within 3-6 months of treatment.' }
        ]
    },
    {
        id: 'hair-regrowth-therapy',
        title: 'Hair Regrowth Therapy',
        shortDescription: 'Advanced treatments to restore hair density and coverage.',
        description: 'Our hair regrowth program combines multiple modalities including laser therapy, PRP, and growth factors to maximize hair restoration results.',
        image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80',
        duration: '60-90 mins',
        sessions: '8-12 sessions',
        recovery: 'Minimal',
        benefits: [
            'Stimulates dormant follicles',
            'Increases hair density',
            'Improves hair thickness',
            'Comprehensive approach',
            'Sustainable results'
        ],
        procedure: [
            { step: 1, title: 'Assessment', description: 'Detailed hair density mapping' },
            { step: 2, title: 'Multi-Modal Treatment', description: 'Combined laser, PRP, and growth factor therapy' },
            { step: 3, title: 'Scalp Treatment', description: 'Specialized scalp treatments' },
            { step: 4, title: 'Medical Support', description: 'FDA-approved medications if needed' },
            { step: 5, title: 'Monitoring', description: 'Progress tracking with photography' }
        ],
        technology: 'LLLT, PRP, Growth Factor Therapy, Medical Management',
        faqs: [
            { question: 'Who is a good candidate?', answer: 'Those with early to moderate hair loss see the best results.' },
            { question: 'Can women undergo this treatment?', answer: 'Yes, the treatment is effective for both men and women.' },
            { question: 'Is it better than transplant?', answer: 'It can be used alone or to maximize transplant results.' }
        ]
    },
    {
        id: 'scalp-dandruff-care',
        title: 'Scalp & Dandruff Care',
        shortDescription: 'Restore scalp health and eliminate dandruff for healthy hair growth.',
        description: 'Our scalp care treatments address dandruff, seborrhea, and scalp conditions that can lead to hair problems using medical-grade treatments for a healthy scalp.',
        image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80',
        duration: '45-60 mins',
        sessions: '4-6 sessions',
        recovery: 'None',
        benefits: [
            'Eliminates dandruff',
            'Reduces scalp irritation',
            'Balances oil production',
            'Improves scalp health',
            'Creates optimal growth environment'
        ],
        procedure: [
            { step: 1, title: 'Diagnosis', description: 'Scalp examination and condition assessment' },
            { step: 2, title: 'Deep Cleanse', description: 'Medical-grade scalp cleansing' },
            { step: 3, title: 'Treatment', description: 'Antifungal/antibacterial therapy' },
            { step: 4, title: 'Hydration', description: 'Scalp balancing and hydration' },
            { step: 5, title: 'Home Care', description: 'Customized home care regimen' }
        ],
        technology: 'Scalp Micropeel, Medical-Grade Treatments, LED Therapy',
        faqs: [
            { question: 'What causes dandruff?', answer: 'Dandruff is often caused by fungal overgrowth, dry scalp, or skin conditions.' },
            { question: 'Is it curable?', answer: 'Most scalp conditions can be controlled effectively with proper treatment.' },
            { question: 'Will it help with hair growth?', answer: 'A healthy scalp creates the optimal environment for hair growth.' }
        ]
    }
];

// All treatments combined for easy access
export const allTreatments = [...skinTreatments, ...hairTreatments];

// Get treatment by ID
export const getTreatmentById = (id) => {
    return allTreatments.find(treatment => treatment.id === id);
};

// Get treatments by category
export const getTreatmentsByCategory = (category) => {
    if (category === 'skin') return skinTreatments;
    if (category === 'hair') return hairTreatments;
    return allTreatments;
};
