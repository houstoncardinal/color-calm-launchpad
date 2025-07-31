import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		fontFamily: {
    			sans: [
    				'Montserrat',
    				'ui-sans-serif',
    				'system-ui'
    			],
    			serif: [
    				'Playfair Display',
    				'Georgia',
    				'serif'
    			],
    			display: [
    				'Playfair Display',
    				'Georgia',
    				'serif'
    			]
    		},
    		colors: {
    			'serenity-blue': 'hsl(var(--serenity-blue))',
    			'sage-harmony': 'hsl(var(--sage-harmony))',
    			'warm-embrace': 'hsl(var(--warm-embrace))',
    			'lavender-peace': 'hsl(var(--lavender-peace))',
    			'pure-clean': 'hsl(var(--pure-clean))',
    			'ocean-trust': 'hsl(var(--ocean-trust))',
    			'forest-calm': 'hsl(var(--forest-calm))',
    			'sunset-warmth': 'hsl(var(--sunset-warmth))',
    			'plum-luxury': 'hsl(var(--plum-luxury))',
    			'text-primary': 'hsl(var(--text-primary))',
    			'text-secondary': 'hsl(var(--text-secondary))',
    			'text-light': 'hsl(var(--text-light))',
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			},
    			brandGreen: '#A3E635',
    			brandYellow: '#FDE047',
    			brandPink: '#F472B6',
    			brandBlue: '#38BDF8',
    			brandOrange: '#FDBA74',
    			'color-1': 'hsl(var(--color-1))',
    			'color-2': 'hsl(var(--color-2))',
    			'color-3': 'hsl(var(--color-3))',
    			'color-4': 'hsl(var(--color-4))',
    			'color-5': 'hsl(var(--color-5))'
    		},
    		backgroundImage: {
    			'gradient-hero': 'var(--gradient-hero)',
    			'gradient-calm': 'var(--gradient-calm)',
    			'gradient-trust': 'var(--gradient-trust)',
    			'gradient-luxury': 'var(--gradient-luxury)',
    			'gradient-overlay': 'var(--gradient-overlay)'
    		},
    		boxShadow: {
    			soft: 'var(--shadow-soft)',
    			elegant: 'var(--shadow-elegant)',
    			luxury: 'var(--shadow-luxury)',
    			card: 'var(--shadow-card)',
    			floating: 'var(--shadow-floating)'
    		},
    		spacing: {
    			xs: 'var(--space-xs)',
    			sm: 'var(--space-sm)',
    			md: 'var(--space-md)',
    			lg: 'var(--space-lg)',
    			xl: 'var(--space-xl)',
    			'2xl': 'var(--space-2xl)',
    			'3xl': 'var(--space-3xl)'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			'skew-scroll': {
    				'0%': {
    					transform: 'rotateX(20deg) rotateZ(-20deg) skewX(20deg)'
    				},
    				'100%': {
    					transform: 'rotateX(20deg) rotateZ(-20deg) skewX(20deg) translateY(-100%)'
    				}
    			},
    			rainbow: {
    				'0%': {
    					'background-position': '0%'
    				},
    				'100%': {
    					'background-position': '200%'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'skew-scroll': 'skew-scroll 20s linear infinite',
    			rainbow: 'rainbow var(--speed, 2s) infinite linear'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
