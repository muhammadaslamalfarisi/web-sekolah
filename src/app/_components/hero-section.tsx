export default function HeroSection() {
  return (
    <div className="py-32">
      <div className="flex flex-col items-center justify-center gap-5 text-center">
        <h1 className="max-w-xl mt-3 text-5xl font-semibold tracking-tighter lg:max-w-3xl lg:text-6xl">
          Selamat Datang di Sekolah Dasar Negeri 1 Batu Rakit
        </h1>
        <p className="max-w-xl text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          incidunt provident laborum eius quam quasi exercitationem minus
        </p>
        <div className="w-full aspect-video bg-gray-100 mt-20"></div>
      </div>
    </div>
  );
}
