import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import "beercss";
import "material-dynamic-colors";

import Infobox from '~/components/starter/infobox/infobox';

export default component$(() => {
  return (
    <>
      <br/>
      <br/>
      <h1 style="display:block">Welcome to MrGhostlyOrb.dev</h1>
      <h2 style="display:block">The home of MrGhostlyOrb</h2>
      <div class="container container-flex">
        <article class="no-padding border" style="margin-top:0;">
          <iframe style="border-radius:10px" width="100%" height="315px" title="Outwood House" src="https://www.sacert-outwood.org"></iframe>
            <div class="padding">
              <h5>Outwood Heritage and History Society</h5>
              <p>"Brilliant. Bravo!"</p>
              <nav>
                <button>Visit Site</button>
              </nav>
            </div>
        </article>
        <article class="no-padding border" style="margin-top:0;">
          <iframe style="border-radius:10px" width="100%" height="315px" title="Outwood House" src="https://www.sacert-outwood.org"></iframe>
          <div class="padding">
            <h5>Outwood Heritage and History Society</h5>
            <p>"Brilliant. Bravo!"</p>
            <nav>
              <button>Visit Site</button>
            </nav>
          </div>
        </article>
        <article class="no-padding border" style="margin-top:0;">
          <iframe style="border-radius:10px" width="100%" height="315px" title="Outwood House" src="https://www.sacert-outwood.org"></iframe>
          <div class="padding">
            <h5>Outwood Heritage and History Society</h5>
            <p>"Brilliant. Bravo!"</p>
            <nav>
              <button>Visit Site</button>
            </nav>
          </div>
        </article>
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            CLI Commands
          </div>
          <>
            <p>
              <code>npm run dev</code>
              <br />
              Starts the development server and watches for changes
            </p>
            <p>
              <code>npm run preview</code>
              <br />
              Creates production build and starts a server to preview it
            </p>
            <p>
              <code>npm run build</code>
              <br />
              Creates production build
            </p>
            <p>
              <code>npm run qwik add</code>
              <br />
              Runs the qwik CLI to add integrations
            </p>
          </>
        </Infobox>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'MrGhostlyOrb.dev',
  meta: [
    {
      name: 'description',
      content: 'MrghostlyOrb.dev',
    },
  ],
};
