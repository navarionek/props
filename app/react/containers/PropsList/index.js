import { connect } from 'react-redux';
import PropsList from '../../components/PropsList';
import { fetchProps, upvoteProp, downvoteProp } from '../../actions/props';


const mapStateToProps = state => ({
  propsList: state.props,
  hasPrevPage: state.propsPagination.hasPreviousPage,
  hasNextPage: state.propsPagination.hasNextPage,
  currentPage: state.propsPagination.currentPage,
});

const mapDispatchToProps = (dispatch, state) => ({
  onPaginationPrev: (prevPage) => {
    dispatch(fetchProps(prevPage));
  },
  onPaginationNext: (nextPage) => {
    dispatch(fetchProps(nextPage));
  },
  onPropUpvote: (id) => {
    dispatch(upvoteProp(id));
  },
  onPropDownvote: (id) => {
    dispatch(downvoteProp(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PropsList);
