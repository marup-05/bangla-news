import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 px-6">
            <div className="text-center">
                <p className="text-8xl md:text-9xl font-extrabold text-red-600">
                    404
                </p>

                <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
                    Page Not Found
                </h1>

                <p className="mt-3 max-w-md mx-auto text-gray-600">
                    Sorry, the page you are looking for doesn&apos;t exist or
                    may have been moved.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-8 px-6 py-3 rounded-lg bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 transition duration-200"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;