import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';
import { Profile } from '../pages/Profile';
import { NewReview } from '../pages/NewReview';
import { BookDetail } from '../pages/BookDetail';
import { EditReview } from '../pages/EditReview';

export const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<NewReview />} />
          <Route path="/detail/:id" element={<BookDetail />} />
          <Route path="/edit/:id" element={<EditReview />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
