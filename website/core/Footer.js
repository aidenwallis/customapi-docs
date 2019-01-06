/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('intro', this.props.language)}>
              General
            </a>
            <a href={this.docUrl('twitch/uptime', this.props.language)}>
              Twitch
            </a>
            <a href={this.docUrl('emotes/bttv', this.props.language)}>
              Emotes
            </a>
            <a href={this.docUrl('emotes/duowin_current', this.props.language)}>
              Fortnite
            </a>
            <a href={this.docUrl('misc/8ball', this.props.language)}>
              Miscellaneous
            </a>
          </div>
          <div>
            <h5>Social Media</h5>
            <a
              href="https://twitter.com/WallisDev"
              target="_blank"
              rel="noopener noreferrer">
              Twitter
            </a>
            <a
              href="https://twitch.tv/AidenWallis"
              target="_blank"
              rel="noopener noreferrer">
              Twitch
            </a>
            <a
              href="https://github.com/AidenWallis"
              target="_blank"
              rel="noopener noreferrer">
              Github
            </a>
            <a
              href="https://aidenwallis.co.uk"
              target="_blank"
              rel="noopener noreferrer">
              Website
            </a>
            <a
              href="https://fossabot.com/donate"
              target="_blank"
              rel="noopener noreferrer">
              Donate & Support Server Costs
            </a>
          </div>
          <div>
            <h5>Other Projects</h5>
            <a href="https://fossabot.com" target="_blank" rel="noopener noreferrer">Fossabot</a>
            <a href="https://spotify.aidenwallis.co.uk" target="_blank" rel="noopener noreferrer">Spotify Now Playing</a>
            <a href="https://twitch.tv/AidenWallis" target="_blank" rel="noopener noreferrer">Twitch Stream</a>
          </div>
        </section>

        <a
          href="https://aidenwallis.co.uk"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/logo-white.png`}
            alt="Aiden Wallis"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}. Not affiliated with Twitch, Steam, or any other services integrated with the API.</section>
      </footer>
    );
  }
}

module.exports = Footer;
