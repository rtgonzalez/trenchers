module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                clrgolden: '#dcca87',
                clrorange: '#e8993d',
                crlalabaster: '#edeade',
                crlyellow: '##ffff00',
                crlblack: '#0c0c0c',
                clrgray: {
                    dark: '#545454',
                    light: '#d3d3d3'
                },
                clrcrimson: '#f5efdb',
                clrgrey: '#aaaaaa',
                clrwhite: '#ffffff',
                clrwine: '#722f37',
                crlblack: '#0c0c0c',
                clrred: {
                    dark: '#8b0000'
                },

                clryelp: '#d32323',
                clrfacebook: '#ffffff'
            }
        }
    },
    variants: {
        extend: {}
    }
};
