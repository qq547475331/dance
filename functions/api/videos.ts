export const onRequestGet: PagesFunction<{ R2_BUCKET: R2Bucket }> = async (context) => {
  const bucket = context.env.R2_BUCKET;
  const listed = await bucket.list();

  const videos = listed.objects.map(obj => ({
    key: obj.key,
    name: obj.key, // For simplicity, using key as name for now
    uploadDate: obj.uploaded.toISOString(),
    size: obj.size,
    contentType: obj.httpMetadata?.contentType || 'application/octet-stream',
  }));

  return new Response(JSON.stringify(videos), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};