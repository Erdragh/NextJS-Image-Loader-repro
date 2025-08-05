export async function GET(
  req: Request,
  context: { params: Promise<{ key: string, name: string }> }
): Promise<Response> {
  
  // this is a mock for something we do for images that are accessible via a specific api
  const res = await fetch("https://lipsum.app/256x256/")
  if (!res.ok) throw new Error(`Image response from Backend API not OK: ${res.status}`)

  const headers = new Headers(res.headers);
  headers.delete("content-disposition");
  headers.delete("Content-Disposition");

  const body = res.body!;
  return new Response(body, {
    headers
  });
}
