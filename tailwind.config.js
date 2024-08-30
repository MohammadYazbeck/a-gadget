import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Archivo',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                ],
            },
        },
    },
    plugins: [],
})
