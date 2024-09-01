// @ts-nocheck
const $ = document.querySelector.bind(document);
const $$ = (s) => Array(...document.querySelectorAll.bind(document)(s));
const setCssVar = document.documentElement.style.setProperty.bind(document.documentElement.style);
const getCssVar = document.documentElement.style.getPropertyValue.bind(document.documentElement.style);
const setLoacl = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getLoacl = (key) => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : undefined;
const delLoacl = localStorage.removeItem.bind(localStorage);