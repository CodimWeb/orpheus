import { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const VolumeSlider = ({ onChange, value }) => {
  const sliderRef = useRef();

  const handlePointerEvent = useCallback((e, element) => {
    e.preventDefault();
    const rect = (element || e.target).getBoundingClientRect();
    const nextValue = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    onChange(nextValue);
  }, [onChange]);

  useEffect(() => {
    const slider = sliderRef.current;
    let dragging = false;

    const downListener = (e) => {
      handlePointerEvent(e);
      dragging = true;
    };

    const moveListener = (e) => {
      if (dragging) {
        handlePointerEvent(e, slider);
      }
    };

    const upListener = () => {
      dragging = false;
    };

    slider.addEventListener('mousedown', downListener);
    document.body.addEventListener('mousemove', moveListener);
    document.body.addEventListener('mouseup', upListener);

    return () => {
      slider.removeEventListener('mousedown', downListener);
      document.body.removeEventListener('mousemove', moveListener);
      document.body.removeEventListener('mouseup', upListener);
    };
  }, [handlePointerEvent, sliderRef]);

  return (
    <div ref={sliderRef} className="LivePlayer-volSlider">
      <div style={{ width: `${value * 100}%` }} className="LivePlayer-volFill" />
    </div>
  );
};

VolumeSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

VolumeSlider.defaultProps = {
};

export default VolumeSlider;
