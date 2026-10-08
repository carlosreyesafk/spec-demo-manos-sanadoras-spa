export const metadata = {
  title: "Centro de Masajes Manos Sanadoras & Spa | Masajes y spa · Quisqueya, Santo Domingo",
  description: "Centro de Masajes Manos Sanadoras & Spa — masajes terapéuticos y relajantes en Quisqueya, Santo Domingo. Reserva: (809) 792-5742.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
