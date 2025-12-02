// Filename: app/components/LogoCloud.jsx
const clients = [
  { name: 'PredictionStrike', logo: 'https://placehold.co/150x50/1e293b/94a3b8?text=PredictionStrike' },
  { name: 'WWF', logo: 'https://placehold.co/150x50/1e293b/94a3b8?text=WWF' },
  { name: 'Kabata', logo: 'https://placehold.co/150x50/1e293b/94a3b8?text=Kabata' },
  { name: 'TGS', logo: 'https://placehold.co/150x50/1e293b/94a3b8?text=TGS' },
  { name: 'AngelFire', logo: 'https://placehold.co/150x50/1e293b/94a3b8?text=AngelFire' },
  { name: 'Root', logo: 'https://placehold.co/150x50/1e293b/94a3b8?text=Root' },
];

export default function LogoCloud() {
  return (
    <section className="bg-[#0B0F19] py-16 border-y border-white/5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-10">
          Trusted by innovative teams worldwide
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
