const Footer = () => {
  return (
    <footer className="bg-fuchsia-100 text-center text-sm text-fuchsia-900 py-4 w-full fixed bottom-0 left-0">
      © {new Date().getFullYear()} Ducky Notes App. All rights reserved.
    </footer>
  );
};

export default Footer;
