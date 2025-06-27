'use client';

import { useParams } from 'next/navigation';

export default function WatchPage() {
  const params = useParams();
  const videoKey = params.key as string;

  // Construct the R2 video URL. Replace with your actual R2 public URL.
  // For example: https://pub-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.r2.dev/your-bucket-name/${videoKey}
  const videoUrl = `https://pub-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.r2.dev/your-bucket-name/${videoKey}`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Watch Video</h1>
      <div className="w-full max-w-4xl">
        <video controls className="w-full h-auto rounded-lg shadow-lg">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="mt-4 text-center text-gray-600">Playing: {videoKey}</p>
      </div>
    </main>
  );
}
