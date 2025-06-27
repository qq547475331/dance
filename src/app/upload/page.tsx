'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      return;
    }

    setUploading(true);

    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: file.name, contentType: file.type }),
    });

    const { uploadUrl, key } = await response.json();

    await fetch(uploadUrl, {
      method: 'PUT',
      body: file,
    });

    setUploading(false);

    alert('Upload successful!');
    router.push(`/watch/${key}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Upload a Video</h1>
      <div className="flex flex-col items-center">
        <input type="file" accept="video/*" onChange={handleFileChange} className="mb-4" />
        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
    </main>
  );
}
