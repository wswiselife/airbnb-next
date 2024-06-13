// createtime 2024-03-07

interface HeaderProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeaderProps> = ({ title, subtitle, center }) => {
    return (
        <div className={`${center ? "text-center" : "text-start"} `}>
            <div className="text-2xl font-bold">{title}</div>
            <div className="text-neutral-500 font-light mt-2">{subtitle}</div>
        </div>
    );
};

export default Heading;
