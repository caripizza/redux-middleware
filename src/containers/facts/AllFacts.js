import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFacts, isLoading } from '../../selectors/ron';
import { fetchFacts } from '../../actions/ron';
import Facts from '../../components/facts/Facts';
import preloader from '../../assets/preloader.gif';

class AllFacts extends PureComponent {
  static propTypes = {
    facts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      < >
        {
          this.props.loading ? 
            <h1 style={{ fontStyle: 'italic', color: 'red' }}>
              Loading...
              <br/>
              <img src={preloader}/>
            </h1> 
            : <Facts {...this.props}/>
        }
      </>
    );
  }
}

const mapStateToProps = state => ({
  facts: getFacts(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchFacts(10));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);
