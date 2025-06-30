interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="relative w-full h-auto min-h-[40vh] sm:min-h-[30vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
