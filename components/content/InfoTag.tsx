interface InfoTagProps {
  type: 'duration' | 'distance' | 'tip' | 'warning' | 'info' | 'inclusion';
  children: string;
}

export default function InfoTag({ type, children }: InfoTagProps) {
  const baseClasses = "text-base md:text-lg block";
  
  const typeStyles = {
    duration: "text-zinc-600",
    distance: "text-zinc-600",
    tip: "text-amber-700",
    warning: "text-red-600",
    info: "text-zinc-600",
    inclusion: "text-zinc-600"
  };

  const icons = {
    duration: "⏱️",
    distance: "📍",
    tip: "💡",
    warning: "⚠️",
    info: "ℹ️",
    inclusion: ""
  };

  return (
    <>
      <br />
      <span className={`${baseClasses} ${typeStyles[type]}`}>
        {icons[type] && `${icons[type]} `}{children}
      </span>
    </>
  );
}
