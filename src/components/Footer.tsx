export default function Footer() {
  return (
    <footer className="text-center py-8 text-sm text-ink/60 border-t border-ink/10 space-y-3">
      <div className="flex justify-center gap-6">
        <a href="mailto:prajeet.thakur20@gmail.com" className="hover:text-ink transition-colors duration-200">Email</a>
        <a href="https://www.linkedin.com/in/prajeet-kumar/" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors duration-200">LinkedIn</a>
        <a href="https://github.com/Prajeet7x" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors duration-200">GitHub</a>
        <a href="https://medium.com/@prajeet.thakur20" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors duration-200">Medium</a>
      </div>
      <p>© {new Date().getFullYear()} Prajeet Kumar Thakur · Built with Next.js &amp; Tailwind CSS · Birmingham, UK</p>
    </footer>
  );
}
