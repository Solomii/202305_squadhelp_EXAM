import React from 'react';
import { connect } from 'react-redux';
import DialogList from '../DialogList';
import { getPreviewChat } from '../../../../store/slices/chatSlice';

class DialogListContainer extends React.Component {
  componentDidMount() {
    // this.props.getChatPreview();
  }

  render() {
    const { messagesPreview, userId } = this.props;
    return <DialogList preview={messagesPreview} userId={userId} />;
  }
}

const mapStateToProps = (state) => state.chatStore;

const mapDispatchToProps = (dispatch) => ({
  getChatPreview: () => dispatch(getPreviewChat()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogListContainer);
