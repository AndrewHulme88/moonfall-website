import characterImg from '../assets/images/2DCharacter.png';

const Assets = () => {
    const assets = [
        {
            name: "2D Scifi Character",
            description: "A fully animated pixel art sci-fi character. Perfect for a metroidvania or any side scrolling action game.",
            link: "https://moonfallsoftware.itch.io/2d-pixel-sci-fi-side-scroller-character",
            image: characterImg,
        }
    ];

    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold text-gray-900">Our Assets</h1>
            <p className="mt-4 mb-8 text-gray-600">Explore our latest and upcoming assets.</p>
            <div className="grid gap-6 md:grid-cols-2">
            {assets.map((asset) => (
                <div
                key={asset.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-200"
                >
                <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                    {asset.name}
                </h2>
                <p className="text-gray-700 mb-4">{asset.description}</p>
                {asset.image && (
                    <img
                    src={asset.image}
                    alt={asset.name}
                    className="w-full h-64 object-contain rounded-md mb-4"
                    />
                )}
                <a
                    href={asset.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Asset
                </a>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Assets;