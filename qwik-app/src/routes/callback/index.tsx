import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Callback from "~/components/spotify/callback/callback";

export default component$(() => {
    return (
      <>
        <div class="container container-flex">
            <p>Hello Helper for Spotify - Callback</p>
            <Callback />
        </div>
      </>
    );
  });
  
  export const head: DocumentHead = {
    title: 'Helper for Spotify',
    meta: [
      {
        name: 'Helper for Spotify',
        content: 'Helper for Spotify',
      },
    ],
  };