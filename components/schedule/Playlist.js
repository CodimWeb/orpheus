import Track from './Track';

const Playlist = ({ items }) => items.map((i) => (
  <Track
    key={i.id}
    author={i.author}
    details={i.details}
    time={i.time}
  />
));

export default Playlist;
