import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:kush.73888@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/kushSharma738';
  };

  const handleGitHubClick = () => {
    window.location.href = 'https://github.com/kushhhhhhhh';
  };

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/kushhhhhhh._/?hl=en';
  };

  return (
    <footer suppressHydrationWarning={true} className="bg-[#17181D] flex flex-col md:flex-row justify-center md:justify-between items-center p-6">
      <aside className="md:mb-0">
        <p className="text-white text-center md:text-left">Copyright © 2024 - All rights reserved</p>
      </aside>
      <p className="text-white text-center text-lg">Made with ❤️ by <span className="text-white"> Kush Sharma</span></p>
      <nav className="flex gap-6 cursor-pointer text-white">
        <EmailIcon onClick={handleEmailClick} />
        <LinkedInIcon onClick={handleLinkedInClick} />
        <GitHubIcon onClick={handleGitHubClick} />
        <InstagramIcon onClick={handleInstagramClick} />
      </nav>
    </footer>
  );
};

export default Footer;