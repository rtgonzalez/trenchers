const FixedBackground = ({ dynamicClasses, children }) => {
    return (
        <div
            className={`${dynamicClasses} relative min-h-screen bg-fixed bg-center bg-cover`}
        >
            {children}
        </div>
    );
};

export default FixedBackground;
