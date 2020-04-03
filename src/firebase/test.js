import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('Mnk8OmgEqr7mp922ZqhZ').collection('cartItems').doc('nH3VSGWMRlsDGUUDZdR1');
firestore.doc('/users/Mnk8OmgEqr7mp922ZqhZ/cartItems/nH3VSGWMRlsDGUUDZdR1'); // equivalent with above
firestore.collection('/users/Mnk8OmgEqr7mp922ZqhZ/cartItems');