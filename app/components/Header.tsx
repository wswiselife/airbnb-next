// createtime 2024-03-07

interface HeaderProps {
    title: string;
    subTitle?: string;
    center?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, subTitle, center }) => {
    return (
        <div className={`${center ? "text-center" : "text-start"} `}>
            <div className="text-2xl font-bold">{title}</div>
            <div className="text-neutral-500 font-light mt-2">{subTitle}</div>
        </div>
    );
};

export default Header;
