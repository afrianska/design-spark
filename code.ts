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

const insdustry = [
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

const devices = ['Web', 'Mobile/Phone', 'Tablet/Ipad'];

// Runs this code if the plugin is run in Figma
if (figma.editorType === 'figma') {
  figma.showUI(__html__);
  figma.ui.resize(300, 270);
  
  figma.ui.onmessage = async pluginMessage => {
    // figma.ui.postMessage({type: 'data', businessModel});

    // Load the font
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Light" });
    await figma.loadFontAsync({ family: "Inter", style: "Light Italic" });

    // Get the current viewport center and zoom level
    const viewportCenter = figma.viewport.center;
    const viewportZoom = figma.viewport.zoom;

    // Calculate the coordinates of the center point of the viewport
    const viewportCenterX = viewportCenter.x * viewportZoom;
    const viewportCenterY = viewportCenter.y * viewportZoom;

    const randomBusinessModel = businessModel[Math.floor(Math.random() * businessModel.length)];
    const randomIndustry = insdustry[Math.floor(Math.random() * insdustry.length)];
    const randomDevice = devices[Math.floor(Math.random() * devices.length)];

    const frame = figma.createFrame();
    frame.x = viewportCenterX;
    frame.y = viewportCenterY;
    frame.resize(384, frame.height);
    frame.layoutMode = 'VERTICAL'; // or 'HORIZONTAL' based on your need
    frame.primaryAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frame.counterAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frame.horizontalPadding = 28;
    frame.verticalPadding = 28;
    frame.itemSpacing = 24;
    frame.fills = [{ type: 'SOLID', color: { r: 0.94, g: 0.97, b: 1 } }];
    frame.name = 'A Random Spark';

    const titlePlugin = figma.createText();
    titlePlugin.characters = `Let’s Explore Design`;
    titlePlugin.fontName = { family: "Inter", style: "Bold" };
    titlePlugin.fontSize = 21;
    titlePlugin.textAlignVertical = 'CENTER'
    titlePlugin.textAlignHorizontal = 'CENTER'
    titlePlugin.resize(frame.width - (28 * 2), titlePlugin.height)
    titlePlugin.fills = [{ type: 'SOLID', color: { r: 0.04, g: 0.29, b: 0.43 } }];
        
    const challengeScope = figma.createText();
    challengeScope.characters = `Create a Minimum Viable Product (MVP) or Design Shoot for ${randomBusinessModel.businessModelName} (${randomBusinessModel.businessModelCode}) that related with ${randomIndustry.industry} field, where the product will be implemented on ${randomDevice}.`;
    challengeScope.fontName = { family: "Inter", style: "Regular" };
    challengeScope.fontSize = 17;
    challengeScope.textAlignVertical = 'CENTER'
    challengeScope.textAlignHorizontal = 'CENTER'
    challengeScope.resize(frame.width - (28 * 2), challengeScope.height);
    challengeScope.fills = [{ type: 'SOLID', color: { r: 0.04, g: 0.29, b: 0.43 } }];

    const infoBusinessModel = figma.createText();
    infoBusinessModel.characters = `${randomBusinessModel.businessModelCode} or ${randomBusinessModel.businessModelName} is ${randomBusinessModel.description}. Example Cases: ${randomBusinessModel.cases.join(", ")}, etc. Example Companies: ${randomBusinessModel.companies.join(", ")}, etc.`;
    infoBusinessModel.fontName = { family: "Inter", style: "Light Italic" };
    infoBusinessModel.fontSize = 12;
    infoBusinessModel.resize(frame.width - ((28 * 2) + 12), infoBusinessModel.height);
    infoBusinessModel.textAutoResize = "HEIGHT";
    infoBusinessModel.textAlignVertical = 'CENTER'
    infoBusinessModel.textAlignHorizontal = 'CENTER';
    infoBusinessModel.fills = [{ type: 'SOLID', color: { r: 0.04, g: 0.29, b: 0.43 } }];

    const frameInfo = figma.createFrame();
    frameInfo.appendChild(infoBusinessModel);
    frameInfo.resize(frame.width - (28 * 2), infoBusinessModel.height + 10);
    frameInfo.layoutMode = 'VERTICAL'; // or 'HORIZONTAL' based on your need
    frameInfo.primaryAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameInfo.counterAxisSizingMode = 'AUTO'; // Adjust sizing mode
    frameInfo.horizontalPadding = 6;
    frameInfo.verticalPadding = 6;
    frameInfo.strokes = [{ type: 'SOLID', color: { r: 0.04, g: 0.29, b: 0.43 } }];
    frameInfo.strokeAlign = 'INSIDE';
    frameInfo.strokeWeight = 0.5;
    frameInfo.fills = [];
    
    // console.log(industry[getRandomIndustryID]);
    if (pluginMessage.random == true ) {

      
     await frame.appendChild(titlePlugin);
     await frame.appendChild(challengeScope);
     await frame.appendChild(frameInfo);

    await figma.currentPage.appendChild(frame);
    figma.currentPage.selection = [frame];
    figma.viewport.scrollAndZoomIntoView([frame]);

    }

    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
  };
}