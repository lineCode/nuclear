import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button, Radio } from 'semantic-ui-react';

import Header from '../Header';
import Spacer from '../Spacer';

import styles from './styles.scss';

class Settings extends React.Component {
  toggleScrobbling(lastFmScrobblingEnabled, enableScrobbling, disableScrobbling) {
    lastFmScrobblingEnabled ? disableScrobbling(): enableScrobbling();
  }

  render() {
    const {
      lastFmAuthToken,
      lastFmName,
      lastFmSessionKey,
      lastFmScrobblingEnabled
    } = this.props.scrobbling;

    const {
      lastFmConnectAction,
      lastFmLoginAction,
      enableScrobbling,
      disableScrobbling
    } = this.props.actions;

    return (
      <div className={styles.settings_container}>
        <div className={styles.settings_section}>
          <Header>
            Social
          </Header>
          <hr />
          <div className={styles.settings_item}>
            <label>
              <span className={styles.settings_logo}>
                <span className='fa-stack fa-lg'>
                  <FontAwesome name="square" stack='1x'/>
                  <FontAwesome name="lastfm-square" stack='1x' className={styles.lastfm_icon} />
                </span>
              </span>
              <span>Last.fm integration</span>
            </label>
          </div>

          <div className={styles.settings_item}>
            <p>
              In order to enable scrobbling, you first have to connect and authorize nuclear on Last.fm, then click log in.
            </p>
          </div>

          <div className={styles.settings_item}>
            <span>User: <strong>{lastFmName ? lastFmName : 'Not logged in'}</strong></span>
            <Spacer />
            {
              lastFmSessionKey
              ? null
              : <Button onClick={lastFmConnectAction} color='red'>Connect with Last.fm</Button>
            }
            {
              lastFmSessionKey
              ? null
              : <Button onClick={() => lastFmLoginAction(lastFmAuthToken)} color='red'>Log in</Button>
            }
          </div>

          <div className={styles.settings_item}>
            <label>Enable scrobbling to last.fm</label>
            <Spacer />
            <Radio
              toggle
              checked={lastFmScrobblingEnabled}
              onChange={() => this.toggleScrobbling(lastFmScrobblingEnabled, enableScrobbling, disableScrobbling)}
            />
          </div>
        </div>

        <div className={styles.settings_section}>
          <Header>
            Playback
          </Header>
          <hr />
        </div>
        <div className={styles.settings_section}>
          <Header>
            Program settings
          </Header>
          <hr />
          <div className={styles.settings_item}>
            <label>Frameless window</label>
            <Spacer />
            <Radio toggle />
          </div>
        </div>
      </div>

    );
  }
}

export default Settings;
