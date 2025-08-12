import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

export default function NotFoundPage({ url }: PageProps) {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">404 - Page not found</h1>
          <p class="my-4">
            The page you were looking for doesn't exist.
          </p>
          <p>404 not found</p>
          <p>url.pathname is : {url.pathname}</p>
          <p>url.host is : {url.host}</p>
          <p>url.origin is : {url.origin}</p>
          <p>url.protocol is : {url.protocol}</p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}
