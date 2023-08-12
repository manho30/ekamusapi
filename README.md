# eKamus API Documentation

The eKamus API is a web scraping API designed to provide translation and definition services from Bahasa Malaysia (BM) to Chinese (CN) languages. This API scrapes data from the Ekamus website to retrieve word definitions and translations. Developers can utilize this API to integrate Bahasa Malaysia dictionary functionality into their applications.

Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Local Development](#local-development)
- [Usage](#usage)
    - [Endpoints](#endpoints)
    - [Parameters](#parameters)
- [Deployment to Vercel](#deployment-to-vercel)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

To use the BM-CN Dictionary API, you'll need the following:

- Node.js (version x.x.x or higher)
- npm or yarn package manager

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory using your terminal.
3. Install the required dependencies using either npm or yarn:
   ```bash
   npm install
   # or
   yarn install
   ```

### Local Development

During development, you can run the API server locally:

1. Ensure you're in the project directory.
2. Start the API server:
   npm run dev

The API will be accessible at `http://localhost:YOUR_PORT`.

## Usage

### Endpoints

The API exposes the following endpoint:

- `GET /search`

### Parameters

The `/search` endpoint supports the following query parameter:

- `q`: The word or phrase to search for in the dictionary.

## Deployment to Vercel

You can easily deploy the BM-CN Dictionary API to Vercel:

1. Sign up for an account on Vercel if you haven't already.
2. Install the [Vercel CLI](https://vercel.com/download)
   ```bash
   npm install -g vercel
   ```
3. Navigate to your project directory.
4. Deploy your API using Vercel:
   ```bash
   vercel
   ```
5. Follow the prompts and configure your deployment settings.

After successful deployment, your API will be accessible via the provided Vercel URL.

Examples

Here's an example of how to use the API:

```http
GET /search?q=example
```

Response:
```json
{
  "ok": true,
  "status": 200,
  "data": {
    "word": [
      {
        "bm": "kerja amali",
        "cn": "实践工作"
      },
      {
        "bm": "kerja amal",
        "cn": "慈善或义务工作"
      },
      ...
    ],
    "meanings": [
      "工作﹐操作﹐劳动"
    ]
  }
}
```

## Contributing

We welcome contributions to the BM-CN Dictionary API. If you have suggestions for improvements, bug reports, or would like to add new features, feel free to submit a pull request.

Please read our Contribution Guidelines for more information.

## License

This project is licensed under the MIT License.


Disclaimer: This documentation is provided as a template. You should tailor it to your project's specific details and requirements.