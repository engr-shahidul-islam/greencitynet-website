# GREEN CITY NET — Premium ISP Website

Static true multi-page website built from the supplied master development prompt.

## Run
Open `index.html` directly, or use any local static server.

## Main editable data
- `js/data.js` — company info, packages, services, team, contact/social data.
- `css/style.css` — brand/design system.
- `js/app.js` — navigation and dynamic rendering.

## Pages
Home, About, Services, Packages, FTP Server, Team, Careers, Contact, Support, FAQ, Privacy, Terms.

## Images
Place real images in:
`assets/images/hero/`
`assets/images/team/`
`assets/images/services/`
`assets/images/network/`
`assets/images/ftp/`

Replace placeholder contact/package/statistic information before production.

Developer credit:
Innovation IT Hub links to the exact Facebook page specified in the master prompt.


## Leadership and team photos
About Us shows only the Chairman and Managing Director. The Team page shows all four core members. Each View Profile button opens a detailed profile modal.

Put real, authorized JPG portraits in `assets/images/team/` using the filenames listed in `assets/images/team/README.txt`. The website uses initials until a photo file is supplied.

## Editable service access links
On `ftp-server.html`, replace the empty `data-url` values on the FTP Address, Web Access and Live TV buttons with the actual working URLs. These are deliberately placeholders, not claimed live links.

## One Country, One Rate packages
Edit the `oneCountryPackages` array in `js/data.js`. Replace `৳ XXX` with your approved monthly prices before publishing.

## Network claims
The BTRC licence, Layer 3 IIG, Summit, Asian and Starlink wording is based on the company information supplied by the owner. Verify all regulatory and upstream details before publication.


## Latest requested changes
- FTP page now has a structured FTP Address, Web Access, and Live Server List with clickable action links. Replace each empty `data-url` in `ftp-server.html` with the real authorized URL before publishing; empty links intentionally show a setup alert.
- About Us leadership uses a two-column layout with a larger central gap.
- A custom ISP licence badge graphic and BTRC licensing notice appear in each footer. This artwork is not an official BTRC logo or licence certificate. Verify the ISP licence and publish the actual licence number/details only if valid.


## Latest update
- Footer internet categories now link to the matching package filters.
- Premium, SME and Corporate each contain three editable sample packages. Prices remain `৳ XXX` placeholders.
- Added `coverage.html` with searchable enquiry areas: Hariken, Degerchala Road, Amazing Fashion Ltd. Area, Hanapukur, Zajhor, Moiran, Hajir Pukur and nearby locations. The page is illustrative and does not represent a live GIS availability map.
- Leadership cards now place photos above profile text to prevent overlap.


## Interactive coverage map (updated)
- `coverage.html` loads an interactive OpenStreetMap/Leaflet map on the Coverage page.
- Confirmed public-map reference pins: Degerchala locality (23.95687, 90.39028) and Hariken, Gazipur Road (23.96134, 90.38058).
- The dashed circle is an illustrative 900 m reference radius only, not a fiber coverage boundary.
- Hanapukur, Amazing Fashion Ltd. Area, Zajhor, Moiran and Hajir Pukur remain searchable enquiry areas without fabricated map pins; add their precise coordinates after local verification.
- The map requires internet access to load map tiles and Leaflet from their public CDN.


## Language option
All pages include an English/Bangla toggle in the header. The selection is saved in the browser and persists as visitors move between pages. Review translations before launch; some generated package/service content may need manual localization as your final content is confirmed.


Latest update: English-only interface. The language toggle and translation script have been removed. Services, Team and Contact pages received a professional responsive redesign. Coverage remains a highlighted lime-green header navigation item.

## Formspree setup (Contact + Career)
- Both `contact.html` and `careers.html` currently submit to `https://formspree.io/f/xjygwlkq` using AJAX in `js/app.js`.
- In the Formspree dashboard, open this form and check **Settings** for the recipient/notification email. Verify the email if prompted.
- Submit a test from the live website, then check the Formspree **Submissions** tab and the recipient email's Inbox/Spam folders.
- Since both website forms share one endpoint, Contact enquiries and Career applications will appear in the same Formspree form. If you want them separated, create a second Formspree form for Careers and change only the `action` in `careers.html` to its new endpoint.
- The optional CV upload may be limited by your Formspree plan. Test it before publishing.
- For best results, host the website on your real domain or a local web server and test there; an email notification is not considered verified until you see the test submission arrive.
