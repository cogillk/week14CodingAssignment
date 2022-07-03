import React, {useState} from 'react';
import Form from './components/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../src/App.css';
import ReviewList from './components/ReviewList';
//import Header from './components/navBar';
//import Star from './components/Stars';



function App() {
  const[reviews, setReviews] =useState([])
  const [form, setForm] = useState({movie: "", review: "", id: null })
  return (
    <div className="App">
    	<div className='container'>
        <Form 
        form={form} 
        reviews={reviews} 
        setForm={setForm} 
        setReviews={setReviews} 
        />
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
}

export default App;