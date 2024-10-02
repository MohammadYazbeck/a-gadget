# A-Gadget

A-Gadget is a modern web application built using React, Vite, and several other essential libraries. The application is designed to provide a seamless and efficient user experience, leveraging the latest web technologies and best practices.

## Features

- **State Management**: Utilizes `Redux Toolkit` for efficient and scalable state management.
- **Authentication**: Integrated with `Supabase` for user authentication and management.
- **Data Fetching**: Uses `React Query` for optimized and easy data fetching.
- **UI Components**: Incorporates `@material-tailwind/react` and `@heroicons/react` for a visually appealing user interface.
- **Routing**: Implements client-side routing with `React Router`.
- **Notifications**: Uses `react-hot-toast` for user notifications and feedback.
- **Loading Indicators**: Integrated `react-loader-spinner` for handling loading states.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MohammadYazbeck/a-gadget.git
   ```
2. Navigate to the project directory:
   ```bash
   cd a-gadget
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server, run:
```bash
npm run dev
```
This will start the Vite development server and allow you to work on the project locally.

## Deployment

The project is deployed to GitHub Pages. To deploy the latest version, run:
```bash
npm run deploy
```
This will build the project and push the contents of the `dist` folder to the `gh-pages` branch.

## Tech Stack

- **React**: Front-end library for building user interfaces.
- **Vite**: Next-generation front-end tool for faster development.
- **Supabase**: Backend as a Service providing authentication and database management.
- **React Query**: Data-fetching library for React.
- **Tailwind CSS**: Utility-first CSS framework for custom designs.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Ensure that these keys are kept private and are not exposed in your public repositories.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- **Supabase** for providing an easy-to-use backend.
- **React Query** for simplifying data fetching.
- **Tailwind CSS** for enabling rapid UI development.

## Contact

If you have any questions or suggestions, feel free to reach out via mohammadyazbeckk@gmail.com.

---
