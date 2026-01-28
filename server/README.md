# SANGAI Backend API

Backend API for the Northeast India Travel Platform built with Express.js and MongoDB.

## Tech Stack

- **Runtime**: Node.js 20+
- **Framework**: Express.js
- **Database**: MongoDB (Atlas recommended)
- **ODM**: Mongoose

## Quick Start

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

Required variables:
- `MONGODB_URI` - Your MongoDB connection string
- `PORT` - Server port (default: 3001)

### 3. Seed Database

```bash
npm run seed
```

### 4. Start Server

Development (with auto-reload):
```bash
npm run dev
```

Production:
```bash
npm start
```

## API Endpoints

### Districts
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/districts` | List all districts grouped by state |
| GET | `/api/districts/list` | Simple list of all districts |
| GET | `/api/districts/by-state/:stateCode` | Get districts by state |
| GET | `/api/districts/:id` | Get district with stats |

### Places
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/places` | List places (paginated) |
| GET | `/api/places/types` | Get available place types |
| GET | `/api/places/nearby?lat=&lng=` | Get nearby places |
| GET | `/api/places/:id` | Get place with homestays |

Query params: `district`, `type`, `tags`, `isHiddenGem`, `page`, `limit`

### Homestays
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/homestays` | List homestays (filterable) |
| GET | `/api/homestays/amenities` | Get available amenities |
| GET | `/api/homestays/:id` | Get homestay details |

Query params: `placeId`, `minPrice`, `maxPrice`, `verified`, `amenities`

### Guides
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/guides` | List guides (filterable) |
| GET | `/api/guides/languages` | Get available languages |
| GET | `/api/guides/specialties` | Get available specialties |
| GET | `/api/guides/:id` | Get guide details |

Query params: `district`, `language`, `specialty`, `verified`, `minRating`

### Festivals
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/festivals` | List all festivals |
| GET | `/api/festivals/upcoming` | Get upcoming festivals |
| GET | `/api/festivals/by-month/:month` | Get festivals by month |
| GET | `/api/festivals/:id` | Get festival with occurrences |

### Search
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/search?q=` | Full-text search |

Query params: `q` (search term), `type` (places/festivals/guides/homestays)

### Other
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tags` | List all tags |
| GET | `/api/health` | Health check |

## Data Structure

```
src/json_backend/
├── districts.json           # 13 districts
├── tags.json               # 5 tags
├── places_normalized.json  # 100 places
├── homestays_normalized.json # 100 homestays
├── guides_normalized.json  # 50 guides
├── festival_master.json    # 8 festivals
└── festival_occurrences.json # 100 occurrences
```

## Project Structure

```
server/
├── src/
│   ├── config/database.js    # MongoDB connection
│   ├── models/               # Mongoose schemas
│   ├── routes/               # API routes
│   ├── middleware/           # Error handling
│   ├── utils/                # Utilities
│   └── app.js                # Express app
├── scripts/seed.js           # Database seeder
├── .env.example              # Environment template
└── package.json
```

## License

MIT
