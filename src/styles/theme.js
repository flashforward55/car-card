export const theme = Object.freeze({
    colors: {
        // Text
        textPrimary: '#121417',
        textSecondary: '#8A8A89',
        textAdditional: '#363535',
        textBtn: '#ffffff',
        textAccent: '#3470FF',
        textTransparentPrimary: 'rgba(18, 20, 23, 0.50)',
        textTransparentSecondary: 'rgba(18, 20, 23, 0.20)',
        // Background
        bgPrimary: '#ffffff',
        bgSecondary: '#F7F7FB',
        bgAccent: '#3470FF',
        bgAccentHover: '#0B44CD',
        bgScroll: 'rgba(18, 20, 23, 0.05)',
        bgBackdrop: 'rgba(18, 20, 23, 0.50)',
        bgAdditional: '#F9F9F9',
        // Border
        borderPrimary: 'rgba(18, 20, 23, 0.05)',
        borderSecondary: 'rgba(18, 20, 23, 0.10)',
        borderAdditional: 'rgba(138, 138, 137, 0.20)',
        // Icon
        iconPrimary: 'rgba(255, 255, 255, 0.8)',
        iconAccent: '#3470FF',
    },

    gradients: {
        primary:
            'linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), lightgray 50% / cover no-repeat',
    },

    shadows: {
        primary: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
    },

    transitions: {
        cubicBezier: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
});
