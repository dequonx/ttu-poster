import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import React, { useEffect } from 'react';
const smartquotes = require('smartquotes');

const prosAndCons = [
  {
    name: 'qBittorrent',
    license: 'GPL-2.0-or-later',
    pros: ['Lightweight', 'Fast', 'No bundled software', 'No ads'],
    cons: ['No web-based interface'],
    platforms: ['FreeBSD', 'Linux', 'macOS', 'OS/2', 'Windows']
  },
  {
    name: 'Transmission',
    license: 'GPL-2.0-only or GPL-3.0-only, MIT',
    pros: ['Lightweight', 'Easy-to-use interface', 'Fast'],
    cons: ['Lack of customization'],
    platforms: ['Unix-like', 'macOS', 'Windows']
  },
  {
    name: 'Deluge',
    license: 'GPL-3.0-or-later',
    pros: ['Cross-platform', 'Plugins', 'Browser integration', 'Simple interface'],
    cons: ['Sparse user interface'],
    platforms: ['FreeBSD', 'Linux', 'macOS', 'Windows']
  },
  {
    name: 'Vuze',
    license: 'GPL-2.0',
    pros: ['Clear user interface', 'Plugins'],
    cons: ['Contains ads'],
    platforms: ['Any OS that runs Java']
  },
  {
    name: 'µTorrent',
    license: 'Proprietary (Adware)',
    pros: ['Free (as in "free beer")', 'Very small size', 'Runs on the web'],
    cons: ['Inappropriate ads', 'Had a crypto miner'],
    platforms: ['Android', 'Linux', 'Windows', 'macOS']
  }
];

export default function Home() {
  useEffect(() => {
    smartquotes().listen();
  });
  return (
    <main className="tw-flex tw-flex-col tw-w-full tw-min-h-screen tw-p-8 tw-border-b-2">
      <div
        className="tw-mb-8 tw-text-5xl tw-font-extrabold tw-tracking-tight tw-text-black"
        style={{ fontFamily: 'Mija' }}
      >
        An Anonymity-First Approach to Decentralized Torrenting and File Sharing
      </div>
      <div
        className="tw-mb-8 tw-text-3xl tw-font-extrabold tw-tracking-tight tw-text-black"
        style={{ fontFamily: 'Mija' }}
      >
        A Torrent-Inspired Protocol with Incentivized Onion Routing
      </div>
      <div
        className="tw-flex tw-flex-row tw-justify-end tw-mb-4 tw-text-xl tw-font-extrabold tw-tracking-tight"
        style={{ fontFamily: 'Mija' }}
      >
        10121 Jiwu Jang, 10144 Juha Cho
      </div>
      <div className="tw-grid tw-grid-flow-col tw-grid-cols-5 tw-gap-x-10">
        <div className="tw-col-span-2">
          <p>
            <h1>The problem.</h1>
            <i>Torrenting</i>—a method in which users voluntarily "seed" sources and share them by
            providing <code>.torrent</code> files or "magnets" to others—needs a secure and
            anonymous way to transfer data. The BitTorrent protocol, the protocol that makes
            torrenting possible, does not define a single method for transferring data or
            information in an anonymous way, nor does various torrenting clients, which we will
            list, provide an alternative method for truly anonymous usage. As privacy/anonymity
            fanatics, we were motivated to plan and develop an anonymous torrenting system that is
            compatible with the current BitTorrent protocol.
          </p>
          <p>
            But before actually getting our hands dirty with code, we felt the urge to perform a
            quick market analysis, so our team took an inspection into major torrent clients that
            are currently being used. We listed each torrent client's license (whether it is
            free/libre or proprietary), its advantages, disadvantages, and finally, on which
            platforms it can be run.
          </p>
          <p>
            <table className="tw-w-full tw-text-sm tw-border-2 tw-border-collapse tw-table-fixed">
              <tr>
                <th className="tw-w-2/12 tw-p-1 tw-border-2">Name</th>
                <th className="tw-w-2/12 tw-p-1 tw-border-2">License</th>
                <th className="tw-w-3/12 tw-p-1 tw-border-2">Advantages</th>
                <th className="tw-w-3/12 tw-p-1 tw-border-2">Disadvantages</th>
                <th className="tw-w-2/12 tw-p-1 tw-border-2">Platforms</th>
              </tr>
              {prosAndCons.map((value, index) => {
                return (
                  <tr key={index.toString() + 1}>
                    <td className="tw-p-1 tw-italic tw-text-center tw-border-2">{value.name}</td>
                    <td className="tw-p-1 tw-text-center tw-border-2">{value.license}</td>
                    <td className="tw-px-2 tw-border-2">
                      {value.pros.map((pro, idx) => {
                        return <li key={idx.toString() + 1}>{pro}</li>;
                      })}
                    </td>
                    <td className="tw-px-2 tw-border-2">
                      {value.cons.map((con, idx) => {
                        return <li key={idx.toString() + 1}>{con}</li>;
                      })}
                    </td>
                    <td className="tw-p-1 tw-italic tw-text-center tw-border-2">
                      {value.platforms.sort().join(', ')}
                    </td>
                  </tr>
                );
              })}
            </table>
          </p>
          <p>
            The best among these clients was <i>qBittorrent</i>, which also, although being fast,
            free, and open, had little measures to protect privacy. It proved that we need an
            anonymous torrenting protocol.
          </p>
          <p>
            But are there any other methods to achieve anonymous torrenting? Well, yes, it is{' '}
            <i>possible</i>, but they have their flaws. First of all, torrenting over Tor is
            extremely slow, almost unusable. Furthermore, it goes straightly against the general
            consensus, that the Tor<sup>1</sup> network is not designed for torrenting, and that
            doing so can interfere with its efficacy. Torrenting over I2P<sup>2</sup> is done quite
            often, but there are only two I2P torrent sites and they only have a small fraction of
            what is available on the clearnet. Torrenting over a VPN<sup>3</sup> is much, much
            faster than any of the above, but it does not protect anonymity <i>at all</i>; only
            privacy <i>might be</i> protected. Other solutions are too minor in terms of popularity
            in order to be considered as effective.
            <p className="tw-mt-2">
              <small className="tw-block">
                1. <i>TOR</i>, short for <i>The Onion Router</i>, is a free and open-source protocol
                for anonymous routing through a multi-layered routing mechanism called{' '}
                <i>Onion Routing</i>. The Tor network utilizes service nodes (or intermediary nodes)
                and exit nodes, which volunteers from all over the world run.
              </small>
              <small className="tw-block">
                2. The <i>Invisible Internet Project</i> is another protocol for anonymous routing,
                which achieves anonymity by requiring the user to host an intermediary node or an
                exit node in order to use the network.
              </small>
              <small className="tw-block">
                3. A <i>Virtual Private Network</i> is a network where entities communicate with
                each other through a third-party for confidentiality and user privacy.
              </small>
            </p>
          </p>
          <p>
            <div className="tw-grid tw-grid-flow-row tw-grid-cols-5">
              <div className="tw-col-span-2">
                <code>
                  Did you know that this poster is made out of TypeScript code? Source code for the
                  poster {'->'}
                </code>
              </div>
              <QRCodeSVG
                className="tw-col-span-3"
                href="https://github.com/dequonx/ttu-poster.git"
                value="https://github.com/dequonx/ttu-poster.git"
                height="7rem"
              ></QRCodeSVG>
            </div>
          </p>
        </div>
        <div className="tw-col-span-3">
          <p>
            <h1>The idea.</h1>
            Therefore, summing up the ideas previously listed, the protocol should encompass a
            multi-layered routing system as that of Tor. But if the intermediary/exit node providers
            who are taking risk of being persecuted for malice or malpractice are not incentivized
            by the system, its stability cannot be guaranteed, only relying on altruistic
            volunteers—an inherent issue that the Tor network possesses.
          </p>
          <p>
            Luckily, we were able to get inspiration from Lokinet's incentive model. They have used
            an internal cryptocurrency called Oxen to incentivize intermediary/exit node providers,
            which proved effective. A token economy would create a positive cycle from which
            everyone benefits. Intermediary/exit node providers would gain profit from the increase
            of token value; yet there is nothing the users have to pay for. Ours would be similar to
            this, except that we are backing the coins with real value.
          </p>
          <p>
            The real value will be profit gained from providing advertisement. Advertisement will
            not change rapidly as that of YouTube; it will be static images, downloaded via Tor or
            some other anonymous web protocol, placed somewhere in the application. No middleman, no
            tracking, no surveillance upon the users.
          </p>
          <p>
            Moreover, there shall be an automatic bid system, where advertisers compete for the most
            widespread availability of their ads. Profits would be distributed back to those who
            provided an intermediary node or an exit node for multi-layered routing.
          </p>
          <p>
            We believe this model is ethical compared to the status quo, which basically extorts,
            tracks, and spies the users and sells data to third-party companies, to which the users
            did not give explicit consent.
          </p>
          <p>
            <h1>The method.</h1>
            So, the diagram below shows how the system works in essence:
            <Image
              alt="Diagram of the System"
              src="/static/diagram.svg"
              width="100%"
              height="75%"
              layout="responsive"
              objectFit="contain"
            />
            For a reasonable amount of security, the protocol uses basic encryption algorithms such
            as RSA-1024, AES-256, and Diffie-Hellman Key Exchange. Intermediary nodes operate within
            the same client, meaning every feature is embedded inside the client. They relay
            information, yet they do not know what is inside and who sent the data, by the very
            nature of Onion Routing. The protocol uses a tweaked version of Onion Routing, so it
            does not blindly choose any nodes for relaying; rather, it chooses nodes with a decent
            speed and within a certain distance.
          </p>
          <p>
            Moreover, there is no such thing as a central server in this protocol. Advertisements do
            not come from a central source of authority; rather, it is a result of a bid within
            clients (advertisers use the client as well) that have participated in the process.
          </p>
          <p>
            <h1>Conclusion.</h1>
            On this basis, we conclude that a sophisticated protocol using an internal
            cryptocurrency and an anonymous advertisement system is sufficient for a sustainable
            protocol for maintaining anonymity in terms of torrenting. Implementation details are
            deliberately left blank since they are to change. Further research should consider
            implementing the protocol with a fast programming language such as C++ or Rust, and
            measuring the efficacy of the protocol in various aspects such as user inflow/outflow,
            financial stability, and practical anonymity.
          </p>
        </div>
      </div>
    </main>
  );
}
