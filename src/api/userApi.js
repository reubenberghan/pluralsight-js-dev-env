import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export const getUsers = () => get('users');
export const deleteUser = id => del(`users/${ id }`);

const get = url => fetch(baseUrl + url).then(onSuccess, onError);
// Can't call func delete as it is a reserved word.
const del = url => fetch(new Request(baseUrl + url, { method: 'DELETE' })).then(onSuccess, onError);

const onSuccess = response => response.json();
const onError = error => console.log(error); // eslint-disable-line no-console