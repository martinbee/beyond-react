import withInitialData from '../utilities/withInitialData';
import Display from './Display';

// hardcode for now. Once routing is in, remove
const dataUrl = '/users/5a327e942e7a8341abab1a22/workouts/5a327e942e7a8341abab1a24';

export default withInitialData(Display, dataUrl);
