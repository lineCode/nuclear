import React from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';

import TagHeader from './TagHeader';
import TagTopArtists from './TagTopArtists';
import styles from './styles.scss';

class TagView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadTagInfo(this.props.tag);
  }

  render() {
    let {
      loadTagInfo,
      tag,
      tags
    } = this.props;

    let tagInfo, topTracks, topAlbums, topArtists;
    if (tags[tag] && tags[tag].loading !== true) {
      tagInfo = tags[tag][0].tag;
      topTracks = tags[tag][1].tracks.track;
      topAlbums = tags[tag][2].albums.album;
      topArtists = tags[tag][3].topartists.artist;
    }
    
    return (
      <div className={styles.tag_view_container}>
	<Dimmer.Dimmable>
	  <Dimmer active={tags[tag] === undefined || tags[tag].loading}>
	    <Loader/>
          </Dimmer>

	  {
	    tags[tag] === undefined || tags[tag].loading
	      ? null
	      : (
		<div className={styles.tag_view}>
                  <TagHeader
		     tag={tag}
		     tagInfo={tagInfo}
		     topArtists={topArtists}
		     />
		  <TagTopArtists
		     topArtists={topArtists}
		     />
		</div>
	      )
	  }
	</Dimmer.Dimmable>
      </div>
    );
  }
}

export default TagView;
