export default function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 transition-all duration-500">
      {/* Fondo oscuro visible por defecto */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-[#0F172A] to-black
                      opacity-100 dark:opacity-0 transition-opacity duration-700" />
      {/* Fondo claro visible en modo claro */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-white
                      opacity-0 dark:opacity-100 transition-opacity duration-700" />
    </div>
  );
}
