// Initial Blog Posts Data
export const initialBlogPosts = [
    {
        id: 'understanding-acne',
        title: 'Understanding Acne: Causes, Types, and Modern Treatment Options',
        slug: 'understanding-acne-causes-types-treatments',
        excerpt: 'Discover the science behind acne, from hormonal triggers to effective dermatologist-approved treatments that actually work.',
        content: `
# Understanding Acne: Causes, Types, and Modern Treatment Options

Acne is one of the most common skin conditions affecting millions of people worldwide. At Nira Aesthetics, we believe in educating our patients about their skin concerns to help them make informed decisions about their treatment.

## What Causes Acne?

Acne develops when hair follicles become clogged with oil and dead skin cells. Several factors contribute to this:

- **Excess oil production** - Sebaceous glands can become overactive
- **Bacteria** - P. acnes bacteria multiply in clogged pores
- **Hormones** - Androgens increase during puberty and can cause acne at any age
- **Diet** - Some studies link dairy and high-glycemic foods to acne
- **Stress** - Can worsen existing acne conditions

## Types of Acne

Understanding your acne type helps determine the best treatment:

1. **Comedonal Acne** - Blackheads and whiteheads
2. **Inflammatory Acne** - Red, swollen pimples
3. **Cystic Acne** - Deep, painful nodules under the skin
4. **Hormonal Acne** - Typically appears along the jawline

## Modern Treatment Options

Today's dermatological treatments offer effective solutions:

- Chemical peels for surface-level acne
- Blue light therapy to kill acne-causing bacteria
- Medical-grade facials for deep cleansing
- Prescription medications for severe cases

## When to See a Dermatologist

If over-the-counter products aren't working after 8-12 weeks, or if you're developing scars, it's time to consult a professional.

---

*Book a consultation at Niraa Aesthetics for a personalized acne treatment plan.*
    `,
        image: '/images/blog/acne-blog.jpg',
        author: 'Dr. Paavai Team',
        category: 'Skin Care',
        tags: ['acne', 'skin care', 'treatment', 'dermatology'],
        publishedAt: '2024-01-15',
        isPublished: true
    },
    {
        id: 'benefits-of-laser-hair-removal',
        title: 'The Complete Guide to Laser Hair Removal: Is It Right for You?',
        slug: 'complete-guide-laser-hair-removal',
        excerpt: 'Everything you need to know about laser hair removal - from how it works to what results you can expect.',
        content: `
# The Complete Guide to Laser Hair Removal

Tired of constant shaving, waxing, and ingrown hairs? Laser hair removal offers a long-term solution. Here's everything you need to know.

## How Does Laser Hair Removal Work?

Laser hair removal uses concentrated light energy to target hair follicles. The pigment in the hair absorbs the light, which damages the follicle and inhibits future hair growth.

## Benefits of Laser Hair Removal

- **Permanent reduction** - Up to 90% reduction in hair growth
- **Precision** - Targets dark, coarse hairs while leaving surrounding skin undamaged
- **Speed** - Small areas can be treated in minutes
- **Convenience** - No more daily shaving or monthly waxing
- **Cost-effective** - Saves money in the long run

## What to Expect During Treatment

1. **Consultation** - Skin and hair analysis
2. **Preparation** - Shave the area 24 hours before
3. **Treatment** - Laser pulses target hair follicles
4. **Cooling** - Built-in cooling technology minimizes discomfort
5. **Aftercare** - Avoid sun exposure and follow care instructions

## Is It Right for You?

Laser hair removal works best on:
- All skin types (with the right technology)
- Dark hair (contains more melanin)
- Those committed to multiple sessions

## At Niraa Aesthetics

We use the Soprano ICE Platinum system - the gold standard in laser hair removal with:
- Virtually painless treatment
- Safe for all skin tones
- Fast treatment sessions

---

*Schedule your laser hair removal consultation today!*
    `,
        image: '/images/blog/laser-hair-blog.jpg',
        author: 'Dr. Paavai Team',
        category: 'Hair Removal',
        tags: ['laser', 'hair removal', 'permanent', 'beauty'],
        publishedAt: '2024-01-20',
        isPublished: true
    },
    {
        id: 'anti-aging-secrets',
        title: 'Anti-Aging Secrets: Dermatologist Tips for Youthful Skin at Any Age',
        slug: 'anti-aging-dermatologist-tips-youthful-skin',
        excerpt: 'Expert dermatologist advice on preventing and treating signs of aging for naturally youthful skin.',
        content: `
# Anti-Aging Secrets from Our Dermatologists

Aging is natural, but premature aging isn't. Our experts share their top tips for maintaining youthful skin at any age.

## The Science of Skin Aging

As we age, our skin undergoes several changes:
- Decreased collagen production
- Loss of elasticity
- Reduced cell turnover
- Decreased natural moisture
- Environmental damage accumulation

## Prevention: Your First Line of Defense

### 1. Sun Protection
85% of visible aging is caused by sun exposure. Use SPF 30+ daily, rain or shine.

### 2. Retinoids
The gold standard for anti-aging, retinoids boost collagen and speed cell turnover.

### 3. Antioxidants
Vitamin C, E, and niacinamide protect against environmental damage.

### 4. Hydration
Hyaluronic acid can hold 1000x its weight in water, keeping skin plump.

## Treatment Options at Nira Aesthetics

When prevention isn't enough, we offer:

- **HIFU** - Non-surgical face lifting
- **Radiofrequency** - Skin tightening
- **Dermal Fillers** - Volume restoration
- **Botox** - Wrinkle prevention and treatment
- **Chemical Peels** - Surface renewal

## Building Your Anti-Aging Routine

### Morning
1. Gentle cleanser
2. Vitamin C serum
3. Moisturizer
4. SPF 30+

### Evening
1. Double cleanse
2. Retinoid (start slowly)
3. Peptide serum
4. Rich night cream

## When to Start

It's never too early or too late! Prevention in your 20s, maintenance in your 30s, and treatment options for any age.

---

*Consult our dermatologists for a personalized anti-aging plan.*
    `,
        image: '/images/blog/anti-aging-blog.jpg',
        author: 'Dr. Paavai Team',
        category: 'Anti-Aging',
        tags: ['anti-aging', 'skincare', 'wrinkles', 'youthful skin'],
        publishedAt: '2024-01-25',
        isPublished: true
    }
];

// Get published blogs
export const getPublishedBlogs = (blogs = initialBlogPosts) => {
    return blogs.filter(blog => blog.isPublished).sort((a, b) =>
        new Date(b.publishedAt) - new Date(a.publishedAt)
    );
};

// Get blog by slug
export const getBlogBySlug = (slug, blogs = initialBlogPosts) => {
    return blogs.find(blog => blog.slug === slug);
};

// Get blogs by category
export const getBlogsByCategory = (category, blogs = initialBlogPosts) => {
    return blogs.filter(blog => blog.category === category && blog.isPublished);
};

// Get latest blogs
export const getLatestBlogs = (count = 3, blogs = initialBlogPosts) => {
    return getPublishedBlogs(blogs).slice(0, count);
};
