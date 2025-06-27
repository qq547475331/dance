interface UploadRequestBody { name: string; contentType: string; }

export const onRequestPost: PagesFunction<{ R2_BUCKET: R2Bucket }> = async (context) => {
  const bucket = context.env.R2_BUCKET;
  const { name, contentType } = await context.request.json() as UploadRequestBody;

  // Generate a unique key for the video
  const key = `videos/${crypto.randomUUID()}-${name}`;

  // Generate a presigned URL for uploading the video
  const uploadUrl = await bucket.put(key, context.request.body, {
    httpMetadata: { contentType: contentType },
    // You can add custom metadata here if needed
  }).getSignedUrl();

  return new Response(JSON.stringify({ uploadUrl, key }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};