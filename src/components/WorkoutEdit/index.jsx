import withInitialData from '../utilities/withInitialData';
import Display from './Display';

const dataUrl = '/users';

export default withInitialData(Display, dataUrl);
