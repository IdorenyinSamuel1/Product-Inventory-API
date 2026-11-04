# Product Inventory API

# Product Inventory API

A modular, robust Node.js and Express RESTful API setup engineered via ECMAScript modules to handle inventory control workflows for storefronts.

## Installation and Launch Configurations

1. **Clone project assets down locally**:
   ```bash
   git clone <your-repository-url>
   cd product-inventory-api
   ```

2. **Acquire system dependency dependencies**:
   ```bash
   npm install
   ```

3. **Configure the Environment Configurations**:
   Create a `.env` block layout directly within the root engine namespace directory level:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string_here
   ```

4. **Boot up production or validation modes**:
   ```bash
   # Development dynamic tracking mode
   npm run dev

   # Production launch baseline
   npm start
   ```

## Endpoint Implementations Documentation

### Core Product Routines

| Method | Endpoint | Description | Query Filters |
| :--- | :--- | :--- | :--- |
| **POST** | `/products` | Append a new entity | N/A |
| **GET** | `/products` | Query collections array | `category`, `search`, `minPrice`, `maxPrice`, `sort`, `page`, `limit`, `lowStock` |
| **GET** | `/products/:id` | Lookup details for single id profile | N/A |
| **PATCH**| `/products/:id` | Adjust metrics structural changes | N/A |
| **DELETE**| `/products/:id` | Evict record entirely from storage system | N/A |
| **PATCH**| `/products/:id/stock` | Adjust stock level directly (Bonus) | N/A |

### Payload Demonstration Schemes

#### Creating a Product (`POST /api/products`)
**Body Input Schema (`application/json`)**:
```json
{
  "name": "Samsung Galaxy S24 Ultra",
  "description": "Flagship smartphone with AI features",
  "price": 1299.99,
  "category": "Electronics",
  "sku": "SAM-S24U-512G",
  "stock": 15
}
```

**Expected Response Payload (`210 Created`)**:
```json
{
  "success": true,
  "data": {
    "_id": "6632c0f2a74c4391daee9c1a",
    "name": "Samsung Galaxy S24 Ultra",
    "description": "Flagship smartphone with AI features",
    "price": 1299.99,
    "category": "Electronics",
    "sku": "SAM-S24U-512G",
    "stock": 15,
    "createdAt": "2026-10-31T10:24:00.000Z",
    "updatedAt": "2026-10-31T10:24:00.000Z"
  }
}
```

#### Filtering / Fetching Collections Example (`GET /api/products?search=samsung&limit=1`)
**Response Schema (`200 OK`)**:
```json
{
  "success": true,
  "count": 1,
  "pagination": {
    "total": 3,
    "page": 1,
    "limit": 1,
    "pages": 3
  },
  "data": [
    {
      "_id": "6632c0f2a74c4391daee9c1a",
      "name": "Samsung Galaxy S24 Ultra",
      "price": 1299.99,
      "category": "Electronics",
      "sku": "SAM-S24U-512G",
      "stock": 15
    }
  ]
}
```




