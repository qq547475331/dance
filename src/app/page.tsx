'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Video {
  key: string;
  name: string;
  uploadDate: string;
  size: number;
}

export default function HomePage() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('/api/videos');
      const data = await response.json();
      setVideos(data);
    };

    fetchVideos();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Videos</h1>
          <Link href="/upload" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upload Video
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <Link key={video.key} href={`/watch/${video.key}`}>
              <div className="border rounded-lg p-4 hover:bg-gray-100">
                <h2 className="text-lg font-semibold truncate">{video.name}</h2>
                <p className="text-sm text-gray-500">{(video.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}