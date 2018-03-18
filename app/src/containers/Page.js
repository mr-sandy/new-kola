import { connect } from 'react-redux';
import Page from '../components/Page';
import { getTemplate } from '../selectors/template';

const mapStateToProps = state => ({
    template: getTemplate(state)
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
