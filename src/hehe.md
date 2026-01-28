@project-planner.md 
now I will give an overview on what I want to make and how I want to make, currently I just want you to plan the project I don't want you to make the project. I also want to tell u that I have morderate level of knowledge in frontend and very basic level of knowlegde in backend. also the website is only designed for laptop screen, we will discuss about the responsiveness of the website in another discussion, but not now, currently we will ignore responsiveness

I am currently participating in a hackathon, so first I will tell u the problem statement and our solution overview
1. Product Overview
Product Name
SANGAI
(Inspired by the Sangai deer – a symbol of the Northeast’s unique ecology, culture, and fragile heritage.)
Vision
SANGAI is a discovery-first, map-driven digital platform designed to promote sustainable tourism,
cultural heritage preservation, and community participation in Northeast India.
Unlike conventional tourism platforms that prioritize bookings and commercial listings, SANGAI focuses
on understanding before visiting. It helps users explore regions, cultures, places, festivals, and local
experiences through interactive geography, immersive storytelling, and intelligent discovery tools.
The platform positions Northeast India not as a checklist of destinations, but as a living, diverse, and
culturally rich region that deserves mindful exploration.
2. Problem Statement (Detailed)
2.1 Lack of Visibility Beyond Famous Destinations
Northeast India remains largely underrepresented in mainstream tourism platforms. Most visitors are
only aware of a few popular locations such as Shillong, Kaziranga, or well-known festivals, while
hundreds of culturally and ecologically significant places remain undiscovered.
Even locations situated close to popular tourist routes often go unnoticed due to: - Lack of accessible
information - Poor digital representation - Absence of engaging storytelling
2.2 Tourism Platforms Focus on Transactions, Not Understanding
Existing travel platforms are largely designed around: - Hotel bookings - Tour packages - Transportation
They provide very limited cultural, historical, or social context. As a result: - Visitors arrive without
understanding local customs - Cultural sensitivity is often lacking - Travel experiences become
superficial
1
2.3 Limited Economic Benefit for Local Communities
Local communities living near tourist destinations often: - Do not directly benefit from tourism - Remain
disconnected from tourism platforms - Are reduced to passive observers rather than active participants
This leads to unsustainable tourism models where economic value flows outward rather than
strengthening local livelihoods.
2.4 Poor Visibility of Local & Temporary Cultural Events
Many culturally important events such as: - Local festivals - Seasonal fairs - Community programs
remain digitally invisible. Tourists are often unaware of these events even when they are
geographically nearby, resulting in: - Missed cultural exchange opportunities - Reduced community
income - Loss of cultural continuity
3. Proposed Solution (High-Level)
SANGAI proposes a map-centric discovery platform that integrates: - Geographic exploration 
Cultural storytelling - Place-based experiences - Time-based cultural events - Community-driven tourism
concepts
The solution shifts tourism from consumption to connection.
At its core, SANGAI uses an interactive 3D map of Northeast India as the primary interface, allowing
users to explore the region hierarchically:
Northeast → State → District → Place
Each level unlocks deeper understanding and contextual information.
4. Solution Explanation (System-Level View)
4.1 Discovery-First Approach
SANGAI prioritizes discovery and learning before action. Users are encouraged to: - Understand
regions culturally - Learn histories and traditions - Discover hidden and lesser-known places
Only after this understanding do they move toward planning and experience-related features.
4.2 Map as the Central Truth
The interactive map acts as: - A navigation tool - A filter - A storytelling anchor
2
All major features—information, places, festivals, and search—are driven by the current map
selection, ensuring contextual relevance at all times.
4.3 Layered Content Strategy
Information is revealed progressively: - Visual storytelling first - Contextual understanding second 
Practical exploration third
This prevents information overload while maintaining depth.
5. Target Users
Primary Users
• 
• 
• 
Domestic tourists from outside Northeast India
International travelers seeking cultural travel
First-time visitors unfamiliar with the region
Secondary Users
• 
• 
• 
Culture and slow-travel enthusiasts
Students, researchers, and educators
Sustainable tourism advocates
Future Users
• 
• 
• 
Local communities
Festival organizers
Cultural institutions

this was the overview of what and why this product is made
now I will tell u each features of the product in detail with the workflow

1) Intro page
 whenever any user enters into our website, they will be welcomed with a visually appealing  parrallex scroll animation intro where
user can scroll between only 4 100vh screen, 1 below another, in each screen (100vh), in a visually appealing way , we will tell the users that what they can do in this website (less words and more visual understading. for this part we can use libraries like gsap, lenis or any other library (I have very little technical knowlege on this part)
In the final screen(100vh) we will give a button to go to our landing page.
What the user sees first
When a user opens SANGAI, they are greeted with a scroll-based, cinematic landing experience.
There is: - No heavy text - No forms - No map yet
The goal here is emotional orientation, not interaction.
Landing Section 1 – Discover the Northeast
Interface: - Full-screen (100vh) section - Abstract visuals inspired by geography - Subtle motion /
animation
Message:
“Explore Northeast India beyond the usual places”
Why this exists: - Sets the product’s core promise - Immediately differentiates SANGAI from booking
platforms
User action: - User scrolls down
Landing Section 2 – Culture, Heritage & Stories
Interface: - Full-screen section - Visuals of people, culture, architecture, patterns
1
Message:
“Learn the stories, history, and culture behind each place”
Why this exists: - Establishes that SANGAI is about understanding, not consumption
User action: - User scrolls down
Landing Section 3 – Locals & Living Experiences
Interface: - Full-screen section - Visuals representing community, homestays, local life
Message:
“Experience places through the people who live there”
Why this exists: - Introduces sustainability and community participation
User action: - User scrolls down
Landing Section 4 – Call to Action
Interface: - Map visuals slowly coming into focus - Clear primary button
Button:
“Start Exploring the Northeast”
What happens on click: - User is navigated to the Interactive Discovery Map
This marks the transition from storytelling to exploration.

2) Global navigation bar
There will be a navigation bar that will appear in every route/page, but the insides may differ depending on the page that the user is currently at, or what is in the user's screen, but logo of the website, search icon or search bar will be always we there



3) Landing page
On the landing page, we will have a map
Interactive Discovery Map (Core Experience)
Initial Map State
What the user sees: - A stylized, 3D-looking political map of Northeast India - State borders visible 
Label “Northeast India” in empty map space
What is hidden: - District boundaries - Place markers
Why: - Prevents information overload - Encourages top-down exploration
User Scrolls Down (No Selection Yet)
What happens: - The map scrolls away - Northeast-level information (Feature A) appears
User discovers: - Overview of Northeast India - Cultural diversity - Geographic and historical context
This teaches before asking the user to choose.
User Clicks on a State (e.g., Assam)
Immediate reaction: - Map zooms into the selected state - Other states fade out - District boundaries
appear - State name is shown prominently
Why this interaction: - Visual confirmation of selection - Reinforces geographic understanding
User Scrolls Down After State Selection
What happens: - State-level information appears (Feature A)
User discovers: - State identity - Cultural characteristics - Natural and historical significance
The user now understands what this state represents.
User Clicks on a District
Immediate reaction: - Map zooms further - Only the selected district remains visible

User scrolls down: - District-level storytelling appears
User discovers: - Local culture - District identity - Why it matters within the state
This flow turns administrative boundaries into stories.

This part of the website is already made in this SANGAI folder, it just need some more design what we will together do it later 
this map will take the entire 100vh of the screen in every selected region
whenever the user scrolls down to get info about the selected region, the entire 100vh of the map should scrolled up  and the info part of the region will appear (maybe we will need to put a scroll effect in between )




4) info section
the info section, the users will be welcomed with a beautiful 100vh hero image of the region selected in the above map and on top of the hero image, name of the selected region (can be a entire northeast india, can be a state, can be a district) and a small tag line for that region will be written from this section,
when the user scrolls down from this section, the hero image will be scrolled up and the story route of the region will appear by default (maybe we will need to put a scroll effect in between, entire info section will be scrolled up together, no stopping in middle) also.... here the backend api will be called to get the data of the selected region for image and tag line

when the user scrolls down from this section, the nav bar in the top will change a little
first the name of the selected region will be shown in the nav bar
along with that name, few click able buttons will be shown they are, story, destination, guide, festival
all these buttons will be shown in a row and will be clickable
these buttons will be used to switch between different routes of the selected region
this button will not take me to an antire new page, it will just change the route of that section,(here, react router dom will be used to switch between different routes of the selected region),
by default the story button will be selected and the story section will be shown
it doesn't matter which route the user is currently in, if the user scrolls up then the info section and the map section will be shown of that region again

5) story section
in the story section, this whole section will be divided into subsections for general destricption, history, culture, impact(impact of the selected region on northeast india, india or the world), etc.
(we will discuss about this section in detail later, I have just given a overview of this section)
this section should be balaced between information and visuals, as we are gonna use images and information in all the sub sections, there should not be overinformation(text heavy) like wikipedia to make the discovery boring or not too visually driven that people only came to see images and no actual information or knowledge gain.
in this section also, backend will be used to get the data of the selected region for images and paragraphs and any other contents.

6) destination section
if the user clicks on the destination button then the destination section will be shown
in this section, , at the top  a tag line like "Discover Sacred Spaces
& Hidden Valleys
Uncover the untouched beauty of Northeast India through sustainable journeys
that honor culture and nature." will be shown
(this section will not only show famous places but also the places that usually remain hidden from the public, the places that are not famous but are beautiful and unique)
below the tag line we will give buttons to switch  between All Destinations, Cultural Heritage, Nature & Trekking, Spiritual, Wildlife, Culinary

and below this, all the places of that selected region will be shown in a grid format, with beautiful images and short description of each place in card format.
in this part also, backend will be used to get the data of the selected region for images and description of each place.

7) guide section
if the user clicks on the guide button then the guide section will be shown
I will tell u, why this section exists
This webpage is a Travel Guidance & Etiquette page for SANGAI, focused on responsible, culture-aware tourism in Northeast India.

It is not a booking site and not a generic travel blog.

👉 Its purpose is to prepare the traveler mentally, culturally, and practically before they travel.

🎯 Why does this webpage exist?

Most travel platforms answer:

“Where should I go?”

This page answers:

“How should I go, behave, and travel responsibly once I’m there?”

Northeast India has:

Sensitive tribal cultures

Restricted zones & permits

Fragile ecology

Limited connectivity

A careless tourist can:

Offend local communities

Break cultural norms

Get into legal trouble

Harm the environment

This page prevents that.

👤 Who will use this page? (User Personas)
1️⃣ First-time Visitors

Why they’ll use it:

They don’t know about permits, terrain, weather, or social rules

They want to avoid mistakes on their first visit

What this page gives them:

What to expect

What to respect

How to prepare mentally & practically

2️⃣ Solo Travelers

Why they’ll use it:

Safety concerns

Connectivity issues

Cultural misunderstandings can be risky when alone

What this page gives them:

Safety awareness

Photography rules

Realistic expectations about signal & roads

3️⃣ Cultural / Conscious Travelers

Why they’ll use it:

They care about local stories, traditions, and ethics

They want to blend in, not behave like outsiders

What this page gives them:

Homestay etiquette

Language awareness

Cultural do’s and don’ts

🧭 What problems does this webpage solve?
❌ Problem 1: Tourists unknowingly disrespect locals

✔️ Solved by:

Cultural Etiquette checklist

Clear behavioral guidance (photos, greetings, shoes, privacy)

❌ Problem 2: Confusion about what is allowed

✔️ Solved by:

Photography rules (Allowed / Ask First / Not Allowed)

Clear visual cues (green, yellow, red)

❌ Problem 3: Unrealistic travel expectations

✔️ Solved by:

“Travel Realities” section

Honest info about:

Road difficulty

Weather

Network connectivity

This reduces frustration and bad reviews.


so, based on the region selected, the content inside this section will also change for which backend part will be used to fetch the information





8) festival section
if the user clicks on the festival button then the festival section will be shown
🎯 Why does this webpage exist?

Most travel platforms:

List destinations

Occasionally mention festivals in blog posts

They don’t:

Organize festivals by time, type, or sustainability

Help travelers plan trips around living culture

Educate users on the meaning behind festivals

This page exists to answer:

“When should I visit Manipur to experience its culture authentically?”

👤 Who will use this page?
1️⃣ Culture-Driven Travelers

Why they’ll use it:

They want to attend real local festivals, not tourist shows

They want to understand traditions, not just watch them

What they get:

Authentic festivals like Yaoshang, Lai Haraoba, Kut

Short cultural context with each event

Visual storytelling instead of plain text

2️⃣ Trip Planners

Why they’ll use it:

To align travel dates with festivals

To decide which month is best to visit Manipur

What they get:

Clear date badges

Current / Upcoming / Past tabs

Ability to plan well in advance

3️⃣ Responsible / Eco-Conscious Tourists

Why they’ll use it:

They care about sustainability and impact

They don’t want to participate in harmful mass tourism

What they get:

Eco-Certified badges

Zero-Waste indicators

Transparency about ethical practices

4️⃣ Researchers, Students & Content Creators

Why they’ll use it:

Quick overview of regional festivals

Verified, structured cultural data

Inspiration for documentaries, articles, or academic work

🧭 What problems does this page solve?
❌ Problem 1: Festivals are scattered & hard to discover

✔️ Solved by:

Centralized festival listing

Clean grid layout with visuals

Breadcrumb navigation (Home → Region → Festivals)

❌ Problem 2: No clarity on timing

✔️ Solved by:

Date badges on every event

Upcoming / Current / Past tabs

Month-based scanning at a glance

❌ Problem 3: Tourists attend festivals without context

✔️ Solved by:

Short but meaningful descriptions

Cultural explanations (not just names)

Visual storytelling using authentic imagery

❌ Problem 4: Lack of sustainable tourism signals

✔️ Solved by:

Eco-Certified & Zero-Waste tags

Clear visual badges

Encourages responsible participation


for this backend part will be used to fetch the information, and keep a track of the upcomming, ongoing and finished events or festivals


9) indivisual destination page
if the user clicks on any destination card then the indivisual destination page will be shown
entire langing page will be directed to this page
this page will be similar to the combination of info section and story route in the landing page
it will have a hero image with the name of the destination along with a tag line and a back button to go back to the landing page to the destination route, but if user came to this route from search page then clicking back will take them to search page.

this page will have sections for general description, cultural significance, history, impact of tourism in that destination, 
this section will also have balaced content between text informations and visuals to stop the discovery to be boring and less engaging

this page will also contain a section  for practical information where
This section provides essential, quick-reference details to help users plan their visit efficiently. It highlights the best time to visit (eg- October–April), the trek difficulty level (eg- Moderate), so users can assess suitability based on time, fitness, and season. It also includes an eco-tip encouraging responsible travel by asking visitors to pack out all trash, reinforcing sustainability. Alongside this, a navigation button will take users to google map with the selected destination, which helps users understand the location and navigate accurately.

below this section there will be a section for nearby festivals or events, where there will be cards which are horizontally scrollable, these cards will be similar to the festival cards in the festival page, but it will only show the festivals that are nearby to the selected destination, and if there are no festivals nearby to the selected destination then this section will not be shown

below this section there will be a section for nearby homestays, where there will be cards which are horizontally scrollable, these cards will be similar to the festival cards in the above section , but it will only show the homestays that are nearby to the selected destination, and if there are no homestays nearby to the selected destination then this section will not be shown


10) global search bar
this search bar will be present in the header of the website
this search bar will be used to search for any destination, festival, or homestay
if anyone click on it, people will completely navigate to the search page
I have given a reference code of the search page

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>SANGAI - Global Discovery Search</title>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;display=swap" rel="stylesheet"/>
<!-- Material Symbols -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Configuration -->
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#11d432",
                        "background-light": "#f6f8f6",
                        "background-dark": "#102213",
                        "surface-dark": "#1c2e20", // Custom surface color slightly lighter than bg
                        "surface-light": "#ffffff",
                    },
                    fontFamily: {
                        "display": ["Plus Jakarta Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        /* Custom scrollbar for chips if needed */
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        /* Smooth fade for images */
        .image-fade-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%);
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-[#111812] dark:text-white font-display min-h-screen flex flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<div class="w-full border-b border-[#28392b]/50 bg-background-light dark:bg-background-dark sticky top-0 z-50">
<div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-4">
<header class="flex items-center justify-between whitespace-nowrap">
<div class="flex items-center gap-3 text-white">
<div class="size-8 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">landscape</span>
</div>
<h2 class="text-[#111812] dark:text-white text-xl font-bold leading-tight tracking-tight">SANGAI</h2>
</div>
<!-- Desktop Nav -->
<div class="hidden md:flex flex-1 justify-end gap-8 items-center">
<nav class="flex items-center gap-8">
<a class="text-[#111812] dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Destinations</a>
<a class="text-[#111812] dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Experiences</a>
<a class="text-[#111812] dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Plan Trip</a>
<a class="text-[#111812] dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Journal</a>
</nav>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary hover:bg-green-500 transition-colors text-[#102213] text-sm font-bold leading-normal tracking-wide">
<span class="truncate">Log In</span>
</button>
</div>
<!-- Mobile Menu Icon -->
<div class="md:hidden text-white">
<span class="material-symbols-outlined">menu</span>
</div>
</header>
</div>
</div>
<!-- Main Content -->
<main class="flex-1 flex flex-col items-center w-full px-4 md:px-10 py-8 lg:py-12 max-w-[1200px] mx-auto">
<!-- Hero Search Section -->
<section class="w-full max-w-[800px] flex flex-col items-center gap-6 mb-12">
<!-- Headline -->
<h1 class="text-[#111812] dark:text-white tracking-tight text-3xl md:text-5xl font-bold leading-tight text-center">
                Discover the unseen Northeast...
            </h1>
<!-- Search Bar -->
<div class="w-full px-2">
<label class="flex flex-col w-full h-14 relative group">
<div class="flex w-full flex-1 items-stretch rounded-xl h-full bg-white dark:bg-[#1c2e20] shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus-within:ring-2 focus-within:ring-primary transition-all">
<div class="text-gray-400 dark:text-[#9db9a1] flex items-center justify-center pl-5 rounded-l-xl">
<span class="material-symbols-outlined">search</span>
</div>
<input class="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111812] dark:text-white bg-transparent border-none focus:ring-0 h-full placeholder:text-gray-400 dark:placeholder:text-[#9db9a1] px-4 text-lg font-normal leading-normal" placeholder="Search for Ziro Valley, Hornbill Festival..." value=""/>
</div>
</label>
</div>
<!-- Chips -->
<div class="flex gap-3 flex-wrap justify-center w-full">
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-[#102213] px-5 hover:opacity-90 transition-all cursor-pointer">
<span class="text-sm font-bold leading-normal">All</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-200 dark:bg-[#28392b] hover:bg-gray-300 dark:hover:bg-[#344a38] transition-colors px-5 cursor-pointer group">
<span class="text-[#111812] dark:text-white text-sm font-medium leading-normal">States</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-200 dark:bg-[#28392b] hover:bg-gray-300 dark:hover:bg-[#344a38] transition-colors px-5 cursor-pointer group">
<span class="text-[#111812] dark:text-white text-sm font-medium leading-normal">Districts</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-200 dark:bg-[#28392b] hover:bg-gray-300 dark:hover:bg-[#344a38] transition-colors px-5 cursor-pointer group">
<span class="text-[#111812] dark:text-white text-sm font-medium leading-normal">Adventure</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-200 dark:bg-[#28392b] hover:bg-gray-300 dark:hover:bg-[#344a38] transition-colors px-5 cursor-pointer group">
<span class="text-[#111812] dark:text-white text-sm font-medium leading-normal">History</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-200 dark:bg-[#28392b] hover:bg-gray-300 dark:hover:bg-[#344a38] transition-colors px-5 cursor-pointer group">
<span class="text-[#111812] dark:text-white text-sm font-medium leading-normal">Culture</span>
</button>
</div>
</section>
<!-- Empty State / Featured Content -->
<section class="w-full flex flex-col flex-1">
<div class="flex items-center justify-between mb-6 px-2">
<h2 class="text-[#111812] dark:text-white text-2xl font-bold leading-tight tracking-tight">Featured Festivals</h2>
<a class="text-primary hover:text-green-400 text-sm font-semibold flex items-center gap-1" href="#">
                    View Calendar 
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<!-- Grid Layout -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
<!-- Card 1 -->
<div class="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-800 cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
<img alt="Colorful traditional dancers at Hornbill Festival" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Colorful traditional dancers at Hornbill Festival" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ1bzsVUaVGKpsyzxzvpEFYAp4bW3da4VmD47R3hctOgTuHKay_U4yKv5wLPOxRdOB2_F0o938emwQj_I6P1ajxUQkLinFwRRgXHLnb7RoNVuQxCRje9DLx5lIoULQxgV_55ODWupMTGrXRa6oGhdwGdx7Ewcitij3C7wlwchbd4BpzW5f7_Z65Y67JD9tlzQLLkFIkeIs1bi0L8HLV6DZo6N2eh2D4qMYCgzt1JJ5jJhOqAW7C7sybbuFEvVEPBVjCGeUKt_VyA"/>
<div class="absolute inset-0 image-fade-overlay"></div>
<div class="absolute top-3 left-3">
<span class="bg-primary/90 text-[#102213] text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                            Event
                        </span>
</div>
<div class="absolute bottom-0 left-0 p-5 w-full">
<div class="flex items-center gap-1 text-gray-300 mb-1">
<span class="material-symbols-outlined text-[18px]">calendar_month</span>
<span class="text-xs font-medium uppercase tracking-wide">Dec 1-10, 2024</span>
</div>
<h3 class="text-white text-xl font-bold leading-snug">Hornbill Festival</h3>
<div class="flex items-center gap-1 text-gray-300 mt-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span class="text-sm">Kisama Heritage Village, Nagaland</span>
</div>
</div>
</div>
<!-- Card 2 -->
<div class="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-800 cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
<img alt="Lush green rolling hills of Ziro Valley" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Lush green rolling hills of Ziro Valley" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJdQvn4inPjIJ1bPBJ-AFsVZq4Xx9uEsjmK6MTDFitkzlC0V63rt5_ZWaYzbyAkbD3OTJ_-Dw2j11qOVczG4_p5N5L3cPI8a4mBCdiNb8tJ1R70gJNvoq4w6L3gSMslUkl51DABKsiYXbC5HGouwV1GbulmEs4NvXGH4LThDuSQawhvITl2eTMCB8aZbBCWlUl_vWlmFoBOAGZnobOCvUnA-tHidwHIQVo-ENCvLpEmW4v9NjioJv7Wccak4uL2OeDOTcT9WzA-Q"/>
<div class="absolute inset-0 image-fade-overlay"></div>
<div class="absolute top-3 left-3">
<span class="bg-white/20 text-white border border-white/20 text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                            Music
                        </span>
</div>
<div class="absolute bottom-0 left-0 p-5 w-full">
<div class="flex items-center gap-1 text-gray-300 mb-1">
<span class="material-symbols-outlined text-[18px]">calendar_month</span>
<span class="text-xs font-medium uppercase tracking-wide">Sep 28 - Oct 1, 2024</span>
</div>
<h3 class="text-white text-xl font-bold leading-snug">Ziro Festival of Music</h3>
<div class="flex items-center gap-1 text-gray-300 mt-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span class="text-sm">Ziro Valley, Arunachal Pradesh</span>
</div>
</div>
</div>
<!-- Card 3 -->
<div class="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-800 cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
<img alt="Monks in red robes at Tawang Monastery" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Monks in red robes at Tawang Monastery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIruhXdTudasVXo0bwYLHHKQqxIycuu1ntZti6pk3iY09P7zZtXM-bGC-p9ETaa3nl7h5tugyj9-nrU4OWsu6CMXruiC504D8kCp3QikxdXLy8SOmzjr70dV982tvXBUuNg12XpXA05NN4QMfA8FfRqfzyl4fhRd5s7Cu3dHshVvF26T16hIGo6c4j9MzDcWvo_DTIzbSVaMBO0MI8I3xK6Vycs4EPnHIDqGUx0W8fBssYSW3nWoAq_eEAhZPQzBJk0nC7NGMZTA"/>
<div class="absolute inset-0 image-fade-overlay"></div>
<div class="absolute top-3 left-3">
<span class="bg-white/20 text-white border border-white/20 text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                            Culture
                        </span>
</div>
<div class="absolute bottom-0 left-0 p-5 w-full">
<div class="flex items-center gap-1 text-gray-300 mb-1">
<span class="material-symbols-outlined text-[18px]">calendar_month</span>
<span class="text-xs font-medium uppercase tracking-wide">Jan 14-16, 2024</span>
</div>
<h3 class="text-white text-xl font-bold leading-snug">Torgya Festival</h3>
<div class="flex items-center gap-1 text-gray-300 mt-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span class="text-sm">Tawang, Arunachal Pradesh</span>
</div>
</div>
</div>
<!-- Card 4 -->
<div class="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-800 cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
<img alt="Aerial view of circular floating phumdis on Loktak Lake" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Aerial view of circular floating phumdis on Loktak Lake" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2EkFbITu7DBXC2Ow2Epm1eFcOfZH8VoIEGAOGHZF93E4KwfCcGHI7Xt7PiOG4twOH6J2nci4T-rwYf6uv7T_Jr_uOp9VHmbBqfOyFqnMZ4vTa3Yd-RSjRjJQsoWFo_htjFNQW0eCmVorYQ5DvLX4pV0VMSXzVnBrP_mQIVbmudcOn78mehtRqDQoymFMJXOCk8G7bh-SWj-wZgQrfwE8kJ4U1_GduGmYrU4aqJtxMC7rvvWG0U1U55qm4MqEsd5bxKgFuTAmdaQ"/>
<div class="absolute inset-0 image-fade-overlay"></div>
<div class="absolute top-3 left-3">
<span class="bg-primary/90 text-[#102213] text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                            Place
                        </span>
</div>
<div class="absolute bottom-0 left-0 p-5 w-full">
<h3 class="text-white text-xl font-bold leading-snug">Loktak Lake</h3>
<div class="flex items-center gap-1 text-gray-300 mt-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span class="text-sm">Moirang, Manipur</span>
</div>
<p class="text-xs text-gray-400 mt-2 line-clamp-1">World's only floating national park.</p>
</div>
</div>
<!-- Card 5 -->
<div class="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-800 cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
<img alt="Double decker living root bridge in jungle" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Double decker living root bridge in jungle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD0E8cxECVvJEtUIRPuf8bX6wiwZNuG-7U7dihErTWb0YiJ_6QmQMYzlTryX4lxUFiceIDL3OY3CAHeGIEJ22NhkC2jJX-rEi0FXfImKLxFagLhcDVR6NShwpjKvF5xizpqjq7u6YpYRDfGHAuW9zKXg7MMuNqV5EoGUTCaxMwr2-gjnFiusltr6bDLnf617k4iDjwJJxR3VYG0-5Ex4J30F6pjZM7Db6irS5Fh-oVmBp0PELs__RAt0ijrlZPKArMENFVFb00TQ"/>
<div class="absolute inset-0 image-fade-overlay"></div>
<div class="absolute top-3 left-3">
<span class="bg-white/20 text-white border border-white/20 text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                            Adventure
                        </span>
</div>
<div class="absolute bottom-0 left-0 p-5 w-full">
<h3 class="text-white text-xl font-bold leading-snug">Nongriat Trek</h3>
<div class="flex items-center gap-1 text-gray-300 mt-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span class="text-sm">Cherrapunji, Meghalaya</span>
</div>
<p class="text-xs text-gray-400 mt-2 line-clamp-1">Home to the Double Decker Root Bridge.</p>
</div>
</div>
<!-- Card 6 -->
<div class="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-800 cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
<img alt="Rhino grazing in tall grass at Kaziranga" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Rhino grazing in tall grass at Kaziranga" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIY9saTcrbgmqzUq3G5BOXeYOxz_6swMD47QJXfz4HBebmGKJY0PztdFD50ENPKC5Mz50wdNirAwRo-KwsN0JWXxgTJvpfpjafQV_vvSwqCAVkVHSgM4mucghQf3T8uYigJzcDQGB-_F6mlAiAvJQs-coCxEO0ol9WDYHs3YFFJXjgiE_pimiQ_S5sXUgdAaWXilWVOxEzUoFjT7UF-XhmUkunVA-TFWILe8r52nFjLENVFNEBBymkbwrxW-jr3xRf-0yBdBwz2Q"/>
<div class="absolute inset-0 image-fade-overlay"></div>
<div class="absolute top-3 left-3">
<span class="bg-white/20 text-white border border-white/20 text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                            Wildlife
                        </span>
</div>
<div class="absolute bottom-0 left-0 p-5 w-full">
<h3 class="text-white text-xl font-bold leading-snug">Kaziranga National Park</h3>
<div class="flex items-center gap-1 text-gray-300 mt-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span class="text-sm">Golaghat, Assam</span>
</div>
<p class="text-xs text-gray-400 mt-2 line-clamp-1">World Heritage Site famous for One-horned Rhinos.</p>
</div>
</div>
</div>
<!-- Load More -->
<div class="w-full flex justify-center mt-12 mb-8">
<button class="text-[#111812] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-semibold flex flex-col items-center gap-2">
<span>Scroll for more</span>
<span class="material-symbols-outlined animate-bounce">keyboard_arrow_down</span>
</button>
</div>
</section>
</main>
</body></html>

if nothing is typed then, by defalt, festival cards will be shown in two rows (promothing the festivals)
if something is typed then the search result will be shown intead of the default

if the serached place is not found then, "no result found" will be shown and below that , the default will be shown

here backend is required to build the serach engine








## FINAL WORDS
I am a begginer level developer and have yeally less knowlede in the backend part
so I want you to plan this project for me, we will build this project together
we will perfect every feature to gather, after the planning we will execute each feature one by one after my command