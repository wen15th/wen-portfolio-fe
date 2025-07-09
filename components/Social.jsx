import Link from "next/link";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, link: "" },
    { icon: <FaLinkedinIn />, link: "" },
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return <Link href={social.link} key={index} className={iconStyles}>
                    {social.icon}
                </Link>
            })}
        </div>
    );
}

export default Social;