# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_Handle_SVG\250_Advance_SVG_Project.spec.ts >> Advanced SVG Handling - Map selection >> Generate the list of all the states
- Location: tests\11_Handle_SVG\250_Advance_SVG_Project.spec.ts:9:9

# Error details

```
Error: locator.allTextContents: Unsupported token "@id" while parsing css selector "/div[@id='admin1_map_inner']//*[name()='svg']//*[name()='text' and contains(@class,'sm_label')]". Did you mean to CSS.escape it?
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - img [ref=e7]
      - generic: 
    - list [ref=e27]:
      - listitem [ref=e28]:
        - link "US Map" [ref=e29] [cursor=pointer]:
          - /url: /us
      - listitem [ref=e30]:
        - link "World Map" [ref=e31] [cursor=pointer]:
          - /url: /world
      - listitem [ref=e32]:
        - link "Features" [ref=e33] [cursor=pointer]:
          - /url: /features
      - listitem [ref=e34]:
        - link "Docs" [ref=e35] [cursor=pointer]:
          - /url: /docs
      - listitem [ref=e36]:
        - link "Pricing" [ref=e37] [cursor=pointer]:
          - /url: /pricing
      - listitem [ref=e38]:
        - link "Contact" [ref=e39] [cursor=pointer]:
          - /url: /contact
      - listitem [ref=e40]:
        - link "All" [ref=e41] [cursor=pointer]:
          - /url: "#"
          - text: All
  - generic [ref=e45]:
    - generic [ref=e46]:
      - heading "Free India SVG Maps" [level=2] [ref=e47]
      - button "Other Countries" [ref=e49] [cursor=pointer]: Other Countries
      - generic [ref=e52]:
        - paragraph [ref=e53]: We've created multiple SVG maps for the country of India.
        - generic [ref=e54]:
          - tablist [ref=e55]:
            - tab "Admin Areas (level 1)" [expanded] [selected] [ref=e56]:
              - link "Admin Areas (level 1)" [ref=e57]:
                - /url: "#admin1"
            - tab "All of India" [ref=e58]:
              - link "All of India" [ref=e59] [cursor=pointer]:
                - /url: "#all"
          - tabpanel "Admin Areas (level 1)" [ref=e60]:
            - paragraph [ref=e61]: "Below is an SVG map of the country of India. It has been cleaned and optimized for web use. Features include:"
            - list [ref=e62]:
              - listitem [ref=e63]: Simplified to load quickly with minimal loss of detail (208.4 KB).
              - listitem [ref=e64]:
                - text: "License:"
                - link "Free for Commercial and Personal Use" [ref=e65] [cursor=pointer]:
                  - /url: /resources/svg-license
                - text: (attribution appreciated!).
              - listitem [ref=e66]:
                - text: First-level administrative regions identified by
                - code [ref=e67]: name
                - text: and
                - code [ref=e68]: id
                - text: in the source code.
              - listitem [ref=e69]:
                - text: Uses the beautiful
                - link "Mercator Projection" [ref=e70] [cursor=pointer]:
                  - /url: https://en.wikipedia.org/wiki/Mercator_projection
                - text: .
            - paragraph
            - paragraph [ref=e71]:
              - img "SVG India Map Using Mercator Projection" [ref=e72]
            - paragraph [ref=e73]:
              - link "Download SVG" [ref=e74] [cursor=pointer]:
                - /url: /static/svg/country/in/admin1/in.svg
              - link "View Source GIS" [ref=e75] [cursor=pointer]:
                - /url: /gis/country/in#admin1
              - link "Customize Online as Interactive Map" [ref=e76] [cursor=pointer]:
                - /url: /ajax/set-map-abs/?url_slug=country&mapinfo_src=https://simplemaps.com/static/svg/country/in/admin1/mapinfo.js&mapdata_src=https://simplemaps.com/static/svg/country/in/admin1/mapdata.js
            - heading "Make this India map interactive and customize it online!" [level=3] [ref=e77]
            - paragraph [ref=e78]:
              - text: Our software turns this static SVG map into a zoomable, clickable, mobile-friendly map like the one below. We make it easy to customize region colors, descriptions, urls etc. and add locations like the capital city, New Delhi, to your map. Get started now with our
              - link "online customization tool" [ref=e79] [cursor=pointer]:
                - /url: /ajax/set-map-abs/?url_slug=country&mapinfo_src=https://simplemaps.com/static/svg/country/in/admin1/mapinfo.js&mapdata_src=https://simplemaps.com/static/svg/country/in/admin1/mapdata.js
              - text: .
            - generic [ref=e82]:
              - img [ref=e84]
              - img [ref=e90]
            - link " Customize this map " [ref=e130] [cursor=pointer]:
              - /url: /ajax/set-map-abs/?url_slug=country&mapinfo_src=https://simplemaps.com/static/svg/country/in/admin1/mapinfo.js&mapdata_src=https://simplemaps.com/static/svg/country/in/admin1/mapdata.js
              - generic [ref=e131]: 
              - text: Customize this map
              - generic [ref=e132]: 
            - heading "Included Administrative Regions" [level=3] [ref=e133]
            - code [ref=e135]: "{ \"INAN\": \"Andaman and Nicobar\", \"INAP\": \"Andhra Pradesh\", \"INAR\": \"Arunachal Pradesh\", \"INAS\": \"Assam\", \"INBR\": \"Bihar\", \"INCH\": \"Chandigarh\", \"INCT\": \"Chhattisgarh\", \"INDH\": \"Dādra and Nagar Haveli and Damān and Diu\", \"INDL\": \"Delhi\", \"INGA\": \"Goa\", \"INGJ\": \"Gujarat\", \"INHP\": \"Himachal Pradesh\", \"INHR\": \"Haryana\", \"INJH\": \"Jharkhand\", \"INJK\": \"Jammu and Kashmir\", \"INKA\": \"Karnataka\", \"INKL\": \"Kerala\", \"INLA\": \"Ladakh\", \"INLD\": \"Lakshadweep\", \"INMH\": \"Maharashtra\", \"INML\": \"Meghalaya\", \"INMN\": \"Manipur\", \"INMP\": \"Madhya Pradesh\", \"INMZ\": \"Mizoram\", \"INNL\": \"Nagaland\", \"INOR\": \"Orissa\", \"INPB\": \"Punjab\", \"INPY\": \"Puducherry\", \"INRJ\": \"Rajasthan\", \"INSK\": \"Sikkim\", \"INTG\": \"Telangana\", \"INTN\": \"Tamil Nadu\", \"INTR\": \"Tripura\", \"INUP\": \"Uttar Pradesh\", \"INUT\": \"Uttaranchal\", \"INWB\": \"West Bengal\" }"
          - text:  
    - generic [ref=e136]:
      - heading "Resources" [level=3] [ref=e137]
      - paragraph [ref=e138]: Tools, freebies, and articles about mapping and web development. Things we've learned and want to share!
      - list [ref=e139]:
        - listitem [ref=e140]:
          - link "Introduction" [ref=e141] [cursor=pointer]:
            - /url: /resources
      - heading "Free SVG Maps" [level=3] [ref=e142]
      - list [ref=e143]:
        - listitem [ref=e144]:
          - link "All Free SVG Maps" [ref=e145] [cursor=pointer]:
            - /url: /resources/svg-maps
        - listitem [ref=e146]:
          - link "World SVG Map" [ref=e147] [cursor=pointer]:
            - /url: /resources/svg-world
        - listitem [ref=e148]:
          - link "USA SVG Map" [ref=e149] [cursor=pointer]:
            - /url: /resources/svg-us
      - heading "Free Interactive Maps" [level=3] [ref=e150]
      - list [ref=e151]:
        - listitem [ref=e152]:
          - link "Free World Map" [ref=e153] [cursor=pointer]:
            - /url: /resources/free-world-map
        - listitem [ref=e154]:
          - link "Free US Map" [ref=e155] [cursor=pointer]:
            - /url: "/resources/free-us-map "
        - listitem [ref=e156]:
          - link "Free Continent" [ref=e157] [cursor=pointer]:
            - /url: /resources/free-continent-map
      - heading "Data Articles" [level=3] [ref=e158]
      - list [ref=e159]:
        - listitem [ref=e160]:
          - link "CSV to Athena" [ref=e161] [cursor=pointer]:
            - /url: /resources/csv-to-athena
        - listitem [ref=e162]:
          - link "Athena over URL" [ref=e163] [cursor=pointer]:
            - /url: /resources/athena-over-url
        - listitem [ref=e164]:
          - link "Import CSV into MySQL" [ref=e165] [cursor=pointer]:
            - /url: /resources/import-csv-mysql
        - listitem [ref=e166]:
          - link "Import data subset with Power Query" [ref=e167] [cursor=pointer]:
            - /url: /resources/power-query
        - listitem [ref=e168]:
          - link "Retreive demographic data with VLOOKUP" [ref=e169] [cursor=pointer]:
            - /url: /resources/vlookup
        - listitem [ref=e170]:
          - link "Import CSV into Tableau" [ref=e171] [cursor=pointer]:
            - /url: /resources/import-tableau
        - listitem [ref=e172]:
          - link "Visualize places in QGIS" [ref=e173] [cursor=pointer]:
            - /url: /resources/cities-qgis
        - listitem [ref=e174]:
          - link "Filter places in Excel" [ref=e175] [cursor=pointer]:
            - /url: /resources/filter-excel
        - listitem [ref=e176]:
          - link "Location distance code (.js and .py)" [ref=e177] [cursor=pointer]:
            - /url: /resources/location-distance
      - heading "Map Articles" [level=3] [ref=e178]
      - list [ref=e179]:
        - listitem [ref=e180]:
          - link "Guide to MapShaper" [ref=e181] [cursor=pointer]:
            - /url: /resources/guide-to-mapshaper
        - listitem [ref=e182]:
          - link "Overlay polygons on Google Maps" [ref=e183] [cursor=pointer]:
            - /url: /resources/shapes-google-maps
        - listitem [ref=e184]:
          - link "Using Google Cloud" [ref=e185] [cursor=pointer]:
            - /url: /resources/google-cloud-project
        - listitem [ref=e186]:
          - link "Introduction to customizing SVG" [ref=e187] [cursor=pointer]:
            - /url: /resources/customize-us-svg
        - listitem [ref=e188]:
          - link "Software we use at SimpleMaps" [ref=e189] [cursor=pointer]:
            - /url: /resources/software-at-simplemaps
        - listitem [ref=e190]:
          - link "Alternative to Google Maps" [ref=e191] [cursor=pointer]:
            - /url: /resources/alternative-to-google-maps
        - listitem [ref=e192]:
          - link "Flash vs. HTML5 maps" [ref=e193] [cursor=pointer]:
            - /url: /resources/flash-vs-html5
      - heading "Data and Tools" [level=3] [ref=e194]
      - list [ref=e195]:
        - listitem [ref=e196]:
          - link "US Address/Cities Geocoder" [ref=e197] [cursor=pointer]:
            - /url: us-geocoder
        - listitem [ref=e198]:
          - link "World cities data (by country)" [ref=e199] [cursor=pointer]:
            - /url: /resources/free-country-cities
      - heading "Visualizations" [level=3] [ref=e200]
      - list [ref=e201]:
        - listitem [ref=e202]:
          - link "US Gold Medalists Rio 2016" [ref=e203] [cursor=pointer]:
            - /url: /viz/rio16
        - listitem [ref=e204]:
          - link "US Unemployment (auto-updated)" [ref=e205] [cursor=pointer]:
            - /url: /viz/unemployment
        - listitem [ref=e206]:
          - link "Snakes and Bears" [ref=e207] [cursor=pointer]:
            - /url: /viz/wild
        - listitem [ref=e208]:
          - link "Zip Code Visualizations" [ref=e209] [cursor=pointer]:
            - /url: /resources/zip-code-visualizations
        - listitem [ref=e210]:
          - link "County Visualizations" [ref=e211] [cursor=pointer]:
            - /url: /resources/us-counties-viz
      - heading "Links" [level=3] [ref=e212]
      - list [ref=e213]:
        - listitem [ref=e214]:
          - link "Raphael.js" [ref=e215] [cursor=pointer]:
            - /url: http://dmitrybaranovskiy.github.io/raphael/
        - listitem [ref=e216]:
          - link "MapShaper" [ref=e217] [cursor=pointer]:
            - /url: http://www.mapshaper.org/
        - listitem [ref=e218]:
          - link "Old articles about Flash maps" [ref=e219] [cursor=pointer]:
            - /url: /flash
  - paragraph [ref=e221]:
    - link "Home" [ref=e222] [cursor=pointer]:
      - /url: /
    - text: "|"
    - link "License" [ref=e223] [cursor=pointer]:
      - /url: /license
    - text: "|"
    - link "Privacy" [ref=e224] [cursor=pointer]:
      - /url: /privacy
    - text: "|"
    - link "Releases" [ref=e225] [cursor=pointer]:
      - /url: /releases
    - text: "|"
    - link "Testimonials" [ref=e226] [cursor=pointer]:
      - /url: /testimonials
    - text: "|"
    - link "Resources" [ref=e227] [cursor=pointer]:
      - /url: /resources
    - text: "|"
    - link "Documentation |" [ref=e228] [cursor=pointer]:
      - /url: /docs/
    - link "Order Lookup" [ref=e229] [cursor=pointer]:
      - /url: /updates
    - text: "|"
    - link "All Maps" [ref=e230] [cursor=pointer]:
      - /url: /all-maps
    - text: "|"
    - link "FAQs" [ref=e231] [cursor=pointer]:
      - /url: https://faqs.simplemaps.com
    - generic [ref=e232]:
      - text: "Popular Resources:"
      - link "Free SVG Maps" [ref=e233] [cursor=pointer]:
        - /url: /resources/svg-maps
      - text: "|"
      - link "Free GIS Files" [ref=e234] [cursor=pointer]:
        - /url: /resources/gis
      - text: "|"
      - link "Free Cities Data" [ref=e235] [cursor=pointer]:
        - /url: /resources/free-country-cities
      - text: "|"
      - link "Zip Code Visualizations" [ref=e236] [cursor=pointer]:
        - /url: /resources/zip-code-visualizations
      - text: "|"
      - link "Trauma Centers by State" [ref=e237] [cursor=pointer]:
        - /url: /state/trauma-centers
      - text: "|"
      - link "Airports" [ref=e238] [cursor=pointer]:
        - /url: /airports
      - text: "|"
      - link "Geography Quizzes" [ref=e239] [cursor=pointer]:
        - /url: /resources/quizzes
    - text: SimpleMaps.com is a product of Pareto Software, LLC. © 2010-2026.
```

# Test source

```ts
  1  | import {test, expect, Locator} from '@playwright/test'
  2  | 
  3  | const simpleMaps: string = 'https://simplemaps.com/svg/country/in'
  4  | test.describe('Advanced SVG Handling - Map selection', () =>{
  5  |     test.beforeEach(async({ page }) =>{
  6  |         await page.goto(simpleMaps);
  7  |     });
  8  | 
  9  |     test('Generate the list of all the states', async({ page }) =>{
> 10 |         const states = await page.locator(`/div[@id='admin1_map_inner']//*[name()='svg']//*[name()='text' and contains(@class,'sm_label')]`).allTextContents();
     |                                                                                                                                              ^ Error: locator.allTextContents: Unsupported token "@id" while parsing css selector "/div[@id='admin1_map_inner']//*[name()='svg']//*[name()='text' and contains(@class,'sm_label')]". Did you mean to CSS.escape it?
  11 |             // Printing all the states and clicking on UP
  12 |             for (const state of states){
  13 |                 if(state.trim() === 'Uttar Pradesh'){
  14 |                     await page.locator(`//*[name()='path' and contains(@class,'INUP')]`).click();
  15 |                 }
  16 |             }
  17 |     });
  18 | 
  19 | 
  20 | });
```