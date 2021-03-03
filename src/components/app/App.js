import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from '../navBar/NavBar.js';
import Login from '../login/Login.js'
import SignUp from '../signUp/SignUp.js'
import HomePage from '../homePage/HomePage.js'
import ProductPage from '../productPage/ProductPage.js'
import NewListingPage from '../newListingPage/NewListingPage.js'
import Profile from '../profile/Profile.js'
import UserInfo from '../userInfo/UserInfo.js'
import { useAuth0 } from '@auth0/auth0-react'
import { withCookies } from 'react-cookie'
import './App.scss'

