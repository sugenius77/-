import realtime from './realtime.js';
import menu from './menu.js';
import Axios from 'axios';

export const axios = new Axios();

const api = { realtime, menu };

export default api;
