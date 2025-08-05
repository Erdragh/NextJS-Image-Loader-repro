import Image from "next/image";

// what you can see here:
// 1. The image without `unoptimized`, so the one using the image loader, will fail to load
// 2. The image with `unoptimized` will not use the image loader and will load as a result

export default function Home() {
  return <>
    <Image src={"/api/blob/some-key/some-name.png"} alt="" width={256} height={256}></Image>
    <Image src={"/api/blob/some-key/some-name.png"} alt="" width={256} height={256} unoptimized></Image>
  </>;
}
