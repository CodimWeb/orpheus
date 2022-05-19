import PropTypes from 'prop-types';
import cs from 'classnames';
import {
  CompositeDecorator,
  convertFromRaw,
  Editor,
  EditorState,
} from 'draft-js';

import imageDecorator from './decorators/Image';
import linkDecorator from './decorators/Link';
import videoDecorator from './decorators/Video';

const decorator = new CompositeDecorator([
  imageDecorator,
  linkDecorator,
  videoDecorator,
]);

const Article = ({ rawState, className }) => {
  if (!rawState || !rawState.blocks) return null;
  const content = convertFromRaw(rawState);
  const editorState = EditorState.createWithContent(content, decorator);
  return (
    <div className={cs('Article', className)}>
      <Editor
        editorKey="editor"
        editorState={editorState}
        blockStyleFn={() => 'Article-Item'}
        readOnly
      />
    </div>
  );
};

Article.propTypes = {
  className: PropTypes.string,
  rawState: PropTypes.shape({
    blocks: PropTypes.array,
  }).isRequired,
};

Article.defaultProps = {
  className: null,
};

export default Article;
