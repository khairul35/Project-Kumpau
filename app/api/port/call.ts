import call from '../call';
import { CreatePortRequest } from './props';

export default {
    createPort(body: CreatePortRequest) {
        return call.post('/port', body);
    },
    findAllPort() {
        return call.get('/port');
    },
};
