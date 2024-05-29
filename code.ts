// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

const businessModel = [
  {
      "id" : 1,
      "businessModelCode" : "B2B", 
      "businessModelName" : "Business-to-Business",
      "description" : "Businesses selling products or services to other businesses",
      "cases" : [
          "Enterprise Resource Planning (ERP) software",
          "Consulting services",
          "Logistics solutions"
      ],
      "companies" : [
          "SAP",
          "IBM",
          "FedEx",
          "Deloitte"
      ]
      },
      {
      "id" : 2,
      "businessModelCode" : "B2C", 
      "businessModelName" : "Consumer-to-Business",
      "description" : "Businesses selling products or services directly to individual consumers",
      "cases" : [
          "Smartphones",
          "Clothing",
          "Streaming services",
          "Fast food"
      ],
      "companies" : [
          "Apple",
          "Zara",
          "Netflix",
          "McDonald's"
      ]
      },
      {
      "id" : 3,
      "businessModelCode" : "C2B", 
      "businessModelName" : "Consumer-to-Business",
      "description" : "Individuals selling products or services to businesses",
      "cases" : [
          "Freelance writing",
          "Stock photography",
          "Crowd-sourcing services"
      ],
      "companies" : [
          "Upwork",
          "Shutterstock",
          "Topcoder"
      ]
      },
      {
      "id" : 4,
      "businessModelCode" : "C2C", 
      "businessModelName" : "Consumer-to-Consumer",
      "description" : "Individuals selling products or services directly to other consumers",
      "cases" : [
          "Used cars",
          "Handmade crafts",
          "Vacation rentals"
      ],
      "companies" : [
          "Craigslist",
          "Etsy",
          "Airbnb"
      ]
      },
      {
      "id" : 5,
      "businessModelCode" : "B2G", 
      "businessModelName" : "Business-to-Government",
      "description" : "Businesses selling products or services to government entities",
      "cases" : [
          "Defense equipment",
          "Construction services",
          "IT services"
      ],
      "companies" : [
          "Lockheed Martin",
          "Bechtel",
          "Accenture"
      ]
      },
      {
      "id" : 6,
      "businessModelCode" : "G2B", 
      "businessModelName" : "Government-to-Business",
      "description" : "Government entities selling goods, services, or information to businesses",
      "cases" : [
          "Weather data",
          "Mapping data",
          "Licenses and permits"
      ],
      "companies" : [
          "National Weather Service (NWS)",
          "United States Geological Survey (USGS)",
          "Local government agencies"
      ]
      },
      {
      "id" : 7,
      "businessModelCode" : "B2X", 
      "businessModelName" : "Business-to-Everything",
      "description" : "Businesses selling products or services to any type of customer, including individuals, businesses, and organizations",
      "cases" : [
          "E-commerce platforms",
          "Payment processing solutions",
          "Online marketplaces"
      ],
      "companies" : [
          "Shopify",
          "Square",
          "Amazon"
      ]
      },
      {
      "id" : 8,
      "businessModelCode" : "B2B2C", 
      "businessModelName" : "Business-to-Business-to-Consumer",
      "description" : "A business selling products or services to another business, which then sells to individual consumers",
      "cases" : [
          "Consumer electronics",
          "Beverages",
          "Apparel"
      ],
      "companies" : [
          "Samsung",
          "Pepsi Co",
          "Nike"
      ]
      },
      {
      "id" : 9,
      "businessModelCode" : "B2E", 
      "businessModelName" : "Business-to-Employee",
      "description" : "Businesses providing products or services to their own employees",
      "cases" : [
          "Employee discounts",
          "Training programs",
          "Health and wellness services"
      ],
      "companies" : [
          "Walmart",
          "Google",
          "Starbucks"
      ]
      },
      {
          "id" : 10,
          "businessModelCode" : "B2R", 
          "businessModelName" : "Business-to-Reseller",
          "description" : "Businesses selling products or services to resellers or intermediaries, who then sell to end consumers or businesses",
          "cases" : [
              "Electronic components",
              "Pharmaceuticals",
              "Software licenses"
          ],
          "companies" : [
              "Avnet",
              "McKesson",
              "Microsoft"
          ]
          }
];

const industries = [
    "5G Technology",
    "Accounting & Financial",
    "Adult and Continuing Education",
    "Advertising",
    "After School Programs",
    "Agribusiness Management",
    "Agricultural Economics",
    "Agricultural Engineering",
    "Agricultural Technology (AgTech)",
    "Agriculture",
    "Alcohol-Free Beverages",
    "Animal & Pet",
    "Animal Assisted Therapy",
    "Animal Breeding and Genetics",
    "Animal Husbandry",
    "Animal Shelter Management",
    "Animal Training and Behavior",
    "Animal Welfare and Advocacy",
    "Animation and Visual Effects",
    "Apparel Production and Manufacturing",
    "Arboriculture (Tree Care)",
    "Architectural",
    "Architectural Visualization",
    "Architecture",
    "Aromatherapy",
    "Art & Design",
    "Art Galleries and Museums",
    "Artificial Intelligence (AI) and Machine Learning (ML)",
    "Artificial Intelligence (AI) and Machine Learning Consulting",
    "Arts and Culture",
    "Attorney & Law",
    "Auditing",
    "Automotive",
    "Automotive Aftermarket (Parts and Accessories)",
    "Automotive Design",
    "Automotive Engineering",
    "Automotive Manufacturing",
    "Automotive Retail and Dealerships",
    "Automotive Technology (Connected Cars, Infotainment Systems)",
    "Autonomous Vehicles",
    "Aviation and Airlines",
    "Babysitting Services",
    "Bar & Nightclub",
    "Bar Management",
    "Bar Supplies and Equipment",
    "Bartending Services",
    "Beauty and Relaxation Retreats",
    "Beauty Influencer Marketing",
    "Beauty Retail",
    "Beauty Subscription Services",
    "Beauty Technology (BeautyTech)",
    "Beverage Consulting",
    "Biotechnology",
    "Blockchain Technology",
    "Board Games and Tabletop Gaming",
    "Body Treatments (Wraps, Scrubs, etc.)",
    "Botanical Illustration",
    "Brand Management",
    "Bridal Fashion and Design",
    "Building Information Modeling (BIM)",
    "Business & Consulting",
    "Card Games and Trading Card Games (TCGs)",
    "Carpet Cleaning",
    "Cellular Agriculture (Cultured Meat)",
    "Child Development Centers",
    "Childcare",
    "Childcare Centers",
    "Childcare Licensing and Regulation",
    "Childcare Software Solutions",
    "Civil Engineering",
    "Civil Litigation",
    "Cleaning & Maintenance",
    "Clergy and Ministry",
    "Climate Change Mitigation and Adaptation",
    "Clinical Research",
    "Cloud Computing",
    "Cloud Computing Consulting",
    "Commercial Architecture",
    "Commercial Cleaning",
    "Commercial Construction",
    "Commercial Photography",
    "Commercial Real Estate",
    "Communications",
    "Community & Non-Profit",
    "Community Development",
    "Computer",
    "Computer Networking",
    "Construction",
    "Construction Management",
    "Content Creation and Copywriting",
    "Corporate Communications",
    "Corporate Finance",
    "Corporate Law",
    "Corporate Wellness Programs",
    "Cosmetics & Beauty",
    "Criminal Law",
    "Crop Science",
    "Cruise Industry",
    "Culinary Arts and Chef Services",
    "Culinary Tourism and Food Services",
    "Curriculum Development",
    "Customer Experience Management",
    "Cybersecurity",
    "Cybersecurity Consulting",
    "Data Analytics and Big Data Consulting",
    "Data Science and Analytics",
    "Date Planning Services",
    "Dating",
    "Dating Apps",
    "Dating Photography",
    "Daycare Services",
    "Destination Marketing",
    "Digital Content Creation",
    "Digital Marketing",
    "Digital Transformation Consulting",
    "Disaster Relief and Emergency Services",
    "DJ",
    "Documentary Photography",
    "E-commerce",
    "Early Childhood Development",
    "Early Childhood Education",
    "Ecotourism",
    "Education",
    "Education and Youth Development",
    "Educational Leadership and Management",
    "Educational Psychology",
    "Educational Technology (EdTech)",
    "Election Administration",
    "Electric Vehicles (EVs)",
    "Employment Law",
    "Energy Efficiency and Sustainability",
    "Entertainment & The Arts",
    "Environmental",
    "Environmental Conservation",
    "Environmental Education and Outreach",
    "Environmental Engineering",
    "Environmental Law",
    "Environmental Policy and Advocacy",
    "Esports (Electronic Sports)",
    "Esthetician Services",
    "Event Floral Design",
    "Event Photography",
    "Event Planning and Management",
    "Event Planning and Promotion",
    "Exterior Cleaning (Pressure Washing, Gutter Cleaning)",
    "Family Law",
    "Fashion",
    "Fashion Design",
    "Fashion Journalism",
    "Fashion Marketing and Branding",
    "Fashion Photography",
    "Fashion Retail Management",
    "Fashion Styling",
    "Fashion Technology (FashTech)",
    "Fermented Foods and Beverages",
    "Film and Television Production",
    "Financial Advisory and Risk Management Consulting",
    "Financial Planning and Analysis (FP&A)",
    "Financial Reporting",
    "Fine Art Photography",
    "Fine Arts",
    "Fitness Technology (Wearables and Apps)",
    "Fleet Management",
    "Flooring and Carpeting",
    "Floral",
    "Floral Arranging",
    "Floral Art Installation",
    "Floral Photography",
    "Floral Preservation",
    "Floral Retail",
    "Floristry",
    "Food & Drink",
    "Food and Beverage Service",
    "Food Delivery Services",
    "Food Science and Technology",
    "Food Truck Operations",
    "Forensic Accounting",
    "Fragrance",
    "Functional Foods and Beverages",
    "Functional Training",
    "Furniture Manufacturing",
    "Game Design",
    "Games & Recreational",
    "Garden Design",
    "Genomics and Precision Medicine",
    "Government Relations (lobbying)",
    "Graphic Design",
    "Green Building and Architecture",
    "Green Building and LEED Certification",
    "Group Fitness Classes",
    "Haircare",
    "Hardscaping (Patios, Walkways, etc.)",
    "Health Informatics",
    "Healthcare Architecture",
    "Healthcare Services",
    "Healthy Snacking",
    "Higher Education Administration",
    "Historic Preservation",
    "Holistic Healing Practices",
    "Home Accessories",
    "Home Decor Retail",
    "Home Furnishing",
    "Home Textiles and Fabrics",
    "Horticulture",
    "Hospitality Industry Technology (POS Systems, Reservation Software)",
    "Hospitality Management",
    "Hotel Operations",
    "Housekeeping Services",
    "Human Resources (HR) and Talent Management Consulting",
    "Human Rights Advocacy",
    "Illustration",
    "Immigration Law",
    "Immunology",
    "In-Home Childcare",
    "Indoor Amusement Parks and Entertainment Centers",
    "Industrial",
    "Industrial Automation",
    "Industrial Cleaning",
    "Industrial Design",
    "Industrial Engineering",
    "Industrial Maintenance and Repair",
    "Industrial Safety",
    "Information Security",
    "Infrastructure Development",
    "Intellectual Property Law",
    "Interior Architecture",
    "Interior Design",
    "Interior Styling",
    "International Relations",
    "Internet",
    "Internet of Things (IoT)",
    "Inventory Management",
    "Investment Banking",
    "Irrigation Systems Installation and Maintenance",
    "Janitorial Services",
    "Journalism",
    "Kitchen and Bath Design",
    "Landscape Architecture",
    "Landscape Construction",
    "Landscape Design",
    "Landscape Design with Flowers",
    "Landscape Maintenance",
    "Landscape Photography",
    "Landscaping",
    "Lawn Care Services",
    "Lighting Design",
    "Live Action Role-Playing (LARP) Games",
    "Live Entertainment Booking",
    "Live Events and Concerts",
    "Logistics and Supply Chain Management",
    "Luxury Fashion Management",
    "Maid Services",
    "Makeup",
    "Management Accounting",
    "Manufacturing",
    "Marketing and Branding Consulting",
    "Massage Therapy",
    "Matchmaking Services",
    "Materials Science and Engineering",
    "Meal Kit Delivery",
    "Media Production (TV, Film, Radio)",
    "Medic & Pharmaceutical",
    "Medical Devices",
    "Mixology (Craft Cocktails)",
    "Mobile Commerce (M-commerce)",
    "Mobile Gaming",
    "Modular Construction",
    "Montessori Education",
    "Mortgage Lending and Financing",
    "Music Production and Distribution",
    "Nail Care Services",
    "Nanny Services",
    "Natural and Organic Beauty Products",
    "Network Security",
    "Neuroscience",
    "Nightclub Operations",
    "Nightlife Photography",
    "Omnichannel Retailing",
    "Online Dating",
    "Online Education and E-learning",
    "Online Fitness Programs",
    "Online Gaming",
    "Outdoor Lighting Design and Installation",
    "Outdoor Recreation",
    "Pediatric Healthcare Services",
    "Penetration Testing",
    "Performing Arts (Theater, Dance, etc.)",
    "Personal Care Products",
    "Personal Training",
    "Personalization and Customization",
    "Personalized Matchmaking",
    "Pet Care Services",
    "Pet Food and Nutrition",
    "Pet Retail and Products",
    "Pharmaceutical Development",
    "Pharmacovigilance",
    "Photography",
    "Physical Fitness",
    "Physical Security",
    "Physical Therapy and Rehabilitation",
    "Plant-Based Foods",
    "Point of Sale (POS) Systems",
    "Political",
    "Political Advocacy",
    "Political Campaign Management",
    "Political Communication",
    "Political Consulting",
    "Political Journalism",
    "Political Science Research",
    "Pool Maintenance",
    "Portrait Photography",
    "Poverty Alleviation",
    "Precision Agriculture",
    "Preschool Education",
    "Professional Sports Leagues",
    "Property Management",
    "Public Policy Analysis",
    "Public Relations (PR)",
    "Publishing (Books, Magazines, and Digital)",
    "Quality Control and Assurance",
    "Quantum Computing",
    "Real Estate & Mortgage",
    "Real Estate Appraisal",
    "Real Estate Brokerage",
    "Real Estate Development",
    "Real Estate Investment",
    "Real Estate Law and Compliance",
    "Real Estate Technology (PropTech)",
    "Regulatory Affairs",
    "Relationship Coaching",
    "Relationship Counseling",
    "Religious Art and Architecture",
    "Religious Broadcasting",
    "Religious Counseling",
    "Religious Education",
    "Religious Music",
    "Religious Nonprofit Organizations",
    "Religious Publishing",
    "Religious Studies",
    "Religious Tourism",
    "Religius",
    "Renewable Energy",
    "Renovation and Restoration",
    "Residential Architecture",
    "Residential Cleaning",
    "Residential Construction",
    "Residential Real Estate",
    "Restaurant",
    "Restaurant Consulting",
    "Restaurant Franchising",
    "Restaurant Management",
    "Restaurant Marketing and Branding",
    "Restaurant Supply and Equipment",
    "Retail",
    "Retail Analytics",
    "Retail Merchandising",
    "Risk Assessment",
    "Security",
    "Security Compliance",
    "Security Consulting",
    "Security Management",
    "Singles Events and Mixers",
    "Skincare",
    "Skincare Treatments",
    "Social Media",
    "Social Media Management",
    "Social Services",
    "Spa & Esthetics",
    "Spa Therapy",
    "Special Education",
    "Special Needs Childcare",
    "Speed Dating Events",
    "Sports",
    "Sports Analytics",
    "Sports Equipment Manufacturing",
    "Sports Event Management",
    "Sports Marketing and Sponsorship",
    "Sports Media and Broadcasting",
    "Sports Medicine and Athletic Training",
    "Sports Nutrition",
    "Sports Psychology",
    "Sports Tourism and Hospitality",
    "STEM Education",
    "Streaming Media",
    "Streaming Services",
    "Strength and Conditioning",
    "Supply Chain and Logistics Consulting",
    "Supply Chain Management",
    "Sustainability and Corporate Social Responsibility Consulting",
    "Sustainability Consulting",
    "Sustainable Agriculture",
    "Sustainable Architecture",
    "Sustainable Construction",
    "Sustainable Landscaping",
    "Sustainable Packaging",
    "Tax Accounting",
    "Tax Law",
    "Technology",
    "Telecommunications",
    "Threat Intelligence",
    "Tourism",
    "Travel & Hotel",
    "Travel Agency and Tour Operations",
    "Travel Photography",
    "Urban Planning",
    "Vacation Rentals and Sharing Economy",
    "Vehicle Safety and Crash Testing",
    "Vertical Farming",
    "Veterinary Medicine",
    "Video Game",
    "Virtual Reality",
    "Virtual Reality ",
    "Waste Management",
    "Wealth Managemen",
    "Wedding Catering",
    "Wedding Entertai",
    "Wedding Floral",
    "Wedding Offician",
    "Wedding Photogra",
    "Wedding Planning",
    "Wedding Rental S",
    "Wedding Services",
    "Wedding Venue Management",
    "Wedding Videography",
    "Wellness Coaching",
    "Wildlife Conservation",
    "Wildlife Photography",
    "Window Cleaning",
    "Window Treatments",
    "Yoga and Pilates"

];

const screens = [
    "404",
    "About",
    "Account",
    "Account Setup",
    "Activity Feed & Notifications",
    "Add & Create",
    "Add Friends",
    "Landing Page",
    "Admin",
    "Advertisement",
    "Alerts",
    "Analytics",
    "Whatever in your mind",
    "API",
    "Audio",
    "Become a Member",
    "Home",
    "Become a Partner",
    "Billing",
    "Blog",
    "Book Now",
    "Bookings",
    "Bookmarks",
    "Calendar/Schedule",
    "Camera",
    "Landing Page",
    "Careers",
    "Cart",
    "Change Password",
    "Chart",
    "Chat",
    "Checkout",
    "Client Login",
    "Comments",
    "Community",
    "Company",
    "Connect",
    "Whatever in your mind",
    "Contact",
    "Contact Support",
    "Control Panel",
    "Courses",
    "Currated for you",
    "Dashboard",
    "Deals",
    "Delivery",
    "Home",
    "Discover",
    "Documentation",
    "Donate",
    "Landing Page",
    "Download",
    "Edit Profile",
    "Education",
    "Empty State",
    "Events",
    "Explore",
    "FAQs",
    "Favorites",
    "Features",
    "Feed",
    "Feedback",
    "File Upload",
    "Filter & Sort",
    "Forgot Password",
    "Form",
    "Whatever in your mind",
    "Forum",
    "Gallery",
    "Groups",
    "Guide Tour & Tutorial",
    "Header",
    "Help & Support",
    "Help Center",
    "Hero",
    "Home",
    "Inbox",
    "Inquiries",
    "Home",
    "Insights",
    "Integration",
    "Investor Relations",
    "Invitations",
    "Invite Friends",
    "Invoice",
    "Jobs",
    "Join Us",
    "Landing Page",
    "Language",
    "Loading",
    "Login",
    "Maps",
    "Media",
    "Meetups",
    "Membership",
    "Messages",
    "Whatever in your mind",
    "My Account & Profile",
    "My Orders",
    "My Settings",
    "News",
    "Newsletter",
    "Newsroom",
    "Notifications",
    "Onboarding",
    "Orders",
    "Our Approach",
    "Our Clients",
    "Our Story",
    "Our Team",
    "Partners",
    "Partnerships",
    "Home",
    "Payment Method",
    "Payments",
    "Podcasts",
    "Landing Page",
    "Popular",
    "Whatever in your mind",
    "Portfolio",
    "Preferences",
    "Pricing",
    "Privacy Policy",
    "Products",
    "Projects",
    "Promotions & Rewards",
    "Recommendations",
    "Refresh",
    "Register",
    "Reminders",
    "Reservations",
    "Resources",
    "Search",
    "Security",
    "Landing Page",
    "Home",
    "Services",
    "Settings",
    "Settings & Preferences",
    "Share",
    "Shop",
    "Shopping Chart",
    "Sign Out",
    "Whatever in your mind",
    "Signup",
    "Single Product",
    "Social Proof",
    "Solutions",
    "Special Offers",
    "Statistics",
    "Subscription & Paywall",
    "Suggestions",
    "Template",
    "Term of Service",
    "Terms and Conditions",
    "Landing Page",
    "Testimonial & Customer Stories",
    "Testimonials",
    "Home",
    "Theme",
    "Tips",
    "Top Rated",
    "Tracking",
    "Training",
    "Transactions",
    "Trends",
    "Tutorials",
    "Upload",
    "Verification Code",
    "Verify Account",
    "Video",
    "Video Player",
    "Volunteer",
    "Walkthrough",
    "Wallet",
    "Walthrought",
    "Welcome & Get Started",
    "Wishlist",
    "Workshops",
    "Home",
    "Whatever in your mind"
];

const devices = ['Web', 'Mobile App (IOS)', 'Mobile App (Android)', 'Tablet', 'Ipad'];

async function loadRequirement() {
    // Load the font
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });
}

async function resultScreen() {
    await loadRequirement();

    // Get the current viewport center and zoom level
    const viewportCenter = figma.viewport.center;
    const viewportZoom = figma.viewport.zoom;

    // Calculate the coordinates of the center point of the viewport
    const viewportCenterX = viewportCenter.x * viewportZoom;
    const viewportCenterY = viewportCenter.y * viewportZoom;

    const randomBusinessModel = businessModel[Math.floor(Math.random() * businessModel.length)];
    const randomIndustry = industries[Math.floor(Math.random() * industries.length)];
    const randomDevice = devices[Math.floor(Math.random() * devices.length)];
    const randomScreen = screens[Math.floor(Math.random() * screens.length)];

    const frameCard = figma.createFrame();
    frameCard.resize(384, frameCard.height);
    frameCard.layoutMode = 'VERTICAL'; // or 'HORIZONTAL' based on your need
    frameCard.primaryAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameCard.counterAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameCard.horizontalPadding = 28;
    frameCard.verticalPadding = 28;
    frameCard.itemSpacing = 24;
    frameCard.fills = [{ type: 'SOLID', color: { r: 0.9333333333333333, g: 0.9490196078431373, b: 0.996078431372549 } }];
    frameCard.strokeWeight = 1;
    frameCard.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    frameCard.x = 40;
    frameCard.y = 0;

    const titlePlugin = figma.createText();
    titlePlugin.characters = `Create Screen`;
    titlePlugin.fontName = { family: "Inter", style: "Bold" };
    titlePlugin.fontSize = 21;
    titlePlugin.textAlignVertical = 'CENTER'
    titlePlugin.textAlignHorizontal = 'CENTER'
    titlePlugin.resize(frameCard.width - (28 * 2), titlePlugin.height)
    titlePlugin.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const titleField = figma.createText();
    titleField.characters = `Coverage Field`;
    titleField.fontName = { family: "Inter", style: "Medium" };
    titleField.fontSize = 17;
    titleField.textAlignVertical = 'CENTER'
    titleField.textAlignHorizontal = 'LEFT'
    titleField.resize(frameCard.width - (28 * 2), titleField.height)
    titleField.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    
    const field = figma.createText();
    field.characters = `${randomIndustry}`;
    field.fontName = { family: "Inter", style: "Light" };
    field.fontSize = 15;
    field.textAlignVertical = 'CENTER'
    field.textAlignHorizontal = 'LEFT'
    field.resize(frameCard.width - (28 * 2), field.height);
    field.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const titleDevice = figma.createText();
    titleDevice.characters = `Implementation`;
    titleDevice.fontName = { family: "Inter", style: "Medium" };
    titleDevice.fontSize = 17;
    titleDevice.textAlignVertical = 'CENTER'
    titleDevice.textAlignHorizontal = 'LEFT'
    titleDevice.resize(frameCard.width - (28 * 2), titleDevice.height)
    titleDevice.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    
    const device = figma.createText();
    device.characters = `${randomDevice}`;
    device.fontName = { family: "Inter", style: "Light" };
    device.fontSize = 15;
    device.textAlignVertical = 'CENTER'
    device.textAlignHorizontal = 'LEFT'
    device.resize(frameCard.width - (28 * 2), device.height);
    device.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const titleScreen = figma.createText();
    titleScreen.characters = `Screen`;
    titleScreen.fontName = { family: "Inter", style: "Medium" };
    titleScreen.fontSize = 17;
    titleScreen.textAlignVertical = 'CENTER'
    titleScreen.textAlignHorizontal = 'LEFT'
    titleScreen.resize(frameCard.width - (28 * 2), titleDevice.height)
    titleScreen.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    
    const screenContent = figma.createText();
    screenContent.characters = `${randomScreen}`;
    screenContent.fontName = { family: "Inter", style: "Light" };
    screenContent.fontSize = 15;
    screenContent.textAlignVertical = 'CENTER'
    screenContent.textAlignHorizontal = 'LEFT'
    screenContent.resize(frameCard.width - (28 * 2), screenContent.height);
    screenContent.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const titleModelBusiness = figma.createText();
    titleModelBusiness.characters = `Business Model Relationship`;
    titleModelBusiness.fontName = { family: "Inter", style: "Medium" };
    titleModelBusiness.fontSize = 17;
    titleModelBusiness.textAlignVertical = 'CENTER'
    titleModelBusiness.textAlignHorizontal = 'LEFT'
    titleModelBusiness.resize(frameCard.width - (28 * 2), titleModelBusiness.height)
    titleModelBusiness.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    
    const modelBusiness = figma.createText();
    modelBusiness.characters = `${randomBusinessModel.businessModelName} (${randomBusinessModel.businessModelCode})`;
    modelBusiness.fontName = { family: "Inter", style: "Light" };
    modelBusiness.fontSize = 15;
    modelBusiness.textAlignVertical = 'CENTER'
    modelBusiness.textAlignHorizontal = 'LEFT'
    modelBusiness.resize(frameCard.width - (28 * 2), device.height);
    modelBusiness.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const infoBusinessModel = figma.createText();
    infoBusinessModel.characters = `${randomBusinessModel.description}. Example Cases: ${randomBusinessModel.cases.join(", ")}, etc.`;
    infoBusinessModel.fontName = { family: "Inter", style: "Light" };
    infoBusinessModel.fontSize = 15;
    infoBusinessModel.resize(frameCard.width - ((28 * 2) + 12), infoBusinessModel.height);
    infoBusinessModel.textAutoResize = "HEIGHT";
    infoBusinessModel.textAlignHorizontal = 'LEFT';
    infoBusinessModel.textAlignVertical = 'CENTER'
    infoBusinessModel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const frameField = figma.createFrame();
    frameField.resize(frameCard.width - (28 * 2), titleField.height + field.height);
    frameField.layoutMode = 'VERTICAL'; // or 'HORIZONTAL' based on your need
    frameField.primaryAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameField.counterAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameField.fills = [];
    frameField.itemSpacing = 4;
    frameField.appendChild(titleField);
    frameField.appendChild(field);

    const frameDevice = figma.createFrame();
    frameDevice.resize(frameCard.width - (28 * 2), titleDevice.height + device.height);
    frameDevice.layoutMode = 'VERTICAL'; // or 'HORIZONTAL' based on your need
    frameDevice.primaryAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameDevice.counterAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameDevice.fills = [];
    frameDevice.itemSpacing = 4;
    frameDevice.appendChild(titleDevice);
    frameDevice.appendChild(device);

    const frameScreen = figma.createFrame();
    frameScreen.resize(frameCard.width - (28 * 2), titleScreen.height + screenContent.height);
    frameScreen.layoutMode = 'VERTICAL'; // or 'HORIZONTAL' based on your need
    frameScreen.primaryAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameScreen.counterAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameScreen.fills = [];
    frameScreen.itemSpacing = 4;
    frameScreen.appendChild(titleScreen);
    frameScreen.appendChild(screenContent);

    const frameModelBusiness = figma.createFrame();
    frameModelBusiness.resize(frameCard.width - (28 * 2), titleModelBusiness.height + modelBusiness.height + infoBusinessModel.height);
    frameModelBusiness.layoutMode = 'VERTICAL'; // or 'HORIZONTAL' based on your need
    frameModelBusiness.primaryAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameModelBusiness.counterAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameModelBusiness.fills = [];
    frameModelBusiness.itemSpacing = 4;
    frameModelBusiness.appendChild(titleModelBusiness);
    frameModelBusiness.appendChild(modelBusiness);

    await frameCard.appendChild(titlePlugin);
    await frameCard.appendChild(frameField);
    await frameCard.appendChild(frameDevice);
    await frameCard.appendChild(frameScreen);
    await frameCard.appendChild(frameModelBusiness);
    await frameCard.appendChild(infoBusinessModel);

    const frameDecorA = figma.createFrame();
    frameDecorA.resize(frameCard.width, frameCard.height);
    frameDecorA.fills = [{ type: 'SOLID', color: { r: 0.6470588235294118, g: 0.7058823529411765, b: 0.9882352941176471 }  }];
    frameDecorA.strokeWeight = 1;
    frameDecorA.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    frameDecorA.x = 0;
    frameDecorA.y = 40;

    const frameDecorB = figma.createFrame();
    frameDecorB.resize(frameCard.width, frameCard.height);
    frameDecorB.fills = [{ type: 'SOLID', color: { r: 0.7803921568627451, g: 0.823529411764706, b: 0.996078431372549 } }];
    frameDecorB.strokeWeight = 1;
    frameDecorB.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    frameDecorB.x = 20;
    frameDecorB.y = 20;

    const frame = figma.createFrame();
    frame.x = viewportCenterX;
    frame.y = viewportCenterY;
    frame.resize(frameCard.width + 40, frameCard.height + 40);
    frame.fills = [];
    frame.name = 'Design Spark';

    await frame.appendChild(frameDecorA);
    await frame.appendChild(frameDecorB);
    await frame.appendChild(frameCard);

    await figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.viewport.scrollAndZoomIntoView([frame]);

    await figma.closePlugin();
}

async function resultMVP() {
    await loadRequirement();

    // Get the current viewport center and zoom level
    const viewportCenter = figma.viewport.center;
    const viewportZoom = figma.viewport.zoom;

    // Calculate the coordinates of the center point of the viewport
    const viewportCenterX = viewportCenter.x * viewportZoom;
    const viewportCenterY = viewportCenter.y * viewportZoom;

    const randomBusinessModel = businessModel[Math.floor(Math.random() * businessModel.length)];
    const randomIndustry = industries[Math.floor(Math.random() * industries.length)];
    const randomDevice = devices[Math.floor(Math.random() * devices.length)];

    const frameCard = figma.createFrame();
    frameCard.resize(384, frameCard.height);
    frameCard.layoutMode = 'VERTICAL'; // or 'HORIZONTAL' based on your need
    frameCard.primaryAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameCard.counterAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameCard.horizontalPadding = 28;
    frameCard.verticalPadding = 28;
    frameCard.itemSpacing = 24;
    frameCard.fills = [{ type: 'SOLID', color: { r: 0.9411764705882353, g: 0.992156862745098, b: 0.956862745098039 } }];
    frameCard.strokeWeight = 1;
    frameCard.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    frameCard.x = 40;
    frameCard.y = 0;

    const titlePlugin = figma.createText();
    titlePlugin.characters = `Create MVP`;
    titlePlugin.fontName = { family: "Inter", style: "Bold" };
    titlePlugin.fontSize = 21;
    titlePlugin.textAlignVertical = 'CENTER'
    titlePlugin.textAlignHorizontal = 'CENTER'
    titlePlugin.resize(frameCard.width - (28 * 2), titlePlugin.height)
    titlePlugin.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const titleField = figma.createText();
    titleField.characters = `Coverage Field`;
    titleField.fontName = { family: "Inter", style: "Medium" };
    titleField.fontSize = 17;
    titleField.textAlignVertical = 'CENTER'
    titleField.textAlignHorizontal = 'LEFT'
    titleField.resize(frameCard.width - (28 * 2), titleField.height)
    titleField.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    
    const field = figma.createText();
    field.characters = `${randomIndustry}`;
    field.fontName = { family: "Inter", style: "Light" };
    field.fontSize = 15;
    field.textAlignVertical = 'CENTER'
    field.textAlignHorizontal = 'LEFT'
    field.resize(frameCard.width - (28 * 2), field.height);
    field.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const titleDevice = figma.createText();
    titleDevice.characters = `Implementation`;
    titleDevice.fontName = { family: "Inter", style: "Medium" };
    titleDevice.fontSize = 17;
    titleDevice.textAlignVertical = 'CENTER'
    titleDevice.textAlignHorizontal = 'LEFT'
    titleDevice.resize(frameCard.width - (28 * 2), titleDevice.height)
    titleDevice.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    
    const device = figma.createText();
    device.characters = `${randomDevice}`;
    device.fontName = { family: "Inter", style: "Light" };
    device.fontSize = 15;
    device.textAlignVertical = 'CENTER'
    device.textAlignHorizontal = 'LEFT'
    device.resize(frameCard.width - (28 * 2), device.height);
    device.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const titleModelBusiness = figma.createText();
    titleModelBusiness.characters = `Business Model Relationship`;
    titleModelBusiness.fontName = { family: "Inter", style: "Medium" };
    titleModelBusiness.fontSize = 17;
    titleModelBusiness.textAlignVertical = 'CENTER'
    titleModelBusiness.textAlignHorizontal = 'LEFT'
    titleModelBusiness.resize(frameCard.width - (28 * 2), titleModelBusiness.height)
    titleModelBusiness.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    
    const modelBusiness = figma.createText();
    modelBusiness.characters = `${randomBusinessModel.businessModelName} (${randomBusinessModel.businessModelCode})`;
    modelBusiness.fontName = { family: "Inter", style: "Light" };
    modelBusiness.fontSize = 15;
    modelBusiness.textAlignVertical = 'CENTER'
    modelBusiness.textAlignHorizontal = 'LEFT'
    modelBusiness.resize(frameCard.width - (28 * 2), device.height);
    modelBusiness.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const infoBusinessModel = figma.createText();
    infoBusinessModel.characters = `${randomBusinessModel.description}. Example Cases: ${randomBusinessModel.cases.join(", ")}, etc.`;
    infoBusinessModel.fontName = { family: "Inter", style: "Light" };
    infoBusinessModel.fontSize = 15;
    infoBusinessModel.resize(frameCard.width - ((28 * 2) + 12), infoBusinessModel.height);
    infoBusinessModel.textAutoResize = "HEIGHT";
    infoBusinessModel.textAlignHorizontal = 'LEFT';
    infoBusinessModel.textAlignVertical = 'CENTER'
    infoBusinessModel.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const frameField = figma.createFrame();
    frameField.resize(frameCard.width - (28 * 2), titleField.height + field.height);
    frameField.layoutMode = 'VERTICAL'; // or 'HORIZONTAL' based on your need
    frameField.primaryAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameField.counterAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameField.fills = [];
    frameField.itemSpacing = 4;
    frameField.appendChild(titleField);
    frameField.appendChild(field);

    const frameDevice = figma.createFrame();
    frameDevice.resize(frameCard.width - (28 * 2), titleDevice.height + device.height);
    frameDevice.layoutMode = 'VERTICAL'; // or 'HORIZONTAL' based on your need
    frameDevice.primaryAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameDevice.counterAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameDevice.fills = [];
    frameDevice.itemSpacing = 4;
    frameDevice.appendChild(titleDevice);
    frameDevice.appendChild(device);

    const frameModelBusiness = figma.createFrame();
    frameModelBusiness.resize(frameCard.width - (28 * 2), titleModelBusiness.height + modelBusiness.height + infoBusinessModel.height);
    frameModelBusiness.layoutMode = 'VERTICAL'; // or 'HORIZONTAL' based on your need
    frameModelBusiness.primaryAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameModelBusiness.counterAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameModelBusiness.fills = [];
    frameModelBusiness.itemSpacing = 4;
    frameModelBusiness.appendChild(titleModelBusiness);
    frameModelBusiness.appendChild(modelBusiness);

    await frameCard.appendChild(titlePlugin);
    await frameCard.appendChild(frameField);
    await frameCard.appendChild(frameDevice);
    await frameCard.appendChild(frameModelBusiness);
    await frameCard.appendChild(infoBusinessModel);

    const frameDecorA = figma.createFrame();
    frameDecorA.resize(frameCard.width, frameCard.height);
    frameDecorA.fills = [{ type: 'SOLID', color: { r:0.5254901960784314, g: 0.9372549019607843, b: 0.6745098039215686 }  }];
    frameDecorA.strokeWeight = 1;
    frameDecorA.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    frameDecorA.x = 0;
    frameDecorA.y = 40;

    const frameDecorB = figma.createFrame();
    frameDecorB.resize(frameCard.width, frameCard.height);
    frameDecorB.fills = [{ type: 'SOLID', color: { r: 0.7333333333333333, g: 0.9686274509803922, b: 0.8156862745098039 } }];
    frameDecorB.strokeWeight = 1;
    frameDecorB.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    frameDecorB.x = 20;
    frameDecorB.y = 20;

    const frame = figma.createFrame();
    frame.x = viewportCenterX;
    frame.y = viewportCenterY;
    frame.resize(frameCard.width + 40, frameCard.height + 40);
    frame.fills = [];
    frame.name = 'Design Spark';

    await frame.appendChild(frameDecorA);
    await frame.appendChild(frameDecorB);
    await frame.appendChild(frameCard);

    await figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.viewport.scrollAndZoomIntoView([frame]);

    await figma.closePlugin();
    
}

// Runs this code if the plugin is run in Figma
if (figma.editorType === 'figma') {
  figma.showUI(__html__);
  figma.ui.resize(300, 290);
  
  figma.ui.onmessage = async pluginMessage => {

    const numberArray = [1,2];
    const randomResult = numberArray[Math.floor(Math.random() * numberArray.length)];

    const valueSelected = pluginMessage.value;

    switch (valueSelected) {
        case 'screen':
            resultScreen();
            break;
        case 'mvp':
            resultMVP();
            break;
        default:
            if (randomResult == 1) {
                resultScreen();
            } else if (randomResult == 2) {
                resultMVP();
            }
            break;
    }
  };
}

// Runs this code if the plugin is run in FigJam
if (figma.editorType === 'figjam') {
    figma.showUI(__html__);
    figma.ui.resize(300, 290);
    
    figma.ui.onmessage = async pluginMessage => {
  
      const numberArray = [1,2];
      const randomResult = numberArray[Math.floor(Math.random() * numberArray.length)];
  
      const valueSelected = pluginMessage.value;
  
      switch (valueSelected) {
          case 'screen':
              resultScreen();
              break;
          case 'mvp':
              resultMVP();
              break;
          default:
              if (randomResult == 1) {
                  resultScreen();
              } else if (randomResult == 2) {
                  resultMVP();
              }
              break;
      }
    };
  }