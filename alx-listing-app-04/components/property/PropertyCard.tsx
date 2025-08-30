import Image from "next/image";

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    image: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <Image
        src={property.image}
        alt={property.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.title}</h2>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-blue-600 font-bold mt-2">${property.price}/night</p>
      </div>
    </div>
  );
}
