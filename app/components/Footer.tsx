export default function Footer() {
  const currentYear = new Date().getFullYear();
  const studyMaterialPath = "/[TailieuVNU.com] Giáo trình Chủ Nghĩa Xã Hội Khoa Học CNXHKH (Không chuyên).pdf";
  const downloadHref = encodeURI(studyMaterialPath);

  return (
    <footer className=" mt-14 ">
      <div className="glass-surface  px-6 py-8 text-center md:px-10 md:py-10">
        <h3 className="text-2xl md:text-3xl">Subject Project</h3>
        <p className="mx-auto mt-3 max-w-3xl text-sm md:text-base text-[color-mix(in_oklab,var(--foreground)_76%,white)]">
          Dự án giúp giải thích mối quan hệ giữa Chủ nghĩa Mác - Lênin và tôn giáo tại Việt Nam.
        </p>
        <div className="mt-6">
          <p className="text-(--accent) text-sm font-semibold uppercase tracking-[0.08em]">Team Members:</p>
          <ul className="mt-3 space-y-1 text-sm md:text-base">
            <li>Phan Vu Khanh Tien</li>
            <li>Hoang Quoc Hung</li>
            <li>Nguyen Hoai Nam</li>
          </ul>
        </div>
        <div className="mt-6">
          <a
            href={downloadHref}
            download="giao-trinh-cnxhkh-khong-chuyen.pdf"
            className="inline-flex items-center rounded-full bg-(--accent) px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:opacity-95"
          >
            Download giáo trình
          </a>
        </div>
        <p className="mt-6 text-xs text-[color-mix(in_oklab,var(--foreground)_66%,white)]">
          © {currentYear} MLN131
        </p>
      </div>
    </footer>
  );
}
