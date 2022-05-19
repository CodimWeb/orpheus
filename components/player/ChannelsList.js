import PropTypes from 'prop-types';
import cs from 'classnames';

const ChannelsList = ({ channelList, channelId, setChannelId }) => (
  <ul className="pt-4">
    {channelList.map((ch) => (
      <li
        key={ch.id}
        className={cs({
          'mt-5': true,
          active: ch.id === channelId,
        })}
      >
        <a
          href="#"
          className="h3 text-light"
          onClick={(e) => {
            e.preventDefault();
            setChannelId(ch.id);
          }}
        >
          {ch.title}
        </a>
      </li>
    ))}
  </ul>
);

ChannelsList.propTypes = {
  channelList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })).isRequired,
  channelId: PropTypes.number.isRequired,
  setChannelId: PropTypes.func.isRequired,
};

export default ChannelsList;
