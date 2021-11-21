import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUseTokenDetection, setUseAuthenticatedAccounts } from '../../../store/actions';
import { getUseTokenDetection, getUseAuthenticatedAccounts } from '../../../selectors';
import ExperimentalTab from './experimental-tab.component';

const mapStateToProps = (state) => {
  console.log('shawn: ', state);
  return {
    useTokenDetection: getUseTokenDetection(state),
    useAuthenticatedAccounts: getUseAuthenticatedAccounts(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUseTokenDetection: (val) => dispatch(setUseTokenDetection(val)),
    setUseAuthenticatedAccounts: (val) => dispatch(setUseAuthenticatedAccounts(val)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(ExperimentalTab);
