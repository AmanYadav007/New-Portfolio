import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
    href?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    href,
    className = '',
    ...props
}) => {
    const baseStyles = "px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-block text-center";

    const variants = {
        primary: "bg-foreground text-background hover:opacity-90",
        secondary: "bg-muted text-foreground hover:bg-border",
        outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClassName}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};
