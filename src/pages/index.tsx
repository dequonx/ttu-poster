import React, { useEffect } from 'react';
const smartquotes = require('smartquotes');

const prosAndCons = [
  {
    name: 'qBittorrent',
    license: 'GPL-2.0-or-later',
    pros: ['Lightweight', 'Fast', 'No bundled software', 'No advertisements'],
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
    cons: ['UI is a bit too sparse'],
    platforms: ['FreeBSD', 'Linux', 'macOS', 'Windows']
  },
  {
    name: 'Vuze',
    license: 'GPL-2.0',
    pros: ['Clear user interface', 'Plugins'],
    cons: ['Contains ads', 'Antivirus trial bundled'],
    platforms: ['Any OS that runs Java']
  },
  {
    name: 'µTorrent',
    license: 'Proprietary (Adware)',
    pros: ['Free (as in "free beer")', 'Very small size', 'Runs on the web'],
    cons: ['Many inappropriate ads', '(Had) a crypto miner'],
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
        className="tw-font-extrabold tw-text-5xl tw-tracking-tight tw-text-black tw-mb-8"
        style={{ fontFamily: 'Mija' }}
      >
        An Anonymity-First Approach to Decentralized Torrenting and File Sharing
      </div>
      <div
        className="tw-font-extrabold tw-text-3xl tw-tracking-tight tw-text-black tw-mb-8"
        style={{ fontFamily: 'Mija' }}
      >
        A Torrent-Inspired Protocol with Incentivized Onion Routing
      </div>
      <div
        className="tw-font-extrabold tw-text-xl tw-tracking-tight tw-mb-4 tw-flex tw-flex-row tw-justify-end"
        style={{ fontFamily: 'Mija' }}
      >
        10121 Jiwu Jang, 10144 Juha Cho
      </div>
      <div className="tw-grid tw-grid-flow-col tw-gap-x-10 tw-grid-cols-5">
        <div className="tw-col-span-3">
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
            <table className="tw-border-2 tw-border-collapse tw-w-full tw-table-fixed tw-text-sm">
              <tr>
                <th className="tw-border-2 tw-p-2 tw-w-2/12">Name</th>
                <th className="tw-border-2 tw-p-2 tw-w-2/12">License</th>
                <th className="tw-border-2 tw-p-2 tw-w-4/12">Advantages</th>
                <th className="tw-border-2 tw-p-2 tw-w-4/12">Disadvantages</th>
                <th className="tw-border-2 tw-p-2 tw-w-2/12">Platforms Supported</th>
              </tr>
              {prosAndCons.map((value, index) => {
                return (
                  <tr key={index.toString() + 1}>
                    <td className="tw-border-2 tw-p-2 tw-italic">{value.name}</td>
                    <td className="tw-border-2 tw-p-2">{value.license}</td>
                    <td className="tw-border-2 tw-p-2">
                      {value.pros.map((pro, idx) => {
                        return <li key={idx.toString() + 1}>{pro}</li>;
                      })}
                    </td>
                    <td className="tw-border-2 tw-p-2">
                      {value.cons.map((con, idx) => {
                        return <li key={idx.toString() + 1}>{con}</li>;
                      })}
                    </td>
                    <td className="tw-border-2 tw-p-2 tw-italic">
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
                3. A Virtual Private Network is a network where entities communicate with each other
                through a third-party, securing confidentiality and privacy.
              </small>
            </p>
          </p>
        </div>
        <div className="tw-col-span-2">
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
            this, except that we are going to back the coins with real value.
          </p>
          <p>
            The real value will be profit gained from providing advertisement without a middleman
            surveiling upon the users. Advertisement will not change rapidly as that of YouTube; it
            will be static images, downloaded via Tor or some other anonymous web protocol, placed
            somewhere in the application.
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
          </p>
        </div>
      </div>
    </main>
  );
}
