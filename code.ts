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
    {
        "id" : 1,
        "industry" : "Food & Drink"
    },
    {
        "id" : 2,
        "industry" : "Business & Consulting"
    },
    {
        "id" : 3,
        "industry" : "Medic & Pharmaceutical"
    },
    {
        "id" : 4,
        "industry" : "Technology"
    },
    {
        "id" : 5,
        "industry" : "Retail"
    },
    {
        "id" : 6,
        "industry" : "Real Estate & Mortgage"
    },
    {
        "id" : 7,
        "industry" : "Accounting & Financial"
    },
    {
        "id" : 8,
        "industry" : "Education"
    },
    {
        "id" : 9,
        "industry" : "Entertanment & The Arts"
    },
    {
        "id" : 10,
        "industry" : "Internet"
    },
    {
        "id" : 11,
        "industry" : "Physical Fitness"
    },
    {
        "id" : 12,
        "industry" : "Sport"
    },
    {
        "id" : 13,
        "industry" : "Fashion"
    },
    {
        "id" : 14,
        "industry" : "Construction"
    },
    {
        "id" : 15,
        "industry" : "Games & Recreational"
    },
    {
        "id" : 16,
        "industry" : "Cosmetics & Beauty"
    },
    {
        "id" : 17,
        "industry" : "Industrial"
    },
    {
        "id" : 18,
        "industry" : "Community & Non-Profit"
    },
    {
        "id" : 19,
        "industry" : "Travel & Hotel"
    },
    {
        "id" : 20,
        "industry" : "Attorney & Law"
    },
    {
        "id" : 21,
        "industry" : "Art & Design"
    },
    {
        "id" : 22,
        "industry" : "Automotive"
    },
    {
        "id" : 23,
        "industry" : "Communications"
    },
    {
        "id" : 24,
        "industry" : "Agriculture"
    },
    {
        "id" : 25,
        "industry" : "Architectural"
    },
    {
        "id" : 26,
        "industry" : "Photography"
    },
    {
        "id" : 27,
        "industry" : "Animal & Pet"
    },
    {
        "id" : 28,
        "industry" : "Environmental"
    },
    {
        "id" : 29,
        "industry" : "Spa & Esthetics"
    },
    {
        "id" : 30,
        "industry" : "Cleaning & Maintenance"
    },
    {
        "id" : 31,
        "industry" : "Weding Services"
    },
    {
        "id" : 32,
        "industry" : "Home Furnishing"
    },
    {
        "id" : 33,
        "industry" : "Restaurant"
    },
    {
        "id" : 34,
        "industry" : "Political"
    },
    {
        "id" : 35,
        "industry" : "Religius"
    },
    {
        "id" : 36,
        "industry" : "Computer"
    },
    {
        "id" : 37,
        "industry" : "Floral"
    },
    {
        "id" : 38,
        "industry" : "Security"
    },
    {
        "id" : 39,
        "industry" : "Dating"
    },
    {
        "id" : 40,
        "industry" : "Lanscaping"
    },
    {
        "id" : 41,
        "industry" : "Bar & Nightclub"
    },
    {
        "id" : 42,
        "industry" : "Childcare"
    }
  ];

const screens = [
    "About us, Our Approach, Our Story",
    "Activity Feed & Notifications",
    "Add, Create",
    "Statistics & Analytics (Chart)",
    "Blog, News, Newsletter",
    "Bookings, Calendar, Schedule",
    "Bookmarks, Likes, Favorites",
    "Become a Member/Partner, Join Us, Careers, Jobs, Volunteer, Membership, Investor Relations, etc",
    "Chat, Inbox, Messages, Feedback, Comments",
    "Community, Forum, Groups",
    "Courses, Education, Training, Workshop",
    "Dashboard, Admin Panel",
    "Documentation, Resources, API",
    "Empty State, 404, Error, Loading, Success",
    "Popular, Recommendations, Suggestions, Insights, Top Rated, Trends, Currated for you",
    "Main Features, Solutions",
    "Landing Page, Home, Feed, Timeline",
    "Explore, Discover, Search, Filter & Sort",
    "Form, Input, File Upload, Download",
    "Products, Portfolios, Galleries, Projects, Services, etc",
    "Guide Tour & Tutorial, Tips, Walkthrough",
    "Contact Support, Help & Support, FAQs",
    "Hero, Header, Footer, Splash, Welcome, Onboarding, Get Started",
    "Login, Sign In, Sign Up, Sign Out, Forgot Passoword, Register, etc",
    "Maps, Location, Tracking",
    "Account, Profile",
    "Orders, Reservations",
    "Account Setup, Settings, Preferences",
    "Events, Notifications, Invitations",
    "Our Clients, Our Team, Partners",
    "Privacy Policy, Security, Terms and Conditions, Term of Service, etc",
    "Promotions, Rewards, Advertisement, Special Offers, Inquiries",
    "Shop, Shopping Cart, Cart, Wishlist",
    "Single Screen: Product, Blog, Portfolio, Project, etc",
    "Social Proof, Testimonial, Customer Stories",
    "Verification Code, Verify Account",
    "Gallery, Media, Video, Video Player",
    "Pricing, Subscription, Paywall, Payments, Payment Method, Billing, Wallet, Transactions, Donate, Invoice, Checkout",
    "Whatever in your mind"
];

const devices = ['Web', 'Mobile', 'Tablet/Ipad'];

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
    titleField.characters = `Field`;
    titleField.fontName = { family: "Inter", style: "Medium" };
    titleField.fontSize = 17;
    titleField.textAlignVertical = 'CENTER'
    titleField.textAlignHorizontal = 'LEFT'
    titleField.resize(frameCard.width - (28 * 2), titleField.height)
    titleField.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    
    const field = figma.createText();
    field.characters = `${randomIndustry.industry}`;
    field.fontName = { family: "Inter", style: "Light" };
    field.fontSize = 15;
    field.textAlignVertical = 'CENTER'
    field.textAlignHorizontal = 'LEFT'
    field.resize(frameCard.width - (28 * 2), field.height);
    field.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const titleDevice = figma.createText();
    titleDevice.characters = `Device Implementation`;
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
    titleScreen.characters = `Screen Coverage`;
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
    titleField.characters = `Field`;
    titleField.fontName = { family: "Inter", style: "Medium" };
    titleField.fontSize = 17;
    titleField.textAlignVertical = 'CENTER'
    titleField.textAlignHorizontal = 'LEFT'
    titleField.resize(frameCard.width - (28 * 2), titleField.height)
    titleField.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
    
    const field = figma.createText();
    field.characters = `${randomIndustry.industry}`;
    field.fontName = { family: "Inter", style: "Light" };
    field.fontSize = 15;
    field.textAlignVertical = 'CENTER'
    field.textAlignHorizontal = 'LEFT'
    field.resize(frameCard.width - (28 * 2), field.height);
    field.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];

    const titleDevice = figma.createText();
    titleDevice.characters = `Device Implementation`;
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