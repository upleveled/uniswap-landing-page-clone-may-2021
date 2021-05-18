/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import bigUnicornFade from './images/big-unicorn-fade.png';
import logo from './images/logo.svg';
import sun from './images/sun.svg';
import thin from './images/thin.png';

const gradientOverlayStyles = css`
  background-image: linear-gradient(#ffffff10, #ffffff00);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const backgroundStyles = css`
  background-image: url(${bigUnicornFade});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  mix-blend-mode: overlay;
  opacity: 0.5;
`;

const imageFadeOutStyles = css`
  background-image: linear-gradient(#0f101300, #0f1013);
  height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const radialGradientStyles = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(47, 128, 237) 0%,
    rgb(15, 16, 19) 100%
  );
  opacity: 0.15;
`;

const headerStyles = css`
  display: flex;
  align-items: center;
  margin: 20px 20px;
  position: relative;
  z-index: 100;
`;

const logoStyles = css`
  width: 24px;
  height: 24px;
`;

const wordmarkStyles = css`
  margin-left: 15px;
  font-size: 21px;
`;

const headerRightNavStyles = css`
  margin-left: auto;
  display: flex;
  align-items: center;

  > div,
  > img {
    margin-right: 28px;
  }

  > img {
    margin-left: 5px;
  }
`;

const gradientButtonStyles = (variant = 'small') => css`
  border: 0;
  color: #fff;
  letter-spacing: -0.5px;
  background: linear-gradient(128.17deg, #bd00ff -14.78%, #ff1f8a 110.05%);
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  padding: 6px 10px;

  ${variant === 'large' &&
  css`
    font-size: 21px;
    font-weight: normal;
    padding: 6px 13px;
  `}
`;

const outlineButtonStyles = (variant = 'small') => css`
  text-decoration: none;
  border: 0;
  color: #fff;
  letter-spacing: -0.5px;
  border: 1px solid rgba(255, 255, 255, 0.19);
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  padding: 6px 10px;

  ${variant === 'large' &&
  css`
    font-size: 21px;
    font-weight: normal;
    padding: 6px 13px;
  `}
`;

const mainStyles = css`
  position: relative;
  z-index: 50;

  > section {
    width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const heroStyles = css`
  transform: rotate(-2deg) scale(0.98);
  margin-top: 120px;
  margin-bottom: 170px;
  width: 75vw;

  > span {
    display: inline-block;
  }

  > span.button-like {
    border-radius: 8px;
    background: #fff;
    color: #010101;
    padding: 6px 8px;
    margin-right: 16px;
  }

  > div {
    margin-top: 16px;
    width: 75vw;
    height: 360px;
    border-radius: 12px;
    position: relative;
    overflow: hidden;

    > img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      /* object-fit: cover;
      object-position: center center; */
    }
  }
`;

const introStyles = css`
  text-align: center;

  > h1 {
    font-size: 105px;
    line-height: 1.1;
    font-weight: normal;
    max-width: 900px;
    margin: 0 auto 60px;
  }

  > p {
    font-size: 24px;
    margin-bottom: 50px;
  }

  > div.buttons-container {
    margin-bottom: 130px;

    > button {
      // Add a left margin to all siblings after the button
      & ~ * {
        margin-left: 16px;
      }
    }
  }

  // Maybe consider not using this
  > div:last-child {
    display: flex;
    justify-content: space-evenly;

    > div > div {
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 10px;

      > span {
        opacity: 0.1;
      }
    }
  }
`;

const footerStyles = css`
  position: relative;
  z-index: 50;
`;

function App() {
  return (
    <>
      <div css={gradientOverlayStyles}></div>
      <div css={backgroundStyles}></div>
      <div css={imageFadeOutStyles}></div>
      <div css={radialGradientStyles}></div>

      <header css={headerStyles}>
        <img css={logoStyles} src={logo} alt="Uniswap logo" />

        <div css={wordmarkStyles}>Uniswap</div>

        <div css={headerRightNavStyles}>
          <div>Products</div>
          <div>Developers</div>
          <div>Governance</div>
          <div>Community</div>
          <div>About</div>
          <img src={sun} alt="" />
          <button css={gradientButtonStyles()}>Use Uniswap</button>
        </div>
      </header>

      <main css={mainStyles}>
        <section css={heroStyles}>
          <span className="button-like">Announcing Uniswap V3</span>
          <span>More details ↗</span>
          <div>
            <img src={thin} alt="" />
          </div>
        </section>

        <section css={introStyles}>
          <h1>Decentralized Trading Protocol</h1>
          <p>
            Guaranteed liquidity for millions of users and hundreds of Ethereum
            applications.
          </p>
          <div className="buttons-container">
            <button css={gradientButtonStyles('large')}>Use Uniswap</button>
            <a css={outlineButtonStyles('large')} href="#1">
              Documentation
            </a>
            <a css={outlineButtonStyles('large')} href="#1">
              FAQ
            </a>
          </div>
          <div>
            <div>
              <div>
                $257B<span>+</span>
              </div>
              All Time Volume
            </div>

            <div>
              <div>
                72K<span>+</span>
              </div>
              Liquidity Providers
            </div>

            <div>
              <div>
                47M<span>+</span>
              </div>
              All Time Trades
            </div>

            <div>
              <div>
                200<span>+</span>
              </div>
              Defi Integrations
            </div>
          </div>
        </section>

        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
      <footer css={footerStyles}></footer>
    </>
  );
}

export default App;
